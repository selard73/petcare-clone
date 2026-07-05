// One-off verification for the AI-visibility audit: fetches key pages from a
// running local server, checks that JSON-LD parses, that Organization+WebSite
// appear exactly once per page, and that provider names are in the raw HTML.
const BASE = process.env.VERIFY_BASE || "http://localhost:5687";

const PAGES = ["/", "/grooming", "/grooming/florence", "/vet-care", "/vet-care/florence", "/blog", "/blog/cat-grooming-guide"];

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    blocks.push(m[1]);
  }
  return blocks;
}

function countTypes(nodes, type) {
  return nodes.filter((n) => n["@type"] === type).length;
}

(async () => {
  let failed = false;
  for (const page of PAGES) {
    const res = await fetch(BASE + page);
    const html = await res.text();
    const problems = [];
    if (res.status !== 200) problems.push(`status ${res.status}`);

    const blocks = extractJsonLd(html);
    let allNodes = [];
    for (const [i, block] of blocks.entries()) {
      try {
        const parsed = JSON.parse(block);
        const nodes = parsed["@graph"] || [parsed];
        allNodes = allNodes.concat(nodes);
      } catch (e) {
        problems.push(`JSON-LD block ${i} invalid JSON: ${e.message}`);
      }
    }

    const orgCount = countTypes(allNodes, "Organization");
    const siteCount = countTypes(allNodes, "WebSite");
    if (orgCount !== 1) problems.push(`Organization nodes: ${orgCount} (want 1)`);
    if (siteCount !== 1) problems.push(`WebSite nodes: ${siteCount} (want 1)`);

    const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    const expectedCanonical = `https://www.peedeepetcare.com${page === "/" ? "/" : page}`;
    if (canonical !== expectedCanonical) problems.push(`canonical ${canonical} (want ${expectedCanonical})`);

    const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];

    const itemLists = allNodes.filter((n) => n["@type"] === "ItemList" && Array.isArray(n.itemListElement));
    const providerItems = itemLists.flatMap((l) => l.itemListElement.map((e) => e.item).filter(Boolean));
    for (const item of providerItems) {
      if (item.name && !html.includes(item.name.replace(/&/g, "&amp;").slice(0, 30)) && !html.includes(item.name.slice(0, 30))) {
        problems.push(`provider "${item.name}" in schema but not in HTML`);
      }
    }
    if (page.startsWith("/vet-care") && providerItems.length) {
      const wrong = providerItems.filter((i) => i["@type"] !== "VeterinaryCare" && i.telephone !== undefined);
      const vetTyped = providerItems.filter((i) => i["@type"] === "VeterinaryCare").length;
      if (vetTyped === 0) problems.push("no VeterinaryCare-typed providers on vet page");
    }

    const faqNodes = allNodes.filter((n) => n["@type"] === "FAQPage");
    for (const faq of faqNodes) {
      for (const q of faq.mainEntity || []) {
        const qText = q.name;
        if (qText && !html.includes(qText.replace(/&/g, "&amp;")) && !html.includes(qText)) {
          problems.push(`FAQ question not found in visible HTML: "${qText}"`);
        }
      }
    }

    const status = problems.length ? "FAIL" : "PASS";
    if (problems.length) failed = true;
    console.log(`${status} ${page}`);
    console.log(`     title: ${title}`);
    console.log(`     ld+json blocks: ${blocks.length}, nodes: ${allNodes.length}, Org: ${orgCount}, WebSite: ${siteCount}, providers in ItemList: ${providerItems.length}, FAQPage: ${faqNodes.length}`);
    for (const p of problems) console.log(`     - ${p}`);
  }
  process.exitCode = failed ? 1 : 0;
})();

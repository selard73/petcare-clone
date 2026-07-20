// QA checks for the How We Verify work (CURSOR-BRIEF Task 6).
const BASE = process.env.VERIFY_BASE || "http://localhost:5687";
const { HOW_WE_VERIFY_JSON_LD } = require("../seo/how-we-verify-seo");

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) blocks.push(m[1]);
  return blocks;
}

(async () => {
  let failed = false;
  const report = (ok, label, detail = "") => {
    if (!ok) failed = true;
    console.log(`${ok ? "PASS" : "FAIL"} ${label}${detail ? ` — ${detail}` : ""}`);
  };

  // --- /how-we-verify ---
  const res = await fetch(BASE + "/how-we-verify");
  const html = await res.text();
  report(res.status === 200, "/how-we-verify returns 200", `status ${res.status}`);
  report(
    html.includes("<title>How We Verify Listings | Pee Dee Pet Care</title>"),
    "title matches reference",
  );
  report(
    html.includes('<link rel="canonical" href="https://www.peedeepetcare.com/how-we-verify"'),
    "canonical set",
  );
  report(!html.includes("{{CONTACT_LINK}}"), "no unresolved {{CONTACT_LINK}} tokens");
  report(html.includes("mailto:hello@peedeepetcare.com"), "contact links resolved to mailto");

  const blocks = extractJsonLd(html);
  let nodes = [];
  let jsonOk = true;
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block);
      nodes = nodes.concat(parsed["@graph"] || [parsed]);
    } catch (e) {
      jsonOk = false;
    }
  }
  report(jsonOk, "JSON-LD parses as valid JSON", `${blocks.length} block(s)`);
  const types = nodes.map((n) => n["@type"]);
  report(types.includes("WebPage"), "JSON-LD has WebPage node");
  report(types.includes("BreadcrumbList"), "JSON-LD has BreadcrumbList node");
  report(types.includes("FAQPage"), "JSON-LD has FAQPage node");

  // FAQ answers in schema must match visible/crawlable text exactly.
  const faq = nodes.find((n) => n["@type"] === "FAQPage");
  const expectedFaq = HOW_WE_VERIFY_JSON_LD["@graph"].find((n) => n["@type"] === "FAQPage");
  report(
    JSON.stringify(faq) === JSON.stringify(expectedFaq),
    "FAQPage schema matches reference verbatim",
  );
  for (const q of faq?.mainEntity || []) {
    const question = q.name;
    const answer = q.acceptedAnswer.text;
    // The FAQ answer for claiming contains an inline contact link in HTML, so
    // match it in two halves around the link.
    const htmlHasAnswer =
      html.includes(answer) ||
      (answer.includes("our contact options") &&
        answer
          .split("our contact options")
          .every((part) => html.includes(part.trim())));
    report(html.includes(question), `FAQ question in HTML: "${question.slice(0, 40)}..."`);
    report(htmlHasAnswer, `FAQ answer in HTML: "${answer.slice(0, 40)}..."`);
  }

  // --- homepage ---
  const homeRes = await fetch(BASE + "/");
  const homeHtml = await homeRes.text();
  report(
    homeHtml.includes('"publishingPrinciples":"https://www.peedeepetcare.com/how-we-verify"'),
    "homepage Organization has publishingPrinciples",
  );
  report(
    /<a href="\/how-we-verify">Verified local\s+providers<\/a>/.test(homeHtml),
    'homepage "Verified local providers" links to /how-we-verify',
  );

  // --- sitemap ---
  const sitemapRes = await fetch(BASE + "/sitemap.xml");
  const sitemapXml = await sitemapRes.text();
  report(
    sitemapXml.includes("<loc>https://www.peedeepetcare.com/how-we-verify</loc>"),
    "sitemap includes /how-we-verify",
  );

  // --- no fabricated Verified badges anywhere (all lastVerified are null) ---
  for (const page of ["/", "/grooming", "/training", "/boarding", "/sitters", "/vet-care", "/grooming/florence"]) {
    const pageRes = await fetch(BASE + page);
    const pageHtml = await pageRes.text();
    const badgeInMarkup = pageHtml.includes("✓ Verified ·") || pageHtml.includes("Verified by phone —");
    report(!badgeInMarkup, `no Verified badge rendered on ${page}`);
    const pageNodes = extractJsonLd(pageHtml).flatMap((b) => {
      try {
        const parsed = JSON.parse(b);
        return parsed["@graph"] || [parsed];
      } catch {
        return [];
      }
    });
    const withDate = pageNodes.filter((n) => n.additionalProperty || (n.dateModified && n["@type"] === "CollectionPage"));
    report(withDate.length === 0, `no verification structured data on ${page} while dates are null`);
  }

  process.exitCode = failed ? 1 : 0;
})();

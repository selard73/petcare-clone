const { generateSitemapXml } = require("../seo/blog-seo");

const INDEXNOW_KEY = "8f3c2a1b4d5e6f7890abcedf12345678";
const HOST = "www.peedeepetcare.com";

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

async function submitIndexNow(urls) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return { status: response.status, ok: response.ok };
}

async function main() {
  const urls = extractSitemapUrls(generateSitemapXml());
  const cityUrls = urls.filter((url) =>
    /\/(grooming|training|boarding|sitters|vet-care)\/(florence|darlington|hartsville)$/.test(url),
  );
  console.log(`Submitting ${cityUrls.length} city URLs to IndexNow (Bing/Yandex)...`);
  cityUrls.forEach((url) => console.log(`  ${url}`));
  const result = await submitIndexNow(cityUrls);
  console.log(`IndexNow response: HTTP ${result.status}${result.ok ? " (accepted)" : ""}`);
  console.log("");
  console.log("Google Search Console (manual — Google does not allow automated indexing requests):");
  console.log("1. Open https://search.google.com/search-console");
  console.log("2. Select peedeepetcare.com");
  console.log("3. Go to Sitemaps → confirm https://www.peedeepetcare.com/sitemap.xml is submitted");
  console.log("4. For priority URLs: use URL Inspection → paste URL → Request indexing");
  console.log("");
  console.log("Priority city URLs to inspect:");
  cityUrls.slice(0, 5).forEach((url) => console.log(`  ${url}`));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

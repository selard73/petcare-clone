// Generates a printable QR-code card PNG for every business in the directory.
// Each QR encodes the prefilled review URL, so customers land on /review with
// the service type and business name already locked in.
//
// Usage: node scripts/make-review-qr-codes.js
// Requires the local dev server running (for the seeded business list); set
// LOCAL_BASE if it is not on port 5690.

const path = require("path");
const fs = require("fs");
const QRCode = require("qrcode");
const { chromium } = require("playwright");

const LOCAL_BASE = process.env.LOCAL_BASE || "http://localhost:5690";
const PROD_BASE = "https://www.peedeepetcare.com";
const OUT_DIR = path.join(__dirname, "..", "qr-codes");
const CATEGORIES = ["grooming", "training", "boarding", "sitters", "vet"];
const CATEGORY_LABELS = {
  grooming: "Grooming",
  training: "Training",
  boarding: "Boarding & Daycare",
  sitters: "Sitters & Walkers",
  vet: "Vet Care",
};

function safeFileName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "business";
}

async function getSeedBusinesses(browser) {
  const page = await browser.newPage();
  await page.goto(LOCAL_BASE + "/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => !!localStorage.getItem("pawsitively_businesses_grooming"), null, { timeout: 30000 });
  await page.waitForTimeout(1000);
  const seed = await page.evaluate((cats) => {
    const out = [];
    for (const cat of cats) {
      try {
        const raw = localStorage.getItem("pawsitively_businesses_" + cat);
        if (!raw) continue;
        for (const b of JSON.parse(raw)) {
          if (b && b.id && b.name) out.push({ id: b.id, name: b.name, category: cat, city: b.city || "" });
        }
      } catch {}
    }
    return out;
  }, CATEGORIES);
  await page.close();
  return seed;
}

async function getCloudState() {
  const res = await fetch(PROD_BASE + "/api/airtable");
  if (!res.ok) throw new Error("Could not fetch production business list: " + res.status);
  const json = await res.json();
  const cloud = [];
  const deletedIds = new Set();
  for (const rec of json.records || []) {
    const price = String(rec.fields?.price || "");
    if (price === "BUSINESS:DELETED") {
      try {
        const about = JSON.parse(rec.fields.about || "{}");
        if (about.targetId) deletedIds.add(String(about.targetId));
      } catch {}
      continue;
    }
    if (price.startsWith("BUSINESS:")) {
      const category = price.slice("BUSINESS:".length);
      if (!CATEGORIES.includes(category)) continue;
      try {
        const about = JSON.parse(rec.fields.about || "{}");
        const id = rec.fields.whyWeLoveIt || about.id;
        const name = about.name || rec.fields.name;
        if (id && name) cloud.push({ id: String(id), name, category, city: about.city || "" });
      } catch {}
    }
  }
  return { cloud, deletedIds };
}

function cardHtml({ name, city, categoryLabel, qrDataUrl }) {
  return `<!DOCTYPE html>
<html><body style="margin:0">
<div id="card" style="width:640px;background:#ffffff;border:2px solid #e9d5ff;border-radius:24px;padding:40px 36px 32px;text-align:center;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;">
  <div style="color:#9333ea;font-size:26px;font-weight:bold;margin-bottom:4px;">🐾 Pawsitively Fabulous</div>
  <div style="color:#a855f7;font-size:15px;margin-bottom:24px;">peedeepetcare.com</div>
  <img src="${qrDataUrl}" style="width:400px;height:400px;display:block;margin:0 auto;" />
  <div style="color:#111827;font-size:26px;font-weight:bold;margin-top:22px;line-height:1.25;">${name}</div>
  ${city ? `<div style="color:#6b7280;font-size:16px;margin-top:4px;">${city} — ${categoryLabel}</div>` : `<div style="color:#6b7280;font-size:16px;margin-top:4px;">${categoryLabel}</div>`}
  <div style="color:#9333ea;font-size:20px;font-weight:bold;margin-top:20px;">Scan to leave us a review!</div>
</div>
</body></html>`;
}

async function main() {
  const browser = await chromium.launch();

  console.log("Collecting businesses...");
  const [seed, { cloud, deletedIds }] = await Promise.all([getSeedBusinesses(browser), getCloudState()]);

  const merged = new Map();
  for (const b of seed) merged.set(b.id, b);
  for (const b of cloud) merged.set(b.id, b); // cloud overrides / adds
  for (const id of deletedIds) merged.delete(id);

  const businesses = [...merged.values()].sort(
    (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name),
  );
  console.log(`Seed: ${seed.length}, cloud: ${cloud.length}, deleted: ${deletedIds.size} -> total: ${businesses.length}`);

  const page = await browser.newPage({ viewport: { width: 800, height: 1000 } });
  const csv = ["category,business,city,url,file"];
  const usedNames = new Set();

  for (const biz of businesses) {
    const url = `${PROD_BASE}/review?b=${encodeURIComponent(biz.id)}&s=${biz.category}&n=${encodeURIComponent(biz.name)}`;
    const qrDataUrl = await QRCode.toDataURL(url, { errorCorrectionLevel: "M", margin: 2, width: 400, color: { dark: "#3b0764", light: "#ffffff" } });

    let base = safeFileName(biz.name);
    if (usedNames.has(`${biz.category}/${base}`)) base = `${base}-${safeFileName(biz.id).slice(0, 8)}`;
    usedNames.add(`${biz.category}/${base}`);

    const dir = path.join(OUT_DIR, biz.category);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${base}.png`);

    await page.setContent(cardHtml({ name: biz.name, city: biz.city, categoryLabel: CATEGORY_LABELS[biz.category], qrDataUrl }));
    await page.locator("#card").screenshot({ path: file });

    csv.push(`${biz.category},"${biz.name.replace(/"/g, '""')}","${(biz.city || "").replace(/"/g, '""')}",${url},${biz.category}/${base}.png`);
    console.log(`  ${biz.category}: ${biz.name}`);
  }

  fs.writeFileSync(path.join(OUT_DIR, "index.csv"), csv.join("\n"));
  await browser.close();
  console.log(`\nDone. ${businesses.length} QR cards written to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

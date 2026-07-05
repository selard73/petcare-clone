// Generates placeholder PNGs via Playwright (sharp is not installed in this env).
const path = require("path");
const { chromium } = require("playwright");

const dir = path.join(__dirname, "..", "public", "blog", "images");

const html = (title) => `<!DOCTYPE html>
<html><body style="margin:0">
<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f5ddd8"/>
  <rect x="40" y="40" width="1120" height="595" rx="16" fill="#ffffff" stroke="#d4938e" stroke-width="2" stroke-dasharray="12 8"/>
  <text x="600" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#6b1e2a">${title}</text>
  <text x="600" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#8f5c5c">Placeholder — replace with your image</text>
</svg>
</body></html>`;

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });
  const images = [
    ["dog-training-group-class.png", "Group training class"],
    ["dog-training-consultation.png", "Trainer consultation"],
    ["dog-training-success.png", "Training success"],
  ];
  for (const [file, title] of images) {
    await page.setContent(html(title));
    await page.screenshot({ path: path.join(dir, file) });
    console.log("wrote", file);
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

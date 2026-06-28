const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SOURCE = path.join(__dirname, "..", "public", "og-image.jpg");
const OUTPUT = path.join(__dirname, "..", "public", "social-share.jpg");

async function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error("Missing source image:", SOURCE);
    process.exit(1);
  }

  const fill = "#FEF0CD";
  const textColor = "#5014D3";
  const svg = `<svg width="1536" height="1024" xmlns="http://www.w3.org/2000/svg">
  <rect x="210" y="300" width="1116" height="176" fill="${fill}"/>
  <text x="768" y="414" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="700" fill="${textColor}">Pee Dee Pet Care</text>
</svg>`;

  await sharp(SOURCE).composite([{ input: Buffer.from(svg), top: 0, left: 0 }]).jpeg({ quality: 94 }).toFile(OUTPUT);

  const meta = await sharp(OUTPUT).metadata();
  console.log("Wrote", OUTPUT, `${meta.width}x${meta.height}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const path = require("path");
const sharp = require("sharp");

const SOURCE = process.argv[2] || path.join(__dirname, "..", "public", "share-card.jpg");
const OUTPUT = path.join(__dirname, "..", "public", "share-card.jpg");
const WIDTH = 1200;
const HEIGHT = 630;
const SAFE_WIDTH = 1100;
const SAFE_HEIGHT = 580;
const BACKGROUND = { r: 253, g: 238, b: 214 };

async function main() {
  const resized = await sharp(SOURCE)
    .resize(SAFE_WIDTH, SAFE_HEIGHT, { fit: "inside", withoutEnlargement: false })
    .toBuffer();

  const { width, height } = await sharp(resized).metadata();
  const left = Math.round((WIDTH - width) / 2);
  const top = Math.round((HEIGHT - height) / 2);

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: BACKGROUND,
    },
  })
    .composite([{ input: resized, left, top }])
    .jpeg({ quality: 94 })
    .toFile(OUTPUT);

  console.log(`Wrote ${OUTPUT} ${WIDTH}x${HEIGHT} (content ${width}x${height}, inset ${left}px/${top}px)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

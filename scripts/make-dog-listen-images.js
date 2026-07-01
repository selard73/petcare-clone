const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "..", "public", "blog", "images");
const files = [
  ["dog-wont-listen-cover.png", "Dog Command Regression"],
  ["dog-wont-listen-recall.png", "Training Reset at Home"],
  ["dog-wont-listen-consistency.png", "Household Consistency"],
  ["dog-wont-listen-trainer.png", "When to Call a Trainer"],
];

async function make(file, title) {
  const svg = `<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f5ddd8"/>
  <rect x="40" y="40" width="1120" height="595" rx="16" fill="#ffffff" stroke="#d4938e" stroke-width="2"/>
  <text x="600" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#6b1e2a">${title}</text>
  <text x="600" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#8f5c5c">Placeholder image</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(dir, file));
  console.log("wrote", file);
}

async function main() {
  for (const [file, title] of files) {
    await make(file, title);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

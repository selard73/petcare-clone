const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUTPUT = path.join(__dirname, "..", "public", "og-image.jpg");
const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdeed6"/>
      <stop offset="100%" stop-color="#fff8ef"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <circle cx="120" cy="90" r="110" fill="#d9c4ef" opacity="0.45"/>
  <circle cx="1080" cy="560" r="130" fill="#d9c4ef" opacity="0.45"/>
  <ellipse cx="1040" cy="120" rx="180" ry="70" fill="#c9b0e6" opacity="0.35"/>
  <ellipse cx="140" cy="520" rx="200" ry="80" fill="#c9b0e6" opacity="0.35"/>
  <circle cx="220" cy="180" r="18" fill="#b89ad8" opacity="0.25"/>
  <circle cx="980" cy="420" r="24" fill="#b89ad8" opacity="0.25"/>
  <circle cx="860" cy="160" r="14" fill="#b89ad8" opacity="0.2"/>
  <circle cx="320" cy="460" r="16" fill="#b89ad8" opacity="0.2"/>

  <g transform="translate(600 150)">
    <circle cx="0" cy="0" r="34" fill="#5B4B8A"/>
    <circle cx="-18" cy="-10" r="10" fill="#5B4B8A"/>
    <circle cx="18" cy="-10" r="10" fill="#5B4B8A"/>
    <circle cx="-28" cy="8" r="9" fill="#5B4B8A"/>
    <circle cx="28" cy="8" r="9" fill="#5B4B8A"/>
    <rect x="-12" y="10" width="24" height="28" rx="8" fill="#5B4B8A"/>
  </g>

  <text x="600" y="255" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#5B4B8A">Pee Dee Pet Care</text>
  <text x="600" y="305" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="700" fill="#5B4B8A">Pet Services Directory</text>

  <line x1="430" y1="340" x2="560" y2="340" stroke="#5B4B8A" stroke-width="2"/>
  <line x1="640" y1="340" x2="770" y2="340" stroke="#5B4B8A" stroke-width="2"/>
  <path d="M600 332 C595 322 585 322 585 332 C585 342 600 352 600 352 C600 352 615 342 615 332 C615 322 605 322 600 332 Z" fill="#5B4B8A"/>

  <text x="600" y="385" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#5B4B8A">Darlington County &amp; Florence, SC</text>

  <g font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#5B4B8A" font-weight="600">
    <text x="250" y="470" text-anchor="middle">Grooming</text>
    <text x="450" y="470" text-anchor="middle">Training</text>
    <text x="650" y="470" text-anchor="middle">Boarding</text>
    <text x="880" y="470" text-anchor="middle">Vet Care</text>
  </g>

  <g fill="#5B4B8A">
    <g transform="translate(250 430)">
      <path d="M-14 0 L14 0 M-10 -8 L10 -8 M-6 -16 L6 -16" stroke="#5B4B8A" stroke-width="3" fill="none"/>
      <path d="M-8 0 L8 0 L6 18 L-6 18 Z" fill="#5B4B8A"/>
    </g>
    <g transform="translate(450 430)">
      <polygon points="-16,10 -8,-12 8,-12 16,10 0,2" fill="#5B4B8A"/>
      <rect x="-18" y="10" width="36" height="6" rx="2" fill="#5B4B8A"/>
    </g>
    <g transform="translate(650 430)">
      <path d="M-18 10 L18 10 L18 -2 L8 -2 L8 -12 L-8 -12 L-8 -2 L-18 -2 Z" fill="#5B4B8A"/>
      <circle cx="0" cy="2" r="4" fill="#fdeed6"/>
    </g>
    <g transform="translate(880 430)">
      <circle cx="0" cy="-2" r="10" fill="none" stroke="#5B4B8A" stroke-width="3"/>
      <path d="M8 6 C16 14 18 22 10 24 C4 24 0 18 0 18 C0 18 -4 24 -10 24 C-18 22 -16 14 -8 6" fill="none" stroke="#5B4B8A" stroke-width="3"/>
    </g>
  </g>

  <circle cx="360" cy="460" r="3" fill="#5B4B8A"/>
  <circle cx="560" cy="460" r="3" fill="#5B4B8A"/>
  <circle cx="760" cy="460" r="3" fill="#5B4B8A"/>
</svg>`;

async function main() {
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(OUTPUT);
  const meta = await sharp(OUTPUT).metadata();
  console.log("Wrote", OUTPUT, `${meta.width}x${meta.height}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const fs = require("fs");
const path = require("path");
const { applySeoToIndexHtml } = require("../seo/apply-seo-html");

const indexFile = path.join(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(indexFile, "utf8");
const enhanced = applySeoToIndexHtml(html);
fs.writeFileSync(indexFile, enhanced, "utf8");
console.log("Applied SEO layers to public/index.html");

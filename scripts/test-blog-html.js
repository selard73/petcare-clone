const fs = require("fs");
const { applySeoToIndexHtml } = require("../seo/apply-seo-html");
const { resolveSeoForPathname, injectSeoIntoHtml, injectBlogEnhancements } = require("../seo/blog-seo");

let body = applySeoToIndexHtml(fs.readFileSync("public/index.html", "utf8"));
const seo = resolveSeoForPathname("/blog");
body = injectSeoIntoHtml(body, seo);
body = injectBlogEnhancements(body, "/blog");

console.log("has BOOT:", body.includes("__PEEDEE_BOOT"));
console.log("has blog redirect in categoryPaths:", body.includes('"/blog": "blog"'));
console.log("has blog skip redirect:", body.includes('pathname.indexOf("/blog/")'));

const headMatch = body.match(/<!-- peedee-seo-head:start -->[\s\S]*?<!-- peedee-seo-head:end -->/);
console.log("head length:", headMatch ? headMatch[0].length : 0);
console.log("head has boot:", headMatch ? headMatch[0].includes("__PEEDEE_BOOT") : false);
console.log("head has blog-article-images:", headMatch ? headMatch[0].includes("blog-article-images") : false);

const scripts = body.match(/categoryPaths[\s\S]{0,300}/g) || [];
scripts.forEach((block, i) => {
  console.log(`\n--- categoryPaths block ${i + 1} ---`);
  console.log(block.slice(0, 280));
});

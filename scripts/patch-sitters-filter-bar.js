const fs = require("fs");
const path = require("path");

const bundlePath = path.join(__dirname, "../public/_components/v2/eadba943d2368c4e58773ef46d62f7a9faa60533.js");
let s = fs.readFileSync(bundlePath, "utf8");
const start = s.indexOf("function sittersCat(");
const end = s.indexOf("function cf(", start);
if (start < 0 || end < 0) throw new Error("sittersCat block not found");

let chunk = s.slice(start, end);

// Desktop filter bar: baby pink between page (pink-50/100) and header (pink-400+)
chunk = chunk.replace(
  'className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8",\n          style: { backgroundColor: "#86efac" }',
  'className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8 border border-pink-300",\n          style: { backgroundColor: "#fbcfe8" }'
);

const barStart = chunk.indexOf('className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8"');
const barEnd = chunk.indexOf(
  '/* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0 px-4 md:px-0"',
  barStart
);
if (barStart < 0 || barEnd < 0) throw new Error("filter bar section not found");

let bar = chunk.slice(barStart, barEnd);
bar = bar
  .replace(/bg-pink-50/g, "bg-white")
  .replace(/border-pink-200/g, "border-pink-300")
  .replace(/hover:bg-pink-100/g, "hover:bg-pink-50");
chunk = chunk.slice(0, barStart) + bar + chunk.slice(barEnd);

// Filter UI accents (mobile Filters button + toggles)
chunk = chunk
  .replace(/#86efac/g, "#fbcfe8")
  .replace(/#15803d/g, "#db2777")
  .replace(/#166534/g, "#be185d")
  .replace(/#16a34a/g, "#ec4899");

fs.writeFileSync(bundlePath, s.slice(0, start) + chunk + s.slice(end));
console.log("Updated sitters filter bar to contrasting baby pink");

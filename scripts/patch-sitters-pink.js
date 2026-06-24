const fs = require("fs");
const path = require("path");

const bundlePath = path.join(__dirname, "../public/_components/v2/eadba943d2368c4e58773ef46d62f7a9faa60533.js");
let s = fs.readFileSync(bundlePath, "utf8");
const start = s.indexOf("function sittersCat(");
const end = s.indexOf("function cf(", start);
if (start < 0 || end < 0) throw new Error("sittersCat block not found");

let chunk = s.slice(start, end);
chunk = chunk
  .replace(
    'className: "min-h-screen", children',
    'className: "min-h-screen bg-pink-50 md:bg-gradient-to-b md:from-pink-100 md:to-pink-50", children'
  )
  .replace("from-sky-400 via-indigo-500 to-violet-600", "from-pink-400 via-rose-400 to-pink-600")
  .replace("from-indigo-50 to-white", "from-pink-100 via-pink-50 to-white")
  .replace(/border-indigo-/g, "border-pink-")
  .replace(/bg-indigo-/g, "bg-pink-")
  .replace(/text-indigo-/g, "text-pink-")
  .replace(/hover:bg-indigo-/g, "hover:bg-pink-")
  .replace(/focus:border-indigo-/g, "focus:border-pink-")
  .replace(/from-indigo-/g, "from-pink-")
  .replace(/via-indigo-/g, "via-rose-")
  .replace(/to-violet-/g, "to-rose-")
  .replace(/to-indigo-/g, "to-pink-");

fs.writeFileSync(bundlePath, s.slice(0, start) + chunk + s.slice(end));
console.log("Updated sittersCat theme to baby pink");

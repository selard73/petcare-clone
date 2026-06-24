const fs = require("fs");
const path = require("path");

const bundlePath = path.join(__dirname, "../public/_components/v2/eadba943d2368c4e58773ef46d62f7a9faa60533.js");
let s = fs.readFileSync(bundlePath, "utf8");

// Fix blog/login wf collision: blog -> dailyWag (must not use Wf — cropper library uses that name)
s = s.replace("function wf({ onNavigate: t }) {", "function dailyWag({ onNavigate: t }) {");
s = s.replace(
  "return /* @__PURE__ */ s(wf, { onNavigate: C });",
  "return /* @__PURE__ */ s(dailyWag, { onNavigate: C });"
);

const lines = s.split("\n");
const start = lines.findIndex((l) => l.startsWith("function lf({"));
const end = lines.findIndex((l, i) => i > start && l.startsWith("function cf({"));
let chunk = lines.slice(start, end).join("\n");

chunk = chunk
  .replace(/^function lf\(/, "function sittersCat(")
  .replace(/"boarding"/g, '"sitters"')
  .replace(/boarding-/g, "sitters-")
  .replace(/Boarding & Daycare/g, "Sitters & Walkers")
  .replace(/Boarding and daycare/g, "Pet sitting and dog walking")
  .replace(/Stay, play, thrive — locally\./g, "Walk, watch, wag — locally.")
  .replace(
    /Safe overnight stays and daytime care nearby\./g,
    "In-home visits and daily walks nearby."
  )
  .replace(
    /Boarding and daycare in Darlington, Hartsville and Florence for vacations, workdays, and extended trips\./g,
    "Pet sitters and dog walkers in Darlington, Hartsville and Florence for daily walks, drop-in visits, and vacation care."
  )
  .replace(
    /Trusted local facilities where your pet can stay, play, and rest comfortably\./g,
    "Trusted locals who keep your pet active, comfortable, and cared for while you are away."
  )
  .replace(/Loading boarding businesses\.\.\./g, "Loading sitters and walkers...")
  .replace(/from-green-400 via-emerald-500 to-teal-600/g, "from-sky-400 via-indigo-500 to-violet-600")
  .replace(/from-emerald-50/g, "from-indigo-50")
  .replace(/from-green-600 to-emerald-600/g, "from-indigo-600 to-violet-600")
  .replace(/from-green-100 to-emerald-100/g, "from-indigo-100 to-violet-100")
  .replace(/border-green-/g, "border-indigo-")
  .replace(/bg-green-/g, "bg-indigo-")
  .replace(/text-green-/g, "text-indigo-")
  .replace(/hover:bg-green-/g, "hover:bg-indigo-")
  .replace(/focus:border-green-/g, "focus:border-indigo-")
  .replace(/Daycare Available/g, "Pet Sitting")
  .replace(/Boarding Style/g, "Service Type")
  .replace(/children: "🏠"/g, 'children: "🦮"');

const seedBlock = `    const Lf = [
      { id: "sitters-1", name: "Pee Dee Pet Sitters", city: "Florence", priceRange: "$", daycareAvailable: !0, address: "215 Oak Meadow Ln", zipCode: "29501", phone: "(843) 555-0191", description: "In-home pet sitting and daily dog walks with photo updates for Florence-area families.", paymentMethods: ["Cash", "Credit Card", "Venmo"], boardingStyles: ["In-Home Visits", "Dog Walking"], servicesOffered: ["Pet Sitting", "Dog Walking", "Drop-In Visits"], specialFeatures: ["Photo Updates", "Medication Administration"], photos: [Wr], hours: { monday: "7:00 AM - 8:00 PM", tuesday: "7:00 AM - 8:00 PM", wednesday: "7:00 AM - 8:00 PM", thursday: "7:00 AM - 8:00 PM", friday: "7:00 AM - 8:00 PM", saturday: "8:00 AM - 6:00 PM", sunday: "8:00 AM - 6:00 PM" } },
      { id: "sitters-2", name: "Darlington Dog Walkers", city: "Darlington", priceRange: "$", daycareAvailable: !1, address: "88 Maple Creek Rd", zipCode: "29532", phone: "(843) 555-0188", description: "Reliable midday and after-work dog walks serving Darlington and nearby neighborhoods.", paymentMethods: ["Cash", "Credit Card"], boardingStyles: ["Dog Walking"], servicesOffered: ["Dog Walking", "Potty Breaks"], specialFeatures: ["GPS Route Reports"], photos: [Wr], hours: { monday: "9:00 AM - 6:00 PM", tuesday: "9:00 AM - 6:00 PM", wednesday: "9:00 AM - 6:00 PM", thursday: "9:00 AM - 6:00 PM", friday: "9:00 AM - 6:00 PM", saturday: "10:00 AM - 2:00 PM", sunday: "Closed" } },
      { id: "sitters-3", name: "Hartsville Home Pet Care", city: "Hartsville", priceRange: "$$", daycareAvailable: !0, address: "412 Pineview Dr", zipCode: "29550", phone: "(843) 555-0179", description: "Overnight pet sitting and vacation care in your home for dogs and cats in Hartsville.", paymentMethods: ["Credit Card", "Check"], boardingStyles: ["In-Home Visits", "Overnight Sitting"], servicesOffered: ["Pet Sitting", "Overnight Care", "Cat Visits"], specialFeatures: ["Meet and Greet Required", "Medication Administration"], photos: [Wr], hours: { monday: "8:00 AM - 7:00 PM", tuesday: "8:00 AM - 7:00 PM", wednesday: "8:00 AM - 7:00 PM", thursday: "8:00 AM - 7:00 PM", friday: "8:00 AM - 7:00 PM", saturday: "9:00 AM - 5:00 PM", sunday: "9:00 AM - 5:00 PM" } },
      { id: "sitters-4", name: "Florence Furry Friends", city: "Florence", priceRange: "$", daycareAvailable: !0, address: "601 Westfield Ave", zipCode: "29505", phone: "(843) 555-0163", description: "Flexible pet sitting, drop-in visits, and neighborhood dog walks across Florence.", paymentMethods: ["Cash", "Credit Card", "Digital Wallet"], boardingStyles: ["In-Home Visits", "Dog Walking"], servicesOffered: ["Pet Sitting", "Dog Walking", "Puppy Visits"], specialFeatures: ["Photo Updates", "Key Hold Service"], photos: [Wr], hours: { monday: "7:30 AM - 7:30 PM", tuesday: "7:30 AM - 7:30 PM", wednesday: "7:30 AM - 7:30 PM", thursday: "7:30 AM - 7:30 PM", friday: "7:30 AM - 7:30 PM", saturday: "8:00 AM - 4:00 PM", sunday: "8:00 AM - 4:00 PM" } }
    ];`;

chunk = chunk.replace(
  /const Mi = async \(\) => \{[\s\S]*?const Lf = \[[\s\S]*?\];/,
  `const Mi = async () => {\n${seedBlock}`
);

if (s.includes("function sittersCat(")) {
  console.log("sittersCat already exists — updating dailyWag fix only");
  fs.writeFileSync(bundlePath, s);
  process.exit(0);
}

const insertAt = lines.findIndex((l) => l.startsWith("function cf({"));
const newLines = [...lines.slice(0, insertAt), chunk, "", ...lines.slice(insertAt)];
fs.writeFileSync(bundlePath, newLines.join("\n"));
console.log("Inserted sittersCat page (" + chunk.split("\n").length + " lines)");

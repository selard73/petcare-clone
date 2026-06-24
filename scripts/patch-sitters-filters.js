const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "public", "_components", "v2", "eadba943d2368c4e58773ef46d62f7a9faa60533.js");
let s = fs.readFileSync(file, "utf8");

const helpers = `function sittersServiceTerms(t) {
  return [...t.servicesOffered || [], ...t.boardingStyles || []].map((e) => String(e).toLowerCase());
}
function sittersFeatureText(t) {
  return (t.specialFeatures || []).map((e) => String(e).toLowerCase());
}
function sittersHasLegacyFeature(t, e) {
  const r = sittersFeatureText(t);
  return e.some((n) => r.some((i) => i.includes(n)));
}
function sittersMatchesService(t, e) {
  if (!e || e === "all") return !0;
  const r = sittersServiceTerms(t), n = {
    walking: ["dog walking", "potty break", "walk"],
    dropin: ["drop-in", "drop in", "drop-in visit"],
    housesitting: ["house sitting", "overnight", "overnight care", "overnight sitting"],
    petsitting: ["pet sitting", "cat visit", "puppy visit", "in-home visit"]
  };
  return (n[e] || []).some((i) => r.some((o) => o.includes(i)));
}
function sittersMatchFlag(t, e, r) {
  return !!t[e] || sittersHasLegacyFeature(t, r || []);
}
function sittersFilterChip(t, e, r, n) {
  return /* @__PURE__ */ d("button", {
    type: "button",
    onClick: () => e(!t),
    className: "inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 text-sm transition-colors " + (t ? "bg-white border-pink-600 text-pink-700 shadow-sm" : "bg-white/70 border-pink-200 text-gray-700 hover:border-pink-400 hover:bg-white"),
    children: [/* @__PURE__ */ s("span", { children: r }), /* @__PURE__ */ s("span", { children: n })]
  });
}
function sittersMobileToggle(t, e, r, n) {
  return /* @__PURE__ */ d("div", {
    className: "flex items-center justify-between cursor-pointer py-1",
    onClick: () => e(!t),
    children: [/* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [/* @__PURE__ */ s("span", { className: "text-xl", children: r }), /* @__PURE__ */ s("span", { className: "text-gray-700", children: n })] }), /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: t ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform " + (t ? "translate-x-6" : "translate-x-1"), style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })]
  });
}
function sittersServiceOptions() {
  return [/* @__PURE__ */ s("option", { value: "all", children: "All Services" }), /* @__PURE__ */ s("option", { value: "walking", children: "Dog Walking" }), /* @__PURE__ */ s("option", { value: "dropin", children: "Drop-In Visits" }), /* @__PURE__ */ s("option", { value: "housesitting", children: "House Sitting" }), /* @__PURE__ */ s("option", { value: "petsitting", children: "Pet Sitting" })];
}
`;

if (!s.includes("function sittersServiceTerms")) {
  s = s.replace("function sittersCat(", helpers + "function sittersCat(");
}

// State line
s = s.replace(
  /function sittersCat\(\{ onEditBusiness: t, onNavigate: e, onOpenLogin: r \} = \{\}\) \{\n  const \[n, i\] = E\(null\), \[o, a\] = E\(\[\]\), \[l, c\] = E\(!0\), \[u, h\] = E\(0\), \[p, m\] = E\(\[\]\), \[f, v\] = E\(\{ userName: "", rating: 5, comment: "" \}\), \[g, b\] = E\(!1\), \[w, x\] = E\(\{\}\), \[T, P\] = E\(!1\), \[N, S\] = E\(\{ reviewerName: "", rating: 5, comment: "" \}\), \[C, R\] = E\(!1\), \[M, k\] = E\(!1\), \{ user: I, accessToken: z \} = vi\(\), \[ee, G\] = E\("all"\), \[pe, Ee\] = E\(!1\), \[W, te\] = E\(!1\), \[ae, ue\] = E\(!1\), \[Me, qe\] = E\("all"\), \[Ke, Ht\] = E\(""\), \[Re, Ye\] = E\("name"\), \[Be, mt\] = E\(\[\]\), \[Nr, Xe\] = E\(!1\), \[ft, A\] = E\(10\), \[O, V\] = E\(!1\), \[H, se\] = E\(!1\), \[Ze, \$e\] = E\(!1\), \[zt, gt\] = E\(""\), \[Ai, Ei\] = E\(void 0\);/,
  `function sittersCat({ onEditBusiness: t, onNavigate: e, onOpenLogin: r } = {}) {
  const [n, i] = E(null), [o, a] = E([]), [l, c] = E(!0), [u, h] = E(0), [p, m] = E([]), [f, v] = E({ userName: "", rating: 5, comment: "" }), [g, b] = E(!1), [w, x] = E({}), [T, P] = E(!1), [N, S] = E({ reviewerName: "", rating: 5, comment: "" }), [C, R] = E(!1), [M, k] = E(!1), { user: I, accessToken: z } = vi(), [ee, G] = E("all"), [pe, Ee] = E("all"), [W, te] = E(!1), [ae, ue] = E(!1), [Me, qe] = E("all"), [sbIns, setSbIns] = E(!1), [sbMed, setSbMed] = E(!1), [sbPhoto, setSbPhoto] = E(!1), [sbAccept, setSbAccept] = E(!1), [sbMobile, setSbMobile] = E(!1), [sbCpr, setSbCpr] = E(!1), [sbBg, setSbBg] = E(!1), [sbPro, setSbPro] = E(!1), [Ke, Ht] = E(""), [Re, Ye] = E("name"), [Be, mt] = E([]), [Nr, Xe] = E(!1), [ft, A] = E(10), [O, V] = E(!1), [H, se] = E(!1), [Ze, $e] = E(!1), [zt, gt] = E(""), [Ai, Ei] = E(void 0), sbActiveCount = (pe !== "all" ? 1 : 0) + (Me !== "all" ? 1 : 0) + (W ? 1 : 0) + (ae ? 1 : 0) + (sbIns ? 1 : 0) + (sbMed ? 1 : 0) + (sbPhoto ? 1 : 0) + (sbAccept ? 1 : 0) + (sbMobile ? 1 : 0) + (sbCpr ? 1 : 0) + (sbBg ? 1 : 0) + (sbPro ? 1 : 0), sittersResetFilters = () => {
    Ht(""), Ee("all"), te(!1), ue(!1), qe("all"), G("all"), Ye("name"), setSbIns(!1), setSbMed(!1), setSbPhoto(!1), setSbAccept(!1), setSbMobile(!1), setSbCpr(!1), setSbBg(!1), setSbPro(!1);
  };`
);

// useEffect deps for pagination
s = s.replace(
  /function sittersCat[\s\S]*?U\(\(\) => \{\n    A\(10\), se\(!1\);\n  \}, \[Ke, ee, Re\]\),/,
  (m) => m.replace("}, [Ke, ee, Re]),", "}, [Ke, ee, Re, pe, Me, W, ae, sbIns, sbMed, sbPhoto, sbAccept, sbMobile, sbCpr, sbBg, sbPro]),")
);

// Seed data enrichment
const seedReplacements = [
  ['servicesOffered: ["Pet Sitting", "Dog Walking", "Drop-In Visits"], specialFeatures: ["Photo Updates", "Medication Administration"]',
    'servicesOffered: ["Pet Sitting", "Dog Walking", "Drop-In Visits"], insuredBonded: !0, medicationAdmin: !0, photoUpdates: !0, mobileService: !0, petCprCertified: !0, specialFeatures: ["Photo Updates", "Medication Administration"]'],
  ['servicesOffered: ["Dog Walking", "Potty Breaks"], specialFeatures: ["GPS Route Reports"]',
    'servicesOffered: ["Dog Walking", "Potty Breaks"], mobileService: !0, backgroundChecked: !0, specialFeatures: ["GPS Route Reports"]'],
  ['servicesOffered: ["Pet Sitting", "Overnight Care", "Cat Visits"], specialFeatures: ["Meet and Greet Required", "Medication Administration"]',
    'servicesOffered: ["Pet Sitting", "Overnight Care", "Cat Visits"], insuredBonded: !0, medicationAdmin: !0, professionalMember: !0, specialFeatures: ["Meet and Greet Required", "Medication Administration"]'],
  ['servicesOffered: ["Pet Sitting", "Dog Walking", "Puppy Visits"], specialFeatures: ["Photo Updates", "Key Hold Service"]',
    'servicesOffered: ["Pet Sitting", "Dog Walking", "Puppy Visits"], photoUpdates: !0, mobileService: !0, specialFeatures: ["Photo Updates", "Key Hold Service"]']
];
for (const [from, to] of seedReplacements) {
  const idx = s.indexOf("function sittersCat");
  const end = s.indexOf("function cf(", idx);
  const block = s.slice(idx, end);
  if (block.includes(from) && !block.includes("insuredBonded: !0, medicationAdmin: !0, photoUpdates: !0")) {
    s = s.slice(0, idx) + block.replace(from, to) + s.slice(end);
  }
}

// Filter logic
const oldFilter = `let y = o.filter((F) => !(Ke.trim() && !F.name.toLowerCase().includes(Ke.toLowerCase()) || ee !== "all" && !businessMatchesCityFilter(F.city, ee) || pe && !F.daycareAvailable || W && !(F.hours && (F.hours.saturday && !F.hours.saturday.toLowerCase().includes("closed") || F.hours.sunday && !F.hours.sunday.toLowerCase().includes("closed"))) || ae && (w[F.id]?.average || 0) < 4 || Me !== "all" && F.priceRange !== Me));`;
const newFilter = `let y = o.filter((F) => !(Ke.trim() && !F.name.toLowerCase().includes(Ke.toLowerCase()) || ee !== "all" && !businessMatchesCityFilter(F.city, ee) || pe !== "all" && !sittersMatchesService(F, pe) || W && !(F.hours && (F.hours.saturday && !F.hours.saturday.toLowerCase().includes("closed") || F.hours.sunday && !F.hours.sunday.toLowerCase().includes("closed"))) || ae && (w[F.id]?.average || 0) < 4 || Me !== "all" && F.priceRange !== Me || sbIns && !sittersMatchFlag(F, "insuredBonded", ["insured", "bonded"]) || sbMed && !sittersMatchFlag(F, "medicationAdmin", ["medication"]) || sbPhoto && !sittersMatchFlag(F, "photoUpdates", ["photo update", "gps route"]) || sbAccept && F.notAcceptingClients || sbMobile && !F.mobileService || sbCpr && !sittersMatchFlag(F, "petCprCertified", ["cpr", "first aid"]) || sbBg && !sittersMatchFlag(F, "backgroundChecked", ["background"]) || sbPro && !sittersMatchFlag(F, "professionalMember", ["napps", "psi", "pet sitters"])));`;

const sittersIdx = s.indexOf("function sittersCat");
const vetIdx = s.indexOf("function cf(", sittersIdx);
const sittersBlock = s.slice(sittersIdx, vetIdx);
if (sittersBlock.includes(oldFilter)) {
  s = s.slice(0, sittersIdx) + sittersBlock.replace(oldFilter, newFilter) + s.slice(vetIdx);
}

// Desktop filter bar replacement
const desktopFilterOld = `          className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8 border border-pink-300",
          style: { backgroundColor: "#fbcfe8" },
          children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 items-stretch justify-between", children: [
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto", children: /* @__PURE__ */ d(
              "select",
              {
                value: ee,
                onChange: (y) => G(y.target.value),
                className: "w-full h-full px-4 py-3 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                  /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                  /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                  /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                ]
              }
            ) }),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors",
                onClick: () => Ee(!pe),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🦮" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Pet Sitting" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: pe ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: \`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${pe ? "translate-x-6" : "translate-x-1"}\`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors",
                onClick: () => te(!W),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "📅" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Open Weekends" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: W ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: \`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${W ? "translate-x-6" : "translate-x-1"}\`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors",
                onClick: () => ue(!ae),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: ae,
                      onChange: (y) => ue(y.target.checked),
                      className: "w-5 h-5 text-pink-600 rounded cursor-pointer ml-auto"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-pink-300 rounded-lg", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-pink-600" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Price Range" })
              ] }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Me,
                  onChange: (y) => qe(y.target.value),
                  className: "px-3 py-1 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer ml-auto",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        }`;

const desktopFilterNew = `          className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8 border border-pink-300",
          style: { backgroundColor: "#fbcfe8" },
          children: /* @__PURE__ */ d("div", { className: "space-y-4", children: [
            /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ d("select", { value: ee, onChange: (y) => G(y.target.value), className: "w-full px-4 py-3 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer", children: [/* @__PURE__ */ s("option", { value: "all", children: "All Cities" }), /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }), /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }), /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })] }),
              /* @__PURE__ */ d("select", { value: pe, onChange: (y) => Ee(y.target.value), className: "w-full px-4 py-3 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer", children: sittersServiceOptions() }),
              /* @__PURE__ */ d("select", { value: Me, onChange: (y) => qe(y.target.value), className: "w-full px-4 py-3 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer", children: [/* @__PURE__ */ s("option", { value: "all", children: "All Prices" }), /* @__PURE__ */ s("option", { value: "$", children: "$ Budget" }), /* @__PURE__ */ s("option", { value: "$$", children: "$$ Moderate" }), /* @__PURE__ */ s("option", { value: "$$$", children: "$$$ Premium" }), /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$ Luxury" })] })
            ] }),
            /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("p", { className: "text-xs font-semibold text-pink-900 uppercase tracking-wide mb-2", children: "Trust & Credentials" }), /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-2", children: [sittersFilterChip(sbIns, setSbIns, "🛡️", "Insured & Bonded"), sittersFilterChip(sbCpr, setSbCpr, "❤️", "CPR / First Aid"), sittersFilterChip(sbBg, setSbBg, "✅", "Background Checked"), sittersFilterChip(sbPro, setSbPro, "🏅", "Pro Association")] }) ] }),
            /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("p", { className: "text-xs font-semibold text-pink-900 uppercase tracking-wide mb-2", children: "Care Options" }), /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-2", children: [sittersFilterChip(sbMed, setSbMed, "💊", "Medication OK"), sittersFilterChip(sbPhoto, setSbPhoto, "📸", "Photo Updates"), sittersFilterChip(sbMobile, setSbMobile, "🚗", "Comes to You"), sittersFilterChip(sbAccept, setSbAccept, "🐾", "Accepting Clients")] }) ] }),
            /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("p", { className: "text-xs font-semibold text-pink-900 uppercase tracking-wide mb-2", children: "Availability & Quality" }), /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-2", children: [sittersFilterChip(W, te, "📅", "Open Weekends"), sittersFilterChip(ae, ue, "🌟", "4+ Stars")] }) ] }),
            sbActiveCount > 0 && /* @__PURE__ */ s("div", { className: "flex justify-end", children: /* @__PURE__ */ s("button", { type: "button", onClick: sittersResetFilters, className: "text-sm text-pink-700 hover:text-pink-900 underline underline-offset-2", children: "Clear all filters" }) })
          ] })
        }`;

{
  const idx = s.indexOf("function sittersCat");
  const end = s.indexOf("function cf(", idx);
  let block = s.slice(idx, end);
  if (block.includes("Pet Sitting")) {
    block = block.replace(desktopFilterOld, desktopFilterNew);
    s = s.slice(0, idx) + block + s.slice(end);
  }
}

// Mobile filters button badge
s = s.replace(
  /function sittersCat[\s\S]*?\/\* @__PURE__ \*\/ s\(Am, \{ className: "w-4 h-4" \}\),\n                  \/\* @__PURE__ \*\/ s\("span", \{ className: "text-sm", children: "Filters" \}\)/,
  `/* @__PURE__ */ s(Am, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s("span", { className: "text-sm", children: "Filters" }),
                  sbActiveCount > 0 && /* @__PURE__ */ s("span", { className: "ml-1 px-2 py-0.5 bg-white/25 rounded-full text-xs", children: sbActiveCount })`
);

// Clear filters on no results mobile
s = s.replace(
  /function sittersCat[\s\S]*?onClick: \(\) => \{\n              Ht\(""\), Ee\(!1\), te\(!1\), ue\(!1\), qe\("all"\), G\("all"\), Ye\("name"\);\n            \},/,
  `onClick: () => {
              sittersResetFilters();
            },`
);

// Mobile filter sheet - only in sitters block
{
  const mobileOld = `            /* @__PURE__ */ d("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => Ee(!pe),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🦮" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Pet Sitting" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: pe ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: \`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${pe ? "translate-x-6" : "translate-x-1"}\` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => te(!W),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "📅" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Open Weekends" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: W ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: \`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${W ? "translate-x-6" : "translate-x-1"}\` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => ue(!ae),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: ae ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: \`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${ae ? "translate-x-6" : "translate-x-1"}\` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "text-sm text-gray-600 mb-2 block", children: "Price Range" }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg", children: [
                  /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-pink-600" }),
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: Me,
                      onChange: (y) => qe(y.target.value),
                      className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700",
                      children: [
                        /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                        /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                        /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),`;

  const mobileNew = `            /* @__PURE__ */ d("div", { className: "p-4 space-y-5", children: [
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("label", { className: "text-sm font-semibold text-gray-700 mb-2 block", children: "Service Type" }), /* @__PURE__ */ d("select", { value: pe, onChange: (y) => Ee(y.target.value), className: "w-full px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 cursor-pointer", children: sittersServiceOptions() })] }),
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("p", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Trust & Credentials" }), /* @__PURE__ */ d("div", { className: "space-y-3", children: [sittersMobileToggle(sbIns, setSbIns, "🛡️", "Insured & Bonded"), sittersMobileToggle(sbCpr, setSbCpr, "❤️", "CPR / First Aid"), sittersMobileToggle(sbBg, setSbBg, "✅", "Background Checked"), sittersMobileToggle(sbPro, setSbPro, "🏅", "Pro Association Member")] })] }),
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("p", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Care Options" }), /* @__PURE__ */ d("div", { className: "space-y-3", children: [sittersMobileToggle(sbMed, setSbMed, "💊", "Medication Administration"), sittersMobileToggle(sbPhoto, setSbPhoto, "📸", "Photo Updates"), sittersMobileToggle(sbMobile, setSbMobile, "🚗", "Comes to You"), sittersMobileToggle(sbAccept, setSbAccept, "🐾", "Accepting New Clients")] })] }),
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("p", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Availability & Quality" }), /* @__PURE__ */ d("div", { className: "space-y-3", children: [sittersMobileToggle(W, te, "📅", "Open Weekends"), sittersMobileToggle(ae, ue, "🌟", "4+ Stars")] })] }),
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("label", { className: "text-sm font-semibold text-gray-700 mb-2 block", children: "Price Range" }), /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg", children: [/* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-pink-600" }), /* @__PURE__ */ d("select", { value: Me, onChange: (y) => qe(y.target.value), className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700", children: [/* @__PURE__ */ s("option", { value: "all", children: "All Prices" }), /* @__PURE__ */ s("option", { value: "$", children: "$" }), /* @__PURE__ */ s("option", { value: "$$", children: "$$" }), /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }), /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })] })] })] })
            ] }),`;

  const idx = s.indexOf("function sittersCat");
  const end = s.indexOf("function cf(", idx);
  let block = s.slice(idx, end);
  if (block.includes('children: "Pet Sitting"')) {
    block = block.replace(mobileOld, mobileNew);
    block = block.replace(
      `onClick: () => {
                    Ee(!1), te(!1), ue(!1), qe("all");
                  },
                  className: "text-pink-600 hover:text-pink-700 transition-colors",
                  children: "Clear"`,
      `onClick: sittersResetFilters,
                  className: "text-pink-600 hover:text-pink-700 transition-colors",
                  children: "Clear"`
    );
    s = s.slice(0, idx) + block + s.slice(end);
  }
}

// Card badges - replace daycareAvailable pet sitting with first service
const cardBadgeOld = `y.daycareAvailable && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: "🦮 Pet Sitting" })`;
const cardBadgeNew = `(y.servicesOffered && y.servicesOffered[0] ? /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: y.servicesOffered[0] }) : y.insuredBonded || sittersMatchFlag(y, "insuredBonded", ["insured", "bonded"]) ? /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: "🛡️ Insured" }) : null)`;
{
  const idx = s.indexOf("function sittersCat");
  const end = s.indexOf("function cf(", idx);
  let block = s.slice(idx, end);
  block = block.split(cardBadgeOld).join(cardBadgeNew);
  s = s.slice(0, idx) + block + s.slice(end);
}

// Boarding tips -> Sitter tips
{
  const idx = s.indexOf("function sittersCat");
  const end = s.indexOf("function cf(", idx);
  let block = s.slice(idx, end);
  block = block.replace('children: "Boarding Tips"', 'children: "Sitter Tips"');
  block = block.replace(
    `{ icon: "📅", title: "Book Early", text: "Book boarding early during holidays" }, { icon: "💉", title: "Vaccinations", text: "Ask about vaccination requirements" }, { icon: "🏠", title: "Tour First", text: "Tour the facility before your first stay" }`,
    `{ icon: "🤝", title: "Meet & Greet", text: "Schedule a meet and greet before your first booking" }, { icon: "🛡️", title: "Verify Insurance", text: "Ask for proof of insurance and bonding" }, { icon: "🔑", title: "Share Details", text: "Leave clear feeding, meds, and emergency contacts" }`
  );
  s = s.slice(0, idx) + block + s.slice(end);
}

// Admin form defaults
s = s.replace(
  `    notAcceptingClients: !1,
    paymentMethods: [],
    specialFeatures: [""],
    category: "grooming",
    mobilePhotos: []
  }), [a, l] = E([]),`,
  `    notAcceptingClients: !1,
    insuredBonded: !1,
    petCprCertified: !1,
    backgroundChecked: !1,
    professionalMember: !1,
    medicationAdmin: !1,
    photoUpdates: !1,
    paymentMethods: [],
    specialFeatures: [""],
    category: "grooming",
    mobilePhotos: []
  }), [a, l] = E([]),`
);

s = s.replace(
  `        notAcceptingClients: t.notAcceptingClients || !1,
        paymentMethods: t.paymentMethods || [],
        specialFeatures: t.specialFeatures?.length > 0 ? t.specialFeatures : [""],
        category: t.category || "grooming",
        mobilePhotos: t.mobilePhotos || []
      }), p(t.photos || []), Z(t.mobilePhotos || []), f(t.cardPhotoIndex || 0);`,
  `        notAcceptingClients: t.notAcceptingClients || !1,
        insuredBonded: t.insuredBonded || !1,
        petCprCertified: t.petCprCertified || !1,
        backgroundChecked: t.backgroundChecked || !1,
        professionalMember: t.professionalMember || !1,
        medicationAdmin: t.medicationAdmin || !1,
        photoUpdates: t.photoUpdates || !1,
        paymentMethods: t.paymentMethods || [],
        specialFeatures: t.specialFeatures?.length > 0 ? t.specialFeatures : [""],
        category: t.category || "grooming",
        mobilePhotos: t.mobilePhotos || []
      }), p(t.photos || []), Z(t.mobilePhotos || []), f(t.cardPhotoIndex || 0);`
);

s = s.replace(
  `        notAcceptingClients: !1,
        paymentMethods: [],
        specialFeatures: [""],
        category: "grooming",
        mobilePhotos: []
      }), l([]), u([]), p([]), Z([]), j([]), X0([]));`,
  `        notAcceptingClients: !1,
        insuredBonded: !1,
        petCprCertified: !1,
        backgroundChecked: !1,
        professionalMember: !1,
        medicationAdmin: !1,
        photoUpdates: !1,
        paymentMethods: [],
        specialFeatures: [""],
        category: "grooming",
        mobilePhotos: []
      }), l([]), u([]), p([]), Z([]), j([]), X0([]));`
);

const adminSittersSection = `        i.category === "sitters" && /* @__PURE__ */ d("div", { className: "space-y-4", children: [
          /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Sitter & Walker Credentials" }),
          /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "These options power the Sitters & Walkers page filters. Check all that apply to this business." }),
          /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            [{ key: "insuredBonded", label: "🛡️ Insured & Bonded" }, { key: "petCprCertified", label: "❤️ Pet CPR / First Aid Certified" }, { key: "backgroundChecked", label: "✅ Background Checked" }, { key: "professionalMember", label: "🏅 Professional Association Member (PSI/NAPPS)" }, { key: "medicationAdmin", label: "💊 Medication Administration" }, { key: "photoUpdates", label: "📸 Photo / GPS Updates" }].map((A) => /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-pink-50 border-2 border-pink-200 rounded-lg cursor-pointer hover:bg-pink-100 transition-colors", children: [
              /* @__PURE__ */ s("input", { type: "checkbox", checked: !!i[A.key], onChange: (O) => G(A.key, O.target.checked), className: "w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500" }),
              /* @__PURE__ */ s("span", { className: "text-gray-800", children: A.label })
            ] }, A.key))
          ] })
        ] }),
        `;

if (!s.includes("Sitter & Walker Credentials")) {
  s = s.replace(
    `      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Payment Methods" }),`,
    adminSittersSection + `      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Payment Methods" }),`
  );
}

// Modal trust badges in sitters detail - after payment methods section
const modalTrust = `                (n.insuredBonded || n.petCprCertified || n.backgroundChecked || n.professionalMember || n.medicationAdmin || n.photoUpdates || sittersMatchFlag(n, "insuredBonded", ["insured", "bonded"]) || sittersMatchFlag(n, "petCprCertified", ["cpr", "first aid"]) || sittersMatchFlag(n, "backgroundChecked", ["background"]) || sittersMatchFlag(n, "professionalMember", ["napps", "psi"]) || sittersMatchFlag(n, "medicationAdmin", ["medication"]) || sittersMatchFlag(n, "photoUpdates", ["photo update", "gps route"])) && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Credentials & Care" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
                    (n.insuredBonded || sittersMatchFlag(n, "insuredBonded", ["insured", "bonded"])) && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "🛡️ Insured & Bonded" }),
                    (n.petCprCertified || sittersMatchFlag(n, "petCprCertified", ["cpr", "first aid"])) && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "❤️ CPR / First Aid" }),
                    (n.backgroundChecked || sittersMatchFlag(n, "backgroundChecked", ["background"])) && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "✅ Background Checked" }),
                    (n.professionalMember || sittersMatchFlag(n, "professionalMember", ["napps", "psi"])) && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "🏅 Pro Association" }),
                    (n.medicationAdmin || sittersMatchFlag(n, "medicationAdmin", ["medication"])) && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "💊 Medication OK" }),
                    (n.photoUpdates || sittersMatchFlag(n, "photoUpdates", ["photo update", "gps route"])) && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "📸 Photo Updates" }),
                    n.mobileService && /* @__PURE__ */ s("span", { className: "bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm", children: "🚗 Comes to You" })
                  ].filter(Boolean) })
                ] }),
                `;

{
  const idx = s.indexOf("function sittersCat");
  const end = s.indexOf("function cf(", idx);
  let block = s.slice(idx, end);
  const anchor = `n.paymentMethods && n.paymentMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-600 mb-3", children: "Payment Methods" }),`;
  if (block.includes(anchor) && !block.includes("Credentials & Care")) {
    const insertAt = block.indexOf(anchor);
    const afterPayment = block.indexOf(`                ] }),
                n.boardingStyles`, insertAt);
    if (afterPayment > insertAt) {
      block = block.slice(0, afterPayment) + modalTrust + block.slice(afterPayment);
      s = s.slice(0, idx) + block + s.slice(end);
    }
  }
}

// Update daycare label for sitters in admin - change mobile service label when sitters
// Hide boarding daycare checkbox label confusion - add sitters note on mobileService for sitters category
s = s.replace(
  `/* @__PURE__ */ s("span", { className: "text-gray-800", children: "🚐 Mobile Service Available" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if you offer mobile services that come to the customer's location" })`,
  `/* @__PURE__ */ s("span", { className: "text-gray-800", children: i.category === "sitters" ? "🚗 Comes to You (Sitters)" : "🚐 Mobile Service Available" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: i.category === "sitters" ? "Check if you travel to the client's home or neighborhood for visits and walks" : "Check this box if you offer mobile services that come to the customer's location" })`
);

s = s.replace(
  `/* @__PURE__ */ s("span", { className: "text-gray-800", children: "🏠 Daycare Available (Boarding)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if this boarding listing offers daycare" })`,
  `/* @__PURE__ */ s("span", { className: "text-gray-800", children: i.category === "sitters" ? "🦮 General Pet Sitting (legacy)" : "🏠 Daycare Available (Boarding)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: i.category === "sitters" ? "Optional legacy flag — prefer using Services Offered and the credential checkboxes above" : "Check this box if this boarding listing offers daycare" })`
);

fs.writeFileSync(file, s);
console.log("Sitters filters patch applied.");

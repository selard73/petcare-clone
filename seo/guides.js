// Local guides ("Best X in Y" comparison pages), rendered server-side at
// /guides and /guides/<slug> following guide-template.html.
//
// SOURCING RULES (non-negotiable):
// 1. Every factual claim about a provider must trace to that provider's
//    listing record or Shannon's verification-call notes. Nothing else.
// 2. No superlative without a stated criterion.
// 3. Gaps stay visible as [FILL] until Shannon supplies the fact, and a guide
//    with unresolved [FILL] markers must not be published.
// 4. Every guide carries the methodology box and a dated "last reviewed".
// 5. Inclusion is not ranking — providers appear alphabetically.
//
// Draft mechanism: `published: false` keeps a guide out of the sitemap, the
// /guides index, and category-page links. Draft pages are still viewable at
// their URL for review, but render noindex/nofollow plus a DRAFT banner.
// Set `published: true` and a `lastReviewed` date ("YYYY-MM-DD") to publish —
// only after every [FILL] marker has been resolved.

const CANONICAL_ORIGIN = (process.env.CANONICAL_ORIGIN || "https://www.peedeepetcare.com").replace(/\/$/, "");
const CONTACT_LINK = "mailto:hello@peedeepetcare.com";

const GUIDES = [
  {
    slug: "dog-groomers-florence",
    title: "Dog Groomers in Florence, SC: Which One Fits Your Pet",
    cityOrRegion: "Florence, SC",
    category: "Dog grooming",
    categoryPath: "/grooming",
    citySlug: "florence",
    published: false,
    lastReviewed: null,
    intro: [
      "Florence, SC has a handful of established groomers, and the right one depends on your pet more than on ratings: one salon takes cats, one specializes in small dogs under 20 pounds, and one comes to your home. All providers below are in the Pee Dee Pet Care directory, where a real person confirms each business by phone. One thing our calls keep turning up: several Florence groomers run at or near capacity, so check each listing's availability status before you plan on a same-month appointment.",
    ],
    fitMap: [
      {
        situation: "You have a cat:",
        text: "Bark Avenue — the Florence salon in our directory that states it grooms cats as well as dogs, all breeds.",
      },
      {
        situation: "Small dog, 20 lbs or under:",
        text: "The Grooming Shop by Robyn Byers — states a specialty in small dogs up to 20 lbs.",
      },
      {
        situation: "You'd rather not do the car ride (or can't):",
        text: "Pee Dee Pampered Pets Mobile Grooming — full-service grooming at your home; owner Heather Hodges is a former veterinary technician.",
      },
      {
        situation: "Anxious or reactive dog:",
        text: "[FILL — from call notes: which groomer(s) described handling anxious dogs, early/quiet appointments, or one-on-one scheduling? Only include if stated on a call.]",
      },
      {
        situation: "Budget:",
        text: "[FILL — include only if any groomer shared pricing on a call; otherwise delete this bullet. No guessed prices.]",
      },
    ],
    providers: [
      {
        name: "Bark Avenue — A Premier Grooming Salon",
        meta: "423C S Cashua Dr, Florence · (843) 319-6894",
        listingHref: "/grooming/florence",
        facts: "Salon grooming for dogs and cats of all breeds; 100% recommendation rating on its listing.",
        fit: "you have a cat, or a breed-specific cut in mind.",
        limits: "[FILL — capacity/waitlist status from Shannon's call, and verified month.]",
      },
      {
        name: "Fur Real Doggie Spa",
        meta: "158 S Cashua Drive, Florence · [FILL — phone from listing]",
        listingHref: "/grooming/florence",
        facts:
          "[FILL — services description from the listing/call notes. Shannon verified this business by phone; her notes are the source.]",
        fit: "[FILL]",
        limits: "[FILL]",
      },
      {
        name: "Pee Dee Pampered Pets Mobile Grooming LLC",
        meta: "Peniel Rd area, Florence · (843) 992-7257",
        listingHref: "/grooming/florence",
        facts:
          "Full-service mobile grooming that comes to your home. Owner Heather Hodges is a former veterinary technician. 98% recommendation rate from 66+ reviews on its listing.",
        fit: "your pet stresses in the car, you're juggling mobility or schedule constraints, or you want grooming in a familiar setting.",
        limits: "mobile-only — there is no salon to drop in on. [FILL — service-area limits and verified month.]",
      },
      {
        name: "The Grooming Shop by Robyn Byers Hoffmeyer",
        meta: "2710 Juniper Rd, Florence · (843) 229-7200",
        listingHref: "/grooming/florence",
        facts:
          "Owner-operated shop specializing in small dogs up to 20 lbs: haircuts and styles, bathing, nails and filing.",
        fit: "you have a small dog and want the same person grooming it every visit.",
        limits: "the stated 20-lb limit means larger dogs need one of the other options here. [FILL — verified month.]",
      },
    ],
    editorNotes: [
      "[FILL — Shannon: were Barks & Bubbles (Brooks) and Bow-Wowz Florence locations? If yes, add provider blocks for them from your call notes; if not, leave them for the Darlington/Hartsville guides.]",
    ],
    faq: [
      {
        q: "Which Florence groomers take cats?",
        a: "In our directory, Bark Avenue states that it grooms cats as well as dogs.",
      },
      {
        q: "Is there mobile dog grooming in Florence?",
        a: "Yes — Pee Dee Pampered Pets Mobile Grooming comes to your home in the Florence area.",
      },
      {
        q: "Why is it hard to get a grooming appointment in Florence?",
        a: "Our verification calls keep finding Florence groomers at or near capacity. Listings on Pee Dee Pet Care show an availability status when a business shares one, so check the listing before calling around.",
      },
      {
        q: "Who grooms small dogs in Florence?",
        a: "The Grooming Shop by Robyn Byers specializes in dogs 20 lbs and under.",
      },
    ],
  },
  {
    slug: "dog-boarding-florence",
    title: "Best-fit dog boarding in Florence, SC",
    cityOrRegion: "Florence, SC",
    category: "Dog boarding",
    categoryPath: "/boarding",
    citySlug: "florence",
    published: false,
    lastReviewed: null,
    intro: [
      "[FILL — answer-first intro: 2–4 sentences that fully answer \"where should I board my dog in Florence?\" from Shannon's verification-call notes. No superlatives without a stated criterion.]",
    ],
    fitMap: [{ situation: "[FILL — situation]:", text: "[FILL — provider and the stated fact that makes it the fit.]" }],
    providers: [
      { name: "Bone-A-Fide Pet Boarding", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/boarding/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "Palmetto Animal Hospital", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/boarding/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "Palmetto Pawz Doggie Day Care", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/boarding/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "Small Dog Pet Sitters", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/boarding/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "Woofers", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/boarding/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
    ],
    editorNotes: [],
    faq: [],
  },
  {
    slug: "cat-groomers-pee-dee",
    title: "Cat grooming in the Pee Dee region",
    cityOrRegion: "Pee Dee region, SC",
    category: "Cat grooming",
    categoryPath: "/grooming",
    citySlug: null,
    published: false,
    lastReviewed: null,
    intro: [
      "[FILL — answer-first intro: 2–4 sentences on where to find cat grooming across the Pee Dee, from listing records and Shannon's call notes only.]",
    ],
    fitMap: [{ situation: "[FILL — situation]:", text: "[FILL — provider and the stated fact that makes it the fit.]" }],
    providers: [
      {
        name: "Bark Avenue — A Premier Grooming Salon",
        meta: "423C S Cashua Dr, Florence · (843) 319-6894",
        listingHref: "/grooming/florence",
        facts: "Its listing states it grooms cats as well as dogs, all breeds.",
        fit: "[FILL]",
        limits: "[FILL]",
      },
      {
        name: "Doggie Do's and Pussycat Clips",
        meta: "630 E. Cheves St, Florence · (843) 667-5155",
        listingHref: "/grooming/florence",
        facts: "Its listing states dog and cat grooming on E. Cheves St in Florence.",
        fit: "[FILL]",
        limits: "[FILL]",
      },
    ],
    editorNotes: [
      "[FILL — Shannon: did any other Pee Dee groomers state on a call that they groom cats? Add provider blocks only for those that did.]",
    ],
    faq: [],
  },
  {
    slug: "dog-trainers-florence",
    title: "Dog trainers in Florence, SC",
    cityOrRegion: "Florence, SC",
    category: "Dog training",
    categoryPath: "/training",
    citySlug: "florence",
    published: false,
    lastReviewed: null,
    intro: [
      "[FILL — answer-first intro: 2–4 sentences on choosing a dog trainer in Florence, from listing records and Shannon's call notes only.]",
    ],
    fitMap: [{ situation: "[FILL — situation]:", text: "[FILL — provider and the stated fact that makes it the fit.]" }],
    providers: [
      { name: "K9 Basics and Beyond", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/training/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "Petco Dog Training", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/training/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "PetSmart Dog Training", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/training/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
    ],
    editorNotes: [],
    faq: [],
  },
  {
    slug: "emergency-vet-care-pee-dee",
    title: "Emergency vet care in the Pee Dee",
    cityOrRegion: "Pee Dee region, SC",
    category: "Emergency veterinary care",
    categoryPath: "/vet-care",
    citySlug: null,
    published: false,
    lastReviewed: null,
    intro: [
      "[FILL — answer-first intro: 2–4 sentences on where to go for emergency vet care in the Pee Dee, from listing records and Shannon's call notes only.]",
    ],
    fitMap: [{ situation: "[FILL — situation]:", text: "[FILL — provider and the stated fact that makes it the fit.]" }],
    providers: [
      {
        name: "Animal Emergency Hospital of the Pee Dee",
        meta: "Florence · [FILL — address and phone from listing]",
        listingHref: "/vet-care/florence",
        facts: "[FILL — from listing/call notes.]",
        fit: "[FILL]",
        limits: "[FILL]",
      },
    ],
    editorNotes: [
      "[FILL — Shannon: which other listed vets stated emergency or after-hours availability on a call? Add provider blocks only for those that did.]",
    ],
    faq: [],
  },
  {
    slug: "rover-vs-local-sitters",
    title: "Rover vs. local Florence pet sitters: what to compare",
    cityOrRegion: "Florence, SC",
    category: "Pet sitting",
    categoryPath: "/sitters",
    citySlug: "florence",
    published: false,
    lastReviewed: null,
    // Criteria-only comparison. Make no negative claims about Rover — frame as
    // "questions to ask on any platform" plus what local, phone-verified
    // listings provide.
    intro: [
      "[FILL — answer-first intro: 2–4 sentences framing this as a criteria-only comparison — the questions worth asking about a sitter on any platform, and what local, phone-verified listings provide. Make no negative claims about Rover.]",
    ],
    fitMap: [
      { situation: "Questions to ask on any platform:", text: "[FILL — e.g. meet-and-greet policy, backup plan, medication experience, home setup — criteria only, no platform claims.]" },
      { situation: "What phone-verified local listings provide:", text: "A real person at Pee Dee Pet Care confirmed each listed sitter is open, reachable, and offering the services shown, with the month it was last confirmed on the listing." },
    ],
    providers: [
      { name: "Astrid's House Pet Sitting", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/sitters/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
      { name: "Jordan's Pet Care", meta: "Florence · [FILL — address and phone from listing]", listingHref: "/sitters/florence", facts: "[FILL — from listing/call notes.]", fit: "[FILL]", limits: "[FILL]" },
    ],
    editorNotes: [],
    faq: [],
  },
];

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getGuideBySlug(slug) {
  return GUIDES.find((guide) => guide.slug === slug) || null;
}

function getPublishedGuides() {
  return GUIDES.filter((guide) => guide.published === true);
}

// Published guides for a category page (citySlug null matches the whole
// category). Used to render "Local guide: …" links; drafts never appear.
function getPublishedGuidesForCategory(categoryPath, citySlug = null) {
  return getPublishedGuides().filter(
    (guide) =>
      guide.categoryPath === categoryPath && (guide.citySlug === null || !citySlug || guide.citySlug === citySlug),
  );
}

function getGuideSitemapEntries() {
  const published = getPublishedGuides();
  if (!published.length) {
    return [];
  }
  return [
    { loc: "/guides", changefreq: "weekly", priority: "0.6" },
    ...published.map((guide) => ({
      loc: `/guides/${guide.slug}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: guide.lastReviewed || undefined,
    })),
  ];
}

function hasUnresolvedFillMarkers(guide) {
  return JSON.stringify(guide).includes("[FILL");
}

function buildGuideJsonLd(guide) {
  const graph = [
    {
      "@type": "Article",
      headline: guide.title,
      ...(guide.lastReviewed ? { dateModified: guide.lastReviewed } : {}),
      author: { "@type": "Organization", name: "Pee Dee Pet Care" },
      publisher: { "@type": "Organization", name: "Pee Dee Pet Care", url: `${CANONICAL_ORIGIN}/` },
      about: `${guide.category} in ${guide.cityOrRegion}`,
    },
    {
      "@type": "ItemList",
      name: guide.title,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: guide.providers.map((provider, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: provider.name,
        url: `${CANONICAL_ORIGIN}${provider.listingHref}`,
      })),
    },
  ];
  if (guide.faq && guide.faq.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: guide.faq.map((entry) => ({
        "@type": "Question",
        name: entry.q,
        acceptedAnswer: { "@type": "Answer", text: entry.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

// Shared shell: fonts, palette, light+dark scheme, reduced motion, focus
// styles — same family as the how-we-verify page.
const GUIDE_CSS = `
:root{
  --cream:#FFF7EE;--card:#FFFFFF;--line:#E9DFEF;--ink:#2E2440;--ink-soft:#6E6880;
  --lavender:#EFE8F7;--lavender-deep:#7C5FA8;--magenta:#C4308A;--radius:14px;
}
@media (prefers-color-scheme: dark){
  :root{
    --cream:#201A2C;--card:#2A2338;--line:#453B58;--ink:#F1EAF9;--ink-soft:#B4A9C8;
    --lavender:#322948;--lavender-deep:#B49BE0;--magenta:#E863B4;
  }
}
*{box-sizing:border-box}
body{margin:0;background:var(--cream);color:var(--ink);font-family:'Poppins',system-ui,sans-serif;line-height:1.6}
h1,h2,h3{font-family:'Quicksand',system-ui,sans-serif;color:var(--ink)}
a{color:var(--lavender-deep)}
a:focus-visible,button:focus-visible{outline:3px solid var(--magenta);outline-offset:2px;border-radius:4px}
@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}
.guide-shell{max-width:820px;margin:0 auto;padding:0 20px 60px}
.site-header{background:var(--card);border-bottom:1px solid var(--line)}
.site-header .inner{max-width:820px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}
.site-header .brand{font-family:'Quicksand',system-ui,sans-serif;font-weight:700;font-size:1.05rem;color:var(--ink);text-decoration:none}
.site-header nav{display:flex;gap:14px;flex-wrap:wrap;font-size:.88rem}
.site-header nav a{text-decoration:none}
.eyebrow{color:var(--magenta);font-family:'Quicksand',system-ui,sans-serif;font-weight:700;font-size:.85rem;letter-spacing:.04em;text-transform:uppercase;margin:34px 0 6px}
h1{font-size:1.9rem;line-height:1.2;margin:0 0 14px}
.lede{font-size:1.05rem;color:var(--ink-soft);margin:0 0 26px}
.draft-banner{background:#FBEAD5;color:#8a5a12;border:1px solid #ecd2a8;border-radius:var(--radius);padding:12px 16px;font-size:.9rem;margin:22px 0 0}
@media (prefers-color-scheme: dark){.draft-banner{background:#4a3a20;color:#f2d9a8;border-color:#6b552f}}
.method-box{background:var(--lavender);border-radius:var(--radius);padding:20px 22px;margin:0 0 30px}
.method-box h2{margin:0 0 8px;font-size:1.1rem}
.method-box p{margin:0;font-size:.92rem;color:var(--ink-soft)}
.fit-map,.providers,.guide-faq{margin:0 0 30px}
.fit-map h2,.providers h2,.guide-faq h2{font-size:1.3rem;margin:0 0 12px}
.fit-map ul{padding-left:20px;margin:0}
.fit-map li{margin-bottom:10px;font-size:.95rem}
.provider{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:18px 20px;margin-bottom:16px}
.provider h3{margin:0 0 6px;font-size:1.05rem}
.provider p{margin:0 0 8px;font-size:.92rem}
.provider .meta{color:var(--ink-soft);font-size:.85rem}
.guide-faq h3{margin:18px 0 4px;font-size:.98rem}
.guide-faq p{margin:0;font-size:.92rem;color:var(--ink-soft)}
.editor-note{background:var(--lavender);border-left:4px solid var(--magenta);border-radius:0 var(--radius) var(--radius) 0;padding:12px 16px;margin:0 0 30px;font-size:.9rem;color:var(--ink-soft)}
.guide-footer{border-top:1px solid var(--line);padding-top:18px;font-size:.9rem;color:var(--ink-soft)}
.site-footer{background:var(--card);border-top:1px solid var(--line);margin-top:40px}
.site-footer .inner{max-width:820px;margin:0 auto;padding:22px 20px;font-size:.85rem;color:var(--ink-soft)}
.guide-index-list{list-style:none;padding:0;margin:0}
.guide-index-list li{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:16px 20px;margin-bottom:14px}
.guide-index-list a{font-family:'Quicksand',system-ui,sans-serif;font-weight:700;font-size:1.05rem;text-decoration:none}
.guide-index-list p{margin:6px 0 0;font-size:.88rem;color:var(--ink-soft)}
@media (max-width:600px){h1{font-size:1.5rem}}
`;

// Canonical brand one-liner — must match Organization schema `description`,
// the About page opening, and the site footer verbatim.
const BRAND_ONE_LINER =
  "Pee Dee Pet Care is a free local directory for pet services in Florence, Darlington, Hartsville, and the Pee Dee region of South Carolina.";

function renderShell({ title, description, canonicalPath, noindex, bodyHtml, jsonLd }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} | Pee Dee Pet Care</title>
<meta name="description" content="${escapeHtml(description)}">
${noindex ? '<meta name="robots" content="noindex, nofollow">' : `<link rel="canonical" href="${escapeHtml(`${CANONICAL_ORIGIN}${canonicalPath}`)}">`}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
<style>${GUIDE_CSS}</style>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ""}
</head>
<body>
<header class="site-header">
  <div class="inner">
    <a class="brand" href="/">🐾 Pee Dee Pet Care</a>
    <nav>
      <a href="/grooming">Grooming</a>
      <a href="/training">Training</a>
      <a href="/boarding">Boarding</a>
      <a href="/sitters">Sitters</a>
      <a href="/vet-care">Vet Care</a>
      <a href="/how-we-verify">How we verify</a>
    </nav>
  </div>
</header>
${bodyHtml}
<footer class="site-footer">
  <div class="inner">
    <p>${escapeHtml(BRAND_ONE_LINER)}</p>
    <p>Questions or corrections? <a href="${CONTACT_LINK}">hello@peedeepetcare.com</a> · <a href="/how-we-verify">How we verify listings</a></p>
  </div>
</footer>
</body>
</html>`;
}

function renderGuidePage(guide) {
  const lastReviewedLabel = guide.lastReviewed
    ? escapeHtml(guide.lastReviewed)
    : "draft — not yet reviewed for publication";
  const introHtml = guide.intro.map((paragraph) => `<p class="lede">${escapeHtml(paragraph)}</p>`).join("\n  ");
  const fitMapHtml = guide.fitMap
    .map((item) => `<li><b>${escapeHtml(item.situation)}</b> ${escapeHtml(item.text)}</li>`)
    .join("\n      ");
  const providersHtml = guide.providers
    .map(
      (provider) => `<article class="provider">
      <h3>${escapeHtml(provider.name)}</h3>
      <p class="meta">${escapeHtml(provider.meta)} · <a href="${escapeHtml(provider.listingHref)}">Full listing</a></p>
      <p class="facts">${escapeHtml(provider.facts)}</p>
      <p class="fit"><b>A good fit when:</b> ${escapeHtml(provider.fit)}</p>
      <p class="limits"><b>Worth knowing:</b> ${escapeHtml(provider.limits)}</p>
    </article>`,
    )
    .join("\n    ");
  const editorNotesHtml = (guide.editorNotes || [])
    .map((note) => `<p class="editor-note">${escapeHtml(note)}</p>`)
    .join("\n  ");
  const faqHtml = (guide.faq || [])
    .map((entry) => `<h3>${escapeHtml(entry.q)}</h3>\n      <p>${escapeHtml(entry.a)}</p>`)
    .join("\n      ");

  const bodyHtml = `<main class="guide guide-shell">
  ${guide.published ? "" : '<p class="draft-banner"><b>DRAFT — not published.</b> This guide has unresolved [FILL] markers and is excluded from the sitemap and guide index until Shannon supplies the missing facts.</p>'}
  <p class="eyebrow">Local guide · ${escapeHtml(guide.cityOrRegion)}</p>
  <h1>${escapeHtml(guide.title)}</h1>
  ${introHtml}
  <aside class="method-box">
    <h2>How this guide was made</h2>
    <p>
      Every provider below comes from the Pee Dee Pet Care directory, where listings are
      confirmed by phone by a real person (<a href="/how-we-verify">how we verify</a>).
      Facts here come from those calls and from each provider's listing — not from
      advertising. No business paid to appear, and inclusion is not a ranking.
      Last reviewed: ${lastReviewedLabel}.
    </p>
  </aside>
  <section class="fit-map">
    <h2>Match your situation</h2>
    <ul>
      ${fitMapHtml}
    </ul>
  </section>
  <section class="providers">
    <h2>The providers</h2>
    ${providersHtml}
  </section>
  ${editorNotesHtml}
  ${
    faqHtml
      ? `<section class="guide-faq">
    <h2>Common questions</h2>
      ${faqHtml}
  </section>`
      : ""
  }
  <p class="guide-footer">
    Something changed — a closure, new hours, a waitlist? <a href="${CONTACT_LINK}">Tell us</a> and
    we will re-verify by phone and update this guide.
  </p>
</main>`;

  return renderShell({
    title: guide.title,
    description: guide.intro[0] || guide.title,
    canonicalPath: `/guides/${guide.slug}`,
    noindex: !guide.published,
    bodyHtml,
    jsonLd: buildGuideJsonLd(guide),
  });
}

// /guides index — published guides only. Drafts never appear here.
function renderGuidesIndex() {
  const published = getPublishedGuides();
  const listHtml = published.length
    ? `<ul class="guide-index-list">
    ${published
      .map(
        (guide) => `<li><a href="/guides/${escapeHtml(guide.slug)}">${escapeHtml(guide.title)}</a>
      <p>${escapeHtml(guide.category)} · ${escapeHtml(guide.cityOrRegion)}${guide.lastReviewed ? ` · Last reviewed ${escapeHtml(guide.lastReviewed)}` : ""}</p></li>`,
      )
      .join("\n    ")}
  </ul>`
    : "<p class=\"lede\">Our local comparison guides are being researched by phone right now — check back soon.</p>";

  const bodyHtml = `<main class="guide-shell">
  <p class="eyebrow">Local guides</p>
  <h1>Pee Dee Pet Care local guides</h1>
  <p class="lede">Comparison guides built from phone-verified directory listings — no pay-to-play, no rankings, just which provider fits which situation.</p>
  ${listHtml}
  <p class="guide-footer">Every guide follows our <a href="/how-we-verify">verification policy</a>. Spot something out of date? <a href="${CONTACT_LINK}">Tell us</a>.</p>
</main>`;

  return renderShell({
    title: "Local Guides",
    description:
      "Local pet care comparison guides for Florence, Darlington, Hartsville, and the Pee Dee region — built from phone-verified listings.",
    canonicalPath: "/guides",
    noindex: getPublishedGuides().length === 0,
    bodyHtml,
    jsonLd: null,
  });
}

module.exports = {
  GUIDES,
  BRAND_ONE_LINER,
  getGuideBySlug,
  getPublishedGuides,
  getPublishedGuidesForCategory,
  getGuideSitemapEntries,
  hasUnresolvedFillMarkers,
  renderGuidePage,
  renderGuidesIndex,
};

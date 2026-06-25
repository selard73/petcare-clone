const { CANONICAL_ORIGIN, getBlogPostBySlug } = require("./blog-seo");

const SEO_CONTENT_START = "<!-- peedee-seo-content:start -->";
const SEO_CONTENT_END = "<!-- peedee-seo-content:end -->";

const GROOMING_SEO = {
  pathname: "/grooming",
  title: "Dog Groomers in Darlington & Florence SC | Peedee Pet Care",
  description:
    "Browse local dog and cat groomers in Darlington County and Florence, SC. Compare listings, read reviews, and find mobile or salon grooming in the Pee Dee region. Free directory — not a grooming salon.",
  h1: "Dog & Cat Grooming Directory — Darlington County & Florence, SC",
  intro:
    "Peedee Pet Care lists independent pet grooming businesses serving the Pee Dee region. We are an online directory — not a grooming salon, mobile groomer, or veterinary clinic. Use this page to compare local groomers in Florence, Darlington, Hartsville, and nearby communities.",
  sections: [
    {
      heading: "Grooming services you can find",
      paragraphs: [
        "Listings on Peedee Pet Care may include full-service salon grooming, bath and brush packages, nail trims, ear cleaning, de-shedding treatments, breed-specific cuts, cat grooming, and mobile grooming that comes to your home. Many Pee Dee groomers work with anxious, senior, or special-needs pets — ask about temperament and coat type before you book.",
        "Whether you need a routine maintenance groom every four to eight weeks or a one-time appointment before travel, browsing by location helps you find providers near Florence SC, Darlington County, or Hartsville.",
      ],
    },
    {
      heading: "How to choose a groomer in the Pee Dee",
      paragraphs: [
        "Start with your dog's breed, coat type, and temperament. A doodle, double-coated shepherd, and short-haired senior dog do not need the same groomer. Read our guide on The Daily Wag for questions to ask before booking, then return here to browse current listings and reviews from local pet owners.",
      ],
    },
    {
      heading: "Service area",
      paragraphs: [
        "This directory focuses on Darlington County and the Florence, South Carolina area, including Hartsville, Lamar, Society Hill, and surrounding Pee Dee communities. Each listed business sets its own hours, pricing, and service area — contact them directly for availability.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Peedee Pet Care provide grooming services?",
      a: "No. Peedee Pet Care is a free directory that lists independent local groomers. We do not groom pets ourselves.",
    },
    {
      q: "How do I find a dog groomer near Florence SC?",
      a: "Browse the grooming listings on this page, compare reviews, and contact providers directly. Listings include salon and mobile groomers serving the Pee Dee region.",
    },
    {
      q: "Is it free to use this grooming directory?",
      a: "Yes. Pet owners can search and read reviews at no charge. Businesses can list at no charge.",
    },
    {
      q: "Are mobile dog groomers listed?",
      a: "Yes. Many Pee Dee area listings include mobile grooming services that come to your home.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.akc.org/expert-advice/health/questions-ask-potential-groomers/",
      label: "AKC: questions to ask a potential groomer",
    },
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
  ],
  relatedLinks: [
    { href: "/blog/how-to-find-good-dog-groomer-pee-dee", label: "Tips for finding the right dog groomer" },
    { href: "/training", label: "Dog trainers" },
    { href: "/boarding", label: "Pet boarding" },
    { href: "/vet-care", label: "Veterinary care" },
    { href: "/", label: "Peedee Pet Care home" },
  ],
  schemaName: "Dog Groomers Directory — Darlington & Florence SC",
  schemaAbout: "Pet grooming services directory",
};

const CATEGORY_PAGES = {
  "/grooming": GROOMING_SEO,
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": `${CANONICAL_ORIGIN}/#organization`,
    name: "Peedee Pet Care",
    url: `${CANONICAL_ORIGIN}/`,
    description:
      "Peedee Pet Care is a free online directory of local pet grooming, training, boarding, daycare, sitters, and veterinary businesses in Darlington County and Florence, SC. Not a service provider.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "selard73@gmail.com",
      areaServed: "US-SC",
      availableLanguage: "English",
    },
  };
}

function getCategoryConfig(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return CATEGORY_PAGES[normalized] || null;
}

function resolveCategorySeoForPathname(pathname) {
  const config = getCategoryConfig(pathname);
  if (!config) {
    return null;
  }
  return {
    title: config.title,
    description: config.description,
    canonical: `${CANONICAL_ORIGIN}${config.pathname}`,
    ogImage: `${CANONICAL_ORIGIN}/og-image.jpg`,
    ogType: "website",
  };
}

function buildCategoryJsonLd(config) {
  const faqEntities = (config.faqs || []).map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  }));

  const graph = [
    buildOrganizationNode(),
    {
      "@type": "CollectionPage",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#collection`,
      name: config.schemaName || config.title,
      description: config.description,
      url: `${CANONICAL_ORIGIN}${config.pathname}`,
      about: config.schemaAbout,
      inLanguage: "en-US",
      isPartOf: { "@id": `${CANONICAL_ORIGIN}/#website` },
      publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#webpage`,
      url: `${CANONICAL_ORIGIN}${config.pathname}`,
      name: config.title,
      description: config.description,
      isPartOf: { "@id": `${CANONICAL_ORIGIN}${config.pathname}#collection` },
      about: { "@type": "Thing", name: config.schemaAbout },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: config.h1, item: `${CANONICAL_ORIGIN}${config.pathname}` },
      ],
    },
  ];

  if (faqEntities.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#faq`,
      mainEntity: faqEntities,
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function appendRelatedBlogExcerpt(config) {
  const groomingPost = getBlogPostBySlug("how-to-find-good-dog-groomer-pee-dee");
  if (!groomingPost) {
    return "";
  }
  const excerpt = groomingPost.excerpt || "";
  const bodyPreview = Array.isArray(groomingPost.blocks)
    ? groomingPost.blocks
        .filter((block) => block.type === "p" && block.text)
        .slice(0, 3)
        .map((block) => `<p>${escapeHtml(block.text)}</p>`)
        .join("\n  ")
    : "";
  return `<h2>From The Daily Wag</h2>
  <h3><a href="/blog/how-to-find-good-dog-groomer-pee-dee">${escapeHtml(groomingPost.title)}</a></h3>
  <p>${escapeHtml(excerpt)}</p>
  ${bodyPreview}
  <p><a href="/blog/how-to-find-good-dog-groomer-pee-dee">Read the full grooming guide</a></p>`;
}

function buildCategorySeoContentHtml(config) {
  const sections = (config.sections || [])
    .map(
      (section) =>
        `<h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}`,
    )
    .join("\n  ");
  const faqs = (config.faqs || [])
    .map((faq) => `<p><strong>${escapeHtml(faq.q)}</strong> ${escapeHtml(faq.a)}</p>`)
    .join("\n  ");
  const external = (config.externalLinks || [])
    .map((link) => `<a href="${escapeHtml(link.href)}" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join(", ");
  const related = (config.relatedLinks || [])
    .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
    .join(", ");

  return `<div id="seo-content" class="seo-content">
  <h1>${escapeHtml(config.h1)}</h1>
  <p>${escapeHtml(config.intro)}</p>
  ${sections}
  ${appendRelatedBlogExcerpt(config)}
  <h2>Frequently asked questions</h2>
  ${faqs}
  <h2>Trusted grooming resources</h2>
  <p>${external}.</p>
  <h2>Related pages</h2>
  <p>${related}.</p>
</div>`;
}

function replaceSeoContentBlock(html, seoContentHtml) {
  const pattern = new RegExp(
    `${SEO_CONTENT_START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${SEO_CONTENT_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
  );
  return html.replace(
    pattern,
    `${SEO_CONTENT_START}\n    ${seoContentHtml}\n    ${SEO_CONTENT_END}`,
  );
}

function replaceJsonLd(html, jsonLd) {
  return html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  );
}

function injectCategoryEnhancements(html, pathname) {
  const config = getCategoryConfig(pathname);
  if (!config) {
    return html;
  }
  let result = html;
  result = replaceSeoContentBlock(result, buildCategorySeoContentHtml(config));
  result = replaceJsonLd(result, buildCategoryJsonLd(config));
  return result;
}

module.exports = {
  resolveCategorySeoForPathname,
  injectCategoryEnhancements,
  getCategoryConfig,
};

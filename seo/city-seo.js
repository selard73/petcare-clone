const { CANONICAL_ORIGIN, buildOrganizationNode, buildWebSiteNode } = require("./blog-seo");
const { getCategoryConfig, buildCategoryGuideHtml } = require("./category-seo");
const { getListingsForPathname } = require("./listings-loader");
const { buildProviderItemList } = require("./provider-schema");

const SEO_CONTENT_START = "<!-- peedee-seo-content:start -->";
const SEO_CONTENT_END = "<!-- peedee-seo-content:end -->";

const CITY_SLUGS = {
  florence: "Florence",
  darlington: "Darlington",
  hartsville: "Hartsville",
};

const CITY_CATEGORY_PATHS = ["/grooming", "/training", "/boarding", "/sitters", "/vet-care"];

const CITY_LABELS = {
  "/grooming": {
    singular: "dog groomer",
    plural: "dog groomers",
    directory: "Dog Groomers",
    service: "dog grooming",
    providerLabel: "Grooming",
  },
  "/training": {
    singular: "dog trainer",
    plural: "dog trainers",
    directory: "Dog Trainers",
    service: "dog training",
    providerLabel: "Training",
  },
  "/boarding": {
    singular: "pet boarding facility",
    plural: "pet boarding facilities",
    directory: "Pet Boarding",
    service: "pet boarding",
    providerLabel: "Boarding",
  },
  "/sitters": {
    singular: "pet sitter",
    plural: "pet sitters and dog walkers",
    directory: "Pet Sitters",
    service: "pet sitting",
    providerLabel: "Pet Sitting",
  },
  "/vet-care": {
    singular: "veterinarian",
    plural: "veterinarians",
    directory: "Veterinarians",
    service: "veterinary care",
    providerLabel: "Veterinary",
  },
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseCityPath(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const parts = normalized.split("/").filter(Boolean);
  if (parts.length !== 2) {
    return null;
  }
  const categoryPath = `/${parts[0]}`;
  const citySlug = parts[1].toLowerCase();
  const cityName = CITY_SLUGS[citySlug];
  if (!cityName || !CITY_CATEGORY_PATHS.includes(categoryPath) || !getCategoryConfig(categoryPath)) {
    return null;
  }
  return {
    pathname: normalized,
    categoryPath,
    citySlug,
    cityName,
    labels: CITY_LABELS[categoryPath],
  };
}

function isCityCategoryPath(pathname) {
  return Boolean(parseCityPath(pathname));
}

function buildCityTitle(parsed) {
  return `${parsed.labels.directory} in ${parsed.cityName}, SC — Compare Local ${parsed.labels.providerLabel} Providers`;
}

function buildCityDescription(parsed) {
  return `Find ${parsed.labels.plural} in ${parsed.cityName}, SC. Compare local ${parsed.labels.service} providers, reviews, service areas, and contact details in one free Pee Dee Pet Care directory.`;
}

function resolveCitySeoForPathname(pathname) {
  const parsed = parseCityPath(pathname);
  if (!parsed) {
    return null;
  }
  return {
    title: buildCityTitle(parsed),
    description: buildCityDescription(parsed),
    canonical: `${CANONICAL_ORIGIN}${parsed.pathname}`,
    ogImage: `${CANONICAL_ORIGIN}/share-card.jpg`,
    ogType: "website",
  };
}

function buildListingsSectionHtml(listings, parsed) {
  if (!listings.length) {
    return `<h2>Local ${escapeHtml(parsed.labels.plural)} in ${escapeHtml(parsed.cityName)}</h2>
  <p>Pee Dee Pet Care lists independent ${escapeHtml(parsed.labels.plural)} serving ${escapeHtml(parsed.cityName)} and the Pee Dee region. Browse the full <a href="${escapeHtml(parsed.categoryPath)}">${escapeHtml(parsed.labels.directory.toLowerCase())} directory</a> for more listings.</p>`;
  }
  const items = listings
    .map((listing) => {
      const cityWithZip = listing.city ? `${listing.city}${listing.zipCode ? `, SC ${listing.zipCode}` : ""}` : "";
      const location = [cityWithZip, listing.address].filter(Boolean).join(" — ");
      const phone = listing.phone ? ` Phone: ${listing.phone}.` : "";
      const desc = listing.description ? ` ${listing.description}` : "";
      return `<li><strong>${escapeHtml(listing.name)}</strong>${location ? ` — ${escapeHtml(location)}` : ""}.${desc}${phone}</li>`;
    })
    .join("\n    ");
  return `<h2>Local ${escapeHtml(parsed.labels.plural)} in ${escapeHtml(parsed.cityName)}</h2>
  <p>Examples of independent businesses listed on Pee Dee Pet Care in ${escapeHtml(parsed.cityName)}. We are a directory — contact providers directly for hours and availability.</p>
  <ul>
    ${items}
  </ul>
  <p><a href="${escapeHtml(parsed.categoryPath)}">Browse all ${escapeHtml(parsed.labels.plural)} in the Pee Dee region</a></p>`;
}

function buildCitySeoContentHtml(parsed, listings) {
  const base = getCategoryConfig(parsed.categoryPath);
  const providerNames = listings.slice(0, 6).map((listing) => escapeHtml(listing.name));
  const intro = providerNames.length
    ? `Looking for ${parsed.labels.service} in ${parsed.cityName}, SC? Compare local ${parsed.labels.service} providers such as ${providerNames.join(", ")}, and other nearby options. Pee Dee Pet Care is a free directory only and does not provide ${parsed.labels.service} services directly.`
    : `Pee Dee Pet Care is a free online directory of local ${parsed.labels.plural} in ${parsed.cityName}, South Carolina. We do not provide ${parsed.labels.singular} services ourselves — we help pet owners compare independent local listings and read reviews.`;
  return `<div id="seo-content" class="seo-content">
  <h1>${escapeHtml(parsed.labels.directory)} in ${escapeHtml(parsed.cityName)}, SC</h1>
  <p>${intro}</p>
  <p>${escapeHtml(base.intro)}</p>
  ${buildListingsSectionHtml(listings, parsed)}
  ${base ? buildCategoryGuideHtml(base) : ""}
  <h2>Nearby Pee Dee communities</h2>
  <p>
    Also browse ${escapeHtml(parsed.labels.plural)} in
    ${Object.entries(CITY_SLUGS)
      .filter(([slug]) => slug !== parsed.citySlug)
      .map(([slug, name]) => `<a href="${escapeHtml(parsed.categoryPath)}/${slug}">${escapeHtml(name)}</a>`)
      .join(", ")}.
  </p>
  <h2>Related pages</h2>
  <p>
    <a href="${escapeHtml(parsed.categoryPath)}">All ${escapeHtml(parsed.labels.plural)}</a>,
    <a href="/">Pee Dee Pet Care home</a>,
    <a href="/blog">The Daily Wag</a>.
  </p>
</div>`;
}

function buildCityJsonLd(parsed, listings) {
  const graph = [
    buildOrganizationNode(),
    buildWebSiteNode(),
    {
      "@type": "CollectionPage",
      "@id": `${CANONICAL_ORIGIN}${parsed.pathname}#collection`,
      name: `${parsed.labels.directory} in ${parsed.cityName}, SC`,
      description: buildCityDescription(parsed),
      url: `${CANONICAL_ORIGIN}${parsed.pathname}`,
      about: `${parsed.labels.directory} directory in ${parsed.cityName}, SC`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${CANONICAL_ORIGIN}/#website` },
      publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_ORIGIN}${parsed.pathname}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: getCategoryConfig(parsed.categoryPath).h1,
          item: `${CANONICAL_ORIGIN}${parsed.categoryPath}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${parsed.labels.directory} in ${parsed.cityName}`,
          item: `${CANONICAL_ORIGIN}${parsed.pathname}`,
        },
      ],
    },
  ];

  const providerItemList = buildProviderItemList(listings, {
    id: `${CANONICAL_ORIGIN}${parsed.pathname}#listings`,
    name: `${parsed.labels.directory} in ${parsed.cityName}, SC`,
  });
  if (providerItemList) {
    graph.push(providerItemList);
  }

  return { "@context": "https://schema.org", "@graph": graph };
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

function injectCityEnhancements(html, pathname, listings = null) {
  const parsed = parseCityPath(pathname);
  if (!parsed) {
    return html;
  }
  const resolvedListings = listings || getListingsForPathname(pathname);
  let result = html;
  result = replaceSeoContentBlock(result, buildCitySeoContentHtml(parsed, resolvedListings));
  result = replaceJsonLd(result, buildCityJsonLd(parsed, resolvedListings));
  return result;
}

function getCitySitemapEntries() {
  const entries = [];
  for (const categoryPath of CITY_CATEGORY_PATHS) {
    for (const citySlug of Object.keys(CITY_SLUGS)) {
      entries.push({
        loc: `${categoryPath}/${citySlug}`,
        changefreq: "weekly",
        priority: "0.7",
      });
    }
  }
  return entries;
}

module.exports = {
  CITY_SLUGS,
  CITY_CATEGORY_PATHS,
  parseCityPath,
  isCityCategoryPath,
  resolveCitySeoForPathname,
  injectCityEnhancements,
  getCitySitemapEntries,
};

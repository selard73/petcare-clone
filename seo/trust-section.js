// Homepage trust section ("A directory you can check up on").
// Content ported from homepage-trust-section.html. The listing count is always
// computed from listing records at render time — never hardcoded — and the
// "Recently verified" strip renders only when at least one listing has a
// lastVerified date.
const { loadAllListings, PATH_TO_LISTING_CATEGORY, normalizeCity } = require("./listings-loader");

// Same contact mechanism as CURSOR-BRIEF.md task 2: the site has no contact
// form route; mailto is the site's contact mechanism.
const CONTACT_LINK = "mailto:hello@peedeepetcare.com";

const CATEGORY_TO_PATH = Object.fromEntries(
  Object.entries(PATH_TO_LISTING_CATEGORY).map(([path, category]) => [category, path]),
);

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// "2026-05" -> "May 2026"
function formatVerifiedMonth(yyyyMm) {
  const match = /^(\d{4})-(\d{2})$/.exec(yyyyMm || "");
  if (!match) {
    return null;
  }
  const monthIndex = Number(match[2]) - 1;
  if (monthIndex < 0 || monthIndex > 11) {
    return null;
  }
  return `${MONTH_NAMES[monthIndex]} ${match[1]}`;
}

function buildListingHref(listing) {
  const base = CATEGORY_TO_PATH[listing.category] || "/";
  const citySlug = normalizeCity(listing.city);
  return citySlug ? `${base}/${citySlug}` : base;
}

function getTrustStats() {
  const listings = loadAllListings();
  const recentlyVerified = listings
    .filter((listing) => listing.lastVerified && formatVerifiedMonth(listing.lastVerified))
    .sort((a, b) => (a.lastVerified < b.lastVerified ? 1 : a.lastVerified > b.lastVerified ? -1 : 0))
    .slice(0, 5)
    .map((listing) => ({
      name: listing.name,
      lastVerified: listing.lastVerified,
      label: formatVerifiedMonth(listing.lastVerified),
      href: buildListingHref(listing),
    }));
  return { listingCount: listings.length, recentlyVerified };
}

// Crawlable version of the trust section for the homepage seo-content block.
// Copy is ported verbatim from homepage-trust-section.html; only the tokens
// are resolved.
function buildTrustSectionHtml(stats = getTrustStats()) {
  const recentlyVerifiedHtml = stats.recentlyVerified.length
    ? `<div class="recently-verified">
    <b>Recently verified:</b>
    <ul>
      ${stats.recentlyVerified
        .map(
          (entry) =>
            `<li><a href="${escapeHtml(entry.href)}">${escapeHtml(entry.name)} · ${escapeHtml(entry.label)}</a></li>`,
        )
        .join("\n      ")}
    </ul>
  </div>`
    : "";
  return `<section class="trust-section" aria-labelledby="trust-heading-seo">
  <h2 id="trust-heading-seo">A directory you can check up on</h2>
  <p>
    Pee Dee Pet Care is a free local directory for pet services in Florence, Darlington, Hartsville,
    and the Pee Dee region of South Carolina. Every listing is checked by phone by a real person —
    here is the proof, in the open.
  </p>
  <ul>
    <li><strong>${stats.listingCount}</strong> local providers listed</li>
    <li><strong>3+</strong> towns across the Pee Dee</li>
    <li><strong>$0</strong> to be listed or verified</li>
  </ul>
  <h3>Verified by phone</h3>
  <p>We call each business and confirm it is open, reachable, and offering the services shown. <a href="/how-we-verify">How we verify</a>.</p>
  <h3>Dated, not stale</h3>
  <p>Listings display the month they were last verified, so you can judge freshness yourself.</p>
  <h3>Never pay-to-play</h3>
  <p>Verification cannot be bought, and payment never affects how a business appears in results.</p>
  ${recentlyVerifiedHtml}
  <p>Spotted something out of date? <a href="${CONTACT_LINK}">Tell us</a> and we will re-check it by phone.</p>
</section>`;
}

function isHomepagePath(pathname) {
  const normalized = (pathname || "/").replace(/\/+$/, "") || "/";
  return normalized === "/" || normalized === "/index.html";
}

function injectHomeTrustEnhancements(html, pathname) {
  if (!isHomepagePath(pathname)) {
    return html;
  }
  const stats = getTrustStats();
  let result = html;
  const seoContentEnd = "<!-- peedee-seo-content:end -->";
  if (result.includes(seoContentEnd)) {
    result = result.replace(seoContentEnd, `${buildTrustSectionHtml(stats)}\n    ${seoContentEnd}`);
  }
  // Hand the SPA the same server-computed stats so the visible section renders
  // without a second request and always matches the crawlable copy.
  const statsJson = JSON.stringify(stats).replace(/</g, "\\u003c");
  result = result.replace("</head>", `<script>window.__PDPC_TRUST__=${statsJson};</script>\n</head>`);
  return result;
}

module.exports = {
  getTrustStats,
  buildTrustSectionHtml,
  injectHomeTrustEnhancements,
};

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SQLITE_DB_FILE = path.join(ROOT, "data", "petcare.db");
const AIRTABLE_JSON_FILE = path.join(ROOT, "data", "airtable.json");
const FALLBACK_FILE = path.join(__dirname, "data", "crawl-listings.json");

const PATH_TO_LISTING_CATEGORY = {
  "/grooming": "grooming",
  "/training": "training",
  "/boarding": "boarding",
  "/sitters": "sitters",
  "/vet-care": "vet",
};

const CAPACITY_STATUSES = ["accepting", "waitlist", "full"];

// Optional tri-state proof booleans on every listing record.
// Populate from verification-call notes only. null means "not stated", never "no".
const PROOF_BOOLEAN_FIELDS = [
  "emergencyAvailability",
  "catFriendly",
  "largeDogFriendly",
  "anxiousPetFriendly",
  "mobileService",
  "weekendHours",
  "pricingPublished",
];

// Verification fields. lastVerified is set from Shannon's phone-call notes only.
// Never backfill programmatically. A listing without lastVerified renders no
// Verified badge anywhere.
function normalizeVerificationFields(source = {}) {
  const proof = {};
  for (const field of PROOF_BOOLEAN_FIELDS) {
    proof[field] = typeof source[field] === "boolean" ? source[field] : null;
  }
  return {
    // "YYYY-MM" month of the last verification phone call, or null.
    lastVerified:
      typeof source.lastVerified === "string" && /^\d{4}-\d{2}$/.test(source.lastVerified)
        ? source.lastVerified
        : null,
    // Owner has confirmed their own details with us.
    claimed: source.claimed === true,
    // "accepting" | "waitlist" | "full" — only when shared on a call; else null.
    capacityStatus: CAPACITY_STATUSES.includes(source.capacityStatus) ? source.capacityStatus : null,
    // Populate from verification-call notes only. null means "not stated", never "no".
    ...proof,
    // Business website URL, when the business has one on record.
    website:
      typeof source.website === "string" && source.website.trim() ? source.website.trim() : null,
    // Plain-text review mention with a named source (e.g. "98% recommend, 66+
    // reviews (listing)"). Entered manually — never scraped or aggregated.
    reviewSignal:
      typeof source.reviewSignal === "string" && source.reviewSignal.trim()
        ? source.reviewSignal.trim()
        : null,
    // One sentence: why this listing is included in the directory.
    editorialNote:
      typeof source.editorialNote === "string" && source.editorialNote.trim()
        ? source.editorialNote.trim()
        : null,
  };
}

let fallbackListings = [];
try {
  fallbackListings = (JSON.parse(fs.readFileSync(FALLBACK_FILE, "utf8")).listings || []).map(
    (listing) => ({ ...listing, ...normalizeVerificationFields(listing) }),
  );
} catch {
  fallbackListings = [];
}

function normalizeCity(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function parseBusinessFromFields(fields) {
  const price = String(fields.price || "");
  if (!price.startsWith("BUSINESS:") || price === "BUSINESS:DELETED") {
    return null;
  }
  let about = {};
  try {
    about = JSON.parse(fields.about || "{}");
  } catch {
    about = {};
  }
  const category = price.replace(/^BUSINESS:/, "");
  const name = about.name || fields.name || "";
  if (!name) {
    return null;
  }
  return {
    id: about.id || fields.whyWeLoveIt || fields.name || name,
    name,
    category,
    city: about.city || "",
    description: about.description || "",
    address: about.address || "",
    phone: about.phone || "",
    zipCode: about.zipCode || "",
    priceRange: about.priceRange || "",
    // Hours map keyed by weekday name (e.g. { monday: "7:30 AM - 5:30 PM" }).
    // Omitted when the business asked users to call for hours.
    hours: !about.callForHours && about.hours && typeof about.hours === "object" ? about.hours : null,
    ...normalizeVerificationFields(about),
  };
}

function loadListingsFromSqlite() {
  try {
    const { DatabaseSync } = require("node:sqlite");
    if (!fs.existsSync(SQLITE_DB_FILE)) {
      return [];
    }
    const db = new DatabaseSync(SQLITE_DB_FILE);
    const rows = db.prepare("SELECT fields_json FROM airtable_records").all();
    return rows
      .map((row) => {
        try {
          return parseBusinessFromFields(JSON.parse(row.fields_json || "{}"));
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function loadListingsFromJsonDb() {
  try {
    if (!fs.existsSync(AIRTABLE_JSON_FILE)) {
      return [];
    }
    const db = JSON.parse(fs.readFileSync(AIRTABLE_JSON_FILE, "utf8"));
    return (db.records || [])
      .map((record) => parseBusinessFromFields(record.fields || {}))
      .filter(Boolean);
  } catch {
    return [];
  }
}

function mergeListings(primary, secondary) {
  const seen = new Set();
  const merged = [];
  for (const listing of [...primary, ...secondary]) {
    const key = `${listing.category}:${listing.id || listing.name}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    merged.push(listing);
  }
  return merged;
}

function loadAllListings() {
  const sqliteListings = loadListingsFromSqlite();
  const jsonListings = loadListingsFromJsonDb();
  const cloudOrLocal = sqliteListings.length ? sqliteListings : jsonListings;
  return mergeListings(cloudOrLocal, fallbackListings);
}

function getListingCategoryForPath(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const parts = normalized.split("/").filter(Boolean);
  const categoryPath = parts.length >= 2 ? `/${parts[0]}` : normalized;
  return PATH_TO_LISTING_CATEGORY[categoryPath] || null;
}

function getListingsByCategory(category, { citySlug, limit = 40 } = {}) {
  if (!category) {
    return [];
  }
  let listings = loadAllListings().filter((listing) => listing.category === category);
  if (citySlug) {
    listings = listings.filter((listing) => normalizeCity(listing.city) === normalizeCity(citySlug));
  }
  return listings.slice(0, limit);
}

function getListingsForPathname(pathname, options = {}) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const parts = normalized.split("/").filter(Boolean);
  const category = getListingCategoryForPath(normalized);
  if (!category) {
    return [];
  }
  const citySlug = parts.length >= 2 ? parts[1] : options.citySlug;
  return getListingsByCategory(category, { citySlug, limit: options.limit });
}

module.exports = {
  PROOF_BOOLEAN_FIELDS,
  PATH_TO_LISTING_CATEGORY,
  normalizeCity,
  getListingCategoryForPath,
  getListingsByCategory,
  getListingsForPathname,
  loadAllListings,
};

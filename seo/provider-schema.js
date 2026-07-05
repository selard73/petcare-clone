// Maps a provider listing record to a schema.org node, emitting only fields
// that actually exist in the data (no fabricated hours, geo, ratings, etc.).
// Listings have no individual pages, so nodes are embedded in category/city
// page ItemLists rather than on standalone provider URLs.

const PROVIDER_SCHEMA_TYPES = {
  vet: "VeterinaryCare",
};

const SCHEMA_DAYS = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

function to24Hour(value) {
  const match = String(value).match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    return null;
  }
  let hour = Number(match[1]) % 12;
  if (/pm/i.test(match[3])) {
    hour += 12;
  }
  return `${String(hour).padStart(2, "0")}:${match[2]}`;
}

// Converts the stored hours map (e.g. { monday: "7:30 AM - 5:30 PM" }) into
// OpeningHoursSpecification nodes, grouping days that share the same hours.
// Unparseable values ("Closed", "Emergency Only", etc.) are skipped rather
// than guessed, except "Open 24 Hours" which maps to a full-day span.
function buildOpeningHours(hours) {
  const groups = new Map();
  for (const [day, rawValue] of Object.entries(hours || {})) {
    const dayOfWeek = SCHEMA_DAYS[String(day).toLowerCase()];
    const value = String(rawValue || "").trim();
    if (!dayOfWeek || !value || /closed/i.test(value)) {
      continue;
    }
    let opens;
    let closes;
    if (/open\s*24\s*hours/i.test(value)) {
      opens = "00:00";
      closes = "23:59";
    } else {
      const parts = value.split(/\s*[-–]\s*/);
      opens = parts.length === 2 ? to24Hour(parts[0]) : null;
      closes = parts.length === 2 ? to24Hour(parts[1]) : null;
    }
    if (!opens || !closes) {
      continue;
    }
    const key = `${opens}|${closes}`;
    if (!groups.has(key)) {
      groups.set(key, { "@type": "OpeningHoursSpecification", dayOfWeek: [], opens, closes });
    }
    groups.get(key).dayOfWeek.push(dayOfWeek);
  }
  return [...groups.values()];
}

function buildProviderNode(listing) {
  const node = {
    "@type": PROVIDER_SCHEMA_TYPES[listing.category] || "LocalBusiness",
    name: listing.name,
  };
  if (listing.description) {
    node.description = listing.description;
  }
  if (listing.phone) {
    node.telephone = listing.phone;
  }
  if (listing.city || listing.address) {
    node.address = {
      "@type": "PostalAddress",
      ...(listing.address ? { streetAddress: listing.address } : {}),
      ...(listing.city ? { addressLocality: listing.city } : {}),
      addressRegion: "SC",
      ...(listing.zipCode ? { postalCode: listing.zipCode } : {}),
      addressCountry: "US",
    };
  }
  if (listing.priceRange) {
    node.priceRange = listing.priceRange;
  }
  if (listing.hours) {
    const openingHours = buildOpeningHours(listing.hours);
    if (openingHours.length) {
      node.openingHoursSpecification = openingHours;
    }
  }
  if (listing.city) {
    node.areaServed = { "@type": "City", name: listing.city };
  }
  return node;
}

function buildProviderItemList(listings, { id, name }) {
  if (!listings.length) {
    return null;
  }
  return {
    "@type": "ItemList",
    "@id": id,
    name,
    numberOfItems: listings.length,
    itemListElement: listings.map((listing, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: buildProviderNode(listing),
    })),
  };
}

module.exports = {
  buildProviderNode,
  buildProviderItemList,
};

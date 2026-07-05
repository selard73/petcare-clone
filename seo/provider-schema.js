// Maps a provider listing record to a schema.org node, emitting only fields
// that actually exist in the data (no fabricated hours, geo, ratings, etc.).
// Listings have no individual pages, so nodes are embedded in category/city
// page ItemLists rather than on standalone provider URLs.

const PROVIDER_SCHEMA_TYPES = {
  vet: "VeterinaryCare",
};

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
      addressCountry: "US",
    };
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

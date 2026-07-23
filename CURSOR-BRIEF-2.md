# Implementation brief 2: proof fields, local guides, entity identity, homepage trust layer

You are working in the peedeepetcare.com codebase. This brief extends
CURSOR-BRIEF.md (the /how-we-verify page, badges, and `lastVerified` /
`claimed` / `capacityStatus` fields). **If that brief has not been executed
yet, execute it first.** Reference files for this brief:
`homepage-trust-section.html`, `guide-template.html`,
`guide-groomers-florence-DRAFT.md`.

## Ground rules (unchanged, plus two)

1. Never fabricate data. Every new field defaults to null/false. Populated
   values come only from Shannon's phone-call notes or existing listing
   records.
2. **No "licensed," "insured," or "background-checked" badges anywhere.**
   The directory does not currently perform those checks, so displaying
   them would be a false trust claim. Do not add the fields or the UI.
3. **No review scraping or automated review aggregation** from Google, Yelp,
   or Facebook. Review/rating mentions are plain-text fields with a named
   source, entered manually.
4. Guides with unresolved `[FILL]` markers must not be published.

## Task 1 — Provider proof fields

Extend the listing record schema with optional fields (all default null):

```
website: string | null
emergencyAvailability: boolean | null
catFriendly: boolean | null
largeDogFriendly: boolean | null
anxiousPetFriendly: boolean | null
mobileService: boolean | null
weekendHours: boolean | null
pricingPublished: boolean | null
reviewSignal: string | null      // e.g. "98% recommend, 66+ reviews (listing)"
editorialNote: string | null     // one sentence: why this listing is included
```

Comment at the definition site:
`// Populate from verification-call notes only. null means "not stated", never "no".`

## Task 2 — Render proof fields

- On listing detail views (and cards where space allows), render set boolean
  fields as small attribute chips using the pill styles from
  `verification-components.html` (neutral color, no ranking implication):
  "Cats", "Large dogs OK", "Anxious pets", "Mobile", "Weekend hours",
  "Emergency availability", "Pricing published". Null renders nothing.
- Render `editorialNote` as a one-line "Why it's listed:" on detail views.
- Render `reviewSignal` as plain text with its source, never as stars.
- Add each set boolean to the listing's LocalBusiness JSON-LD as an
  `additionalProperty` PropertyValue (e.g. name "Cat-friendly", value true).
  Add `url` from `website` to the LocalBusiness schema where set.

## Task 3 — Local guides system

- Create a `/guides/` section using the site's layout system, with
  `guide-template.html` as the page structure (methodology box, situation-fit
  map, alphabetical provider blocks, FAQ, ItemList + Article JSON-LD).
- Build `/guides/dog-groomers-florence` from
  `guide-groomers-florence-DRAFT.md`, pulling any missing listing facts
  (Fur Real Doggie Spa's phone and services) from the listing records if
  present there. Leave remaining `[FILL]` markers intact and keep the page
  **unpublished/draft** in whatever mechanism the codebase uses. Surface a
  clear note in your final report: "groomers-florence guide awaits Shannon's
  [FILL] answers."
- Scaffold five more guides as unpublished stubs with title, URL, intro
  placeholder, and provider list drawn only from existing listing records:
  1. /guides/dog-boarding-florence — Best-fit dog boarding in Florence, SC
  2. /guides/cat-groomers-pee-dee — Cat grooming in the Pee Dee region
  3. /guides/dog-trainers-florence — Dog trainers in Florence, SC
  4. /guides/emergency-vet-care-pee-dee — Emergency vet care in the Pee Dee
  5. /guides/rover-vs-local-sitters — Rover vs. local Florence pet sitters:
     what to compare (criteria-only comparison; make no negative claims
     about Rover — frame as "questions to ask on any platform" plus what
     local, phone-verified listings provide)
- Interlink: each guide links /how-we-verify and each provider's listing;
  each relevant category/city page links its guide ("Local guide: …").
- Add published guides to the sitemap; keep drafts out of it.

## Task 4 — Entity identity cleanup

1. **Normalize the brand string.** Search the codebase for "Peedee Pet Care"
   (one word) in titles, meta tags, schema, and visible copy, and replace
   with "Pee Dee Pet Care" (three words) everywhere. Report the count.
2. Canonical one-liner, used verbatim in Organization schema `description`,
   the About page opening, and the footer:
   "Pee Dee Pet Care is a free local directory for pet services in Florence,
   Darlington, Hartsville, and the Pee Dee region of South Carolina."
3. Add `sameAs` to the sitewide Organization schema:
   `["https://www.facebook.com/peedeepetcare", "{{YOUTUBE_URL}}"]` — resolve
   `{{YOUTUBE_URL}}` from the codebase or site content if the channel URL
   appears anywhere; otherwise leave the token and flag it in your report.
4. Add one disambiguation line to the About page, after the opening:
   "Pee Dee Pet Care is an independent directory and is not affiliated with
   other Pee Dee–named organizations, such as cremation services, animal
   hospitals, or senior-living providers."

## Task 5 — Homepage trust section

- Insert `homepage-trust-section.html` on the homepage between the hero and
  the category browsing area, mapped to the site's design system.
- `{{LISTING_COUNT}}` must be computed from listing records at build/render
  time — never hardcoded.
- The "Recently verified" strip renders only when at least one listing has
  `lastVerified` set: the 5 most recent, "Business Name · Mon YYYY", each
  linking to its listing. With no dates yet, the strip is fully omitted.
- Resolve `{{CONTACT_LINK}}` the same way as in CURSOR-BRIEF.md.

## Task 6 — Optional, only if straightforward in this stack

If the category/city pages already have client-side rendering of listing
arrays, add simple attribute filters (cats, mobile, weekend hours, emergency,
accepting new clients) driven by the Task 1 fields. If this requires
significant new architecture, skip it and say so in the report.

## Task 7 — QA before finishing

- Grep rendered output: no attribute chip, review text, or editorial note
  appears for any listing (all fields are null until Shannon enters data).
- No occurrence of "licensed", "insured", or "background check" was added.
- "Peedee Pet Care" (one word) no longer appears anywhere.
- Draft guides are excluded from the sitemap and nav; /guides index (if
  created) shows only published guides.
- Homepage renders with the trust section in light and dark schemes, mobile
  included; listing count matches the actual number of listing records.
- JSON-LD across changed pages parses as valid JSON.
- Run the site's build/tests; fix anything this work broke.
- Report: files changed, brand-string replacement count, unresolved tokens,
  and every [FILL] awaiting Shannon.

## The human inputs (collect once, from Shannon)

1. Answers to the [FILL] markers in guide-groomers-florence-DRAFT.md.
2. Proof-field values per listing, from her call notes, entered as she goes
   (same bulk-edit flow as lastVerified).
3. The YouTube channel URL if the agent could not find it.

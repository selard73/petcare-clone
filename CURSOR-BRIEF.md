# Implementation brief: "How We Verify" page + verification badges

You are working in the peedeepetcare.com codebase. Two reference files accompany
this brief: `how-we-verify.html` (the page: copy, structure, JSON-LD) and
`verification-components.html` (badge/pill/CTA components). Integrate them into
this codebase's existing framework, components, and design system. The reference
files define content and behavior; the site's own layout system defines
implementation.

## Ground rules (do not violate)

1. **Never fabricate verification dates.** Scaffold `lastVerified` as empty.
   A listing with no `lastVerified` renders no Verified badge — anywhere.
2. **Copy is final.** Port the page text exactly as written, including the FAQ.
   The visible FAQ text and the FAQPage JSON-LD answers must match verbatim.
3. **The Verified badge always shows its date and always links to
   `/how-we-verify`.** No undated badges, no dead badges.
4. Do not add pricing, "premium," or booking language anywhere. The site
   currently states listing is free; nothing in this work may contradict that.

## Task 1 — Create the route `/how-we-verify`

- Build the page inside the site's existing page/layout system (shared header,
  nav, footer — replace the standalone header/footer in the reference file).
- Reproduce all sections in order: hero + call card, what a call confirms,
  freshness, what Verified is not, Verified vs Claimed, FAQ, owner CTA,
  machine-readable note.
- Map the reference file's CSS variables onto the site's existing design tokens
  (fonts are Quicksand/Poppins; keep the cream/lavender/magenta palette).
  Preserve: light+dark scheme support, reduced-motion handling, focus-visible
  outlines, mobile layout.
- Set title/meta/canonical/OG exactly as in the reference file's `<head>`.
- Embed the JSON-LD `@graph` (WebPage + BreadcrumbList + FAQPage) from the
  reference file as one script tag on this route only.

## Task 2 — Resolve `{{CONTACT_LINK}}`

The reference files contain the token `{{CONTACT_LINK}}` (3 uses). Find the
site's real contact mechanism in this codebase (contact form route, mailto, or
the review/contact page — whichever exists) and replace every token with it.
If multiple exist, prefer a contact form over mailto.

## Task 3 — Listing data model

Add three optional fields to the listing record schema (wherever listings are
defined — JSON, TS objects, CMS, or DB):

```
lastVerified: string | null   // "YYYY-MM", e.g. "2026-06". Default null.
claimed: boolean              // default false
capacityStatus: "accepting" | "waitlist" | "full" | null   // default null
```

Scaffold all existing listings with `lastVerified: null`, `claimed: false`,
`capacityStatus: null`. Add a code comment at the definition site:
`// lastVerified is set from Shannon's phone-call notes only. Never backfill programmatically.`

## Task 4 — Render badges on listing cards and listing detail views

Using the components in `verification-components.html`, adapted to the site's
component system:

- `lastVerified` set → Verified badge with `· Mon YYYY` date, linking to
  `/how-we-verify`. Null → nothing.
- `claimed: true` → Claimed badge next to Verified, linking to
  `/how-we-verify#verified-vs-claimed`.
- `capacityStatus` set → the matching pill. Null → nothing.
- Badges must not affect sort order or ranking anywhere.
- Keep the existing call/phone action as the primary CTA. Do **not** build the
  "Request appointment" button now; the component exists for later.

## Task 5 — Structured data updates

1. **Sitewide Organization schema:** add
   `"publishingPrinciples": "https://www.peedeepetcare.com/how-we-verify"`.
2. **Per-listing LocalBusiness schema** (only where `lastVerified` is set), add:

```json
"additionalProperty": {
  "@type": "PropertyValue",
  "name": "Last verified by phone",
  "value": "2026-06"
}
```

3. On city/category pages, set the page-level `dateModified` from the most
   recent `lastVerified` among listings on that page, where the page schema
   supports it.
4. Add `/how-we-verify` to the sitemap and to the site footer nav as
   "How we verify". On the homepage, link the existing phrase "Verified local
   providers" to `/how-we-verify`.

## Task 6 — QA before finishing

- `/how-we-verify` renders correctly: mobile width, light and dark scheme,
  keyboard focus visible, FAQ accordions work without JS errors.
- JSON-LD on the page parses as valid JSON and the FAQ answers match the
  visible text exactly.
- No listing shows a Verified badge (search the rendered output to confirm),
  since all `lastVerified` values are null until real dates are entered.
- Sitemap includes the new route; footer link works; no console errors.
- Run the site's existing build/tests and fix anything this work broke.

## The one human input

After this is merged, Shannon pastes real `lastVerified` months per listing
from her call notes (bulk edit of the data file is fine). Badges appear
automatically as dates are added. That is the only manual step.

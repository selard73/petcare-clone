# Pee Dee Pet Care — Agent Instructions

## Repository overview

This is the **Pee Dee Pet Care** website: a local pet services directory for Darlington County and Florence, SC.
All blog content lives in `public/blog/posts.json`.
The blog is called **The Daily Wag** and is rendered client-side by a React component.

---

## Adding a new blog post

### 1. Edit `public/blog/posts.json`

Add a new object to the top of the `posts` array (most-recent-first ordering).
Use the **`blocks` format** for every new post — never use the legacy `body` array format for new posts.

### 2. Required post fields

```json
{
  "slug": "kebab-case-unique-slug",
  "title": "Full article title shown to readers",
  "seoTitle": "Shorter title for browser tab / meta tags (≤ 60 chars ideal)",
  "tldrHeading": "Short label for the TL;DR summary box, e.g. \"The bottom line\"",
  "tldr": "One-paragraph plain-text summary shown in the TL;DR box and used for SEO.",
  "excerpt": "One-sentence meta description (≤ 160 chars ideal).",
  "date": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "readMinutes": 8,
  "coverImage": "/blog/images/your-cover-image.png",
  "blocks": []
}
```

### 3. Also update `seo/blog-seo.js`

Add a `BLOG_POST_FAQS` entry for the new slug.
The key must exactly match `slug`. Provide 3–5 Q&A pairs:

```js
"your-new-slug": [
  { q: "Question one?", a: "Answer one." },
  { q: "Question two?", a: "Answer two." },
],
```

---

## Block types and spacing rules

The article body is rendered inside a `space-y-4` wrapper (16 px gap between every direct child block).
Several block types already carry their own extra margin — **do not add extra `p` blocks to create spacing**.

### `p` — paragraph

```json
{ "type": "p", "text": "Paragraph text here." }
```

- Gets 16 px of top margin from the parent wrapper.
- **Never create an empty `p` block** (`"text": ""`). Empty paragraphs render as invisible blank space and create layout gaps.
- **Never add a `p` block immediately before an `h2` or `h3` just for visual breathing room.** The heading's own top margin (`h2` = 32 px, `h3` = 24 px) already provides separation.

### `h2` — section heading

```json
{ "type": "h2", "text": "Section Heading" }
```

- Renders with `margin-top: 2rem` (32 px) and `margin-bottom: 0.75rem` (12 px).
- Do **not** put an extra `p` before an `h2` to add space — it already has enough.

### `h3` — subsection heading

```json
{ "type": "h3", "text": "Subsection Heading" }
```

- Renders with `margin-top: 1.5rem` (24 px) and `margin-bottom: 0.5rem` (8 px).
- Same rule: do **not** pad it with an extra `p` above.

### `ul` — unordered list

Items can be plain strings or `{ label, text }` objects:

```json
{
  "type": "ul",
  "items": [
    "Plain list item",
    { "label": "Bold label:", "text": "Detail text following the label." }
  ]
}
```

- Gets 16 px top margin from the wrapper.
- If a `p` naturally introduces the list (e.g. "Here are the key questions:"), include it. If no intro is needed, put the `ul` directly.

### `ol` — ordered list

```json
{
  "type": "ol",
  "items": ["Step one.", "Step two.", "Step three."]
}
```

### `blockquote` — callout / quote / attribution

```json
{
  "type": "blockquote",
  "label": "Optional bold prefix label:",
  "text": "The callout text.",
  "linkText": "Optional link label",
  "linkHref": "https://example.com"
}
```

- Renders with `margin-top: 1.5rem` and `margin-bottom: 1.5rem` (24 px each).
- Do **not** pad a `blockquote` with extra `p` blocks above or below — it already has enough breathing room.
- `label`, `linkText`, and `linkHref` are all optional.

### `img` — image

```json
{
  "type": "img",
  "src": "/blog/images/filename.png",
  "alt": "Descriptive alt text.",
  "caption": "Optional caption shown below the image.",
  "imageClass": "optional-modifier-class"
}
```

**Every post must have exactly 3 `img` blocks** (a hero plus two body images).

**Image layout rules — position in the `blocks` array matters:**

| Position of `img` in `blocks` | How it renders |
|---|---|
| **First** `img` encountered | **Hero image** at the very top of the article card, cropped to a fixed height, full width. |
| **Second** `img` (first body image) | Magazine-left: image floats left at 38% width (desktop), paragraphs and headings wrap on the right. |
| **Third** `img` (second body image) | Magazine-right: image floats right at 38% width, text wraps on the left. |
| **Fourth+ `img`** | Plain centered figure, full width. |

On mobile (<768 px) magazine images become full-width (no float).

**CRITICAL — content authoring rules for magazine images:**

Lists (`ul`/`ol`), `blockquote`, and `cta` blocks do NOT wrap around floats (they get their own block formatting context via CSS because markers and backgrounds break when straddling a float). Only `p`, `h2`, and `h3` wrap gracefully.

Therefore, immediately after each magazine `img` block, you MUST place **paragraph-heavy content** — enough headings + paragraphs to fill the image height (roughly one `h2` plus 3–4 paragraphs, or an FAQ-style run of `h3` + `p` pairs) — **before any `ul`, `ol`, `blockquote`, or `cta` block**. If a long list starts beside the image, it stays narrow for its whole height and leaves white space under the image.

Good patterns to put after a magazine image:
- `h2` + `p` + `h3` + `p` + `h3` + `p` (section with subsections)
- `h2` + FAQ-style `h3`/`p` pairs

Bad patterns (never do this):
- `img` followed shortly by a long `ul`/`ol`
- `img` immediately followed by `blockquote` or `cta`

**Placement guidance:**
- Put image 1 (hero) after 1–3 opening paragraphs.
- Put image 2 (magazine-left) right before a paragraph-heavy `h2` section mid-article.
- Put image 3 (magazine-right) right before the FAQ section or another paragraph-heavy closing section.

The `coverImage` top-level field is for OG/SEO metadata only — it does not control which block is the hero.

**`imageClass` values:**

| Value | Effect |
|---|---|
| *(omitted)* | Default object-position: `center 30–32%` |
| `blog-hero-image--headroom` | Hero image object-position shifted to `center 22%` — use when the subject is near the top of the photo |
| `blog-magazine-image--headroom` | Magazine image object-position shifted to `center 22%` — same reason for body images |

### `cta` — call-to-action box

```json
{
  "type": "cta",
  "heading": "Call to action heading",
  "paragraphs": ["Supporting sentence one.", "Supporting sentence two (optional)."],
  "buttonText": "Button label text",
  "navigate": "grooming"
}
```

- Renders with `margin-top: 2.5rem` (40 px) — substantial built-in space above.
- `navigate` must be one of: `"grooming"`, `"training"`, `"boarding"`, `"sitters"`, `"vet"`.
- Place one CTA near the end of the post, just before or after the FAQ section.

---

## Spacing — summary of rules

| Rule | Reason |
|---|---|
| Never use `{ "type": "p", "text": "" }` | Renders as invisible gap; creates unwanted whitespace |
| Never put a `p` immediately before an `h2` just to add space | `h2` already has ~36 px top margin from CSS |
| Never put a `p` immediately before an `h3` just to add space | `h3` already has ~28 px top margin |
| Never add a `p` right after a `blockquote` just to add space | `blockquote` already has 32 px bottom margin |
| Never add a `p` right before a `cta` just to add space | `cta` already has 40 px top margin |
| Do include a `p` before a `ul` when it naturally introduces the list | This is content, not decorative spacing |

**CSS-applied spacing (current stylesheet):**
- Body block gap: 16 px (`space-y-4` on the outer container)
- `h2` top: 36 px, bottom: 14 px
- `h3` top: 28 px, bottom: 8 px
- `blockquote` top and bottom: 32 px; internal padding: 16 px top/bottom
- `ul` / `ol` top margin: 14 px
- `li + li` gap: 12 px
- `cta` top: 40 px

These values are enforced by `head-inject.html`. Do not try to replicate them with extra `p` blocks.

---

## Typical block structure for a new post

```
opening p blocks (1–3 paragraphs)
blockquote (TL;DR or key takeaway) — optional
p (transition into article)
img (→ becomes hero; include caption)
h2 (first major section)
p
h3 (optional subsection)
p
blockquote (stat or external source) — optional
h3
p
ul (with or without label:text items)
h2 (second major section)
p
img (→ magazine-left float with following blocks)
h3
p
blockquote
h2 (FAQ section)
h3 (question)
p (answer)
h3
p
... repeat for each FAQ ...
h2 (closing section)
p
p
cta
```

---

## JSON formatting

Use 2-space indentation, matching the existing file style.
All string values are JSON-encoded (escape `"` as `\"`).
Dates use `YYYY-MM-DD` format.
`readMinutes` is an integer.

---

## Images

Image files live in `public/blog/images/`.
Use descriptive filenames in kebab-case: `post-slug-descriptor.png`.
Run `node scripts/make-blog-placeholders.js` (or the equivalent script) to generate placeholder PNGs if the real images are not ready yet.

---

## Deploy

After editing `posts.json` and `seo/blog-seo.js`, restart/redeploy the server.
The sitemap auto-includes every post in `posts.json`.

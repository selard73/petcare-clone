const fs = require("fs");
const path = require("path");

const CANONICAL_ORIGIN = (process.env.CANONICAL_ORIGIN || "https://www.peedeepetcare.com").replace(/\/$/, "");
const POSTS_FILE = path.join(__dirname, "..", "public", "blog", "posts.json");
const DEFAULT_OG_IMAGE = `${CANONICAL_ORIGIN}/og-image.jpg`;

const SITE_TITLE = "Pet Services in Darlington & Florence SC | Peedee Pet Care";
const SITE_DESCRIPTION =
  "Free local pet services directory for Darlington County and Florence, SC. Browse grooming, training, boarding, sitters and vet listings with reviews. Not a service provider.";

const BLOG_INDEX_TITLE = "The Daily Wag | Pee Dee Pet Tips | Peedee Pet Care";
const BLOG_INDEX_DESCRIPTION =
  "Local pet care guides for Florence, Darlington, and the Pee Dee region — grooming, boarding, training, and directory tips from Peedee Pet Care.";

let postsCache = { mtimeMs: 0, posts: [] };

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadBlogPosts() {
  try {
    const stat = fs.statSync(POSTS_FILE);
    if (stat.mtimeMs === postsCache.mtimeMs) {
      return postsCache.posts;
    }
    const raw = fs.readFileSync(POSTS_FILE, "utf8");
    const data = JSON.parse(raw);
    const posts = Array.isArray(data.posts) ? data.posts : [];
    postsCache = { mtimeMs: stat.mtimeMs, posts };
    return posts;
  } catch {
    return postsCache.posts || [];
  }
}

function absoluteUrl(relative) {
  if (!relative) {
    return DEFAULT_OG_IMAGE;
  }
  if (/^https?:\/\//i.test(relative)) {
    return relative;
  }
  return `${CANONICAL_ORIGIN}${relative.startsWith("/") ? "" : "/"}${relative}`;
}

function getBlogPostBySlug(slug) {
  if (!slug) {
    return null;
  }
  const decoded = decodeURIComponent(slug).replace(/\/$/, "");
  return loadBlogPosts().find((post) => post.slug === decoded) || null;
}

function buildBlogPostSeo(post) {
  const title = `${post.title} | The Daily Wag | Peedee Pet Care`;
  const description = post.excerpt || post.description || SITE_DESCRIPTION;
  const canonical = `${CANONICAL_ORIGIN}/blog/${post.slug}`;
  const ogImage = absoluteUrl(post.coverImage);
  return { title, description, canonical, ogImage, ogType: "article" };
}

function buildBlogIndexSeo() {
  return {
    title: BLOG_INDEX_TITLE,
    description: BLOG_INDEX_DESCRIPTION,
    canonical: `${CANONICAL_ORIGIN}/blog`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  };
}

function buildDefaultSiteSeo() {
  return {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    canonical: `${CANONICAL_ORIGIN}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  };
}

function resolveSeoForPathname(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/blog") {
    return buildBlogIndexSeo();
  }
  if (normalized.startsWith("/blog/") && normalized.length > 6) {
    const slug = decodeURIComponent(normalized.slice(6));
    const post = getBlogPostBySlug(slug);
    if (post) {
      return buildBlogPostSeo(post);
    }
    return buildBlogIndexSeo();
  }
  return null;
}

function injectSeoIntoHtml(html, seo) {
  if (!seo) {
    return html;
  }
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const canonical = escapeHtml(seo.canonical);
  const ogImage = escapeHtml(seo.ogImage || DEFAULT_OG_IMAGE);
  const ogType = escapeHtml(seo.ogType || "website");

  let result = html;
  result = result.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  result = result.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}" />`,
  );
  result = result.replace(/<meta\s+name=["']title["'][^>]*>/i, `<meta name="title" content="${title}" />`);
  result = result.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );
  result = result.replace(
    /<meta\s+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${ogType}" />`,
  );
  result = result.replace(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonical}" />`,
  );
  result = result.replace(
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  result = result.replace(
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  result = result.replace(
    /<meta\s+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${ogImage}" />`,
  );
  result = result.replace(
    /<meta\s+name=["']twitter:url["'][^>]*>/i,
    `<meta name="twitter:url" content="${canonical}" />`,
  );
  result = result.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );
  result = result.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );
  result = result.replace(
    /<meta\s+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${ogImage}" />`,
  );
  return result;
}

const SEO_CONTENT_START = "<!-- peedee-seo-content:start -->";
const SEO_CONTENT_END = "<!-- peedee-seo-content:end -->";

function buildOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": `${CANONICAL_ORIGIN}/#organization`,
    name: "Peedee Pet Care",
    url: `${CANONICAL_ORIGIN}/`,
    description:
      "Peedee Pet Care is a free online directory of local pet grooming, training, boarding, daycare, sitters, and veterinary businesses in Darlington County and Florence, SC. Not a service provider.",
    disambiguatingDescription:
      "Peedee Pet Care is a local business directory for the Pee Dee region of South Carolina. It is not a veterinary clinic, groomer, boarding kennel, or pet sitting company.",
    logo: {
      "@type": "ImageObject",
      url: `${CANONICAL_ORIGIN}/logo.png`,
      contentUrl: `${CANONICAL_ORIGIN}/logo.png`,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Darlington County",
        containedInPlace: { "@type": "State", name: "South Carolina" },
      },
      {
        "@type": "City",
        name: "Florence",
        containedInPlace: { "@type": "State", name: "South Carolina" },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "selard73@gmail.com",
      areaServed: "US-SC",
      availableLanguage: "English",
    },
  };
}

function categoryHref(navigate) {
  const paths = {
    grooming: "/grooming",
    training: "/training",
    boarding: "/boarding",
    sitters: "/sitters",
    vet: "/vet-care",
  };
  return paths[navigate] || "/";
}

function renderPostBlockHtml(block) {
  if (!block || !block.type) {
    return "";
  }
  switch (block.type) {
    case "p":
      return `<p>${escapeHtml(block.text)}</p>`;
    case "h2":
      return `<h3>${escapeHtml(block.text)}</h3>`;
    case "ul":
      return `<ul>${(block.items || [])
        .map((item) => {
          if (typeof item === "string") {
            return `<li>${escapeHtml(item)}</li>`;
          }
          const label = item.label ? `<strong>${escapeHtml(item.label)}</strong> ` : "";
          return `<li>${label}${escapeHtml(item.text || "")}</li>`;
        })
        .join("")}</ul>`;
    case "ol":
      return `<ol>${(block.items || [])
        .map((item) => `<li>${escapeHtml(typeof item === "string" ? item : item.text || "")}</li>`)
        .join("")}</ol>`;
    case "blockquote": {
      const link = block.linkHref
        ? ` <a href="${escapeHtml(block.linkHref)}" rel="noopener noreferrer">${escapeHtml(block.linkText || block.linkHref)}</a>`
        : "";
      const label = block.label ? `<strong>${escapeHtml(block.label)}</strong> ` : "";
      return `<p>${label}${escapeHtml(block.text || "")}${link}</p>`;
    }
    case "img":
      return `<p>${escapeHtml(block.alt || block.caption || "")}${block.caption && block.alt ? `: ${escapeHtml(block.caption)}` : ""}</p>`;
    case "cta": {
      const paras = (block.paragraphs || []).map((text) => `<p>${escapeHtml(text)}</p>`).join("");
      const href = categoryHref(block.navigate);
      const button = block.buttonText
        ? `<p><a href="${escapeHtml(href)}">${escapeHtml(block.buttonText)}</a></p>`
        : "";
      return `<h3>${escapeHtml(block.heading || "")}</h3>${paras}${button}`;
    }
    default:
      return block.text ? `<p>${escapeHtml(block.text)}</p>` : "";
  }
}

function renderPostBodyHtml(post) {
  if (Array.isArray(post.blocks) && post.blocks.length) {
    return post.blocks.map(renderPostBlockHtml).join("\n  ");
  }
  if (Array.isArray(post.body) && post.body.length) {
    return post.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n  ");
  }
  if (post.excerpt) {
    return `<p>${escapeHtml(post.excerpt)}</p>`;
  }
  return "";
}

function renderPostArticleSectionHtml(post) {
  const url = `/blog/${encodeURIComponent(post.slug)}`;
  const meta = [post.date, post.readMinutes ? `${post.readMinutes} min read` : ""].filter(Boolean).join(" · ");
  return `<article id="blog-post-${escapeHtml(post.slug)}">
  <h2><a href="${escapeHtml(url)}">${escapeHtml(post.title)}</a></h2>
  ${meta ? `<p><em>${escapeHtml(meta)}</em></p>` : ""}
  ${post.excerpt ? `<p>${escapeHtml(post.excerpt)}</p>` : ""}
  ${renderPostBodyHtml(post)}
  <p><a href="${escapeHtml(url)}">Read full article: ${escapeHtml(post.title)}</a></p>
</article>`;
}

function buildBlogIndexJsonLd() {
  const posts = loadBlogPosts();
  const blogPostNodes = posts.map((post, index) => ({
    "@type": "BlogPosting",
    "@id": `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}#article`,
    headline: post.title,
    description: post.excerpt || post.description || "",
    datePublished: post.date,
    url: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
    mainEntityOfPage: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
    author: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    image: post.coverImage ? absoluteUrl(post.coverImage) : DEFAULT_OG_IMAGE,
    position: index + 1,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      {
        "@type": "Blog",
        "@id": `${CANONICAL_ORIGIN}/blog#blog`,
        name: "The Daily Wag",
        description: BLOG_INDEX_DESCRIPTION,
        url: `${CANONICAL_ORIGIN}/blog`,
        inLanguage: "en-US",
        isPartOf: { "@id": `${CANONICAL_ORIGIN}/#website` },
        publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
        blogPost: blogPostNodes.map((post) => ({ "@id": post["@id"] })),
      },
      ...blogPostNodes,
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_ORIGIN}/blog#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${CANONICAL_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Daily Wag",
            item: `${CANONICAL_ORIGIN}/blog`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_ORIGIN}/blog#webpage`,
        url: `${CANONICAL_ORIGIN}/blog`,
        name: BLOG_INDEX_TITLE,
        description: BLOG_INDEX_DESCRIPTION,
        isPartOf: { "@id": `${CANONICAL_ORIGIN}/blog#blog` },
        about: { "@id": `${CANONICAL_ORIGIN}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}

function buildBlogIndexSeoContentHtml() {
  const posts = loadBlogPosts();
  const articleItems = posts
    .map(
      (post) =>
        `<li><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a> — ${escapeHtml(post.excerpt || "")} <em>(${escapeHtml(post.date || "")}, ${escapeHtml(String(post.readMinutes || ""))} min read)</em></li>`,
    )
    .join("\n    ");
  const fullArticles = posts.map(renderPostArticleSectionHtml).join("\n  ");

  return `<div id="seo-content" class="seo-content">
  <h1>The Daily Wag — Pet Care Tips for the Pee Dee</h1>
  <p>
    The Daily Wag is the blog of <a href="/">Peedee Pet Care</a>, a free local pet services directory for
    Darlington County and Florence, SC. We publish practical guides to help pet owners choose groomers,
    trainers, boarders, and other providers listed in our directory. Peedee Pet Care is a directory — not a
    veterinary clinic, grooming salon, boarding kennel, or pet sitting service. Browse the full articles below
    without JavaScript.
  </p>
  <h2>Article Index</h2>
  <ul>
    ${articleItems}
  </ul>
  <h2>Full Articles</h2>
  ${fullArticles}
  <h2>Find Local Providers</h2>
  <p>
    After reading a guide, browse live listings:
    <a href="/grooming">dog groomers</a>,
    <a href="/training">dog trainers</a>,
    <a href="/boarding">pet boarding</a>,
    <a href="/sitters">sitters and walkers</a>, and
    <a href="/vet-care">veterinary care</a> in the Pee Dee region.
  </p>
  <h2>Trusted Pet Care Resources</h2>
  <p>
    Our guides align with advice from the
    <a href="https://www.avma.org/" rel="noopener noreferrer">American Veterinary Medical Association (AVMA)</a>,
    the <a href="https://www.akc.org/" rel="noopener noreferrer">American Kennel Club (AKC)</a>, and the
    <a href="https://llr.sc.gov/vet/" rel="noopener noreferrer">South Carolina Board of Veterinary Medical Examiners</a>.
  </p>
  <h2>About Peedee Pet Care</h2>
  <p>
    Peedee Pet Care helps pet owners in Florence, Darlington, Hartsville, and surrounding Darlington County
    communities compare local pet service providers, read reviews, and contact businesses directly. The
    directory is free for pet owners and free for businesses to list.
  </p>
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

function buildBlogPostJsonLd(post) {
  const blogPostNode = {
    "@type": "BlogPosting",
    "@id": `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}#article`,
    headline: post.title,
    description: post.excerpt || post.description || "",
    datePublished: post.date,
    url: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
    mainEntityOfPage: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
    author: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    image: post.coverImage ? absoluteUrl(post.coverImage) : DEFAULT_OG_IMAGE,
    isPartOf: { "@id": `${CANONICAL_ORIGIN}/blog#blog` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      blogPostNode,
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${CANONICAL_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Daily Wag",
            item: `${CANONICAL_ORIGIN}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
          },
        ],
      },
    ],
  };
}

function buildBlogPostSeoContentHtml(post) {
  return `<div id="seo-content" class="seo-content">
  <p><a href="/blog">The Daily Wag</a> · <a href="/">Peedee Pet Care</a></p>
  ${renderPostArticleSectionHtml(post)}
  <h2>Find Local Providers</h2>
  <p>
    Browse listings on Peedee Pet Care:
    <a href="/grooming">grooming</a>,
    <a href="/training">training</a>,
    <a href="/boarding">boarding</a>,
    <a href="/sitters">sitters</a>, and
    <a href="/vet-care">vet care</a> in Darlington County and Florence, SC.
  </p>
</div>`;
}

function injectBlogPostEnhancements(html, post) {
  let result = html;
  result = replaceSeoContentBlock(result, buildBlogPostSeoContentHtml(post));
  result = replaceJsonLd(result, buildBlogPostJsonLd(post));
  return result;
}

function injectBlogIndexEnhancements(html) {
  let result = html;
  result = replaceSeoContentBlock(result, buildBlogIndexSeoContentHtml());
  result = replaceJsonLd(result, buildBlogIndexJsonLd());
  return result;
}

function injectBlogEnhancements(html, pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/blog") {
    return injectBlogIndexEnhancements(html);
  }
  if (normalized.startsWith("/blog/") && normalized.length > 6) {
    const slug = decodeURIComponent(normalized.slice(6));
    const post = getBlogPostBySlug(slug);
    if (post) {
      return injectBlogPostEnhancements(html, post);
    }
  }
  return html;
}

const STATIC_SITEMAP_PATHS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/blog", changefreq: "weekly", priority: "0.7" },
  { loc: "/products", changefreq: "weekly", priority: "0.8" },
  { loc: "/sitters", changefreq: "weekly", priority: "0.8" },
  { loc: "/grooming", changefreq: "weekly", priority: "0.8" },
  { loc: "/training", changefreq: "weekly", priority: "0.8" },
  { loc: "/boarding", changefreq: "weekly", priority: "0.8" },
  { loc: "/vet-care", changefreq: "weekly", priority: "0.8" },
];

function generateSitemapXml() {
  const posts = loadBlogPosts();
  const urls = [
    ...STATIC_SITEMAP_PATHS.map((entry) => ({ ...entry, loc: `${CANONICAL_ORIGIN}${entry.loc}` })),
    ...posts.map((post) => ({
      loc: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: post.date || undefined,
    })),
  ];

  const body = urls
    .map((url) => {
      const parts = [
        "  <url>",
        `    <loc>${escapeHtml(url.loc)}</loc>`,
        url.lastmod ? `    <lastmod>${escapeHtml(url.lastmod)}</lastmod>` : "",
        `    <changefreq>${url.changefreq}</changefreq>`,
        `    <priority>${url.priority}</priority>`,
        "  </url>",
      ].filter(Boolean);
      return parts.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

module.exports = {
  CANONICAL_ORIGIN,
  SITE_TITLE,
  SITE_DESCRIPTION,
  BLOG_INDEX_TITLE,
  BLOG_INDEX_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  loadBlogPosts,
  getBlogPostBySlug,
  buildBlogPostSeo,
  buildBlogIndexSeo,
  buildDefaultSiteSeo,
  resolveSeoForPathname,
  injectSeoIntoHtml,
  injectBlogEnhancements,
  generateSitemapXml,
};

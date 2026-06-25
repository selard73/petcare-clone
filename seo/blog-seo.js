const fs = require("fs");
const path = require("path");

const CANONICAL_ORIGIN = (process.env.CANONICAL_ORIGIN || "https://www.peedeepetcare.com").replace(/\/$/, "");
const POSTS_FILE = path.join(__dirname, "..", "public", "blog", "posts.json");
const DEFAULT_OG_IMAGE = `${CANONICAL_ORIGIN}/og-image.jpg`;

const SITE_TITLE = "Pet Services in Darlington & Florence SC | Peedee Pet Care";
const SITE_DESCRIPTION =
  "Trusted local pet directory for Darlington County and Florence, SC. Find grooming, training, boarding, and vet care. No fees for owners or businesses.";

const BLOG_INDEX_TITLE = "The Daily Wag | Pet Care Tips for the Pee Dee | Peedee Pet Care";
const BLOG_INDEX_DESCRIPTION =
  "Helpful articles on grooming, training, boarding, and everyday pet care for pet owners in Florence, Darlington, Hartsville, and the Pee Dee region.";

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
  generateSitemapXml,
};

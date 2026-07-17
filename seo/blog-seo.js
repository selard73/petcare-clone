const fs = require("fs");
const path = require("path");

const CANONICAL_ORIGIN = (process.env.CANONICAL_ORIGIN || "https://www.peedeepetcare.com").replace(/\/$/, "");
const POSTS_FILE = path.join(__dirname, "..", "public", "blog", "posts.json");
const DEFAULT_OG_IMAGE = `${CANONICAL_ORIGIN}/share-card.jpg`;

const SITE_TITLE = "Pet Services in Darlington & Florence SC | Pee Dee Pet Care";
const SITE_DESCRIPTION =
  "Free pet services directory for Darlington & Florence, SC. Browse grooming, training, boarding, sitters and vet listings with reviews. Not a service provider.";

const BLOG_INDEX_TITLE = "The Daily Wag | Pee Dee Pet Tips | Pee Dee Pet Care";
const BLOG_INDEX_DESCRIPTION =
  "Pee Dee Pet Tips from Pee Dee Pet Care — local guides on grooming, boarding, training, and directory tips for Florence & Darlington, SC. Not a service provider.";

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
  const title = post.seoTitle || `${post.title} | The Daily Wag | Pee Dee Pet Care`;
  const description = post.excerpt || post.description || SITE_DESCRIPTION;
  const canonical = `${CANONICAL_ORIGIN}/blog/${post.slug}`;
  const ogImage = absoluteUrl(post.coverImage);
  return { title, description, canonical, ogImage, ogType: "article" };
}

const BLOG_AUTHOR_NAME = "Pee Dee Pet Care Team";

const BLOG_POST_FAQS = {
  "how-to-choose-veterinarian-florence-sc": [
    {
      q: "What is the average cost of a vet visit in Florence, SC?",
      a: "A standard wellness exam usually ranges from $50 to $85, not including vaccines, heartworm tests, or medications. For a full annual visit including preventatives, expect to spend between $200 and $400 depending on the size of your pet.",
    },
    {
      q: "Do Florence vets offer payment plans?",
      a: "Most local clinics do not offer in-house financing, but many accept CareCredit or Scratchpay. It is always best to ask about these options before an emergency happens.",
    },
    {
      q: "Can I tour a veterinary facility before my appointment?",
      a: "Most reputable clinics will allow a brief tour of the public and exam areas if they aren't in the middle of a surgical rush. If a clinic flatly refuses to let you see the exam rooms, consider it a red flag.",
    },
    {
      q: "What should I ask a veterinarian before becoming a client?",
      a: "Ask how they handle after-hours emergencies, whether they are accepting new patients for your species, how they communicate test results, whether they provide written estimates before major procedures, and what their philosophy is on preventive versus reactive care.",
    },
    {
      q: "Why do some vets in Florence have a split lunch hour?",
      a: "It is very common for clinics in the Pee Dee to close between 12:00 PM and 2:00 PM. This is typically when they perform surgeries or catch up on charts, so plan your phone calls accordingly.",
    },
  ],
  "affordable-dog-training-classes-florence-darlington-pee-dee": [
    {
      q: "How much do dog training classes cost in Florence and Darlington SC?",
      a: "Group classes typically run $25 to $50 per session, with six-week beginner packages in the $150 to $250 range. Private lessons cost $75 to $130+ per hour depending on trainer experience and travel.",
    },
    {
      q: "Are group classes or private lessons a better value?",
      a: "For puppies and basic obedience, group classes are the most affordable starting point. For dogs with reactivity, anxiety, or other specific behavior challenges, a targeted private lesson or two can cost less overall than repeating group classes that miss the root issue.",
    },
    {
      q: "How do I know if a cheap dog training class is any good?",
      a: "Look for reward-based training methods, small class sizes (around five dogs), a clear session-by-session structure, and a written fee breakdown. Be cautious of trainers who guarantee specific results without meeting your dog.",
    },
    {
      q: "What questions should I ask a dog trainer before booking?",
      a: "Ask what methods they use and why, whether you can get a written fee breakdown, what the class is designed for, the class size limit, and what success should look like at the end of the program.",
    },
    {
      q: "How do I find affordable dog trainers near me in the Pee Dee?",
      a: "Browse the free Pee Dee Pet Care trainer directory to compare local options in Florence, Darlington, Hartsville, and surrounding communities, then contact trainers directly about pricing and format.",
    },
  ],
  "finding-pet-sitter-dog-walker-pee-dee": [
    {
      q: "How do I find a reliable pet sitter in Florence or Darlington SC?",
      a: "Browse the Pee Dee Pet Care sitter and walker directory, read reviews from local pet owners, and contact a few providers directly. Always schedule a meet-and-greet before your first booking.",
    },
    {
      q: "What questions should I ask a pet sitter before hiring them?",
      a: "Ask what they do if your pet refuses to eat or seems unwell, whether they have experience with your pet's breed or temperament, what a typical visit looks like, and whether they send updates or photos.",
    },
    {
      q: "Is a pet sitter or boarding facility better for an anxious dog?",
      a: "Anxious dogs usually do better staying in their own home with a sitter. Boarding facilities work well for socialized dogs that enjoy other dogs, but the noise and new environment can increase stress for anxious pets.",
    },
    {
      q: "How much does a pet sitter cost in the Pee Dee area?",
      a: "Rates vary by service type and provider. Drop-in visits typically cost less than overnight house sitting, and dog walking rates depend on walk length and format. Contact local providers directly for current pricing.",
    },
    {
      q: "Does Pee Dee Pet Care provide pet sitting services?",
      a: "No. Pee Dee Pet Care is a free local directory that lists independent pet sitters and dog walkers in the Pee Dee region. We do not provide sitting, walking, or any pet care services ourselves.",
    },
  ],
  "how-to-find-good-dog-groomer-pee-dee": [
    {
      q: "What should I ask a dog groomer before booking?",
      a: "Ask about breed experience, handling of anxious dogs, products used on sensitive skin, what is included in the price, and typical appointment length.",
    },
    {
      q: "How do I find a groomer near Florence or Darlington SC?",
      a: "Browse grooming listings on Pee Dee Pet Care, compare reviews, and contact providers directly. Listings include salon and mobile groomers in the Pee Dee region.",
    },
    {
      q: "Does Pee Dee Pet Care groom pets?",
      a: "No. Pee Dee Pet Care is a free directory that lists independent local groomers.",
    },
  ],
  "cat-grooming-guide": [
    {
      q: "How do I know if my cat needs professional grooming?",
      a: "Look for matting, a greasy or dull coat, odor, dirt around the hindquarters, or trouble reaching certain areas while grooming. Long-haired, overweight, senior, or arthritic cats are the most common candidates for professional grooming.",
    },
    {
      q: "How is cat grooming different from dog grooming?",
      a: "Cat grooming requires a lighter touch, more attention to stress signals, and tools that work on thinner, more delicate skin. Cats usually need quieter environments, shorter sessions, and handling that prioritizes safety over speed.",
    },
    {
      q: "How often should long-haired cats be groomed?",
      a: "Many long-haired cats do best with professional grooming every 4 to 6 weeks, especially if they are seniors or prone to tangles. Regular at-home brushing between visits helps reduce matting and keeps appointments easier.",
    },
    {
      q: "Can a dog groomer groom cats too?",
      a: "Sometimes, but only if they have specific cat experience and a setup designed for feline grooming. A groomer who mainly works with dogs may not have the handling skills, tools, or environment cats need to stay calm and safe.",
    },
    {
      q: "What should I ask before booking a cat groomer?",
      a: "Ask about cat-specific experience, how they handle stressed cats, whether they offer quiet or cat-only appointment times, and what happens if your cat becomes too anxious during the session. Those answers tell you a lot.",
    },
  ],
  "dog-wont-listen-basic-commands": [
    {
      q: "Why is my dog suddenly not listening to commands?",
      a: "Sudden command regression usually comes from a change in routine, more distractions, inconsistent reinforcement, stress, adolescence, or a medical issue. Start by checking what changed at home, then reset training in a quiet space with simple repetitions and high-value rewards.",
    },
    {
      q: "Can dogs forget basic commands they already knew?",
      a: "Dogs usually do not forget commands the way people forget facts. More often, the behavior weakens because it has not been reinforced enough or the dog has not practiced it in harder situations. A short, consistent refresher usually brings the skill back.",
    },
    {
      q: "Is my dog being stubborn when they ignore me?",
      a: "Not usually. Ignoring a cue is more often a sign of distraction, confusion, stress, or discomfort than defiance. If the behavior is sudden or paired with pain, limping, or withdrawal, check with a vet before treating it like a training problem.",
    },
    {
      q: "How long does it take to retrain a dog to listen again?",
      a: "Most dogs improve within days to a few weeks if the issue is regression, not a deeper behavior problem. The fastest progress usually comes from short sessions, one cue at a time, and practicing first in low-distraction settings before adding more challenge.",
    },
    {
      q: "Should I repeat the command over and over?",
      a: "No. Repeating a cue usually teaches your dog that the first few times do not matter. Say it once, give the dog a moment to respond, and then guide them or reset the exercise if needed. Clarity works better than volume.",
    },
  ],
};

function getBlogPostFaqs(post) {
  return BLOG_POST_FAQS[post.slug] || [];
}

function buildAuthorPersonNode() {
  return {
    "@type": "Person",
    "@id": `${CANONICAL_ORIGIN}/#author-team`,
    name: BLOG_AUTHOR_NAME,
    worksFor: { "@id": `${CANONICAL_ORIGIN}/#organization` },
  };
}

function buildBlogPostTldr(post) {
  return post.tldr || post.excerpt || post.description || "";
}

function buildTableOfContentsHtml(post) {
  const headings = [];
  if (Array.isArray(post.blocks)) {
    post.blocks.forEach((block, index) => {
      if (block.type === "h2" && block.text) {
        headings.push({ id: `section-${index}`, text: block.text });
      }
    });
  }
  if (!headings.length) {
    headings.push(
      { id: "overview", text: post.tldrHeading || "TL;DR" },
      { id: "local-directory", text: "Browse local providers" },
      { id: "faq", text: "Frequently asked questions" },
    );
  }
  const items = headings
    .map((heading) => `<li><a href="#${escapeHtml(heading.id)}">${escapeHtml(heading.text)}</a></li>`)
    .join("\n    ");
  return `<nav aria-label="Table of contents">
  <h2>In this article</h2>
  <ul>
    ${items}
  </ul>
</nav>`;
}

function buildBlogPostFaqHtml(post) {
  const faqs = getBlogPostFaqs(post);
  if (!faqs.length) {
    return "";
  }
  const items = faqs
    .map((faq) => `<p><strong>${escapeHtml(faq.q)}</strong> ${escapeHtml(faq.a)}</p>`)
    .join("\n  ");
  return `<h2 id="faq">Frequently asked questions</h2>
  ${items}`;
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

// Real social profiles only (Instagram/TikTok are placeholder "#" links in the UI, so they are omitted).
const ORGANIZATION_SAME_AS = [
  "https://www.facebook.com/peedeepetcare/",
  "https://www.youtube.com/@peedeepetcare",
];

const SERVICE_AREA_CITIES = ["Florence", "Hartsville", "Darlington", "Lamar", "Society Hill"];

function buildOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": `${CANONICAL_ORIGIN}/#organization`,
    name: "Pee Dee Pet Care",
    url: `${CANONICAL_ORIGIN}/`,
    description:
      "Pee Dee Pet Care is a free online directory of local pet grooming, training, boarding, daycare, sitters, and veterinary businesses in Darlington County and Florence, SC. Not a service provider.",
    disambiguatingDescription:
      "Pee Dee Pet Care is a local business directory for the Pee Dee region of South Carolina. It is not a veterinary clinic, groomer, boarding kennel, or pet sitting company.",
    logo: {
      "@type": "ImageObject",
      url: `${CANONICAL_ORIGIN}/logo.png`,
      contentUrl: `${CANONICAL_ORIGIN}/logo.png`,
    },
    image: `${CANONICAL_ORIGIN}/share-card.jpg`,
    sameAs: ORGANIZATION_SAME_AS,
    knowsAbout: [
      "pet grooming",
      "dog training",
      "pet boarding",
      "doggy daycare",
      "pet sitting",
      "dog walking",
      "veterinary care",
      "Darlington County South Carolina",
      "Florence South Carolina",
      "Pee Dee region pet care",
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Darlington County",
        containedInPlace: { "@type": "State", name: "South Carolina" },
      },
      ...SERVICE_AREA_CITIES.map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: { "@type": "State", name: "South Carolina" },
      })),
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@peedeepetcare.com",
      areaServed: "US-SC",
      availableLanguage: "English",
    },
  };
}

function buildWebSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${CANONICAL_ORIGIN}/#website`,
    url: `${CANONICAL_ORIGIN}/`,
    name: "Pee Dee Pet Care",
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    isAccessibleForFree: true,
    inLanguage: "en-US",
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
    case "h3":
      return `<h4>${escapeHtml(block.text)}</h4>`;
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

function renderPostArticleSectionHtml(post, { useH1 = false } = {}) {
  const url = `/blog/${encodeURIComponent(post.slug)}`;
  const meta = [post.date, post.readMinutes ? `${post.readMinutes} min read` : ""].filter(Boolean).join(" · ");
  const headingTag = useH1 ? "h1" : "h2";
  return `<article id="blog-post-${escapeHtml(post.slug)}">
  <${headingTag}><a href="${escapeHtml(url)}">${escapeHtml(post.title)}</a></${headingTag}>
  ${meta ? `<p><em>${escapeHtml(meta)}</em></p>` : ""}
  ${post.excerpt ? `<p>${escapeHtml(post.excerpt)}</p>` : ""}
  ${renderPostBodyHtml(post)}
</article>`;
}

function getBlogPostExternalLinks(slug) {
  if (slug.includes("groomer") || slug.includes("grooming")) {
    if (slug.includes("cat")) {
      return [
        { href: "https://www.aspca.org/pet-care/cat-care/cat-grooming-tips", label: "ASPCA cat grooming tips" },
        { href: "https://www.nationalcatgroomers.com/", label: "National Cat Groomers Institute" },
        { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
      ];
    }
    return [
      { href: "https://www.akc.org/expert-advice/health/questions-ask-potential-groomers/", label: "AKC groomer questions" },
      { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
    ];
  }
  if (slug.includes("trainer") || slug.includes("listen") || slug.includes("commands")) {
    return [
      { href: "https://www.akc.org/expert-advice/training/", label: "AKC training resources" },
      { href: "https://avsab.org", label: "American Veterinary Society of Animal Behavior" },
      { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
    ];
  }
  if (slug.includes("boarding")) {
    return [
      { href: "https://www.akc.org/expert-advice/training/how-to-prepare-your-dog-for-boarding/", label: "AKC boarding prep" },
      { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
    ];
  }
  if (slug.includes("vet") || slug.includes("veterinarian")) {
    return [
      { href: "https://www.avma.org/resources/pet-owners/yourvet/finding-veterinarian", label: "AVMA: finding a veterinarian" },
      { href: "https://www.carecredit.com/vetmed/", label: "CareCredit veterinary financing" },
      { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
    ];
  }
  if (slug.includes("sitter") || slug.includes("walker")) {
    return [
      { href: "https://www.petsit.com/", label: "Pet Sitters International" },
      { href: "https://www.petsitters.org/", label: "National Association of Professional Pet Sitters" },
      { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
    ];
  }
  return [
    { href: "https://www.avma.org/resources-tools/pet-owners/petcare", label: "AVMA pet care" },
    { href: "https://www.akc.org/", label: "American Kennel Club" },
  ];
}

function buildBlogPostSeoContentHtml(post) {
  const external = getBlogPostExternalLinks(post.slug)
    .map((link) => `<a href="${escapeHtml(link.href)}" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join(", ");
  const relatedPosts = loadBlogPosts()
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 3)
    .map(
      (entry) =>
        `<li><a href="/blog/${escapeHtml(entry.slug)}">${escapeHtml(entry.title)}</a> — ${escapeHtml(entry.excerpt || "")}</li>`,
    )
    .join("\n    ");
  const tldr = buildBlogPostTldr(post);
  const updated = post.dateModified && post.dateModified !== post.date ? post.dateModified : post.date;
  return `<div id="seo-content" class="seo-content">
  <p><a href="/blog">The Daily Wag</a> · <a href="/">Pee Dee Pet Care</a></p>
  <p><em>Written by ${escapeHtml(BLOG_AUTHOR_NAME)} · Updated ${escapeHtml(updated)}</em></p>
  <h2 id="overview">${escapeHtml(post.tldrHeading || "TL;DR")}</h2>
  <p>${escapeHtml(tldr)}</p>
  ${buildTableOfContentsHtml(post)}
  ${renderPostArticleSectionHtml(post, { useH1: true })}
  ${buildBlogPostFaqHtml(post)}
  <h2 id="local-directory">Find Local Providers</h2>
  <p>
    Browse listings on Pee Dee Pet Care:
    <a href="/grooming">grooming</a>,
    <a href="/training">training</a>,
    <a href="/boarding">boarding</a>,
    <a href="/sitters">sitters</a>, and
    <a href="/vet-care">vet care</a> in Darlington County and Florence, SC.
  </p>
  <h2>Sources and further reading</h2>
  <p>${external}.</p>
  <h2>More from The Daily Wag</h2>
  <ul>
    ${relatedPosts}
  </ul>
</div>`;
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
      buildWebSiteNode(),
      {
        "@type": "Blog",
        "@id": `${CANONICAL_ORIGIN}/blog#blog`,
        name: "The Daily Wag | Pee Dee Pet Tips",
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
            name: "The Daily Wag | Pee Dee Pet Tips",
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
  <h1>The Daily Wag — Pee Dee Pet Tips</h1>
  <p>
    The Daily Wag | Pee Dee Pet Tips is the blog of <a href="/">Pee Dee Pet Care</a>, a free local pet services
    directory for Darlington County and Florence, SC. We publish practical guides to help pet owners choose
    groomers, trainers, boarders, and other providers listed in our directory. Pee Dee Pet Care is a directory —
    not a veterinary clinic, grooming salon, boarding kennel, or pet sitting service. Browse the full articles
    below without JavaScript.
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
  <h2>About Pee Dee Pet Care</h2>
  <p>
    Pee Dee Pet Care helps pet owners in Florence, Darlington, Hartsville, and surrounding Darlington County
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
  const faqEntities = getBlogPostFaqs(post).map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  }));
  const dateModified = post.dateModified || post.date;
  const blogPostNode = {
    "@type": "BlogPosting",
    "@id": `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}#article`,
    headline: post.title,
    description: post.excerpt || post.description || "",
    datePublished: post.date,
    dateModified,
    url: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
    mainEntityOfPage: `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}`,
    author: { "@id": `${CANONICAL_ORIGIN}/#author-team` },
    publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
    image: post.coverImage ? absoluteUrl(post.coverImage) : DEFAULT_OG_IMAGE,
    isPartOf: { "@id": `${CANONICAL_ORIGIN}/blog#blog` },
  };

  const graph = [
    buildOrganizationNode(),
    buildWebSiteNode(),
    buildAuthorPersonNode(),
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
          name: "The Daily Wag | Pee Dee Pet Tips",
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
  ];

  if (faqEntities.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${CANONICAL_ORIGIN}/blog/${encodeURIComponent(post.slug)}#faq`,
      mainEntity: faqEntities,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
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
  let result = html;
  if (normalized === "/blog") {
    result = injectBlogIndexEnhancements(result);
  } else if (normalized.startsWith("/blog/") && normalized.length > 6) {
    const slug = decodeURIComponent(normalized.slice(6));
    const post = getBlogPostBySlug(slug);
    if (post) {
      result = injectBlogPostEnhancements(result, post);
    }
  }
  if (normalized === "/blog" || (normalized.startsWith("/blog/") && normalized.length > 6)) {
    result = injectBlogImagePreloads(result, pathname);
  }
  return result;
}

function blogAssetUrl(relativePath, version) {
  if (!relativePath) {
    return relativePath;
  }
  if (!version) {
    return relativePath;
  }
  const joiner = relativePath.includes("?") ? "&" : "?";
  return `${relativePath}${joiner}v=${encodeURIComponent(version)}`;
}

function injectBlogImagePreloads(html, pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const links = ['<link rel="preload" href="/blog/posts.json" as="fetch" crossorigin />'];
  const seen = new Set();

  const addImagePreload = (relativePath, version) => {
    if (!relativePath || seen.has(relativePath)) {
      return;
    }
    seen.add(relativePath);
    const versionedPath = blogAssetUrl(relativePath, version);
    links.push(`<link rel="preload" href="${escapeHtml(absoluteUrl(versionedPath))}" as="image" />`);
  };

  if (normalized === "/blog") {
    loadBlogPosts()
      .slice(0, 4)
      .forEach((post) => addImagePreload(post.coverImage, post.dateModified || post.date));
  } else if (normalized.startsWith("/blog/") && normalized.length > 6) {
    const post = getBlogPostBySlug(decodeURIComponent(normalized.slice(6)));
    if (post && Array.isArray(post.blocks)) {
      const version = post.dateModified || post.date;
      post.blocks.forEach((block) => {
        if (block?.type === "img" && block.src) {
          addImagePreload(block.src, version);
        }
      });
    }
  }

  if (!links.length) {
    return html;
  }

  const block = `<!-- peedee-blog-preloads:start -->\n    ${links.join("\n    ")}\n    <!-- peedee-blog-preloads:end -->`;
  if (html.includes("<!-- peedee-blog-preloads:start -->")) {
    return html.replace(/<!-- peedee-blog-preloads:start -->[\s\S]*?<!-- peedee-blog-preloads:end -->\s*/i, `${block}\n    `);
  }
  return html.replace("</head>", `    ${block}\n  </head>`);
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
  { loc: "/about", changefreq: "monthly", priority: "0.5" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/review", changefreq: "monthly", priority: "0.4" },
];

function generateSitemapXml() {
  const { getCitySitemapEntries } = require("./city-seo");
  const posts = loadBlogPosts();
  const urls = [
    ...STATIC_SITEMAP_PATHS.map((entry) => ({ ...entry, loc: `${CANONICAL_ORIGIN}${entry.loc}` })),
    ...getCitySitemapEntries().map((entry) => ({ ...entry, loc: `${CANONICAL_ORIGIN}${entry.loc}` })),
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
  buildOrganizationNode,
  buildWebSiteNode,
};

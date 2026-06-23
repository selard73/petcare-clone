const fs = require("fs");
const path = require("path");

const FRAGMENTS_DIR = path.join(__dirname, "fragments");
const MARKER_HEAD_START = "<!-- peedee-seo-head:start -->";
const MARKER_HEAD_END = "<!-- peedee-seo-head:end -->";
const MARKER_CONTENT_START = "<!-- peedee-seo-content:start -->";
const MARKER_CONTENT_END = "<!-- peedee-seo-content:end -->";
const MARKER_SCRIPTS_START = "<!-- peedee-seo-scripts:start -->";
const MARKER_SCRIPTS_END = "<!-- peedee-seo-scripts:end -->";

let fragmentCache = null;

function loadFragments() {
  if (fragmentCache) {
    return fragmentCache;
  }
  fragmentCache = {
    headInject: fs.readFileSync(path.join(FRAGMENTS_DIR, "head-inject.html"), "utf8").trim(),
    seoContent: fs.readFileSync(path.join(FRAGMENTS_DIR, "seo-content.html"), "utf8").trim(),
    bodyScriptsExtra: fs.readFileSync(path.join(FRAGMENTS_DIR, "body-scripts-extra.html"), "utf8").trim(),
  };
  return fragmentCache;
}

function stripBetween(html, start, end) {
  const pattern = new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\s*`, "g");
  return html.replace(pattern, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractExecutableScripts(html) {
  const scripts = [];
  const pattern = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi;
  let match = pattern.exec(html);
  while (match) {
    const attrs = match[1] || "";
    if (/type=["']application\/ld\+json["']/i.test(attrs)) {
      match = pattern.exec(html);
      continue;
    }
    if (/src=["']https:\/\/www\.googletagmanager\.com/i.test(attrs)) {
      match = pattern.exec(html);
      continue;
    }
    scripts.push({ attrs: attrs.trim(), body: match[2] });
    match = pattern.exec(html);
  }
  return scripts;
}

function scriptKey(script) {
  return `${script.attrs}|${script.body}`.replace(/\s+/g, " ").trim();
}

function scriptToHtml(script) {
  if (script.attrs) {
    return `<script ${script.attrs}>${script.body}</script>`;
  }
  return `<script>${script.body}</script>`;
}

function removeExecutableScripts(html) {
  return html.replace(/<script(?![^>]*type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, "");
}

function removeSeoContentBlock(html) {
  let result = stripBetween(html, MARKER_CONTENT_START, MARKER_CONTENT_END);
  return result.replace(/<div id="seo-content"[\s\S]*?(?=<div id="container")/i, "");
}

function removeFigmaMetaTags(html) {
  return html
    .replace(/<meta id="meta-[^"]*"[^>]*>/gi, "")
    .replace(/<title id="title-[^"]*"[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<link rel="canonical"[^>]*>/gi, "")
    .replace(/<meta[\s\S]*?\bname=["']description["'][\s\S]*?\/?>/gi, "")
    .replace(/<meta[\s\S]*?\bname=["']robots["'][\s\S]*?\/?>/gi, "")
    .replace(/<meta[\s\S]*?\bname=["']title["'][\s\S]*?\/?>/gi, "")
    .replace(/<meta[\s\S]*?\bproperty=["']og:[^"']+["'][\s\S]*?\/?>/gi, "")
    .replace(/<meta[\s\S]*?\bname=["']twitter:[^"']+["'][\s\S]*?\/?>/gi, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "");
}

function fixComponentsStylesheet(html) {
  const cssMatch = html.match(/href="(\/_components\/v2\/[^"]+\.css)"/i);
  const cssHref = cssMatch ? cssMatch[1] : "/_components/v2/eadba943d2368c4e58773ef46d62f7a9faa60533.css";
  const asyncCss = `<link rel="preload" href="${cssHref}" as="style" onload="this.onload=null;this.rel='stylesheet'" crossorigin />\n    <noscript><link rel="stylesheet" href="${cssHref}" /></noscript>`;
  let result = html.replace(/<link[^>]*href="\/_components\/v2\/[^"]+\.css"[^>]*>\s*/gi, "");
  result = result.replace(
    /<noscript>\s*<link rel="stylesheet" href="\/_components\/v2\/[^"]+\.css"\s*\/>\s*<\/noscript>\s*/gi,
    "",
  );
  if (result.includes('id="ssr-css"')) {
    result = result.replace(/(<style id="ssr-css">[\s\S]*?<\/style>\s*)/i, `$1${asyncCss}\n    `);
  } else if (result.includes("</head>")) {
    result = result.replace("</head>", `    ${asyncCss}\n  </head>`);
  }
  return result;
}

function orderScripts(figmaScripts) {
  const seen = new Set();
  const ordered = [];
  const pushUnique = (script) => {
    const key = scriptKey(script);
    if (seen.has(key)) return;
    seen.add(key);
    ordered.push(script);
  };

  const isModule = (script) => /type=["']module["']/i.test(script.attrs);
  const isCountry = (script) => /data-template-id=["']country-code["']/i.test(script.attrs);
  const isClassNames = (script) => script.body.includes("__serverRenderedCSSClassNames");
  const isCategory = (script) => script.body.includes("categoryPaths");
  const isFetch = (script) => script.body.includes("api.airtable.com");
  const isGtag = (script) => script.body.includes("dataLayer") || script.body.includes("gtag(");
  const isSeoTitle = (script) => script.body.includes("applySeoTitle");

  for (const script of figmaScripts) {
    if (!isModule(script) && !isCountry(script) && !isClassNames(script) && !isCategory(script) && !isFetch(script) && !isGtag(script) && !isSeoTitle(script)) {
      pushUnique(script);
    }
  }
  for (const script of figmaScripts) {
    if (isCountry(script)) pushUnique(script);
  }
  for (const script of figmaScripts) {
    if (isModule(script)) pushUnique(script);
  }

  return ordered;
}

function applySeoToIndexHtml(html) {
  const fragments = loadFragments();
  let result = html;

  result = stripBetween(result, MARKER_HEAD_START, MARKER_HEAD_END);
  result = stripBetween(result, MARKER_CONTENT_START, MARKER_CONTENT_END);
  result = stripBetween(result, MARKER_SCRIPTS_START, MARKER_SCRIPTS_END);

  const figmaScripts = extractExecutableScripts(result);
  result = removeExecutableScripts(result);
  result = removeSeoContentBlock(result);
  result = removeFigmaMetaTags(result);
  result = fixComponentsStylesheet(result);
  result = result.replace(/enableMetaTags:\s*true/g, "enableMetaTags: false");

  result = result.replace(
    /(<meta charset="[^"]*"\s*\/?>)/i,
    `$1\n    ${MARKER_HEAD_START}\n    ${fragments.headInject}\n    ${MARKER_HEAD_END}`,
  );

  const orderedFigmaScripts = orderScripts(figmaScripts)
    .map(scriptToHtml)
    .join("\n    ");

  const scriptBlock = [
    MARKER_SCRIPTS_START,
    MARKER_CONTENT_START,
    fragments.seoContent,
    MARKER_CONTENT_END,
    fragments.bodyScriptsExtra.trim(),
    orderedFigmaScripts,
    MARKER_SCRIPTS_END,
  ]
    .filter(Boolean)
    .join("\n    ");

  result = result.replace(/<\/body>/i, `    ${scriptBlock}\n  </body>`);

  return result;
}

module.exports = {
  applySeoToIndexHtml,
  loadFragments,
};

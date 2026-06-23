(function () {
  var categoryPaths = {
    "/grooming": "grooming",
    "/training": "training",
    "/boarding": "boarding",
    "/vet-care": "vet",
    "/vet": "vet",
    "/about": "about",
    "/contact": "about",
  };
  var page = categoryPaths[window.location.pathname];
  if (page && !window.location.hash) {
    window.location.replace("/#" + page);
  }
})();

window.__serverRenderedCSSClassNames = {
  "css-uwf2km": '{"position":"relative","flex":"1 0 0","display":"block"}',
  "css-fou3uo": '{"minHeight":1,"width":"100%","height":"100dvh"}',
};

(function () {
  var TABLE_BASE = "https://api.airtable.com/v0/app0120M8RAwOR635/tblM97NVRfmIPsxTh";
  var nativeFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    init = init || {};
    try {
      var originalUrl = typeof input === "string" ? input : input.url;
      if (originalUrl && originalUrl.startsWith(TABLE_BASE)) {
        var src = new URL(originalUrl);
        var suffix = src.pathname.replace("/v0/app0120M8RAwOR635/tblM97NVRfmIPsxTh", "");
        var targetUrl = "/api/airtable" + suffix + src.search;
        var forwarded = Object.assign({}, init);
        if (forwarded.headers) {
          var headers = new Headers(forwarded.headers);
          headers.delete("authorization");
          forwarded.headers = headers;
        } else {
          forwarded.headers = {};
        }
        var sessionToken = localStorage.getItem("accessToken");
        if (sessionToken) {
          var sessionHeaders = new Headers(forwarded.headers);
          sessionHeaders.set("X-Pawsitively-Session", sessionToken);
          forwarded.headers = sessionHeaders;
        }
        return nativeFetch(targetUrl, forwarded);
      }
    } catch (e) {
      // Fallback to native fetch.
    }
    return nativeFetch(input, init);
  };
})();

(function () {
  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-5LESZ1G423";
  document.head.appendChild(gtagScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-5LESZ1G423");
  document.addEventListener("DOMContentLoaded", function () {
    function trackPawsitivelyPage() {
      if (typeof gtag !== "function") return;
      var hashPage = (window.location.hash || "#home").slice(1) || "home";
      gtag("event", "page_view", {
        page_title: hashPage,
        page_path: "/" + hashPage,
      });
    }
    window.addEventListener("hashchange", trackPawsitivelyPage);
    window.addEventListener("load", trackPawsitivelyPage);
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  var seoTitle = "Pet Services in Darlington & Florence SC | Peedee Pet Care";
  function applySeoTitle() {
    if (document.title !== seoTitle) {
      document.title = seoTitle;
    }
    var metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle && metaTitle.getAttribute("content") !== seoTitle) {
      metaTitle.setAttribute("content", seoTitle);
    }
  }
  applySeoTitle();
  window.addEventListener("load", applySeoTitle);
  setTimeout(applySeoTitle, 1500);
});

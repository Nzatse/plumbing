(function () {
  if (window.__skyviewModernizeLoaded) return;
  window.__skyviewModernizeLoaded = true;

  var CALL_HREF = "tel:+17633709944";

  function ensureNativeQuoteForm() {
    window.SkyviewChatConfig = Object.assign({}, window.SkyviewChatConfig || {}, {
      endpoint: "/api/chat-submit",
      callHref: CALL_HREF,
      termsHref: "/terms.html",
      launcherText: "GET A QUOTE",
      title: "GET A QUOTE",
      showLauncher: false,
      inlineSelector: ".sv-native-quote-inline"
    });

    if (!document.querySelector('link[href="/assets/native-chat.css"]')) {
      var css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "/assets/native-chat.css";
      document.head.appendChild(css);
    }

    if (!document.querySelector('script[src="/assets/native-chat.js"]')) {
      var js = document.createElement("script");
      js.src = "/assets/native-chat.js";
      js.defer = true;
      document.body.appendChild(js);
    }
  }

  function addBodyClass() {
    if (document.body) document.body.classList.add("modernized");
  }

  function ensureMainId() {
    var root = document.getElementById("root");
    if (root && !root.id) root.id = "main-content";
    if (root) root.setAttribute("tabindex", "-1");
  }

  function addSkipLink() {
    if (document.querySelector(".sv-skip-link")) return;
    var link = document.createElement("a");
    link.className = "sv-skip-link";
    link.href = "#main-content";
    link.textContent = "Skip to main content";
    document.body.appendChild(link);
  }

  function addMobileCallPill() {
    if (document.querySelector(".sv-mobile-call")) return;
    var a = document.createElement("a");
    a.className = "sv-mobile-call";
    a.href = CALL_HREF;
    a.textContent = "Call Now (763) 370-9944";
    document.body.appendChild(a);
  }

  function titleFromSlug(slug) {
    return slug
      .split("-")
      .filter(Boolean)
      .map(function (part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(" ");
  }

  function injectPageSchema() {
    var old = document.getElementById("sv-page-schema");
    if (old) old.remove();

    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    var parts = path.split("/").filter(Boolean);
    var scripts = [];

    var breadcrumb = [{ "@type": "ListItem", position: 1, name: "Home", item: "https://skyviewplumbingmn.com/" }];
    if (parts.length >= 1) {
      breadcrumb.push({
        "@type": "ListItem",
        position: 2,
        name: titleFromSlug(parts[0]),
        item: "https://skyviewplumbingmn.com/" + parts[0]
      });
    }
    if (parts.length >= 2) {
      breadcrumb.push({
        "@type": "ListItem",
        position: 3,
        name: titleFromSlug(parts[1]),
        item: "https://skyviewplumbingmn.com" + path
      });
    }
    scripts.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb
    });

    if (parts[0] === "services" && parts[1]) {
      scripts.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: titleFromSlug(parts[1]),
        serviceType: titleFromSlug(parts[1]) + " Service",
        areaServed: "Minnesota",
        provider: {
          "@type": "Plumber",
          name: "Skyview Plumbing",
          telephone: "+1-763-370-9944",
          url: "https://skyviewplumbingmn.com"
        },
        url: "https://skyviewplumbingmn.com" + path
      });
    }

    if (parts[0] === "blog" && parts[1]) {
      scripts.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: document.title.replace(/\s*\|\s*Skyview Plumbing\s*$/i, "") || titleFromSlug(parts[1]),
        author: { "@type": "Organization", name: "Skyview Plumbing" },
        publisher: {
          "@type": "Organization",
          name: "Skyview Plumbing",
          logo: {
            "@type": "ImageObject",
            url: "https://skyviewplumbingmn.com/images/og-image.png"
          }
        },
        mainEntityOfPage: "https://skyviewplumbingmn.com" + path,
        dateModified: new Date().toISOString().slice(0, 10)
      });
    }

    if (parts[0] === "locations" && parts[1]) {
      scripts.push({
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: "Skyview Plumbing - " + titleFromSlug(parts[1]),
        areaServed: titleFromSlug(parts[1]) + ", Minnesota",
        telephone: "+1-763-370-9944",
        url: "https://skyviewplumbingmn.com" + path
      });
    }

    var script = document.createElement("script");
    script.id = "sv-page-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(scripts.length === 1 ? scripts[0] : scripts);
    document.head.appendChild(script);
  }

  function wireReveal() {
    var targets = document.querySelectorAll("section, article, [class*='rounded-xl'][class*='border'], [class*='shadow-sm']");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach(function (el) {
      if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
      observer.observe(el);
    });
  }

  function addSmartCtaBlock() {
    var root = document.getElementById("root");
    if (!root) return;
    if (document.querySelector(".sv-smart-cta")) return;

    var block = document.createElement("section");
    block.className = "sv-smart-cta";
    block.innerHTML =
      '<h3>Need Fast Plumbing Help?</h3>' +
      '<p>Talk to a licensed local plumber now. Emergency service is available 24/7.</p>' +
      '<div class="sv-smart-cta-actions">' +
      '<a class="sv-smart-cta-primary" href="tel:+17633709944">Call (763) 370-9944</a>' +
      '<a class="sv-smart-cta-secondary" href="/services">View Services</a>' +
      "</div>";
    root.appendChild(block);
  }

  function tightenMobileNavBehavior() {
    if (window.__svNavBound) return;
    window.__svNavBound = true;

    document.addEventListener("click", function (event) {
      if (window.innerWidth > 900) return;
      var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (!link) return;
      var inDialog = link.closest('[role="dialog"]');
      if (!inDialog) return;
      setTimeout(function () {
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      }, 0);
    });
  }

  function init() {
    ensureNativeQuoteForm();
    addBodyClass();
    ensureMainId();
    addSkipLink();
    addMobileCallPill();
    wireReveal();
    addSmartCtaBlock();
    injectPageSchema();
    tightenMobileNavBehavior();
  }

  var booted = false;
  function safeInit() {
    if (booted) return;
    booted = true;
    init();
    setTimeout(init, 700);
    setTimeout(init, 1800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
  } else {
    safeInit();
  }

  var observer = new MutationObserver(function () {
    init();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();

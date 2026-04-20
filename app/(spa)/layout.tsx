import type { Metadata } from "next";
import ViteLoader from "../components/ViteLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://skyviewplumbingmn.com"),
  authors: [{ name: "Skyview Plumbing" }],
  keywords: "plumber Minnesota, plumbing services, emergency plumber, water heater repair, drain cleaning, Minnesota plumbing",
  openGraph: {
    type: "website",
    siteName: "Skyview Plumbing",
    images: [{ url: "/images/pages/services-hero.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skyviewplumbing",
    images: "/images/og-image.png",
  },
  robots: { index: true, follow: true },
  verification: { google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION" },
};

export default function SpaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" crossOrigin="" href="/assets/index-xZl4j1Da.css" />
        <link rel="stylesheet" href="/assets/modernize.css" /> 
        {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-57MWCSH3');`,
            }}
          />
          {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning>
        {/* Mount point for the Vite-built React SPA */}
        <div id="root" suppressHydrationWarning />
        {/* children provides Next.js routing context; pages return null */}
        {children}
        {/* Loads Vite bundle + modernize.js after Next.js hydration to avoid mismatches */}
        <ViteLoader />

        {/* Inline script to add "Contact" link dynamically */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function waitForMenuAndFooter() {
        // Add Contact link
        function addContactLink() {
          var menu = document.querySelector('.flex.justify-between.items-center.h-24 > div.hidden.lg\\\\:flex.items-center.gap-6');
          if (menu && !menu.querySelector('a[href="/contact"]')) {
            var link = document.createElement('a');
            link.href = '/contact';
            link.textContent = 'Contact Us';
            link.className = 'font-heading font-medium text-foreground hover:text-primary transition-colors';
            menu.appendChild(link);
          }
        }

        // Append LLC to footer logo
        function appendLLCLogo() {
          var footerLogo = document.querySelector('footer a.flex.items-center.gap-3 h3');
          if (footerLogo && !footerLogo.textContent.includes('LLC')) {
            footerLogo.textContent += ' LLC';
          }
        }

        // Append LLC to copyright
        function appendLLCCopyright() {
          var copyrightEl = document.querySelector('p[data-sv-legal-links="true"]');
          if (copyrightEl && !copyrightEl.textContent.includes('LLC')) {
            copyrightEl.innerHTML = copyrightEl.innerHTML.replace('Skyview Plumbing.', 'Skyview Plumbing LLC.');
          }
        }

        // Initial attempt
        addContactLink();
        appendLLCLogo();
        appendLLCCopyright();

        // Retry until menu & footer exist
        var retryInterval = setInterval(function() {
          addContactLink();
          appendLLCLogo();
          appendLLCCopyright();
        }, 100);

        // Stop retry after 5 seconds
        setTimeout(function() {
          clearInterval(retryInterval);
        }, 5000);

        // Reload on SPA route change
        var lastPath = window.location.pathname;
        function checkRouteChange() {
          if (window.location.pathname !== lastPath) {
            lastPath = window.location.pathname;
            window.location.reload();
          }
        }

        window.addEventListener('popstate', checkRouteChange);
        var pushState = history.pushState;
        history.pushState = function() {
          pushState.apply(this, arguments);
          checkRouteChange();
        };
      })();
    `,
          }}
        />
      </body>
    </html>
  );
}

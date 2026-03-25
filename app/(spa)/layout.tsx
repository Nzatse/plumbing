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
      (function waitForMenu() {
        // Add Contact link
        function addLink() {
          var menu = document.querySelector('.flex.justify-between.items-center.h-24 > div.hidden.lg\\\\:flex.items-center.gap-6');
          if (menu && !menu.querySelector('a[href="/contact"]')) {
            var link = document.createElement('a');
            link.href = '/contact';
            link.textContent = 'Contact Us';
            link.className = 'font-heading font-medium text-foreground hover:text-primary transition-colors';
            menu.appendChild(link);
            console.log('Contact link added!');
          }
        }

        // Initial attempt
        addLink();

        // Retry until menu exists
        var retryInterval = setInterval(function() {
          addLink();
        }, 100);

        // Stop retry after 5 seconds
        setTimeout(function() {
          clearInterval(retryInterval);
        }, 5000);

        // === Reload page on route change ===
        var lastPath = window.location.pathname;

        function checkRouteChange() {
          if (window.location.pathname !== lastPath) {
            lastPath = window.location.pathname;
            console.log('Route changed, reloading page...');
            window.location.reload();
          }
        }

        // Listen to SPA navigation events
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
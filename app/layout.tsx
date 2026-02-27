import type { Metadata } from "next";
import ViteLoader from "./components/ViteLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://skyviewplumbingmn.com"),
  authors: [{ name: "Skyview Plumbing" }],
  keywords: "plumber Minnesota, plumbing services, emergency plumber, water heater repair, drain cleaning, Minnesota plumbing",
  openGraph: {
    type: "website",
    siteName: "Skyview Plumbing",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skyviewplumbing",
    images: "/images/og-image.png",
  },
  robots: { index: true, follow: true },
  verification: { google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION" },
};

export default function RootLayout({
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
      </body>
    </html>
  );
}


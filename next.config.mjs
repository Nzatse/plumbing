/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Top-level .html → clean paths (301 permanent)
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/locations.html", destination: "/locations", permanent: true },
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      // Sub-page .html → clean paths (301 permanent)
      { source: "/services/:slug.html", destination: "/services/:slug", permanent: true },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: true },
      { source: "/locations/:slug.html", destination: "/locations/:slug", permanent: true },
      // Legacy service slugs → canonical slugs (301 permanent)
      { source: "/services/bathtubs", destination: "/services/shower-bathtub-services", permanent: true },
      { source: "/services/piping-repiping", destination: "/services/pipe-installation-repiping", permanent: true },
      { source: "/services/garbage-disposals", destination: "/services/garbage-disposal-services", permanent: true },
      { source: "/services/gas-lines", destination: "/services/gas-line-services", permanent: true },
    ];
  },
};

export default nextConfig;

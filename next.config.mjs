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
      // Sub-page .html → clean paths (301 permanent)
      { source: "/services/:slug.html", destination: "/services/:slug", permanent: true },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: true },
      { source: "/locations/:slug.html", destination: "/locations/:slug", permanent: true },
    ];
  },
};

export default nextConfig;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Plumbing Services",
};

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Tips, guides, and news from our plumbing experts.</p>
    </div>
  );
}

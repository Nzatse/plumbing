import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Plumbing Services",
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our team and values.</p>
    </div>
  );
}

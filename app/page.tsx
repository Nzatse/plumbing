import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Plumbing Services",
};

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Plumbing Services</h1>
      <p>Professional plumbing services you can trust.</p>
    </div>
  );
}

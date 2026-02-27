import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Plumbing Services",
};

export default function LocationsPage() {
  return (
    <div>
      <h1>Service Locations</h1>
      <p>We serve the Twin Cities metro area and surrounding communities.</p>
    </div>
  );
}

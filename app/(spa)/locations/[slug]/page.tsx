import type { Metadata } from "next";

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = titleCase(slug);
  return {
    title: `Plumber in ${city}, MN | Skyview Plumbing`,
    description: `Professional plumbing services in ${city}, Minnesota. 24/7 emergency repairs, water heaters, drain cleaning, and more.`,
    alternates: { canonical: `https://skyviewplumbingmn.com/locations/${slug}` },
    openGraph: {
      url: `https://skyviewplumbingmn.com/locations/${slug}`,
      title: `Plumber in ${city}, MN | Skyview Plumbing`,
      description: `Professional plumbing services in ${city}, Minnesota. 24/7 emergency repairs, water heaters, drain cleaning, and more.`,
    },
    twitter: {
      title: `Plumber in ${city}, MN | Skyview Plumbing`,
      description: `Professional plumbing services in ${city}, Minnesota. 24/7 emergency repairs, water heaters, drain cleaning, and more.`,
    },
  };
}

export function generateStaticParams() {
  return [
    "blaine",
    "bloomington",
    "coon-rapids",
    "eagan",
    "eden-prairie",
    "edina",
    "lakeville",
    "maple-grove",
    "minnetonka",
    "plymouth",
    "st-paul",
    "woodbury",
  ].map((slug) => ({ slug }));
}

export default function LocationPage() {
  return null;
}

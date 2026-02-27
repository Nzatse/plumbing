import type { Metadata } from "next";

// Metadata per service slug
const serviceMeta: Record<string, { title: string; description: string }> = {
  bathtubs: {
    title: "Bathtubs | Skyview Plumbing",
    description: "Bathtub installation, reglazing, and repair services to refresh your bathroom.",
  },
  "emergency-plumbing": {
    title: "Emergency Plumbing Services | Skyview Plumbing",
    description: "24/7 emergency plumbing response for leaks, burst pipes, and urgent issues.",
  },
  "garbage-disposals": {
    title: "Garbage Disposals | Skyview Plumbing",
    description: "Installation, repair, and maintenance of garbage disposal units.",
  },
  "gas-lines": {
    title: "Gas Lines | Skyview Plumbing",
    description: "Safe gas line installation, repair, and leak testing services.",
  },
  "leak-detection": {
    title: "Leak Detection | Skyview Plumbing",
    description: "Fast, accurate water leak detection to prevent damage and save costs.",
  },
  "piping-repiping": {
    title: "Piping & Repiping | Skyview Plumbing",
    description: "Piping inspection, partial or full repiping services for old or damaged systems.",
  },
  "plumbing-repairs": {
    title: "Plumbing Repairs | Skyview Plumbing",
    description: "General plumbing repairs — from fixtures to pipework, we handle it all.",
  },
};

const defaultMeta = {
  title: "Skyview Plumbing - Minnesota",
  description:
    "Professional residential and commercial plumbing services in Minnesota. 24/7 emergency repairs, water heaters, drain cleaning, and more.",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMeta[slug] ?? defaultMeta;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://skyviewplumbingmn.com/services/${slug}` },
    openGraph: {
      url: `https://skyviewplumbingmn.com/services/${slug}`,
      title: meta.title,
      description: meta.description,
    },
    twitter: { title: meta.title, description: meta.description },
  };
}

export function generateStaticParams() {
  return [
    "bathtubs",
    "drain-cleaning",
    "drain-repairs",
    "emergency-plumbing",
    "faucet-repair-replacement",
    "garbage-disposal-services",
    "garbage-disposals",
    "gas-line-services",
    "gas-lines",
    "leak-detection",
    "maintenance-tune-ups",
    "pipe-installation-repiping",
    "pipe-repair",
    "piping-repiping",
    "plumbing-installation",
    "plumbing-repairs",
    "sewer-line-repair",
    "shower-bathtub-services",
    "sink-repair-replacement",
    "sump-pump-services",
    "tankless-water-heaters",
    "toilet-repair-installation",
    "water-filtration-systems",
    "water-heater-installation",
    "water-heater-repair",
    "water-line-repair",
    "water-softener-services",
  ].map((slug) => ({ slug }));
}

export default function ServicePage() {
  return null;
}

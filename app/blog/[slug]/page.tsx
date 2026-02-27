import type { Metadata } from "next";

const blogMeta: Record<string, { title: string; description: string }> = {
  "benefits-tankless-water-heaters": {
    title: "The Benefits of Switching to a Tankless Water Heater | Skyview Plumbing Blog",
    description:
      "The Benefits of Switching to a Tankless Water Heater — expert tips and practical advice from Skyview Plumbing.",
  },
  "choosing-right-toilet": {
    title: "A Homeowner's Guide to Choosing the Right Toilet | Skyview Plumbing Blog",
    description:
      "A Homeowner's Guide to Choosing the Right Toilet — expert tips and practical advice from Skyview Plumbing.",
  },
  "common-drain-clog-causes": {
    title: "5 Common Causes of Drain Clogs | Skyview Plumbing Blog",
    description: "5 Common Causes of Drain Clogs — expert tips and practical advice from Skyview Plumbing.",
  },
  "garbage-disposal-maintenance": {
    title: "Garbage Disposal Maintenance Tips | Skyview Plumbing Blog",
    description: "Garbage Disposal Maintenance Tips — expert tips and practical advice from Skyview Plumbing.",
  },
  "preparing-home-plumbing-vacation": {
    title: "Preparing Your Home Plumbing for Vacation | Skyview Plumbing Blog",
    description:
      "Preparing Your Home Plumbing for Vacation — expert tips and practical advice from Skyview Plumbing.",
  },
  "prevent-frozen-pipes-minnesota": {
    title: "How to Prevent Frozen Pipes in Minnesota Winters | Skyview Plumbing Blog",
    description:
      "How to Prevent Frozen Pipes in Minnesota Winters — expert tips and practical advice from Skyview Plumbing.",
  },
  "signs-you-need-water-heater-replacement": {
    title: "7 Signs You Need a Water Heater Replacement | Skyview Plumbing Blog",
    description:
      "7 Signs You Need a Water Heater Replacement — expert tips and practical advice from Skyview Plumbing.",
  },
  "water-leak-detection-tips": {
    title: "Early Water Leak Detection | Skyview Plumbing Blog",
    description: "Early Water Leak Detection — expert tips and practical advice from Skyview Plumbing.",
  },
  "water-pressure-problems-solutions": {
    title: "Water Pressure Problems and Solutions | Skyview Plumbing Blog",
    description: "Water Pressure Problems and Solutions — expert tips and practical advice from Skyview Plumbing.",
  },
  "when-to-call-emergency-plumber": {
    title: "When to Call an Emergency Plumber | Skyview Plumbing Blog",
    description: "When to Call an Emergency Plumber — expert tips and practical advice from Skyview Plumbing.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = blogMeta[slug] ?? {
    title: "Blog | Skyview Plumbing",
    description: "Expert tips and practical advice from Skyview Plumbing.",
  };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://skyviewplumbingmn.com/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `https://skyviewplumbingmn.com/blog/${slug}`,
      title: meta.title,
      description: meta.description,
    },
    twitter: { title: meta.title, description: meta.description },
  };
}

export function generateStaticParams() {
  return [
    "benefits-tankless-water-heaters",
    "choosing-right-toilet",
    "common-drain-clog-causes",
    "garbage-disposal-maintenance",
    "preparing-home-plumbing-vacation",
    "prevent-frozen-pipes-minnesota",
    "signs-you-need-water-heater-replacement",
    "water-leak-detection-tips",
    "water-pressure-problems-solutions",
    "when-to-call-emergency-plumber",
  ].map((slug) => ({ slug }));
}

export default function BlogPostPage() {
  return null;
}

import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Digital Services | JustSearch UAE",
  description:
    "Discover JustSearch UAE services including web development, SEO & AEO, social media marketing, lead generation, and custom software.",
  path: "/services",
  keywords: ["seo aeo services", "website development uae", "social media marketing services dubai"],
});

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Services />
    </main>
  );
}

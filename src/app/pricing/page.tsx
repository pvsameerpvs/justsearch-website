import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing Plans | JustSearch UAE",
  description:
    "Explore JustSearch UAE pricing plans and packages for websites, performance marketing, and growth-focused digital services.",
  path: "/pricing",
  keywords: ["digital marketing pricing uae", "website package dubai", "seo pricing dubai"],
});

export default function PricingPage() {
  return (
    <main className="pt-20">
      <Pricing />
    </main>
  );
}

import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About JustSearch UAE",
  description:
    "Learn about JustSearch UAE, our growth-focused approach, market expertise, and the team behind high-performance digital campaigns.",
  path: "/about",
  keywords: ["about justsearch", "digital agency dubai", "uae marketing team"],
});

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
    </main>
  );
}

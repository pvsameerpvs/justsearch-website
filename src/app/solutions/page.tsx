import type { Metadata } from "next";
import { Solutions } from "@/components/sections/Solutions";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Growth Solutions | JustSearch UAE",
  description:
    "See how JustSearch UAE builds scalable digital growth systems designed to improve visibility, lead quality, and long-term ROI.",
  path: "/solutions",
  keywords: ["digital growth solutions", "roi marketing uae", "business growth dubai"],
});

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      <Solutions />
    </main>
  );
}

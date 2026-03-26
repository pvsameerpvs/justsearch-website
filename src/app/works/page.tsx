import type { Metadata } from "next";
import { Works } from "@/components/sections/Works";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Work Portfolio | JustSearch UAE",
  description:
    "Browse JustSearch UAE portfolio including website projects, social reels, and creative poster designs for UAE businesses.",
  path: "/works",
  keywords: ["digital agency portfolio uae", "website portfolio dubai", "creative reels agency"],
});

export default function WorksPage() {
  return (
    <main className="pt-20">
      <Works />
    </main>
  );
}

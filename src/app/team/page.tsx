import type { Metadata } from "next";
import { Team } from "@/components/sections/Team";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Team | JustSearch UAE",
  description:
    "Meet the JustSearch UAE team, from leadership to creators and developers, focused on delivering measurable digital growth.",
  path: "/team",
  keywords: ["digital agency team dubai", "justsearch team", "marketing experts uae"],
});

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-24">
      <Team />
    </main>
  );
}

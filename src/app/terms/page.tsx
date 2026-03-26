import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service | JustSearch UAE",
  description:
    "Review the JustSearch UAE terms of service for website use, service scope, and client engagement conditions.",
  path: "/terms",
  keywords: ["terms of service", "justsearch terms", "service agreement uae"],
});

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="uniform-header-title uniform-header-title-light mb-6 text-center">Terms of Service</h1>
      <p className="text-brand-text/70 dark:text-gray-300 leading-relaxed">
        This page describes the terms and conditions for using JustSearch services and website.
      </p>
    </main>
  );
}

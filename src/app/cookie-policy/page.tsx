import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy | JustSearch UAE",
  description:
    "Read the JustSearch UAE cookie policy to learn how cookies and similar tracking technologies are used on this website.",
  path: "/cookie-policy",
  keywords: ["cookie policy", "website cookies", "justsearch cookies"],
});

export default function CookiePolicyPage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="uniform-header-title uniform-header-title-light mb-6 text-center">Cookie Policy</h1>
      <p className="text-brand-text/70 dark:text-gray-300 leading-relaxed">
        This page explains how cookies and similar technologies are used on the JustSearch website.
      </p>
    </main>
  );
}

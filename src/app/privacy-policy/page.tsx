import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | JustSearch UAE",
  description:
    "Read the JustSearch UAE privacy policy to understand how we collect, use, and protect user information.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "justsearch privacy", "data protection uae"],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="uniform-header-title uniform-header-title-light mb-6 text-center">Privacy Policy</h1>
      <p className="text-brand-text/70 dark:text-gray-300 leading-relaxed">
        This page outlines how JustSearch collects, uses, and protects your information.
      </p>
    </main>
  );
}

import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact JustSearch UAE",
  description:
    "Get in touch with JustSearch UAE for SEO, website development, social media marketing, lead generation, and digital growth support.",
  path: "/contact",
  keywords: ["contact digital agency dubai", "seo consultation uae", "justsearch contact"],
});

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}

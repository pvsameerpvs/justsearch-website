import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://justsearchwebdesign.com";

export const SITE_NAME = "JustSearch UAE";
export const DEFAULT_OG_IMAGE = "/fevic.png";
export const DEFAULT_DESCRIPTION =
  "UAE-focused digital growth partner for website development, SEO & AEO, social media marketing, lead generation, and business software.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 364,
          height: 355,
          alt: "JustSearch icon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

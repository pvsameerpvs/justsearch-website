import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Spectral } from "next/font/google";
import "./globals.css";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, getSiteUrl } from "@/lib/seo";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const metadataBase = new URL(getSiteUrl());

export const metadata: Metadata = {
  metadataBase,
  alternates: {
    canonical: "/",
  },
  title: "JustSearch UAE | Complete Digital Growth Partner",
  description: DEFAULT_DESCRIPTION,
  keywords: ["digital marketing UAE", "business directory UAE", "website development Dubai", "SEO UAE", "lead generation UAE"],
  category: "marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/fevic.png",
    shortcut: "/fevic.png",
    apple: "/fevic.png",
  },
  openGraph: {
    title: "JustSearch UAE | Complete Digital Growth Partner",
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 364,
        height: 355,
        alt: "JustSearch icon",
      },
    ],
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustSearch UAE | Complete Digital Growth Partner",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = getSiteUrl();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl,
    logo: `${siteUrl}/logo-js.png`,
    email: "info@justsearch.com",
    telephone: "+971554617275",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rigga, Damas Tower - Al Maktoum Rd - Rigga Al Buteen",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [
      "https://www.instagram.com/justsearch_dir/",
      "https://www.linkedin.com/company/justsearchuae/posts/?feedView=all",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} ${spectral.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="animate-noise" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

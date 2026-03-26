import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Spectral } from "next/font/google";
import "./globals.css";

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

function getMetadataBase() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://justsearch.ae");
  } catch {
    return new URL("https://justsearch.ae");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "JustSearch UAE | Complete Digital Growth Partner",
  description: "UAE-focused digital marketing and business listing platform. We help local businesses grow online, generate quality leads, and build a strong digital presence.",
  keywords: ["digital marketing UAE", "business directory UAE", "website development Dubai", "SEO UAE", "lead generation UAE"],
  icons: {
    icon: "/fevic.png",
    shortcut: "/fevic.png",
    apple: "/fevic.png",
  },
  openGraph: {
    title: "JustSearch UAE | Complete Digital Growth Partner",
    description: "UAE-focused digital marketing and business listing platform. We help local businesses grow online, generate quality leads, and build a strong digital presence.",
    images: [
      {
        url: "/fevic.png",
        width: 364,
        height: 355,
        alt: "JustSearch icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustSearch UAE | Complete Digital Growth Partner",
    description: "UAE-focused digital marketing and business listing platform. We help local businesses grow online, generate quality leads, and build a strong digital presence.",
    images: ["/fevic.png"],
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <div className="animate-noise" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

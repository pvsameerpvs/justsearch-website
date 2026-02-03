import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JustSearch UAE | Complete Digital Growth Partner",
  description: "UAE-focused digital marketing and business listing platform. We help local businesses grow online, generate quality leads, and build a strong digital presence.",
  keywords: ["digital marketing UAE", "business directory UAE", "website development Dubai", "SEO UAE", "lead generation UAE"],
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
        <link rel="icon" href="/fevic.png" sizes="any" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} font-sans antialiased`}
      >
        <div className="animate-noise" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

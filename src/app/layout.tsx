import type { Metadata } from "next";
import localFont from "next/font/local";
import { OG_IMAGE_ALT, OG_IMAGE_URL, SITE_URL } from "@/lib/seo";
import "./globals.css";

const caixaFont = localFont({
  src: [
    { path: "./fonts/CAIXAStd-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/CAIXAStd-Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/CAIXAStd-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-caixa",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "azulzinha da CAIXA",
  description: OG_IMAGE_ALT,
  openGraph: {
    type: "website",
    images: [{ url: OG_IMAGE_URL, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: OG_IMAGE_URL, alt: OG_IMAGE_ALT }],
  },
  other: {
    image: OG_IMAGE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${caixaFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

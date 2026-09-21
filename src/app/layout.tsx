import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieBanner from "@/components/shared/CookieBanner";
import GtmPageView from "@/components/shared/GtmPageView";
import { JsonLd } from "@/components/shared/JsonLd";
import { GTM_ID, META_PIXEL_ID } from "@/lib/analytics";
import { OG_IMAGE_ALT, OG_IMAGE_URL, SITE_URL } from "@/lib/seo";
import { SOCIAL_LINKS } from "@/lib/social";
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
  robots: {
    index: true,
    follow: true,
  },
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
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "azulzinha da CAIXA",
                url: SITE_URL,
                logo: OG_IMAGE_URL,
                sameAs: [
                  SOCIAL_LINKS.instagram,
                  SOCIAL_LINKS.facebook,
                  SOCIAL_LINKS.linkedin,
                  SOCIAL_LINKS.youtube,
                ],
              },
              {
                "@type": "WebSite",
                name: "azulzinha da CAIXA",
                url: SITE_URL,
              },
            ],
          }}
        />
        {children}
        <CookieBanner />
        <GtmPageView />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${META_PIXEL_ID}');
            fbq('track','PageView');
          `}
        </Script>
        <noscript>
          {/* Facebook's noscript fallback requires a raw pixel img */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            className="hidden"
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const SITE_URL = "https://www.azulzinhadacaixa.com.br";

export const OG_IMAGE_URL = `${SITE_URL}/assets/img/group-maquinas.png`;

export const OG_IMAGE_ALT =
  "A azulzinha da CAIXA tem a solução ideal para você vender mais no presencial, na internet e gerenciar seu negócio com agilidade e segurança. Descubra aqui!";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function pageUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  imageUrl = OG_IMAGE_URL,
  imageAlt = OG_IMAGE_ALT,
  type = "website",
  publishedTime,
  tags,
}: PageMetadataInput): Metadata {
  const url = pageUrl(path);
  const image = {
    url: imageUrl,
    alt: imageAlt,
  };

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph:
      type === "article"
        ? {
            title,
            description,
            url,
            type: "article",
            publishedTime,
            tags,
            images: [image],
          }
        : {
            title,
            description,
            url,
            type: "website",
            images: [image],
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      image: imageUrl,
    },
  };
}

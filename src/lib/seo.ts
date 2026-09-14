import type { Metadata } from "next";

export const SITE_URL = "https://www.azulzinhadacaixa.com.br";

export const OG_IMAGE_URL = "https://azulzinhadacaixa.com.br/assets/img/group-maquinas.png";

export const OG_IMAGE_ALT =
  "A azulzinha da CAIXA tem a solução ideal para você vender mais no presencial, na internet e gerenciar seu negócio com agilidade e segurança. Descubra aqui!";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

function canonicalUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = canonicalUrl(path);
  const image = {
    url: OG_IMAGE_URL,
    alt: OG_IMAGE_ALT,
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
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
      image: OG_IMAGE_URL,
    },
  };
}

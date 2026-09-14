import type { MetadataRoute } from "next";
import { getBlogPosts, parseBlogPostDate } from "@/lib/posts";
import { pageUrl } from "@/lib/seo";

const STATIC_PATHS = [
  "/",
  "/ajuda",
  "/antecipacao-de-vendas",
  "/app",
  "/aviso-de-cookies",
  "/azulzinha-aproxima",
  "/azulzinha-caixa-tem",
  "/azulzinhasmart",
  "/bandeiras-vouchers",
  "/blog",
  "/cliente-loterica",
  "/clover",
  "/crediario-azulzinha",
  "/gestao",
  "/link-pagamento",
  "/lotericas",
  "/maquinas-e-taxas",
  "/maquininhas",
  "/maquininhas/pro",
  "/maquininhas/tef",
  "/pagamento-parcial",
  "/peca-azulzinha",
  "/pix-azulzinha",
  "/politica-de-privacidade",
  "/portal",
  "/programa-gas-do-povo",
  "/recarga-de-celulares",
  "/termo-lgpd",
  "/vendas-online",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = STATIC_PATHS.map((path) => ({
    url: pageUrl(path),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.6,
  })) satisfies MetadataRoute.Sitemap;

  const posts = getBlogPosts().map((post) => {
    const published = parseBlogPostDate(post.date);
    return {
      url: pageUrl(`/blog/${post.postId}`),
      lastModified: published ? new Date(`${published}T00:00:00Z`) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...pages, ...posts];
}

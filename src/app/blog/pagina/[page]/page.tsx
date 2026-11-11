import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "@/components/blog/BlogIndexPage";
import { blogPageCount, blogPagePath } from "@/lib/blog";
import { getBlogPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

interface BlogListPageProps {
  params: Promise<{ page: string }>;
}

export const dynamicParams = false;

/** Page 1 is /blog, so only pages 2..N are generated here. */
export function generateStaticParams() {
  const totalPages = blogPageCount(getBlogPosts());
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

function parsePage(value: string): number | null {
  const page = Number(value);
  const valid = /^\d+$/.test(value) && page >= 2 && page <= blogPageCount(getBlogPosts());
  return valid ? page : null;
}

export async function generateMetadata({ params }: BlogListPageProps): Promise<Metadata> {
  const page = parsePage((await params).page);
  if (!page) return { robots: { index: false, follow: false } };

  return pageMetadata({
    title: `Blog da azulzinha – Página ${page} | azulzinha da CAIXA`,
    description: `Página ${page} dos artigos do Blog da azulzinha: dicas, tutoriais, tendências de mercado e novidades da maquininha de cartões da CAIXA.`,
    path: blogPagePath(page),
  });
}

export default async function BlogListPage({ params }: BlogListPageProps) {
  const page = parsePage((await params).page);
  if (!page) notFound();

  return <BlogIndexPage page={page} />;
}

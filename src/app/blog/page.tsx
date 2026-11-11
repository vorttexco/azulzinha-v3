import type { Metadata } from "next";
import BlogIndexPage from "@/components/blog/BlogIndexPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog da azulzinha | azulzinha da CAIXA",
  description:
    "Fique por dentro das dicas, tutoriais, tendências de mercado e novidades da azulzinha, a maquininha de cartões da CAIXA. Acesse agora e saiba mais.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndexPage page={1} />;
}

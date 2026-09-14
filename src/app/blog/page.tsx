import type { Metadata } from "next";
import { pageMetadata, pageUrl } from "@/lib/seo";
import { getBlogPosts, parseBlogPostDate } from "@/lib/posts";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BlogRouteSwitch from "@/components/blog/BlogRouteSwitch";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Blog da azulzinha | azulzinha da CAIXA",
  description:
    "Fique por dentro das dicas, tutoriais, tendências de mercado e novidades da azulzinha, a maquininha de cartões da CAIXA. Acesse agora e saiba mais.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog da azulzinha",
          url: pageUrl("/blog"),
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: pageUrl(`/blog/${post.postId}`),
            datePublished: parseBlogPostDate(post.date),
          })),
        }}
      />
      <Navbar />
      <HeroSection
        title="Blog da azulzinha"
        description="Fique por dentro das dicas, tutoriais, tendências de mercado e novidades da maquininha da CAIXA."
        checkItems={[]}
        buttonText="Veja mais"
        buttonHref="#blog-destaques"
        backgroundImage="/images/blog/hero-bg.png"
      />
      <Suspense fallback={<BlogRouteSwitch posts={posts} />}>
        <BlogRouteSwitch posts={posts} />
      </Suspense>
      <CtaSection
        description="Preencha o formulário e receba uma oferta personalizada para seu negócio, com as melhores taxas e condições que só a CAIXA pode oferecer para você."
        buttonText="Peça já a sua azulzinha"
        buttonHref="/peca-azulzinha"
      />
      <Footer />
    </main>
  );
}

import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BlogContent from "@/components/blog/BlogContent";
import BlogRouteSwitch from "@/components/blog/BlogRouteSwitch";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { blogPagePath, blogPagePosts } from "@/lib/blog";
import { getBlogPosts, parseBlogPostDate } from "@/lib/posts";
import { pageUrl } from "@/lib/seo";

/** Blog index. Page 1 is /blog; the other pages are /blog/pagina/N. */
export default function BlogIndexPage({ page }: { page: number }) {
  const posts = getBlogPosts();
  const listed = page === 1 ? posts : blogPagePosts(posts, page);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog da azulzinha",
          url: pageUrl(blogPagePath(page)),
          blogPost: listed.map((post) => ({
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
        backgroundImage="/images/blog/hero-bg.webp"
      />
      <Suspense fallback={<BlogContent posts={posts} page={page} />}>
        <BlogRouteSwitch posts={posts} page={page} />
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PostPage from "@/components/blog/PostPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { blogPostImage } from "@/lib/blog";
import { getBlogPost, getBlogPosts, parseBlogPostDate } from "@/lib/posts";
import { OG_IMAGE_URL, pageMetadata, pageUrl, SITE_URL } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.postId }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Not Found | azulzinha da CAIXA",
      description: "A página que tentou acessar não está disponível.",
      robots: { index: false, follow: false },
    };
  }

  const image = blogPostImage(post);

  return pageMetadata({
    title: `${post.title} | azulzinha da CAIXA`,
    description: post.description,
    path: `/blog/${post.postId}`,
    imageUrl: image.url,
    imageAlt: image.alt,
    type: "article",
    publishedTime: parseBlogPostDate(post.date),
    tags: post.category,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const image = blogPostImage(post);
  const url = pageUrl(`/blog/${post.postId}`);
  const published = parseBlogPostDate(post.date);
  const recentPosts = getBlogPosts()
    .filter((item) => item.postId !== post.postId)
    .slice(0, 3);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              image: image.url,
              datePublished: published,
              author: {
                "@type": "Organization",
                name: "azulzinha da CAIXA",
                url: SITE_URL,
              },
              publisher: {
                "@type": "Organization",
                name: "azulzinha da CAIXA",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: OG_IMAGE_URL,
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": url,
              },
              articleSection: post.category,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: pageUrl("/"),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: pageUrl("/blog"),
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: url,
                },
              ],
            },
          ],
        }}
      />
      <Navbar />
      <PostPage post={post} recentPosts={recentPosts} />
      <Footer />
    </main>
  );
}

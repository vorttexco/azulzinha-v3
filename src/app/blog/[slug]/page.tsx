import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PostPage from "@/components/blog/PostPage";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main>
      <Navbar />
      <PostPage slug={slug} />
      <Footer />
    </main>
  );
}

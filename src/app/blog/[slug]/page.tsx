import fs from "fs";
import path from "path";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PostPage from "@/components/blog/PostPage";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "assets", "post.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data.map((post: { postId: string }) => ({ slug: post.postId }));
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

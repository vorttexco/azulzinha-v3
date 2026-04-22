"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "@/components/shared/BlogCard";
import PostContent from "./PostContent";
import PostCtaSection from "./PostCtaSection";
import PostUltimasSection from "./PostUltimasSection";

interface PostPageProps {
  slug: string;
}

export default function PostPage({ slug }: PostPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/assets/post.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const currentPost = useMemo(
    () => posts.find((p) => p.postId === slug),
    [posts, slug]
  );

  const recentPosts = useMemo(
    () => posts.filter((p) => p.postId !== slug).slice(0, 3),
    [posts, slug]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-azul border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <h1 className="text-[32px] font-bold text-azul">Post não encontrado</h1>
        <Link href="/blog" className="btn-laranja">Voltar ao blog</Link>
      </div>
    );
  }

  return (
    <>
      <PostContent post={currentPost} />
      <PostCtaSection />
      <PostUltimasSection posts={recentPosts} />
    </>
  );
}

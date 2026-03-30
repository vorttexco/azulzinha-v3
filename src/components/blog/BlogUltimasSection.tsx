"use client";

import { useState } from "react";
import { BlogPost, BlogCardSmall } from "./BlogCard";

interface BlogUltimasSectionProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 3;

export default function BlogUltimasSection({ posts }: BlogUltimasSectionProps) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <h2 className="text-[26px] lg:text-[38px] leading-[1.2] lg:leading-[1.3] text-laranja mb-6">
          Últimas postagens
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <BlogCardSmall key={post.postId} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
              className="btn-laranja cursor-pointer"
            >
              Ver mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { BlogPost, BlogCardSmall } from "./BlogCard";

interface BlogUltimasSectionProps {
  posts: BlogPost[];
  title?: string;
  showLoadMore?: boolean;
  pageSize?: number;
  loadMoreLabel?: string;
  resetKey?: string;
}

export default function BlogUltimasSection({
  posts,
  title = "Últimas postagens",
  showLoadMore = true,
  pageSize = 3,
  loadMoreLabel = "Ver mais",
  resetKey,
}: BlogUltimasSectionProps) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [pageSize, resetKey]);

  const visiblePosts = showLoadMore ? posts.slice(0, visibleCount) : posts;
  const hasMore = showLoadMore && visibleCount < posts.length;

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <h2 className="text-[26px] lg:text-[38px] leading-[1.2] lg:leading-[1.3] text-laranja mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <BlogCardSmall key={post.postId} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + pageSize)}
              className="btn-laranja cursor-pointer"
            >
              {loadMoreLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

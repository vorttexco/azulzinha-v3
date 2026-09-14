"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { BlogPost } from "@/components/shared/BlogCard";
import BlogContent from "./BlogContent";
import BlogSearchContent from "./BlogSearchContent";

interface BlogRouteSwitchProps {
  posts: BlogPost[];
}

export default function BlogRouteSwitch({ posts }: BlogRouteSwitchProps) {
  const params = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BlogContent posts={posts} />;
  }

  const q = params.get("q");
  const category = params.get("category");
  const isSearchMode = q !== null || category !== null;

  if (isSearchMode) {
    return (
      <BlogSearchContent
        posts={posts}
        q={q ?? ""}
        category={category ?? ""}
      />
    );
  }

  return <BlogContent posts={posts} />;
}

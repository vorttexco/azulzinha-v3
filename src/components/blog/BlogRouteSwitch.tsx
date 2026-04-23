"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BlogContent from "./BlogContent";
import BlogSearchContent from "./BlogSearchContent";

export default function BlogRouteSwitch() {
  const params = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BlogContent />;
  }

  const q = params.get("q");
  const category = params.get("category");
  const isSearchMode = q !== null || category !== null;

  if (isSearchMode) {
    return <BlogSearchContent q={q ?? ""} category={category ?? ""} />;
  }

  return <BlogContent />;
}

"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/components/shared/BlogCard";
import SearchBarSection from "@/components/shared/SearchBarSection";
import BlogDestaquesSection from "./BlogDestaquesSection";
import BlogCategoriasSection from "./BlogCategoriasSection";
import BlogUltimasSection from "@/components/shared/BlogUltimasSection";
import CategoryFilterModal from "@/components/shared/CategoryFilterModal";
import { getCategoriesFromPosts } from "@/lib/categories";

interface BlogContentProps {
  posts: BlogPost[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Gestão financeira");
  const [modalOpen, setModalOpen] = useState(false);

  const destaques = useMemo(
    () => posts.filter((p) => p.type === "destaque"),
    [posts]
  );

  const allNonDestaques = useMemo(
    () => posts.filter((p) => p.type !== "destaque"),
    [posts]
  );

  const categories = useMemo(() => getCategoriesFromPosts(posts), [posts]);

  const buildUrl = (nextQ: string, nextCategory: string) => {
    const params = new URLSearchParams();
    if (nextQ.trim()) params.set("q", nextQ.trim());
    if (nextCategory.trim()) params.set("category", nextCategory.trim());
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(buildUrl(searchQuery, ""));
    }
  };

  const handleCategoryConfirm = (nextCategory: string) => {
    router.push(buildUrl(searchQuery, nextCategory));
  };

  return (
    <>
      <SearchBarSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
        onFilterClick={() => setModalOpen(true)}
      />
      <BlogDestaquesSection posts={destaques} />
      <BlogCategoriasSection
        posts={posts}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogUltimasSection posts={allNonDestaques} />
      <CategoryFilterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        categories={categories}
        onConfirm={handleCategoryConfirm}
      />
    </>
  );
}

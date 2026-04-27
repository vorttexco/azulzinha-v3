"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/components/shared/BlogCard";
import SearchBarSection from "@/components/shared/SearchBarSection";
import BlogUltimasSection from "@/components/shared/BlogUltimasSection";
import CategoryFilterModal from "@/components/shared/CategoryFilterModal";
import { categoryMatches, getCategoriesFromPosts } from "@/lib/categories";

interface BlogSearchContentProps {
  q: string;
  category: string;
}

export default function BlogSearchContent({ q, category }: BlogSearchContentProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState(q);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/assets/post.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  useEffect(() => {
    setSearchQuery(q);
  }, [q]);

  const categories = useMemo(() => getCategoriesFromPosts(posts), [posts]);

  const filteredPosts = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesQuery =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.some((c) => c.toLowerCase().includes(term));
      const matchesCategory = !category || categoryMatches(p.category, category);
      return matchesQuery && matchesCategory;
    });
  }, [posts, q, category]);

  const buildUrl = (nextQ: string, nextCategory: string) => {
    const params = new URLSearchParams();
    if (nextQ.trim()) params.set("q", nextQ.trim());
    if (nextCategory.trim()) params.set("category", nextCategory.trim());
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  const handleSearch = () => {
    router.push(buildUrl(searchQuery, category));
  };

  const handleCategoryConfirm = (nextCategory: string) => {
    router.push(buildUrl(searchQuery, nextCategory));
  };

  const handleClear = () => {
    setSearchQuery("");
    router.push("/blog");
  };

  const resultsTitle = q
    ? `Resultados para "${q}"`
    : category
      ? `Resultados em "${category}"`
      : "Resultados";

  return (
    <>
      <SearchBarSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
        onFilterClick={() => setModalOpen(true)}
        filterActive={!!category}
        onClear={handleClear}
      />
      <div id="blog-destaques">
        <BlogUltimasSection
          posts={filteredPosts}
          title={resultsTitle}
          pageSize={9}
          loadMoreLabel="Carregar mais"
          resetKey={`${q}|${category}`}
        />
      </div>
      <CategoryFilterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        categories={categories}
        initialCategory={category}
        onConfirm={handleCategoryConfirm}
      />
    </>
  );
}

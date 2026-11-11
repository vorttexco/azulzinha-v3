"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/components/shared/BlogCard";
import SearchBarSection from "@/components/shared/SearchBarSection";
import BlogDestaquesSection from "./BlogDestaquesSection";
import BlogCategoriasSection from "./BlogCategoriasSection";
import BlogUltimasSection from "@/components/shared/BlogUltimasSection";
import CategoryFilterModal from "@/components/shared/CategoryFilterModal";
import BlogPagination from "./BlogPagination";
import { blogPageCount, blogPagePosts } from "@/lib/blog";
import { getCategoriesFromPosts } from "@/lib/categories";

const ULTIMAS_ID = "ultimas-postagens";

interface BlogContentProps {
  posts: BlogPost[];
  /** Page of the "Últimas postagens" listing. Pages after the first show only that listing. */
  page?: number;
}

export default function BlogContent({ posts, page = 1 }: BlogContentProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Gestão financeira");
  const [modalOpen, setModalOpen] = useState(false);

  const destaques = useMemo(
    () => posts.filter((p) => p.type === "destaque"),
    [posts]
  );

  const pagePosts = useMemo(() => blogPagePosts(posts, page), [posts, page]);
  const totalPages = useMemo(() => blogPageCount(posts), [posts]);
  const isFirstPage = page === 1;

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
      {isFirstPage && (
        <>
          <BlogDestaquesSection posts={destaques} />
          <BlogCategoriasSection
            posts={posts}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </>
      )}
      {/* The hero button targets #blog-destaques, which only exists on the first page */}
      <div id={isFirstPage ? undefined : "blog-destaques"}>
        <BlogUltimasSection
          id={ULTIMAS_ID}
          posts={pagePosts}
          title={isFirstPage ? undefined : `Últimas postagens – página ${page}`}
          showLoadMore={false}
          footer={
            <BlogPagination
              page={page}
              totalPages={totalPages}
              anchor={ULTIMAS_ID}
            />
          }
        />
      </div>
      <CategoryFilterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        categories={categories}
        onConfirm={handleCategoryConfirm}
      />
    </>
  );
}

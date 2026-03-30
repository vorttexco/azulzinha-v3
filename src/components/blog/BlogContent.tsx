"use client";

import { useState, useEffect, useMemo } from "react";
import { BlogPost } from "./BlogCard";
import BlogSearchSection from "./BlogSearchSection";
import BlogDestaquesSection from "./BlogDestaquesSection";
import BlogCategoriasSection from "./BlogCategoriasSection";
import BlogUltimasSection from "./BlogUltimasSection";

export default function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Gestão financeira");

  useEffect(() => {
    fetch("/assets/post.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  const destaques = useMemo(
    () => posts.filter((p) => p.type === "destaque"),
    [posts]
  );

  const allNonDestaques = useMemo(
    () => posts.filter((p) => p.type !== "destaque"),
    [posts]
  );

  const filteredBySearch = useMemo(() => {
    if (!activeSearch) return { destaques, categorias: posts, ultimas: allNonDestaques };

    const query = activeSearch.toLowerCase();
    const filter = (list: BlogPost[]) =>
      list.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.some((c) => c.toLowerCase().includes(query))
      );

    return {
      destaques: filter(destaques),
      categorias: filter(posts),
      ultimas: filter(allNonDestaques),
    };
  }, [activeSearch, destaques, posts, allNonDestaques]);

  const handleSearch = () => {
    setActiveSearch(searchQuery);
  };

  return (
    <>
      <BlogSearchSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
      />
      <BlogDestaquesSection posts={filteredBySearch.destaques} />
      <BlogCategoriasSection
        posts={filteredBySearch.categorias}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogUltimasSection posts={filteredBySearch.ultimas} />
    </>
  );
}

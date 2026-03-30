"use client";

import { BlogPost, BlogCardLarge, BlogCardSmall } from "./BlogCard";

const CATEGORIES = [
  "Gestão financeira",
  "Meios de pagamento",
  "Gestão de negócios",
  "Tendências de mercado",
];

interface BlogCategoriasSectionProps {
  posts: BlogPost[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

function normalizeCategory(cat: string): string {
  return cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function BlogCategoriasSection({
  posts,
  activeCategory,
  onCategoryChange,
}: BlogCategoriasSectionProps) {
  const filteredPosts = activeCategory
    ? posts.filter((post) =>
        post.category.some(
          (cat) => normalizeCategory(cat) === normalizeCategory(activeCategory)
        )
      )
    : posts;

  const mainPost = filteredPosts[0];
  const sidePosts = filteredPosts.slice(1, 3);

  return (
    <section className="relative bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <h2 className="text-[26px] lg:text-[38px] leading-[1.2] lg:leading-[1.3] text-laranja mb-6">
          Navegue por categoria
        </h2>

        {/* Category pills */}
        <div className="flex gap-4 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {CATEGORIES.map((cat) => {
            const isActive = normalizeCategory(activeCategory) === normalizeCategory(cat);
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(isActive ? "" : cat)}
                className={`shrink-0 px-4 py-3 h-[46px] rounded-[10px] text-[14px] leading-[1.4] cursor-pointer transition-colors shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] ${
                  isActive
                    ? "bg-azul text-white"
                    : "bg-white text-[#003D91]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
            <div className="lg:w-[775px] lg:shrink-0">
              {mainPost && <BlogCardLarge post={mainPost} />}
            </div>

            {sidePosts.length > 0 && (
              <div className="flex flex-col gap-6">
                {sidePosts.map((post) => (
                  <BlogCardSmall key={post.postId} post={post} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-[18px] text-cinza text-center py-10">
            Nenhum post encontrado nesta categoria.
          </p>
        )}
      </div>

      {/* Gradient fade divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_8%,rgba(255,255,255,1)_100%)] pointer-events-none" />
    </section>
  );
}

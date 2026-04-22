import type { BlogPost } from "@/components/shared/BlogCard";

export function normalizeCategory(cat: string): string {
  return cat
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/s\b/g, "")
    .replace(/\b(do|da)\b/g, "de")
    .replace(/\s+/g, " ")
    .trim();
}

function toSentenceCase(value: string): string {
  const lower = value.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function getCategoriesFromPosts(posts: BlogPost[]): string[] {
  const canonicalByNormalized = new Map<string, string>();

  for (const post of posts) {
    for (const cat of post.category) {
      const norm = normalizeCategory(cat);
      if (!canonicalByNormalized.has(norm)) {
        canonicalByNormalized.set(norm, toSentenceCase(cat));
      }
    }
  }

  return Array.from(canonicalByNormalized.values()).sort((a, b) =>
    a.localeCompare(b, "pt-BR")
  );
}

export function categoryMatches(postCategories: string[], target: string): boolean {
  const normTarget = normalizeCategory(target);
  return postCategories.some((c) => normalizeCategory(c) === normTarget);
}

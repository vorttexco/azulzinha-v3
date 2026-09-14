import fs from "fs";
import path from "path";
import type { BlogPost } from "@/components/shared/BlogCard";
import { parsePostDate } from "@/lib/blog";

let cachedPosts: BlogPost[] | null = null;

export function getBlogPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;

  const filePath = path.join(process.cwd(), "public", "assets", "post.json");
  cachedPosts = JSON.parse(fs.readFileSync(filePath, "utf-8")) as BlogPost[];
  return cachedPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.postId === slug);
}

export { parsePostDate as parseBlogPostDate };

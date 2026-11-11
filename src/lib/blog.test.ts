import { describe, expect, it } from "vitest";
import { BLOG_PAGE_SIZE, blogPageCount, blogPagePath, blogPagePosts } from "@/lib/blog";

const posts = [
  { postId: "destaque", type: "destaque" },
  ...Array.from({ length: BLOG_PAGE_SIZE * 2 + 1 }, (_, i) => ({ postId: `post-${i}`, type: "" })),
];

describe("blog pagination", () => {
  it("counts pages over the posts that are not featured", () => {
    expect(blogPageCount(posts)).toBe(3);
    expect(blogPageCount([])).toBe(1);
  });

  it("lists every non-featured post exactly once across the pages", () => {
    const listed = [1, 2, 3].flatMap((page) => blogPagePosts(posts, page).map((p) => p.postId));
    expect(listed).toHaveLength(BLOG_PAGE_SIZE * 2 + 1);
    expect(new Set(listed).size).toBe(listed.length);
    expect(listed).not.toContain("destaque");
  });

  it("uses /blog for the first page and /blog/pagina/N for the others", () => {
    expect(blogPagePath(1)).toBe("/blog");
    expect(blogPagePath(4)).toBe("/blog/pagina/4");
  });
});

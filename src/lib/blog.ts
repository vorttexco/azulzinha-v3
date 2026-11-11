export const BLOG_MEDIA_BASE_URL = "https://azulzinhadacaixa.com.br/blogmidias";

export function blogMediaUrl(filename: string): string {
  return `${BLOG_MEDIA_BASE_URL}/${filename}`;
}

interface BlogPostMedia {
  postId: string;
  altImg: string;
  content: { type: string; data: { src?: string; altImg?: string } | string }[];
}

export function blogPostImage(post: BlogPostMedia): { url: string; alt: string } {
  const banner = post.content.find((block) => block.type === "banner");
  if (banner && typeof banner.data === "object") {
    return {
      url: blogMediaUrl(banner.data.src || `${post.postId}.jpg`),
      alt: banner.data.altImg || post.altImg,
    };
  }

  return { url: blogMediaUrl(`${post.postId}.jpg`), alt: post.altImg };
}

export function parsePostDate(date: string): string | undefined {
  const match = date.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
  if (!match) return undefined;

  const day = match[1].padStart(2, "0");
  const month = match[2].padStart(2, "0");
  const year = match[3].length === 2 ? `20${match[3]}` : match[3];
  const iso = `${year}-${month}-${day}`;
  if (Number.isNaN(Date.parse(`${iso}T00:00:00`))) return undefined;
  return iso;
}

/** Posts per page in the "Últimas postagens" listing of the blog index. */
export const BLOG_PAGE_SIZE = 9;

/** Featured posts have their own section, so the paginated listing leaves them out. */
export function blogListingPosts<T extends { type: string }>(posts: T[]): T[] {
  return posts.filter((post) => post.type !== "destaque");
}

export function blogPageCount(posts: { type: string }[]): number {
  return Math.max(1, Math.ceil(blogListingPosts(posts).length / BLOG_PAGE_SIZE));
}

export function blogPagePosts<T extends { type: string }>(posts: T[], page: number): T[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return blogListingPosts(posts).slice(start, start + BLOG_PAGE_SIZE);
}

/** Page 1 is the blog index itself; the others live under /blog/pagina/N. */
export function blogPagePath(page: number): string {
  return page <= 1 ? "/blog" : `/blog/pagina/${page}`;
}

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

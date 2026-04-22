export const BLOG_MEDIA_BASE_URL = "https://azulzinhadacaixa.com.br/blogmidias";

export function blogMediaUrl(filename: string): string {
  return `${BLOG_MEDIA_BASE_URL}/${filename}`;
}

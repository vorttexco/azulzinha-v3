import Link from "next/link";
import { blogPagePath } from "@/lib/blog";

interface BlogPaginationProps {
  page: number;
  totalPages: number;
  /** Section the browser scrolls to after changing page. */
  anchor: string;
}

const itemClass =
  "flex h-10 min-w-10 items-center justify-center rounded-[6px] px-3 text-[16px] leading-none";

export default function BlogPagination({ page, totalPages, anchor }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const href = (target: number) => `${blogPagePath(target)}#${anchor}`;

  return (
    <nav aria-label="Páginas do blog" className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={href(page - 1)} rel="prev" className={`${itemClass} text-azul hover:bg-[#F1F1F1]`}>
          Anterior
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((target) =>
        target === page ? (
          <span key={target} aria-current="page" className={`${itemClass} bg-azul text-white`}>
            {target}
          </span>
        ) : (
          <Link
            key={target}
            href={href(target)}
            aria-label={`Página ${target}`}
            className={`${itemClass} border border-[#F1F1F1] text-azul hover:bg-[#F1F1F1]`}
          >
            {target}
          </Link>
        ),
      )}
      {page < totalPages && (
        <Link href={href(page + 1)} rel="next" className={`${itemClass} text-azul hover:bg-[#F1F1F1]`}>
          Próxima
        </Link>
      )}
    </nav>
  );
}

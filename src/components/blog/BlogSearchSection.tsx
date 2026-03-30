"use client";

interface BlogSearchSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.5" />
      <path d="M11 11L14.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function BlogSearchSection({
  searchQuery,
  onSearchChange,
  onSearch,
}: BlogSearchSectionProps) {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-10">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="relative w-full lg:w-[464px] h-[56px]">
            <input
              type="text"
              placeholder="O que você procura?"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
              className="w-full h-full rounded-[8px] border border-[#B8B8B8] px-6 text-[16px] leading-[1.4] text-black placeholder:text-[#B8B8B8] outline-none focus:border-azul"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onSearch}
              className="flex items-center justify-center w-[56px] h-[56px] rounded-[6px] bg-linear-to-b from-laranja-claro to-laranja cursor-pointer"
              aria-label="Pesquisar"
            >
              <SearchIcon />
            </button>
            <button
              onClick={onSearch}
              className="flex items-center justify-center h-[56px] w-[114px] rounded-[6px] bg-linear-to-b from-laranja-claro to-laranja text-white text-[16px] cursor-pointer"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

interface SearchBarSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
  onFilterClick?: () => void;
  filterActive?: boolean;
  onClear?: () => void;
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.5" />
      <path d="M11 11L14.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 4L12 12M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5h18M6 12h12M10 19h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function SearchBarSection({
  searchQuery,
  onSearchChange,
  onSearch,
  onFilterClick,
  filterActive = false,
  onClear,
}: SearchBarSectionProps) {
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
              className="w-full h-full rounded-[8px] border border-[#B8B8B8] pl-6 pr-12 text-[16px] leading-[1.4] text-black placeholder:text-[#B8B8B8] outline-none focus:border-azul"
            />
            {onClear && searchQuery && (
              <button
                type="button"
                onClick={onClear}
                aria-label="Limpar busca"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8B8B8] hover:text-azul transition-colors cursor-pointer p-1"
              >
                <ClearIcon />
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onFilterClick ?? onSearch}
              className="relative flex items-center justify-center w-[56px] h-[56px] rounded-[6px] bg-linear-to-b from-laranja-claro to-laranja cursor-pointer"
              aria-label={onFilterClick ? "Filtrar por categoria" : "Pesquisar"}
            >
              {onFilterClick ? <FilterIcon /> : <SearchIcon />}
              {onFilterClick && filterActive && (
                <span
                  aria-label="Filtro ativo"
                  className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-600 border border-white"
                />
              )}
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

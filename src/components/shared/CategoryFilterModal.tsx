"use client";

import { useEffect, useState } from "react";

interface CategoryFilterModalProps {
  open: boolean;
  onClose: () => void;
  categories: string[];
  initialCategory?: string;
  onConfirm: (category: string) => void;
}

export default function CategoryFilterModal({
  open,
  onClose,
  categories,
  initialCategory = "",
  onConfirm,
}: CategoryFilterModalProps) {
  const [selected, setSelected] = useState(initialCategory);

  useEffect(() => {
    if (open) setSelected(initialCategory);
  }, [open, initialCategory]);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[12px] w-[90%] max-w-[520px] p-8 shadow-[0px_10px_30px_0px_rgba(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h3 className="text-azul text-[20px] font-bold leading-[1.3] mb-4">
          Selecione uma categoria:
        </h3>

        <div className="relative">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full h-[48px] rounded-[8px] border border-[#B8B8B8] px-4 pr-10 text-[16px] leading-[1.4] text-black outline-none focus:border-azul appearance-none bg-white cursor-pointer"
          >
            <option value="">Selecione uma opção</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
          >
            <path d="M1 1L6 6L11 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <p className="mt-3 text-[16px] leading-[1.4] text-cinza">
          Categoria selecionada:{" "}
          <span className="text-azul font-bold">
            {selected || "Nenhuma selecionada"}
          </span>
        </p>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              onConfirm(selected);
              onClose();
            }}
            className="flex items-center justify-center h-[56px] w-[200px] rounded-[6px] bg-linear-to-b from-laranja-claro to-laranja text-white text-[16px] cursor-pointer"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import type { ReactNode } from "react";

interface CategorySidebarProps {
    categories: { label: string }[];
    activeIndex: number;
    onSelect: (index: number) => void;
}

function CategorySidebar({ categories, activeIndex, onSelect }: CategorySidebarProps) {
    return (
        <aside className="md:w-72 shrink-0">
            <p className="text-gray-700 text-[18px] font-normal leading-[140%] tracking-normal mb-3">Categorias:</p>
            <ul className="space-y-2 max-h-250 overflow-y-auto px-2 pt-2 -mx-2">
                {categories.map((cat, i) => (
                    <li key={i}>
                        <button
                            onClick={() => onSelect(i)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-[14px] font-normal leading-[140%] tracking-normal transition-colors shadow-[0px_4px_10px_0px_#00000014] ${activeIndex === i
                                ? "bg-azul text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {cat.label}
                        </button>
                    </li>
                ))}
                <li className="h-25" />
                <li className="sticky bottom-0 left-0 right-0 h-25 -mt-25 bg-[linear-gradient(0deg,rgba(255,255,255,1)_35%,rgba(255,255,255,0)_81%)] pointer-events-none list-none" />
            </ul>
        </aside>
    );
}

interface CategorizedLayoutProps {
    title: string;
    subtitle?: string;
    searchPlaceholder?: string;
    search: string;
    onSearchChange: (value: string) => void;
    categories: { label: string }[];
    activeIndex: number;
    onSelectCategory: (index: number) => void;
    heading: string;
    headingAction?: ReactNode;
    children: ReactNode;
}

export default function CategorizedLayout({
    title,
    subtitle,
    searchPlaceholder,
    search,
    onSearchChange,
    categories,
    activeIndex,
    onSelectCategory,
    heading,
    headingAction,
    children,
}: CategorizedLayoutProps) {
    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-azul text-center mb-4">
                    {title}
                </h2>

                {subtitle && (
                    <p className="text-center text-gray-600 text-[16px] lg:text-[18px] leading-[1.4] mb-8">
                        {subtitle}
                    </p>
                )}

                <div className={`flex justify-center ${subtitle ? "mb-10" : "mb-10 mt-4"}`}>
                    <div className="flex items-center gap-4 w-full max-w-125">
                        <input
                            type="text"
                            placeholder={searchPlaceholder ?? "O que você procura?"}
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="flex-1 px-4 py-3 text-gray-600 text-[14px] outline-none bg-white border border-gray-200 rounded-lg shadow-sm"
                        />
                        <button className="shrink-0 text-white font-semibold px-6 py-3 text-[14px] rounded-lg bg-[linear-gradient(177.34deg,#EDAC39_2.43%,#FC8F01_98%)]">
                            Pesquisar
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <CategorySidebar
                        categories={categories}
                        activeIndex={activeIndex}
                        onSelect={onSelectCategory}
                    />

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-azul text-[28px] font-normal leading-[140%] tracking-normal">
                                {heading}
                            </h3>
                            {headingAction}
                        </div>

                        <div className="relative">
                            <div className="max-h-250 overflow-y-auto px-2 pt-2 -mx-2">
                                {children}
                                <div className="h-25" />
                                <div className="sticky bottom-0 left-0 right-0 h-25 -mt-25 bg-[linear-gradient(0deg,rgba(255,255,255,1)_35%,rgba(255,255,255,0)_81%)] pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

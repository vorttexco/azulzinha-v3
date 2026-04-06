"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

// ── FAQ Types ──
export interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

export interface FaqSubCategory {
    title: string;
    items: FaqItem[];
}

export interface FaqCategory {
    label: string;
    subCategories: FaqSubCategory[];
}

// ── CardList Types ──
export interface CardItem {
    logo?: string;
    title: string;
    description: string;
    link?: string;
}

export interface CardCategory {
    label: string;
    items: CardItem[];
}

// ── Shared Sub-components ──

function ToggleIcon({ open }: { open: boolean }) {
    return (
        <span className="shrink-0 w-6 h-6 min-w-6 min-h-6 rounded-full flex items-center justify-center bg-azul">
            {open ? (
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                    <rect x="0" y="0" width="12" height="2" rx="1" fill="white" />
                </svg>
            ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
                    <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
                </svg>
            )}
        </span>
    );
}

function FaqItemAccordion({ item }: { item: FaqItem }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl overflow-hidden border border-[#F1F1F1] shadow-[0px_4px_10px_0px_#00000014]">
            <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <span className="text-gray-800 text-[18px] font-normal leading-[130%] tracking-normal pr-4">
                    {item.question}
                </span>
                <ToggleIcon open={open} />
            </button>
            {open && (
                <div className="px-6 pb-4 pt-1 bg-white text-gray-600 text-[14px] font-normal leading-[140%] tracking-normal">
                    {item.answer}
                </div>
            )}
        </div>
    );
}

function SubCategoryAccordion({ sub, defaultOpen = false }: { sub: FaqSubCategory; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div>
            <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors border border-[#D3D3D3] rounded-xl"
                onClick={() => setOpen(!open)}
            >
                <span className="text-gray-800 text-[18px] font-normal leading-[130%] tracking-normal">
                    {sub.title}
                </span>
                <ToggleIcon open={open} />
            </button>
            {open && (
                <div className="space-y-3 pt-3 pl-12.5">
                    {sub.items.map((item, i) => (
                        <FaqItemAccordion key={i} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

// ── FAQ Content ──

function FaqContent({ category, search }: { category: FaqCategory; search: string }) {
    const filtered = useMemo(() => {
        if (!search.trim()) return category.subCategories;
        const term = search.toLowerCase();
        return category.subCategories
            .map((sub) => ({
                ...sub,
                items: sub.items.filter((item) =>
                    item.question.toLowerCase().includes(term)
                ),
            }))
            .filter((sub) => sub.items.length > 0);
    }, [category.subCategories, search]);

    if (category.subCategories.length === 0) {
        return <p className="text-gray-500 text-[14px]">Conteúdo em breve.</p>;
    }

    if (filtered.length === 0) {
        return <p className="text-gray-500 text-[14px]">Nenhum resultado encontrado.</p>;
    }

    return (
        <div className="space-y-3">
            {filtered.map((sub, i) => (
                <SubCategoryAccordion key={i} sub={sub} defaultOpen={i === 0} />
            ))}
        </div>
    );
}

// ── CardList Content ──

function AppCard({ item }: { item: CardItem }) {
    return (
        <div className="relative rounded-xl border border-[#F1F1F1] shadow-[0px_4px_10px_0px_#00000014] bg-white p-6 flex flex-col">
            {item.link && (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-azul"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
                        <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
                    </svg>
                </a>
            )}
            {item.logo && (
                <div className="h-16 flex items-center mb-4">
                    <Image src={item.logo} alt={item.title} width={120} height={64} className="object-contain max-h-16" />
                </div>
            )}
            <h4 className="text-gray-800 text-[18px] font-semibold leading-[130%] mb-2">
                {item.title}
            </h4>
            <p className="text-gray-600 text-[14px] font-normal leading-[140%] line-clamp-5">
                {item.description}
            </p>
        </div>
    );
}

function CardListContent({ category, sortOrder, search }: { category: CardCategory; sortOrder: "asc" | "desc"; search: string }) {
    const filtered = useMemo(() => {
        let items = category.items;
        if (search.trim()) {
            const term = search.toLowerCase();
            items = items.filter(
                (item) =>
                    item.title.toLowerCase().includes(term) ||
                    item.description.toLowerCase().includes(term)
            );
        }
        return [...items].sort((a, b) =>
            sortOrder === "asc"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        );
    }, [category.items, search, sortOrder]);

    if (filtered.length === 0 && !search.trim()) {
        return <p className="text-gray-500 text-[14px]">Conteúdo em breve.</p>;
    }

    if (filtered.length === 0) {
        return <p className="text-gray-500 text-[14px]">Nenhum resultado encontrado.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item, i) => (
                <AppCard key={i} item={item} />
            ))}
        </div>
    );
}

// ── Category Sidebar ──

function CategorySidebar({
    categories,
    activeIndex,
    onSelect,
}: {
    categories: { label: string }[];
    activeIndex: number;
    onSelect: (index: number) => void;
}) {
    return (
        <aside className="md:w-72 shrink-0">
            <p className="text-gray-700 text-[18px] font-normal leading-[140%] tracking-normal mb-3">Categorias:</p>
            <ul className="space-y-2">
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
            </ul>
        </aside>
    );
}

// ── Main Component (Discriminated Union) ──

type CategorizedSectionProps =
    | {
        variant: "faq";
        data: FaqCategory[];
        title?: string;
        subtitle?: string;
        searchPlaceholder?: string;
    }
    | {
        variant: "cardlist";
        data: CardCategory[];
        title?: string;
        subtitle?: string;
        searchPlaceholder?: string;
    };

export default function CategorizedSection(props: CategorizedSectionProps) {
    const { variant, data, title, subtitle, searchPlaceholder } = props;
    const [activeCategory, setActiveCategory] = useState(0);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const current = data[activeCategory];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-azul text-center mb-4">
                    {title ?? (variant === "faq" ? "Dúvidas frequentes" : "")}
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
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-4 py-3 text-gray-600 text-[14px] outline-none bg-white border border-gray-200 rounded-lg shadow-sm"
                        />
                        <button className="shrink-0 text-white font-semibold px-6 py-3 text-[14px] rounded-lg bg-[linear-gradient(177.34deg,#EDAC39_2.43%,#FC8F01_98%)]">
                            Pesquisar
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <CategorySidebar
                        categories={data}
                        activeIndex={activeCategory}
                        onSelect={setActiveCategory}
                    />

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-azul text-[28px] font-normal leading-[140%] tracking-normal">
                                {current.label}
                            </h3>
                            {variant === "cardlist" && (
                                <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                                    <span>Ordenar por:</span>
                                    <button
                                        onClick={() => setSortOrder("asc")}
                                        className={`font-semibold ${sortOrder === "asc" ? "text-azul" : "text-gray-400"}`}
                                    >
                                        A↑Z
                                    </button>
                                    <button
                                        onClick={() => setSortOrder("desc")}
                                        className={`font-semibold ${sortOrder === "desc" ? "text-azul" : "text-gray-400"}`}
                                    >
                                        Z↓A
                                    </button>
                                </div>
                            )}
                        </div>

                        {variant === "faq" ? (
                            <FaqContent category={current as FaqCategory} search={search} />
                        ) : (
                            <CardListContent category={current as CardCategory} sortOrder={sortOrder} search={search} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

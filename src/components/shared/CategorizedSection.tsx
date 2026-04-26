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

function FaqContent({ category }: { category: FaqCategory }) {
    if (category.subCategories.length === 0) {
        return <p className="text-gray-500 text-[14px]">Conteúdo em breve.</p>;
    }
    return (
        <div className="space-y-3">
            {category.subCategories.map((sub, i) => (
                <SubCategoryAccordion key={i} sub={sub} defaultOpen={i === 0} />
            ))}
        </div>
    );
}

function FaqSearchResults({ data, search }: { data: FaqCategory[]; search: string }) {
    const results = useMemo(() => {
        const term = search.toLowerCase();
        return data
            .map((cat) => ({
                label: cat.label,
                subCategories: cat.subCategories
                    .map((sub) => ({
                        ...sub,
                        items: sub.items.filter((item) =>
                            item.question.toLowerCase().includes(term)
                        ),
                    }))
                    .filter((sub) => sub.items.length > 0),
            }))
            .filter((cat) => cat.subCategories.length > 0);
    }, [data, search]);

    if (results.length === 0) {
        return <p className="text-gray-500 text-[14px]">Nenhum resultado encontrado.</p>;
    }

    return (
        <div className="space-y-8">
            {results.map((cat, ci) => (
                <div key={ci}>
                    <p className="text-azul text-[14px] font-semibold uppercase tracking-wider mb-3">{cat.label}</p>
                    <div className="space-y-3">
                        {cat.subCategories.map((sub, si) => (
                            <SubCategoryAccordion key={si} sub={sub} defaultOpen={ci === 0 && si === 0} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── CardList Content ──

function AppCard({ item }: { item: CardItem }) {
    const [expanded, setExpanded] = useState(false);

    // Parse description to extract main text and contact info
    const parseDescription = (desc: string) => {
        const lines = desc.split("\n");
        const mainLines: string[] = [];
        const contactInfo: { type: "telefone" | "email"; label: string; values: string[] }[] = [];

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith("Telefone:")) {
                const value = trimmed.replace("Telefone:", "").trim();
                if (value) {
                    const existing = contactInfo.find(c => c.type === "telefone");
                    if (existing) {
                        existing.values.push(value);
                    } else {
                        contactInfo.push({ type: "telefone", label: "Telefone:", values: [value] });
                    }
                }
            } else if (trimmed.startsWith("Email:")) {
                const value = trimmed.replace("Email:", "").trim();
                if (value) {
                    const existing = contactInfo.find(c => c.type === "email");
                    if (existing) {
                        existing.values.push(value);
                    } else {
                        contactInfo.push({ type: "email", label: "Email:", values: [value] });
                    }
                }
            } else if (trimmed && !trimmed.startsWith("*")) {
                mainLines.push(trimmed);
            }
        }

        return { main: mainLines.join("\n"), contactInfo };
    };

    const { main, contactInfo } = parseDescription(item.description);

    return (
        <div className="relative rounded-xl border border-[#F1F1F1] shadow-[0px_4px_10px_0px_#00000014] bg-white p-6 flex flex-col">
            <button
                onClick={() => setExpanded(!expanded)}
                className="absolute top-4 right-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-azul hover:bg-azul/90 transition-colors"
            >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    {expanded ? (
                        <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
                    ) : (
                        <>
                            <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
                            <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
                        </>
                    )}
                </svg>
            </button>
            {item.logo && (
                <div className="h-16 flex items-center mb-4">
                    <Image src={item.logo} alt={item.title} width={120} height={64} className="object-contain max-h-16" />
                </div>
            )}
            <h4 className="text-gray-800 text-[18px] font-normal leading-[140%] mb-2">
                {item.title}
            </h4>
            <p className={`text-gray-600 text-[14px] font-normal leading-[140%] ${expanded ? "" : "line-clamp-5"}`}>
                {main}
            </p>

            {expanded && contactInfo.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#F1F1F1] space-y-3">
                    {contactInfo.map((info, idx) => (
                        <div key={idx}>
                            <p className="text-gray-600 text-[13px] font-normal mb-1">{info.label}</p>
                            {info.type === "telefone" ? (
                                <div className="space-y-1">
                                    {info.values.map((tel, tidx) => (
                                        <a
                                            key={tidx}
                                            href={`tel:${tel.replace(/\D/g, "")}`}
                                            className="text-laranja text-[14px] font-normal hover:underline block"
                                        >
                                            {tel}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    {info.values.map((email, eidx) => (
                                        <a
                                            key={eidx}
                                            href={`mailto:${email}`}
                                            className="text-laranja text-[14px] font-normal hover:underline block"
                                        >
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function CardListContent({ category, sortOrder }: { category: CardCategory; sortOrder: "asc" | "desc" }) {
    const sorted = useMemo(() => {
        return [...category.items].sort((a, b) =>
            sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
    }, [category.items, sortOrder]);

    if (sorted.length === 0) {
        return <p className="text-gray-500 text-[14px]">Conteúdo em breve.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((item, i) => (
                <AppCard key={i} item={item} />
            ))}
        </div>
    );
}

function CardSearchResults({ data, search, sortOrder }: { data: CardCategory[]; search: string; sortOrder: "asc" | "desc" }) {
    const results = useMemo(() => {
        const term = search.toLowerCase();
        return data
            .map((cat) => ({
                label: cat.label,
                items: [...cat.items]
                    .filter(
                        (item) =>
                            item.title.toLowerCase().includes(term) ||
                            item.description.toLowerCase().includes(term)
                    )
                    .sort((a, b) =>
                        sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
                    ),
            }))
            .filter((cat) => cat.items.length > 0);
    }, [data, search, sortOrder]);

    if (results.length === 0) {
        return <p className="text-gray-500 text-[14px]">Nenhum resultado encontrado.</p>;
    }

    return (
        <div className="space-y-8">
            {results.map((cat, ci) => (
                <div key={ci}>
                    <p className="text-azul text-[14px] font-semibold uppercase tracking-wider mb-3">{cat.label}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cat.items.map((item, i) => (
                            <AppCard key={i} item={item} />
                        ))}
                    </div>
                </div>
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
    const isSearching = search.trim().length > 0;

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
                                {isSearching ? `Resultados para "${search}"` : current.label}
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

                        <div className="relative">
                            <div className="max-h-250 overflow-y-auto px-2 pt-2 -mx-2">
                                {isSearching ? (
                                    variant === "faq" ? (
                                        <FaqSearchResults data={data as FaqCategory[]} search={search} />
                                    ) : (
                                        <CardSearchResults data={data as CardCategory[]} search={search} sortOrder={sortOrder} />
                                    )
                                ) : (
                                    variant === "faq" ? (
                                        <FaqContent category={current as FaqCategory} />
                                    ) : (
                                        <CardListContent category={current as CardCategory} sortOrder={sortOrder} />
                                    )
                                )}
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

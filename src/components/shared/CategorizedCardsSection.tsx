"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import CategorizedLayout from "@/components/shared/CategorizedLayout";

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

interface CategorizedCardsSectionProps {
    data: CardCategory[];
    title?: string;
    subtitle?: string;
    searchPlaceholder?: string;
}

function AppCard({ item }: { item: CardItem }) {
    const [expanded, setExpanded] = useState(false);

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

export default function CategorizedCardsSection({
    data,
    title = "",
    subtitle,
    searchPlaceholder,
}: CategorizedCardsSectionProps) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const current = data[activeCategory];
    const isSearching = search.trim().length > 0;

    return (
        <CategorizedLayout
            title={title}
            subtitle={subtitle}
            searchPlaceholder={searchPlaceholder}
            search={search}
            onSearchChange={setSearch}
            categories={data}
            activeIndex={activeCategory}
            onSelectCategory={setActiveCategory}
            heading={isSearching ? `Resultados para "${search}"` : current.label}
            headingAction={
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
            }
        >
            {isSearching ? (
                <CardSearchResults data={data} search={search} sortOrder={sortOrder} />
            ) : (
                <CardListContent category={current} sortOrder={sortOrder} />
            )}
        </CategorizedLayout>
    );
}

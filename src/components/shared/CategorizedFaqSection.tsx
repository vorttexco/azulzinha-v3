"use client";

import { useState, useMemo, type ReactNode } from "react";
import CategorizedLayout from "@/components/shared/CategorizedLayout";

export interface FaqItem {
    question: string;
    answer: ReactNode;
}

export interface FaqSubCategory {
    title: string;
    items: FaqItem[];
}

export interface FaqCategory {
    label: string;
    subCategories: FaqSubCategory[];
}

interface CategorizedFaqSectionProps {
    data: FaqCategory[];
    title?: string;
    subtitle?: string;
    searchPlaceholder?: string;
}

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

export default function CategorizedFaqSection({
    data,
    title = "Dúvidas frequentes",
    subtitle,
    searchPlaceholder,
}: CategorizedFaqSectionProps) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [search, setSearch] = useState("");

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
        >
            {isSearching ? (
                <FaqSearchResults data={data} search={search} />
            ) : (
                <FaqContent category={current} />
            )}
        </CategorizedLayout>
    );
}

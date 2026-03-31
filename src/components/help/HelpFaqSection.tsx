"use client";

import { useState } from "react";

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

export default function HelpFaqSection({ faqData, title = "Dúvidas frequentes" }: { faqData: FaqCategory[]; title?: string }) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [search, setSearch] = useState("");

    const current = faqData[activeCategory];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-azul text-center mb-8">
                    {title}
                </h2>

                <div className="flex justify-center mb-10">
                    <div className="flex items-center gap-4 w-full max-w-125">
                        <input
                            type="text"
                            placeholder="O que você procura?"
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
                    <aside className="md:w-72 shrink-0">
                        <p className="text-gray-700 text-[18px] font-normal leading-[140%] tracking-normal mb-3">Categorias:</p>
                        <ul className="space-y-2">
                            {faqData.map((cat, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => setActiveCategory(i)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-[14px] font-normal leading-[140%] tracking-normal transition-colors shadow-[0px_4px_10px_0px_#00000014] ${activeCategory === i
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

                    <div className="flex-1 min-w-0">
                        <h3 className="text-azul text-[28px] font-normal leading-[140%] tracking-normal mb-5">
                            {current.label}
                        </h3>

                        {current.subCategories.length > 0 ? (
                            <div className="space-y-3">
                                {current.subCategories.map((sub, i) => (
                                    <SubCategoryAccordion key={i} sub={sub} defaultOpen={i === 0} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-[14px]">
                                Conteúdo em breve.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

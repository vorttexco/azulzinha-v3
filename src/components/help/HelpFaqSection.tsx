"use client";

import CategorizedFaqSection from "@/components/shared/CategorizedFaqSection";
import type { FaqCategory } from "@/components/shared/CategorizedFaqSection";

export type { FaqItem, FaqSubCategory, FaqCategory } from "@/components/shared/CategorizedFaqSection";

export default function HelpFaqSection({ faqData, title = "Dúvidas frequentes" }: { faqData: FaqCategory[]; title?: string }) {
    return <CategorizedFaqSection data={faqData} title={title} />;
}

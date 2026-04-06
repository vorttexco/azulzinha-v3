"use client";

import CategorizedSection from "@/components/shared/CategorizedSection";
import type { FaqCategory } from "@/components/shared/CategorizedSection";

export type { FaqItem, FaqSubCategory, FaqCategory } from "@/components/shared/CategorizedSection";

export default function HelpFaqSection({ faqData, title = "Dúvidas frequentes" }: { faqData: FaqCategory[]; title?: string }) {
    return <CategorizedSection variant="faq" data={faqData} title={title} />;
}

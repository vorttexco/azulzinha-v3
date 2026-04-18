"use client";

import { useState, ReactNode } from "react";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  showDividers?: boolean;
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-all duration-300">
      <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" className="transition-all duration-300">
      <path d="M1 1H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  className = "",
  itemClassName = "",
  titleClassName = "text-[16px] font-normal leading-[1.4] text-black",
  contentClassName = "",
  showDividers = true,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className={itemClassName}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between py-[32px] cursor-pointer"
          >
            <span className={titleClassName}>{item.title}</span>
            <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0 bg-azul flex-none">
              {openIndex === index ? <MinusIcon /> : <PlusIcon />}
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1500px]" : "max-h-0"
            }`}
          >
            <div className={`pb-[32px] ${contentClassName}`}>{item.content}</div>
          </div>

          {showDividers && index < items.length - 1 && (
            <div className="h-px bg-[#EBEBEB]" />
          )}
        </div>
      ))}
    </div>
  );
}

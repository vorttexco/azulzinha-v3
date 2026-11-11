"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

export interface LogoItem {
  src: string;
  w: number;
  h: number;
}

export interface IconCardItem {
  icon: string;
  text: string;
}

const defaultLogos: LogoItem[] = [
  { src: "/images/bandeiras-vouchers/elo.webp", w: 92, h: 29 },
  { src: "/images/bandeiras-vouchers/mastercard.webp", w: 76, h: 47 },
  { src: "/images/bandeiras-vouchers/visa.webp", w: 95, h: 31 },
  { src: "/images/bandeiras-vouchers/logo-04.webp", w: 71, h: 71 },
  { src: "/images/bandeiras-vouchers/logo-05-741b6d.webp", w: 68, h: 70 },
  { src: "/images/bandeiras-vouchers/logo-06.webp", w: 93, h: 61 },
  { src: "/images/bandeiras-vouchers/logo-07-2747dc.webp", w: 80, h: 81 },
  { src: "/images/bandeiras-vouchers/logo-08.webp", w: 101, h: 29 },
  { src: "/images/bandeiras-vouchers/logo-09.webp", w: 93, h: 47 },
  { src: "/images/bandeiras-vouchers/logo-10.webp", w: 131, h: 39 },
  { src: "/images/bandeiras-vouchers/logo-11.webp", w: 96, h: 58 },
  { src: "/images/bandeiras-vouchers/logo-12-1c4001.webp", w: 91, h: 47 },
  { src: "/images/bandeiras-vouchers/logo-13-30d4fc.webp", w: 77, h: 65 },
  { src: "/images/bandeiras-vouchers/logo-14.webp", w: 104, h: 33 },
  { src: "/images/bandeiras-vouchers/logo-15.webp", w: 128, h: 51 },
  { src: "/images/bandeiras-vouchers/logo-16.webp", w: 93, h: 53 },
  { src: "/images/bandeiras-vouchers/logo-17.webp", w: 122, h: 44 },
  { src: "/images/bandeiras-vouchers/logo-18.webp", w: 85, h: 32 },
  { src: "/images/bandeiras-vouchers/logo-19.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-20.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-21.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-22.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-23.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-24.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-25.webp", w: 55, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-26.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-27.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-28.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-29.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-30.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-31.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-32.webp", w: 100, h: 50 },
  { src: "/images/bandeiras-vouchers/logo-33.webp", w: 60, h: 60 },
];

function LogoCard({ src, w, h }: LogoItem) {
  return (
    <div className="flex items-center justify-center bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] h-[100px] lg:h-[130px] w-full">
      <Image
        src={asset(src)}
        alt=""
        width={w}
        height={h}
        className="object-contain max-w-[75%] max-h-[70%]"
      />
    </div>
  );
}

function IconCard({ icon, text }: IconCardItem) {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-8 lg:pr-10">
      <Image
        src={asset(icon)}
        alt=""
        width={42}
        height={42}
        className="shrink-0 w-[42px] h-[42px]"
        unoptimized
      />
      <p className="text-[16px] leading-[1.4] text-azul">{text}</p>
    </div>
  );
}

interface BandeirasSectionProps {
  title?: string;
  description?: string;
  logos?: LogoItem[];
  iconCards?: IconCardItem[];
  bgColor?: string;
  gridClassName?: string;
  collapsedClassName?: string;
  fadeClassName?: string;
  footnote?: string;
}

export default function BandeirasSection({
  title = "A azulzinha da CAIXA já vem com uma grande rede de aceitação",
  description = "A azulzinha da CAIXA aceita as principais bandeiras nacionais, regionais e internacionais, além dos principais vouchers do mercado. Quando você recebe a sua azulzinha, muitas de nossas bandeiras já vêm habilitadas automaticamente. Confira a rede de aceitação completa que já vem instalada com a sua azulzinha e conte para os seus clientes!",
  logos,
  iconCards,
  bgColor = "bg-[#FAFAFA]",
  gridClassName = "grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  collapsedClassName = "max-h-[232px] lg:max-h-[300px]",
  fadeClassName = "bg-[linear-gradient(0deg,#FAFAFA_62%,rgba(250,250,250,0)_100%)]",
  footnote,
}: BandeirasSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const isIconMode = !!iconCards;

  return (
    <section id="bandeiras" className={bgColor}>
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
        {/* Title + Description */}
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-azul">
            {title}
          </h2>
          {description && (
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
              {description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="relative w-full max-w-[1240px]">
          <div
            className={`grid ${gridClassName} gap-4 transition-all duration-500 overflow-hidden ${expanded ? "max-h-[2000px]" : collapsedClassName
              }`}
          >
            {isIconMode
              ? iconCards!.map((item, i) => <IconCard key={i} {...item} />)
              : (logos || defaultLogos).map((item, i) => <LogoCard key={i} {...item} />)
            }
          </div>

          {/* Gradient fade overlay */}
          {!expanded && (
            <div className={`absolute bottom-0 left-0 right-0 h-[98px] ${fadeClassName} pointer-events-none`} />
          )}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-laranja cursor-pointer"
        >
          {expanded ? "Ver menos" : "Ver todas"}
        </button>

        {footnote && (
          <p className="text-[14px] font-normal leading-[1.4] text-[#7A7A7A] text-center max-w-[800px]">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}

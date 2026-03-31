"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const logos = [
  { src: "/images/bandeiras-vouchers/logo-01.png", w: 92, h: 29 },
  { src: "/images/bandeiras-vouchers/logo-02-3d529c.png", w: 76, h: 47 },
  { src: "/images/bandeiras-vouchers/logo-03.png", w: 95, h: 31 },
  { src: "/images/bandeiras-vouchers/logo-04.png", w: 71, h: 71 },
  { src: "/images/bandeiras-vouchers/logo-05-741b6d.png", w: 68, h: 70 },
  { src: "/images/bandeiras-vouchers/logo-06.png", w: 93, h: 61 },
  { src: "/images/bandeiras-vouchers/logo-07-2747dc.png", w: 80, h: 81 },
  { src: "/images/bandeiras-vouchers/logo-08.png", w: 101, h: 29 },
  { src: "/images/bandeiras-vouchers/logo-09.png", w: 93, h: 47 },
  { src: "/images/bandeiras-vouchers/logo-10.png", w: 131, h: 39 },
  { src: "/images/bandeiras-vouchers/logo-11.png", w: 96, h: 58 },
  { src: "/images/bandeiras-vouchers/logo-12-1c4001.png", w: 91, h: 47 },
  { src: "/images/bandeiras-vouchers/logo-13-30d4fc.png", w: 77, h: 65 },
  { src: "/images/bandeiras-vouchers/logo-14.svg", w: 104, h: 33 },
  { src: "/images/bandeiras-vouchers/logo-15.png", w: 128, h: 51 },
  { src: "/images/bandeiras-vouchers/logo-16.png", w: 93, h: 53 },
  { src: "/images/bandeiras-vouchers/logo-17.png", w: 122, h: 44 },
  { src: "/images/bandeiras-vouchers/logo-18.png", w: 85, h: 32 },
];

function LogoCard({ src, w, h }: { src: string; w: number; h: number }) {
  return (
    <div className="flex items-center justify-center bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] h-[120px] lg:h-[140px]">
      <Image
        src={asset(src)}
        alt=""
        width={w}
        height={h}
        className="object-contain"
      />
    </div>
  );
}

export default function BandeirasSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
        {/* Title + Description */}
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-azul">
            A azulzinha da CAIXA já vem com uma grande rede de aceitação
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
            A azulzinha da CAIXA aceita as principais bandeiras nacionais, regionais e internacionais, além dos principais vouchers do mercado.
            {" "}Quando você recebe a sua azulzinha, muitas de nossas bandeiras já vêm habilitadas automaticamente.
            {" "}Confira a rede de aceitação completa que já vem instalada com a sua azulzinha e conte para os seus clientes!
          </p>
        </div>

        {/* Logo Grid */}
        <div className="relative w-full max-w-[1240px]">
          <div
            className={`grid grid-cols-2 lg:grid-cols-6 gap-4 transition-all duration-500 overflow-hidden ${
              expanded ? "max-h-[2000px]" : "max-h-[268px] lg:max-h-[300px]"
            }`}
          >
            {logos.map((logo, i) => (
              <LogoCard key={i} src={logo.src} w={logo.w} h={logo.h} />
            ))}
          </div>

          {/* Gradient fade overlay */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-[98px] bg-[linear-gradient(0deg,#FAFAFA_62%,rgba(250,250,250,0)_100%)] pointer-events-none" />
          )}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-laranja cursor-pointer"
        >
          {expanded ? "Ver menos" : "Ver todas"}
        </button>
      </div>
    </section>
  );
}

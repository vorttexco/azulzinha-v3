"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";

const cards = [
  {
    icon: "/images/azulzinha-aproxima/icon-nfc.png",
    title: "Em todo lugar",
    description: <>Venda mais e onde quiser com tudo pelo App <strong>azulzinha aproxima</strong>.</>,
  },
  {
    icon: "/images/azulzinha-aproxima/icon-zero-aluguel.png",
    title: "Zero aluguel",
    description: "Aceite cartões por aproximação e carteiras digitais sem pagar nada.",
  },
  {
    icon: "/images/azulzinha-aproxima/icon-celular.png",
    title: "No celular ou tablet",
    description: "Basta ter tecnologia de aproximação e Android versão 12 ou superior.",
  },
  {
    icon: "/images/azulzinha-aproxima/icon-vendas.png",
    title: "Não perca vendas",
    description: "Aceita vendas do débito, crédito à vista e parcelado.",
  },
];

function Card({ icon, title, description }: { icon: string; title: string; description: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] px-8 py-8 flex flex-col gap-4 h-[244px]">
      <Image src={asset(icon)} alt="" width={52} height={52} className="w-[52px] h-[52px] object-contain" />
      <h3 className="text-[16px] font-normal leading-[1.4] text-azul">{title}</h3>
      <p className="text-[14px] font-normal leading-[1.4] text-black">{description}</p>
    </div>
  );
}

export default function AproximaSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", containScroll: "trimSnaps" });
  const [activeDot, setActiveDot] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="aproxima" className="bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-[110px] px-[30px] lg:px-[100px]">
        {/* Top: Text + Image */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-[78px] mb-8 lg:mb-[78px]">
          {/* Left: Text */}
          <div className="flex flex-col gap-4 lg:w-[537px] shrink-0 items-center lg:items-start">
            <h2 className="section-title text-azul lg:text-left!">
              Aproximou, confirmou, pagou!
            </h2>
            <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black text-center lg:text-left">
              <p className="mb-4">
                Receber uma venda está mais fácil do que nunca: você só precisa de um celular!
              </p>
              <p className="text-cinza font-semibold">
                Baixe gratuitamente o aplicativo <span className="text-azul">azulzinha aproxima</span> e venda por aproximação e muito mais.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full lg:w-[676px] h-[256px] lg:h-[426px] rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-none overflow-hidden">
            <Image
              src={asset("/images/azulzinha-aproxima/aproxima-photo.png")}
              alt="Azulzinha aproxima"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom: Cards */}
        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden overflow-hidden -mx-[30px] select-none" ref={emblaRef}>
          <div className="flex gap-6 pl-[30px]">
            {cards.map((card) => (
              <div key={card.title} className="shrink-0 w-[288px]">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots mobile */}
        <div className="lg:hidden mt-4 flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para ${i + 1}`}
              className="transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: i === activeDot ? "28px" : "6px",
                height: "6px",
                backgroundColor: i === activeDot ? "#FC8F01" : "#D9D9D9",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

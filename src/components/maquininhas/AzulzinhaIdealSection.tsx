"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const features = [
  {
    icon: "/images/maquininhas/icon-cartao.png",
    label: "Visão consolidada",
  },
  {
    icon: "/images/maquininhas/icon-wireless.png",
    label: "Aproximação",
  },
  {
    icon: "/images/maquininhas/icon-qr-code.png",
    label: "QR Code",
  },
  {
    icon: "/images/maquininhas/icon-pix.png",
    label: "Pix",
  },
];

const flags = [
  { src: "/images/maquininhas/flag-elo.png", alt: "Elo" },
  { src: "/images/maquininhas/flag-mastercard.png", alt: "Mastercard" },
  { src: "/images/maquininhas/flag-visa.png", alt: "Visa" },
  { src: "/images/maquininhas/flag-ticket.png", alt: "Ticket" },
  { src: "/images/maquininhas/flag-alelo.png", alt: "Alelo" },
  { src: "/images/maquininhas/flag-amex.png", alt: "Amex" },
  { src: "/images/maquininhas/flag-hiper.png", alt: "Hiper" },
  { src: "/images/maquininhas/flag-hipercard.png", alt: "Hipercard" },
  { src: "/images/maquininhas/flag-pluxee.png", alt: "Pluxee" },
  { src: "/images/maquininhas/flag-vr.png", alt: "VR" },
];

// Group flags into pages of 6 (3x2 grid per slide)
const flagPages: (typeof flags)[] = [];
for (let i = 0; i < flags.length; i += 6) {
  flagPages.push(flags.slice(i, i + 6));
}

function FlagCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center border border-[#F4F4F4] rounded-[12px] p-4 h-[88px]">
      <div className="relative w-full h-full">
        <Image
          src={asset(src)}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

function FlagCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {flagPages.map((page, pageIndex) => (
            <div key={pageIndex} className="flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-3 gap-3">
                {page.map((flag) => (
                  <FlagCard key={flag.alt} src={flag.src} alt={flag.alt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Anterior"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${canScrollPrev
            ? "bg-azul text-white"
            : "bg-[#D9D9D9] text-white cursor-not-allowed"
            }`}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {flagPages.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Página ${i + 1}`}
              className={`rounded-full transition-all duration-300 h-[6px] ${i === selectedIndex ? "w-7 bg-laranja" : "w-[6px] bg-[#D9D9D9]"
                }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Próximo"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${canScrollNext
            ? "bg-azul text-white"
            : "bg-[#D9D9D9] text-white cursor-not-allowed"
            }`}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function AzulzinhaIdealSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:pt-20 lg:pb-[110px]">
        <div className="flex flex-col items-center gap-[30px] lg:gap-[60px]">
          {/* Title + Description */}
          <div className="flex flex-col items-center gap-6 max-w-[696px]">
            <h2 className="section-title text-azul max-w-[634px]">
              A azulzinha ideal para o seu negócio está aqui
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
              Todos os modelos de azulzinha já vêm com uma grande rede de
              aceitação de bandeiras, meios de pagamento e serviços adicionais,
              tudo sempre atualizado para você aperfeiçoar a experiência do seu
              cliente, aumentar suas vendas e cuidar da saúde do caixa.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-[10px] bg-white border border-[#F1F1F1] rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] py-[67px] lg:py-[67px] px-2"
              >
                <div className="relative w-[94px] h-[94px]">
                  <Image
                    src={asset(feature.icon)}
                    alt={feature.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[18px] lg:text-[22px] leading-[1.3] text-azul text-center font-normal">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bandeiras */}
          <div className="flex flex-col items-center gap-6 lg:gap-10 w-full">
            <h2 className="section-title text-azul">
              E a mais variada rede de bandeiras e carteiras digitais
            </h2>

            {/* Desktop: static images */}
            <div className="hidden lg:flex flex-col items-center gap-4 w-full max-w-[1070px]">
              <Image
                src={asset("/images/maquininhas/bandeiras-1.png")}
                alt="Bandeiras aceitas linha 1"
                width={1305}
                height={294}
                className="w-full h-auto object-contain"
              />
              <Image
                src={asset("/images/maquininhas/bandeiras-2.png")}
                alt="Bandeiras aceitas linha 2"
                width={1318}
                height={297}
                className="w-full h-auto object-contain"
              />
              <Image
                src={asset("/images/maquininhas/bandeiras-3.png")}
                alt="Bandeiras aceitas linha 3"
                width={1310}
                height={146}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Mobile: carousel */}
            <div className="lg:hidden w-full">
              <FlagCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

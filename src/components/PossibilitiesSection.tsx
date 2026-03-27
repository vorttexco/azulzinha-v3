"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const cards = [
  {
    icon: asset("/images/icon-big-vendas.svg"),
    title: "Venda em qualquer lugar",
    description: "Soluções para lojas físicas e venda online.",
  },
  {
    icon: asset("/images/icon-big-resultados.svg"),
    title: "Impulsione seus resultados",
    description: "Serviços agregados para impulsionar suas vendas.",
  },
  {
    icon: asset("/images/icon-big-protecao.svg"),
    title: "Negócios sempre protegidos",
    description: "Plataformas robustas e seguras para grandes comércios.",
  },
  {
    icon: asset("/images/icon-big-controle.svg"),
    title: "Controle total do seu negócio",
    description: "Ferramentas completas de gestão em tempo real.",
  },
];

function Card({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl h-61 pr-10 pl-8 py-0 flex flex-col justify-center gap-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
      <Image
        src={icon}
        alt=""
        width={40}
        height={40}
        className="w-10 h-10"
        unoptimized
      />
      <h3 className="text-[16px] leading-[1.4] text-azul font-normal">
        {title}
      </h3>
      <p className="text-[14px] lg:text-[16px] leading-[1.4] text-black">
        {description}
      </p>
    </div>
  );
}

export default function PossibilitiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
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
    <section className="w-full bg-[#F5F5F5] py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">
          {/* Left side - Text */}
          <div className="w-full lg:w-1/2 flex flex-col  gap-4">
            <h2 className="section-title text-left pt-4">
              Com azulzinha você {" "}
              <br className="hidden lg:block" />
              tem mais possibilidades {" "}
              <br className="hidden lg:block" />
              para <span className="text-[#FC8F01]">crescer</span>
            </h2>

            <p className="font-normal text-[18px] leading-[140%] tracking-normal text-black">
              Empreenda com as soluções CAIXA em parceria
              <br className="hidden lg:block" />
              com a Fiserv, líder global em tecnologias de
              <br className="hidden lg:block" />
              pagamentos e serviços financeiros.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-169 h-106.5 rounded-xl lg:rounded-r-[20px] overflow-hidden lg:translate-x-5">
            <Image
              src={asset("/images/hero-banner-3.png")}
              alt="Possibilidades com azulzinha"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 mt-6 lg:-mt-24">
          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {cards.map((card) => (
              <Card key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="lg:hidden overflow-hidden -mx-7.5" ref={emblaRef}>
            <div className="flex gap-3 pl-7.5 mr-7.5">
              {cards.map((card) => (
                <div key={card.title} className="shrink-0 w-[calc(100vw-75px)]">
                  <Card icon={card.icon} title={card.title} description={card.description} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots - mobile only */}
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

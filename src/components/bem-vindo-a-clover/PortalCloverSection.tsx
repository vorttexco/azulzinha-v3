"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

const slides = [
  {
    highlight: "Relatórios",
    image: "/images/bem-vindo-a-clover/portal-relatorios.png",
    body: (
      <>
        Transforme dados em decisões estratégicas impulsionando o crescimento do
        seu negócio. No Portal Clover, você terá acesso a seu volume financeiro,
        quantidade de transações e ainda poderá fazer comparativos do desempenho
        das suas vendas. Personalize suas análises com filtros como data,
        funcionário, tipo de pagamento, entre outros.
      </>
    ),
  },
  {
    highlight: "Gestão de equipes",
    image: "/images/bem-vindo-a-clover/portal-equipes.png",
    body: (
      <>
        Monitore em tempo real o registro de entradas e saídas de seus
        funcionários, acompanhe o volume de vendas individual e personalize as
        funcionalidades disponíveis para cada um deles. É a Clover trazendo para
        você mais segurança, gestão e controle de sua equipe.
      </>
    ),
  },
  {
    highlight: "Cadastro de clientes",
    image: "/images/bem-vindo-a-clover/portal-clientes.png",
    body: (
      <>
        Desenvolva estratégias eficazes de retenção e fidelização com base nos
        dados de seus clientes.
      </>
    ),
  },
];

export default function PortalCloverSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [WheelGesturesPlugin()]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="portal" className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.highlight}
                className="flex-[0_0_100%] min-w-0"
              >
                <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-[60px]">
                  <div className="flex flex-col gap-4 lg:max-w-[537px]">
                    <h2 className="section-title text-azul text-center lg:text-left">
                      Crie sua conta no Portal Clover
                    </h2>
                    <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
                      Seu painel completo com dados e ferramentas essenciais
                      para tomar decisões inteligentes.
                    </p>
                    <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul text-center lg:text-left">
                      {slide.highlight}
                    </p>
                    <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
                      {slide.body}
                    </p>
                    <a
                      href="https://www.clover.com/login?lng=pt-BR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-azul text-[16px] lg:text-[18px] self-center lg:self-start hover:opacity-80"
                    >
                      Crie sua conta ou faça login
                      <ArrowIcon width={18} height={16} color="#005FAF" />
                    </a>
                  </div>
                  <div className="relative w-full h-[240px] lg:w-[520px] lg:h-[360px] shrink-0">
                    <Image
                      src={asset(slide.image)}
                      alt="Tela do Portal Clover"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Slide anterior"
            className="w-[30px] h-[30px] rounded-full border border-laranja flex items-center justify-center cursor-pointer"
          >
            <ArrowIcon width={14} height={12} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próximo slide"
            className="w-[30px] h-[30px] rounded-full border border-laranja flex items-center justify-center cursor-pointer"
          >
            <ArrowIcon width={14} height={12} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((slide, i) => (
            <button
              key={slide.highlight}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para ${slide.highlight}`}
              className={`h-[6px] rounded-full cursor-pointer transition-all ${
                i === selectedIndex
                  ? "w-[28px] bg-laranja"
                  : "w-[6px] bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

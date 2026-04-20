"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const beneficios = [
  {
    icon: "/images/crediario-azulzinha/icon-recebimento.png",
    iconW: 48,
    iconH: 30,
    title: "Recebimento garantido",
    description: "Conte com o valor total da compra, independente do número de parcelas que o cliente escolher",
  },
  {
    icon: "/images/crediario-azulzinha/icon-vendas.png",
    iconW: 40,
    iconH: 24,
    title: "Vendas maiores",
    description: "Facilite compras de valor elevado com parcelas que cabem no bolso de qualquer cliente",
  },
  {
    icon: "/images/crediario-azulzinha/icon-simulador.png",
    iconW: 40,
    iconH: 40,
    title: "Simulador na máquina",
    description: "Ajude seu cliente a escolher a melhor condição simulando antes os parcelamentos disponíveis",
  },
  {
    icon: "/images/crediario-azulzinha/icon-inadimplencia.png",
    iconW: 40,
    iconH: 40,
    title: "Inadimplência zero",
    description: "Venda sem complicação e sem análise de crédito: as parcelas são cobradas na fatura do cliente",
  },
  {
    icon: "/images/crediario-azulzinha/icon-credito.png",
    iconW: 45,
    iconH: 27,
    title: "Crédito para sua loja",
    description: "Impulsione o fluxo de caixa antecipando seus recebíveis em condições ainda melhores",
  },
  {
    icon: "/images/crediario-azulzinha/icon-gestao.png",
    iconW: 40,
    iconH: 40,
    title: "Gestão centralizada",
    description: "Controle o histórico de vendas e recebimentos futuros direto no App e no Portal da azulzinha",
  },
];

export default function BeneficiosCrediarioSection() {
  const wheelGestures = useRef(WheelGesturesPlugin());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps" },
    [wheelGestures.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setDotCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="beneficios-section" className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 lg:px-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 px-[30px] lg:px-0 mb-8 lg:mb-[60px]">
          <h2 className="section-title text-azul">
            Com o Crediário na sua azulzinha você pode muito mais
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
            Aproveite todas as vantagens do serviço a favor do seu negócio
          </p>
        </div>

        {/* Desktop: Grid 3x2 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="flex flex-col gap-4 bg-white rounded-[12px] p-8 pt-8 pb-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] h-[244px]"
            >
              <Image
                src={asset(b.icon)}
                alt=""
                width={b.iconW}
                height={b.iconH}
                className="object-contain"
              />
              <h3 className="text-[16px] leading-[1.4] text-azul">{b.title}</h3>
              <p className="text-[14px] leading-[1.4] text-black">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Embla Carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex pl-[30px] gap-6">
              {beneficios.map((b) => (
                <div
                  key={b.title}
                  className="shrink-0 w-[288px] flex flex-col gap-4 bg-white rounded-[12px] p-8 pt-8 pb-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] h-[244px] last:mr-[30px]"
                >
                  <Image
                    src={asset(b.icon)}
                    alt=""
                    width={b.iconW}
                    height={b.iconH}
                    className="object-contain"
                  />
                  <h3 className="text-[16px] leading-[1.4] text-azul">{b.title}</h3>
                  <p className="text-[14px] leading-[1.4] text-black">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ScrollDots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir para ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer h-[6px] ${i === selectedIndex ? "w-7 bg-laranja" : "w-[6px] bg-[#D9D9D9]"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 lg:mt-15 px-7.5 lg:px-0">
          <a href="/peca-azulzinha" className="btn-laranja">
            Ainda não tem sua azulzinha? Peça já
          </a>
        </div>
      </div>
    </section>
  );
}

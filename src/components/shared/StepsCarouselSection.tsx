"use client";

import Image from "next/image";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export interface StepItem {
  number: number;
  text: string;
  image: string;
}

const defaultSteps: StepItem[] = [
  { number: 1, text: "Digite o valor da venda e toque em 'Continuar'.", image: "/images/crediario-azulzinha/step-1.png" },
  { number: 2, text: "Selecione a opção 5: 'Venda digitada' como forma de pagamento.", image: "/images/crediario-azulzinha/step-2.png" },
  { number: 3, text: "Escolha 'Crediário' para acessar o simulador.", image: "/images/crediario-azulzinha/step-3.png" },
  { number: 4, text: "Na tela de Simulação de Crediário, escolha o número de parcelas e toque em 'Continuar'.", image: "/images/crediario-azulzinha/step-4.png" },
  { number: 5, text: "Insira o número e a data de vencimento do cartão.", image: "/images/crediario-azulzinha/step-5.png" },
  { number: 6, text: "Digite o código de segurança (CVC) que está no verso do cartão e toque em 'Continuar'.", image: "/images/crediario-azulzinha/step-6.png" },
  { number: 7, text: "Confira os dados na tela de confirmação e toque em 'Sim' para avançar.", image: "/images/crediario-azulzinha/step-7.png" },
  { number: 8, text: "Um resumo das condições de parcelamento aparecerá. Toque em 'Continuar'.", image: "/images/crediario-azulzinha/step-8.png" },
  { number: 9, text: "Na tela de simulações, toque na opção desejada para finalizar a compra.", image: "/images/crediario-azulzinha/step-9.png" },
  { number: 10, text: "Pronto! O crediário foi realizado com sucesso. Compartilhe o comprovante.", image: "/images/crediario-azulzinha/step-10.png" },
];

interface StepsCarouselSectionProps {
  title?: string;
  description?: string;
  steps?: StepItem[];
  bgClassName?: string;
  cardMode?: "overlay" | "inline";
  headerContent?: ReactNode;
  paddingClassName?: string;
}

export default function StepsCarouselSection({
  title = "Como fazer uma venda no Crediário",
  description = "Sua azulzinha já vem pronta para aceitar cartões de crédito. Siga o passo a passo para acessar o simulador e fazer sua primeira transação:",
  steps = defaultSteps,
  bgClassName = "bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]",
  cardMode = "overlay",
  headerContent,
  paddingClassName = "pb-14 lg:pb-20",
}: StepsCarouselSectionProps) {
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
    <section className={bgClassName}>
      <div className={`max-w-[1440px] mx-auto ${paddingClassName}`}>
        {/* Header */}
        {headerContent ? (
          <div className="px-[30px] lg:px-[100px] mb-8 lg:mb-[60px]">
            {headerContent}
          </div>
        ) : title ? (
          <div className="flex flex-col gap-4 px-[30px] lg:px-[100px] mb-8 lg:mb-[60px]">
            <h2 className="section-title text-azul text-left">
              {title}
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              {description}
            </p>
          </div>
        ) : null}

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex pl-[30px] lg:pl-[100px] gap-6 items-end pb-4">
            {steps.map((step) =>
              cardMode === "overlay" ? (
                <div
                  key={step.number}
                  className="shrink-0 w-[287px] h-[520px] relative last:mr-[30px] lg:last:mr-[100px]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[201px] h-[358px] z-10">
                    <Image
                      src={asset(step.image)}
                      alt={`Passo ${step.number}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 w-full h-[315px] bg-white rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col justify-end p-6 gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#003D91]">
                      <span className="text-[16px] leading-[1.4] text-white">{step.number}</span>
                    </div>
                    <p className="text-[18px] leading-[1.4] text-azul">{step.text}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={step.number}
                  className="shrink-0 w-[287px] flex flex-col last:mr-[30px] lg:last:mr-[100px]"
                >
                  <div className="relative w-full h-[341px] rounded-[30px] overflow-hidden border border-[#F1F1F1] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
                    <Image
                      src={asset(step.image)}
                      alt={`Passo ${step.number}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-5 left-5 flex items-center justify-center w-8 h-8 rounded-full bg-laranja z-10">
                      <span className="text-[16px] leading-[1.4] text-white">{step.number}</span>
                    </div>
                  </div>
                  <p className="mt-6 text-[16px] lg:text-[18px] leading-[1.4] text-black">{step.text}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* ScrollDots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer h-[6px] ${
                i === selectedIndex ? "w-7 bg-laranja" : "w-[6px] bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

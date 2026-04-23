"use client";

import Image from "next/image";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface CardStep {
  number: number;
  title: string;
  content: ReactNode;
  description: string;
}

interface ImageStep {
  type: "image";
  image: string;
  description: string;
}

type Step = CardStep | ImageStep;

function isImageStep(step: Step): step is ImageStep {
  return "type" in step && step.type === "image";
}

interface HabilitarCarouselSectionProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export default function HabilitarCarouselSection({
  title = "Como habilitar o serviço",
  subtitle = "Se você já vende com azulzinha, é preciso que ela esteja com atualização em dia do software. Para ter certeza que você está na última versão, basta deixar a sua maquininha conectada durante a noite e ela atualizará automaticamente.\n\nGarantindo a atualização, é só seguir o passo a passo abaixo:",
  steps,
}: HabilitarCarouselSectionProps) {
  const wheelGestures = useRef(WheelGesturesPlugin());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", containScroll: "trimSnaps" },
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
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20">
        {/* Header */}
        <div className="px-[30px] lg:px-[100px] mb-8 lg:mb-[60px] text-left">
          <h2 className="section-title text-azul text-left">{title}</h2>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.4] text-black whitespace-pre-line">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex pl-[30px] lg:pl-[100px] gap-6 pb-4">
            {steps.map((step, i) =>
              isImageStep(step) ? (
                <div
                  key={i}
                  className="shrink-0 w-[287px] flex flex-col last:mr-[30px] lg:last:mr-[100px]"
                >
                  <div className="w-[287px] h-[341px] rounded-[30px] border border-[#F1F1F1] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex items-center justify-center">
                    <div className="relative w-[209px] h-[312px]">
                      <Image
                        src={asset(step.image)}
                        alt="Comprovante"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="mt-6 text-[18px] leading-[1.4] text-black">
                    {step.description}
                  </p>
                </div>
              ) : (
                <div
                  key={i}
                  className="shrink-0 w-[287px] flex flex-col last:mr-[30px] lg:last:mr-[100px]"
                >
                  {/* Card */}
                  <div className="w-[287px] h-[341px] rounded-[30px] border border-[#F1F1F1] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
                    {/* Card header */}
                    <div className="h-[108px] bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)] rounded-t-[30px] flex flex-col justify-center px-5 gap-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-laranja">
                        <span className="text-[16px] text-white">{step.number}</span>
                      </div>
                      <h3 className="text-[22px] leading-[1.4] text-azul font-normal">
                        {step.title}
                      </h3>
                    </div>
                    {/* Card content */}
                    <div className="flex-1 px-5 py-4 text-[18px] font-normal text-azul">
                      {step.content}
                    </div>
                  </div>
                  {/* Description below card */}
                  <p className="mt-6 text-[18px] leading-[1.4] text-black">
                    {step.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Dots */}
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
    </section>
  );
}

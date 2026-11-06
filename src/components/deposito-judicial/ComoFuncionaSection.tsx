"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { asset } from "@/lib/assets";
import TrackedAnchor from "@/components/shared/TrackedAnchor";
import ArrowIcon from "@/components/shared/ArrowIcon";

interface Step {
  number: number;
  title: string;
  description: string;
  image: string;
}

interface ComoFuncionaSectionProps {
  portalHref: string;
  steps: Step[];
}

export default function ComoFuncionaSection({
  portalHref,
  steps,
}: ComoFuncionaSectionProps) {
  const wheelGestures = useRef(WheelGesturesPlugin());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps" },
    [wheelGestures.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-cinza-claro py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-[30px] lg:px-[100px]">
        <div className="mb-8 flex flex-col gap-4 lg:mb-[60px]">
          <h2 className="section-title text-azul lg:text-left">Como funciona</h2>
          <p className="text-[16px] leading-[1.4] text-black lg:text-[18px]">
            O pagamento é feito no{" "}
            <TrackedAnchor
              href={portalHref}
              kind="cta"
              name="Portal da CAIXA"
              location="feature"
              className="text-azul underline"
            >
              Portal da CAIXA
            </TrackedAnchor>
            . Siga o passo a passo:
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {steps.map((step) => (
              <div key={step.number} className="min-w-0 flex-[0_0_100%]">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-[936px] pt-5">
                    <span className="absolute top-0 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[18px] leading-[1.4] text-azul shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
                      {step.number}
                    </span>
                    <div className="overflow-hidden rounded-[12px] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
                      <div className="relative h-[220px] w-full lg:h-[420px]">
                        <Image
                          src={asset(step.image)}
                          alt={step.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-center text-[20px] leading-[1.3] text-azul lg:text-[24px]">
                    {step.title}
                  </h3>
                  <p className="max-w-[640px] text-center text-[16px] leading-[1.4] text-cinza lg:text-[18px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Passo anterior"
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-laranja"
          >
            <ArrowIcon width={14} height={12} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próximo passo"
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-laranja"
          >
            <ArrowIcon width={14} height={12} />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir para o passo ${step.number}`}
              className={`h-[6px] cursor-pointer rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-7 bg-laranja" : "w-[6px] bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

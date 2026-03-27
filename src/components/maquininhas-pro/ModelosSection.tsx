"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/icons/ArrowIcon";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const modelos = [
  {
    name: "Ingenico Move 5000",
    image: "/images/maquininhas-pro/ingenico-move-5000.png",
    imageWidth: 277,
    imageHeight: 324,
  },
  {
    name: "Newland SP 930",
    image: "/images/maquininhas-pro/newland-sp930.png",
    imageWidth: 147,
    imageHeight: 295,
  },
  {
    name: "Verifone C680",
    image: "/images/maquininhas-pro/verifone-c680.png",
    imageWidth: 149,
    imageHeight: 302,
  },
];

function FloatCard({
  name,
  image,
  imageWidth,
  imageHeight,
}: {
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <div className="flex flex-col justify-end items-center -gap-[91px]">
      {/* Product image floating above */}
      <div className="relative h-[280px] lg:h-[320px] -mb-[140px] lg:-mb-[140px] z-10 pointer-events-none">
        <Image
          src={asset(image)}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Card */}
      <div className="w-full bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] pt-[140px] pb-8 px-8 flex flex-col gap-4 h-[316px] justify-end">
        <h3 className="text-[26px] font-normal leading-[1.4] text-azul">
          {name}
        </h3>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[14px] font-normal leading-[1.4] text-azul"
        >
          Baixa o manual
          <ArrowIcon width={16} height={12} color="#FC8F01" />
        </a>
      </div>
    </div>
  );
}

export default function ModelosSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
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
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-6 lg:mb-[60px]">
          Sua azulzinha pro chegou
        </h2>

        {/* Desktop grid */}
        <div className="hidden lg:flex gap-6 items-end">
          {modelos.map((modelo) => (
            <div key={modelo.name} className="flex-1">
              <FloatCard {...modelo} />
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden overflow-hidden -mx-[30px]" ref={emblaRef}>
          <div className="flex gap-6 pl-[30px]">
            {modelos.map((modelo) => (
              <div
                key={modelo.name}
                className="shrink-0 w-[290px]"
              >
                <FloatCard {...modelo} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots - mobile only */}
        <div className="lg:hidden mt-6 flex items-center justify-center gap-2">
          {modelos.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para modelo ${i + 1}`}
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

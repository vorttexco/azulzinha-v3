"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/icons/ArrowIcon";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const products = [
  {
    title: "Comprovantes",
    description: "Receba automaticamente todos os comprovantes de transações aprovadas.",
    image: "/images/azulzinha-aproxima/phone-comprovantes.png",
    imageWidth: 289,
    imageHeight: 301,
  },
  {
    title: "Estorno",
    description: "Visualize o relatório parcial e total de vendas do dia.",
    image: "/images/azulzinha-aproxima/phone-estorno.png",
    imageWidth: 199,
    imageHeight: 327,
  },
  {
    title: "Comprovante automático",
    description: "Envie por SMS, e-mail ou até WhatsApp o comprovante de qualquer venda realizada.",
    image: "/images/azulzinha-aproxima/phone-comprovante-auto.png",
    imageWidth: 179,
    imageHeight: 294,
  },
  {
    title: "Relatório",
    description: "Você pode fazer o estorno de uma transação realizada no mesmo dia, utilizando o mesmo meio de pagamento.",
    image: "/images/azulzinha-aproxima/phone-relatorio.png",
    imageWidth: 151,
    imageHeight: 279,
  },
];

function FloatCard({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
}: {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Phone image floating above */}
      <div className="relative h-[280px] lg:h-[300px] -mb-[140px] z-10 pointer-events-none">
        <Image
          src={asset(image)}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Card */}
      <div className="w-full bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] pt-[140px] pb-6 px-6 flex flex-col gap-2">
        <h3 className="text-[18px] font-normal leading-[1.4] text-azul">{title}</h3>
        <p className="text-[14px] font-normal leading-[1.4] text-black h-[80px]">{description}</p>
        <a href="#" className="inline-flex items-center gap-2 text-[14px] font-normal leading-[1.4] text-azul">
          Saiba mais
          <ArrowIcon width={16} height={12} color="#FC8F01" />
        </a>
      </div>
    </div>
  );
}

export default function ProductFeaturesSection() {
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
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-6 lg:mb-[60px]">
          Escolha a azulzinha ideal para o seu negócio
        </h2>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6 items-end">
          {products.map((product) => (
            <FloatCard key={product.title} {...product} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden overflow-hidden -mx-[30px]" ref={emblaRef}>
          <div className="flex gap-6 pl-[30px]">
            {products.map((product) => (
              <div key={product.title} className="shrink-0 w-[294px]">
                <FloatCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots mobile */}
        <div className="lg:hidden mt-6 flex items-center justify-center gap-2">
          {products.map((_, i) => (
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

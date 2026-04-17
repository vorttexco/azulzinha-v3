"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

function CardNfc() {
  return (
    <div className="bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-6 p-8 lg:p-10 flex-1 min-h-[478px]">
      <Image src={asset("/images/azulzinha-aproxima/icon-cartao.png")} alt="" width={82} height={75} />
      <h3 className="text-[22px] font-normal leading-[1.3] text-azul text-center">
        Receba por aproximação
      </h3>
      <div className="flex items-center gap-6">
        <Image src={asset("/images/azulzinha-aproxima/logos-bandeiras.png")} alt="Visa" width={79} height={25} />
        <Image src={asset("/images/azulzinha-aproxima/logo-mastercard.png")} alt="Mastercard" width={51} height={37} />
        <Image src={asset("/images/azulzinha-aproxima/logo-elo.png")} alt="Elo" width={75} height={24} />
      </div>
    </div>
  );
}

function CardPix() {
  return (
    <div className="bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-6 p-8 lg:p-10 flex-1 min-h-[478px]">
      <Image src={asset("/images/azulzinha-aproxima/icon-pix.png")} alt="" width={71} height={67} />
      <h3 className="text-[22px] font-normal leading-[1.3] text-azul text-center">
        Receba por Pix
      </h3>
      <p className="text-[18px] font-normal leading-[1.4] text-black text-center">
        É só habilitar e cadastrar a chave para vender com Pix.
      </p>
    </div>
  );
}

const carteiraLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function CardCarteiras() {
  return (
    <div className="bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-6 p-8 lg:p-10 flex-1 min-h-[478px] overflow-hidden">
      <h3 className="text-[22px] font-normal leading-[1.3] text-azul text-center">
        Receba por carteiras digitais (QR Code)
      </h3>

      <div className="flex flex-wrap justify-center gap-3 max-w-71">
        {carteiraLogos.map((n) => (
          <Image
            key={n}
            src={asset(`/images/azulzinha-aproxima/logo ${n}.png`)}
            alt={`Logo ${n}`}
            width={59}
            height={59}
            className="w-14.75 h-14.75 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default function PaymentMethodsSection() {
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

  const cardComponents = [<CardNfc key="nfc" />, <CardPix key="pix" />, <CardCarteiras key="carteiras" />];

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <div className="flex flex-col items-center gap-6 lg:gap-[60px]">
          {/* Header */}
          <div className="text-center max-w-[696px]">
            <h2 className="section-title text-azul mb-4">
              Como o seu cliente prefere pagar? Ofereça opções e venda mais
            </h2>
            <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
              Com azulzinha aproxima você pode receber com as principais bandeiras de cartão e carteiras digitais do mercado e também aceitar Pix!
            </p>
          </div>

          {/* Desktop row */}
          <div className="hidden lg:flex gap-6 w-full">
            {cardComponents}
          </div>

          {/* Mobile carousel */}
          <div className="lg:hidden w-full overflow-hidden -mx-[30px] select-none" ref={emblaRef}>
            <div className="flex gap-6 pl-[30px]">
              {cardComponents.map((card, i) => (
                <div key={i} className="shrink-0 w-[328px]">
                  {card}
                </div>
              ))}
            </div>
          </div>

          {/* Dots mobile */}
          <div className="lg:hidden flex items-center justify-center gap-2">
            {cardComponents.map((_, i) => (
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
      </div>
    </section>
  );
}

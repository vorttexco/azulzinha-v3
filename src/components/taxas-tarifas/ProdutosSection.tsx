"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/assets";

interface FeatureItem {
  icon: string;
  text: string;
}

interface ProductCard {
  name: string;
  description: string;
  image: string;
  features: FeatureItem[];
  href: string;
}

const products: ProductCard[] = [
  {
    name: "azulzinha smart",
    description:
      "A maquininha de cartão para centralizar e simplificar a gestão financeira",
    image: "/images/taxas-tarifas/maquininha-smart.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-1.svg", text: "Compatível com Apps de PDV móvel;" },
      { icon: "/images/taxas-tarifas/icon-smart-2.svg", text: "Controle de estoque;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Gestão de fluxo de caixa;" },
      { icon: "/images/taxas-tarifas/icon-smart-4.svg", text: "Pagamento portátil NFC, Chip & PIN;" },
      { icon: "/images/taxas-tarifas/icon-smart-5.svg", text: "Wi-Fi & Bluetooth;" },
      { icon: "/images/taxas-tarifas/icon-smart-6.svg", text: "Bateria de longa duração;" },
      { icon: "/images/taxas-tarifas/icon-smart-7.svg", text: "Impressora de bobina;" },
      { icon: "/images/taxas-tarifas/icon-smart-8.svg", text: "Use como maquininha convencional." },
    ],
    href: "/maquininhas/smart",
  },
  {
    name: "azulzinha pro",
    description: "Para levar a maquininha de cartão até o seu cliente",
    image: "/images/taxas-tarifas/maquininha-pro.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-8.svg", text: "Terminal sem fio projetado para a mobilidade;" },
      { icon: "/images/taxas-tarifas/icon-smart-5.svg", text: "Conexão Wi-Fi e 3G;" },
      { icon: "/images/taxas-tarifas/icon-smart-6.svg", text: "Bateria de longa duração;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Captura de dados;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Leitor de código de barras;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Assinatura eletrônica;" },
      { icon: "/images/taxas-tarifas/icon-smart-7.svg", text: "Impressora de bobina;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "GPS." },
    ],
    href: "/maquininhas/pro",
  },
  {
    name: "azulzinha TEF",
    description:
      "A azulzinha da CAIXA para movimentar grandes volumes",
    image: "/images/taxas-tarifas/maquininha-tef.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Transferência eletrônica de fundos (TEF);" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Fácil integração com automação comercial;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Conciliação automática de vendas;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Conexão USB e Serial;" },
      { icon: "/images/taxas-tarifas/icon-smart-6.svg", text: "Bateria de longa duração." },
    ],
    href: "/maquininhas/tef",
  },
];

export default function ProdutosSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps" },
    [WheelGesturesPlugin()]
  );
  const [activeDot, setActiveDot] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setDotCount(emblaApi.scrollSnapList().length);
      onSelect();
    };
    update();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-360 mx-auto flex flex-col items-center gap-6 lg:gap-10">
        <div className="flex flex-col items-center gap-4 px-7.5 lg:px-25">
          <h2 className="section-title text-azul">
            Alavanque seu negócio com a maquininha da CAIXA
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[666px]">
            Escolha a azulzinha ideal para você
          </p>
        </div>

        <div className="w-full overflow-hidden py-4 select-none" ref={emblaRef}>
          <div className="flex pl-7.5 lg:pl-25 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="shrink-0 w-[280px] lg:w-[319px] bg-white rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col last:mr-7.5"
              >
                {/* Product image */}
                <div className="flex items-center justify-center h-[250px] lg:h-[300px] px-8 pt-6">
                  <div className="relative w-[150px] h-full">
                    <Image
                      src={asset(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 px-8 pb-8 flex-1">
                  <h3 className="text-[22px] leading-[1.4] text-azul">
                    {product.name}
                  </h3>
                  <p className="text-[16px] leading-[1.4] text-black">
                    {product.description}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-col gap-5 flex-1">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Image
                          src={asset(feature.icon)}
                          alt=""
                          width={18}
                          height={18}
                          className="shrink-0 mt-0.5"
                        />
                        <span className="text-[16px] leading-[1.4] text-cinza">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-[14px] leading-[1.3] text-azul hover:opacity-80 transition-opacity"
                  >
                    Saiba mais
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path
                        d="M8 1L12 5M12 5L8 9M12 5H1"
                        stroke="#006CAD"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {dotCount > 1 && (
          <div className="flex items-center gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
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
        )}
      </div>
    </section>
  );
}

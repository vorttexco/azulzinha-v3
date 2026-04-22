"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/assets";

interface FeatureItem {
  icon: string;
  text: string;
}

export interface ProdutosSectionCard {
  name: string;
  description: string;
  image: string;
  features: FeatureItem[];
  href: string;
  hrefLabel?: string;
}

const defaultProducts: ProdutosSectionCard[] = [
  {
    name: "azulzinha smart",
    description:
      "A maquininha de cartão para centralizar e simplificar a gestão financeira",
    image: "/images/taxas-tarifas/maquininha-smart.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-1.svg", text: "Compatível com Apps de PDV móvel;" },
      { icon: "/images/taxas-tarifas/icon-smart2.svg", text: "Controle de estoque;" },
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

function ProductCard({ product }: { product: ProdutosSectionCard }) {
  return (
    <div className="flex flex-col justify-end items-center -gap-[91px]">
      {/* Product image floating above */}
      <div className="relative h-[280px] lg:h-[320px] -mb-[140px] z-10 pointer-events-none">
        <Image
          src={asset(product.image)}
          alt={product.name}
          width={172}
          height={338}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Card */}
      <div className="w-full bg-white rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] pt-[140px] pb-8 px-8 flex flex-col flex-1">
        <div className="flex flex-col gap-4">
          <h3 className="text-[22px] leading-[1.4] text-azul">
            {product.name}
          </h3>
          <p className="text-[16px] leading-[1.4] text-black">
            {product.description}
          </p>

          <div className="flex flex-col gap-5 flex-1">
            {product.features.map((feature, i) => (
              <div key={i} className="grid grid-cols-[20px_1fr] gap-3">
                <div className="relative w-5 aspect-square">
                  <Image
                    src={asset(feature.icon)}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

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
            {product.hrefLabel ?? "Saiba mais"}
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
    </div>
  );
}

interface ProdutosSectionProps {
  title?: string;
  subtitle?: string;
  products?: ProdutosSectionCard[];
  buttonText?: string;
  buttonHref?: string;
}

export default function ProdutosSection({
  title = "Alavanque seu negócio com a maquininha da CAIXA",
  subtitle = "Escolha a azulzinha ideal para você",
  products = defaultProducts,
  buttonText,
  buttonHref = "#",
}: ProdutosSectionProps = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
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
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="flex flex-col items-center gap-6 lg:gap-10 mb-10 lg:mb-14">
          <div className="flex flex-col items-center gap-4">
            <h2 className="section-title text-azul">{title}</h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[666px]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="flex-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden overflow-hidden -mx-[30px] select-none" ref={emblaRef}>
          <div className="flex gap-6 pl-[30px]">
            {products.map((product) => (
              <div key={product.name} className="shrink-0 w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots - mobile only */}
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

        {buttonText && (
          <div className="mt-10 lg:mt-14 flex justify-center">
            <a href={buttonHref} className="btn-laranja">
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

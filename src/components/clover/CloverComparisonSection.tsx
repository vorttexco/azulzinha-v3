"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

interface ProductSpec {
  label: string;
  value: string;
}

interface CloverProduct {
  name: string;
  image: string;
  description: string;
  whyChooseTitle: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  ctaText: string;
}

const products: CloverProduct[] = [
  {
    name: "Clover Flex",
    image: "/images/product-clover-flex.png",
    description:
      "No balcão, na mesa ou em qualquer lugar, atenda seus clientes com mais rapidez e conveniência com a Clover Flex, uma solução móvel completa de pagamentos com impressora integrada.",
    whyChooseTitle: "Por que escolher a Clover Flex?",
    features: [
      {
        title: "Segura",
        description: "Criptografia de ponta a ponta para proteger seus dados;",
        icon: "/images/clover/icon-segura.svg",
      },
      {
        title: "Completa",
        description:
          "Aceita Pix, QR Code, cartões (chip, tarja e aproximação), carteiras digitais e link de pagamento;",
        icon: "/images/clover/icon-completa.svg",
      },
      {
        title: "Sempre conectada",
        description:
          "Wi-Fi, 4G, 3G e 2G para um sinal estável onde você estiver;",
        icon: "/images/clover/icon-conectada.svg",
      },
      {
        title: "Mobilidade sem preocupação",
        description:
          "Bateria de longa duração e recarga prática via base ou USB-C;",
        icon: "/images/clover/icon-mobilidade.svg",
      },
      {
        title: "Mais comodidade",
        description: "Impressão de recibos e envio digital por SMS ou e-mail;",
        icon: "/images/clover/icon-comodidade.svg",
      },
      {
        title: "Rápida e confiável",
        description: "Processador Qualcomm Snapdragon™ e mais memória.",
        icon: "/images/clover/icon-rapida.svg",
      },
    ],
    specs: [
      { label: "Tela", value: 'Colorida e sensível ao toque (5,99");' },
      {
        label: "Câmera",
        value: "Leitura de código de barras e QR Code (1D/2D);",
      },
      { label: "Segurança", value: "Proteção total com criptografia;" },
      { label: "Acessório", value: "Capa de silicone para maior durabilidade;" },
      { label: "Carregamento", value: "recarga de bateria por indução." },
    ],
    ctaText: "Peça a sua Clover Flex",
  },
  {
    name: "Clover Mini",
    image: "/images/product-clover-mini.png",
    description:
      "Pequena no tamanho, gigante no desempenho, a Clover Mini é um PDV compacto que cabe em qualquer espaço, facilita a gestão do seu negócio e melhora a experiência dos seus clientes.",
    whyChooseTitle: "Por que escolher a Clover Mini?",
    features: [
      {
        title: "Segura",
        description: "Criptografia de ponta a ponta para proteger seus dados",
        icon: "/images/clover/icon-segura.svg",
      },
      {
        title: "Completa",
        description:
          "Aceita Pix, QR Code, cartões (chip, tarja e aproximação), carteiras digitais e link de pagamento",
        icon: "/images/clover/icon-completa.svg",
      },
      {
        title: "Sempre conectada",
        description:
          "Wi-Fi, 4G, 3G e 2G para um sinal estável onde você estiver",
        icon: "/images/clover/icon-conectada.svg",
      },
      {
        title: "Mais comodidade",
        description: "Impressão de recibos e envio digital por SMS ou e-mail",
        icon: "/images/clover/icon-comodidade.svg",
      },
      {
        title: "Compacta e poderosa",
        description: "Compacta e poderosa: Desempenho de ponta com processador Qualcomm 660.",
        icon: "/images/clover/icon-rapida.svg",
      },
    ],
    specs: [
      { label: "Tela touch", value: 'Tela de 8” sensível ao toque para autoatendimento e conferência da compra;' },
      {
        label: "Câmera",
        value: "Leitura de código de barras e QR Code (1D/2D)",
      },
      { label: "Segurança", value: "Proteção total com criptografia" },
      { label: "Fonte de alimentação", value: "Cabo." },

    ],
    ctaText: "Peça a sua Clover Mini",
  },
];

function ArrowIcon() {
  return (
    <Image
      src={asset("/images/clover/icon-arrow.svg")}
      alt=""
      width={18}
      height={16}
      className="mt-[3px] shrink-0"
    />
  );
}

function ScrollDots({
  count,
  active,
  onDotClick,
}: {
  count: number;
  active: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Ir para ${i + 1}`}
          className={`transition-all duration-300 rounded-full cursor-pointer h-[6px] ${i === active ? "w-[28px] bg-laranja" : "w-[6px] bg-[#D9D9D9]"
            }`}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: CloverProduct }) {
  return (
    <div className="h-full lg:h-[1286px] lg:w-[605px] bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col mt-[140px] lg:mt-[160px]">
      {/* Product image - flutua acima do card com margem negativa */}
      <div className="relative w-full h-[280px] lg:h-[320px] -mt-[140px] lg:-mt-[160px] pointer-events-none">
        <Image
          src={asset(product.image)}
          alt={product.name}
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 p-6 lg:p-14 flex-1">
        {/* Name + Description */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[22px] lg:text-[26px] leading-[1.3] text-azul">
            {product.name}
          </h3>
          <p className="text-[14px] lg:text-[16px] leading-[1.5] text-black">
            {product.description}
          </p>
          <div className="w-[493px] border-t border-[#E6E6E6]" />
        </div>

        {/* Why Choose - Features */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[18px] leading-[1.4] text-black">
            {product.whyChooseTitle}
          </h4>
          <div className="flex flex-col gap-4">
            {product.features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <Image
                  src={asset(feature.icon)}
                  alt=""
                  width={19}
                  height={24}
                  className="shrink-0"
                />
                <div>
                  <span className="text-[16px] text-black">
                    {feature.title}
                  </span>
                  <br />
                  <span className="text-[16px] leading-[1.5] text-cinza">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ficha Técnica - always visible */}
        <div className="border-t border-[#E2E2E2] pt-6">
          <h4 className="text-[18px] leading-[1.4] text-black mb-4">
            Ficha Técnica
          </h4>
          <div className="flex flex-col gap-3">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-3">
                <ArrowIcon />
                <div>
                  <span className="text-[16px] text-black">{spec.label}</span>
                  <br />
                  <span className="text-[16px] leading-[1.5] text-cinza">
                    {spec.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a href="/peca-azulzinha" className="btn-laranja self-start mt-auto">
          {product.ctaText}
        </a>
      </div>
    </div>
  );
}

export default function CloverComparisonSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", containScroll: false });
  const [activeDot, setActiveDot] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleDotClick = useCallback(
    (i: number) => {
      emblaApi?.scrollTo(i);
    },
    [emblaApi]
  );

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul text-center mb-10 lg:mb-[60px]">
          Compare e escolha a sua Clover
        </h2>

        {/* Desktop: lado a lado */}
        <div className="hidden lg:flex flex-row gap-[31px] justify-center items-stretch overflow-visible">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden py-[160px] -my-[160px]" ref={emblaRef}>
            <div className="flex items-stretch">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex-[0_0_88%] min-w-0 px-3 flex flex-col"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <ScrollDots
            count={scrollSnaps.length || products.length}
            active={activeDot}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </section>
  );
}

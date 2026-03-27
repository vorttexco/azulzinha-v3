"use client";

import Image from "next/image";
import { useRef } from "react";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ArrowIcon from "@/components/icons/ArrowIcon";

const products = [
  {
    name: "Clover Flex",
    description: "Receba pagamentos e gerencie seu negócio com flexibilidade e tenha todos os recursos na palma da mão com um checkout rápido e prático.",
    image: asset("/images/product-clover-flex.png"),
  },
  {
    name: "Clover Mini",
    description: "Aceite uma variedade de meios de pagamento, tenha uma visão completa do negócio",
    image: asset("/images/product-clover-mini.png"),
  },
  {
    name: "azulzinha smart",
    description: "Nossa azulzinha mais rápida, moderna, eficiente e com muito mais funcionalidades para multiplicar seu sucesso.",
    image: asset("/images/product-smart.png"),
  },
  {
    name: "azulzinha pro",
    description: "Nossa azulzinha mais prática e sem fio, ideal para levar até o cliente e agilizar o atendimento.",
    image: asset("/images/product-pro.png"),
  },
  {
    name: "azulzinha TEF",
    description: "Integre suas vendas para uma experiência de compra ágil, conciliação segura e gestão eficaz do seu negócio.",
    image: asset("/images/product-tef.png"),
  },
  {
    name: "azulzinha aproxima",
    description: "Instale o App e venda muito mais por aproximação, carteiras digitais e Pix no seu celular ou tablet.",
    image: asset("/images/product-aproxima.png"),
  },
];

export default function ProductsSection() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }));
  const [emblaRef] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps" },
    [autoplay.current, WheelGesturesPlugin()]
  );

  return (
    <section className="w-full bg-white py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] text-center">
        <h2 className="section-title text-azul">
          Escolha a azulzinha ideal para o seu <span className="text-[#FC8F01]">negócio</span>
        </h2>
        <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-[6px] px-[17px] py-[10px] text-[16px] text-[#006CAD] cursor-pointer hover:bg-[#006CAD]/5 transition-colors">
          Peça a sua azulzinha
          <ArrowIcon />
        </a>
      </div>

      <div className="max-w-[1440px] mx-auto w-full overflow-hidden mt-10" ref={emblaRef}>
        <div className="flex pl-[30px] lg:pl-[100px] pr-6 pb-4 gap-6 items-end">
          {products.map((product) => (
            <div key={product.name} className="shrink-0 w-[294px] flex flex-col">


              <div className="relative h-[280px] w-full flex items-end justify-center z-10 mb-[-120px]">
                <Image src={product.image} alt={product.name} fill className="object-contain object-bottom" />
              </div>

              <div className="bg-white rounded-[12px] px-5 pt-[140px] pb-5 flex flex-col h-[321px] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                <div>
                  <h3 className="card-title text-[#006CAD]">{product.name}</h3>
                  <p className="card-text text-black mt-2">{product.description}</p>
                </div>

                <a
                  href="#"
                  className="card-link inline-flex items-center gap-2 text-azul cursor-pointer hover:opacity-80 transition-opacity mt-auto"
                >
                  Saiba mais
                  <ArrowIcon />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
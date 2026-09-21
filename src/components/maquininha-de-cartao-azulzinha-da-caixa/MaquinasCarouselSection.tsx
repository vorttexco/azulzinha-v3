"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/assets";

interface MachineCard {
  name: string;
  description: string;
  image: string;
  moreHref: string;
  features: string[];
  moreClassName: string;
  orderClassName: string;
}

const machines: MachineCard[] = [
  {
    name: "azulzinha pro",
    description:
      "A maquininha sem fio da CAIXA, para levar até o cliente e agilizar o atendimento:",
    image: "/images/maquininhas/product-azulzinha-pro.png",
    moreHref: "/maquininhas/pro",
    moreClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-pro",
    orderClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-pro",
    features: [
      "Terminal sem fio;",
      "Alta conectividade;",
      "Conexão Wi-fi e 3G;",
      "GPS incluso;",
      "Bateria de longa duração;",
      "Captura de dados;",
      "Leitor de código de barras;",
      "Assinatura eletrônica;",
      "Impressora de bobina.",
    ],
  },
  {
    name: "azulzinha smart",
    description:
      "A maquininha inteligente da CAIXA, para centralizar e simplificar a gestão financeira:",
    image: "/images/maquininhas/product-azulzinha-smart.png",
    moreHref: "/azulzinhasmart",
    moreClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-smart",
    orderClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-smart",
    features: [
      "Smart POS em Android;",
      "Loja de Apps de PDV móvel;",
      "Controle de estoque;",
      "Gestão de fluxo de caixa;",
      "Tela sensível ao toque;",
      "Película Braille;",
      "Conexão Wi-Fi & Bluetooth;",
      "Bateria de longa duração;",
      "Impressora de bobina.",
    ],
  },
  {
    name: "azulzinha TEF",
    description:
      "A maquininha da CAIXA sob medida para grandes negócios e volumes transacionais:",
    image: "/images/maquininhas/product-azulzinha-tef.png",
    moreHref: "/maquininhas/tef",
    moreClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-tef",
    orderClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-tef",
    features: [
      "Display LCD e teclado;",
      "Transferência eletrônica de fundos (TEF);",
      "Conciliação automática de vendas;",
      "Conexão USB e Serial;",
      "Bateria de longa duração;",
      "Sistema de alta disponibilidade;",
      "Proteção antifraude;",
      "Impressão integrada ao cupom.",
    ],
  },
  {
    name: "azulzinha aproxima",
    description:
      "O aplicativo da azulzinha que transforma celular em maquininha da CAIXA:",
    image: "/images/maquininhas/product-azulzinha-aproxima.png",
    moreHref: "/azulzinha-aproxima",
    moreClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-aproxima",
    orderClassName:
      "LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-aproxima",
    features: [
      "Use em até 5 (cinco) dispositivos ao mesmo tempo;",
      "Funciona em celular ou tablet com tecnologia de aproximação;",
      "Compatível com Android versão 12 ou superior;",
      "Aceita débito, crédito, Pix, carteiras digitais e VR Benefícios;",
      "Emite relatório parcial e total do dia;",
      "Aceite pagamentos com VR Benefícios por QR Code.",
    ],
  },
];

function Card({ machine }: { machine: MachineCard }) {
  return (
    <div className="h-full bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-6 lg:p-8 flex flex-col justify-between gap-6">
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-[220px] lg:h-[260px]">
          <Image
            src={asset(machine.image)}
            alt={machine.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-[22px] lg:text-[26px] leading-[1.3] text-azul">
          {machine.name}
        </h3>
        <p className="text-[16px] leading-[1.4] text-black">
          {machine.description}
        </p>
        <ul className="flex flex-col gap-2">
          {machine.features.map((feature) => (
            <li key={feature} className="text-[14px] lg:text-[16px] leading-[1.4] text-[#333333]">
              • {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={machine.moreHref}
          className={`inline-flex items-center justify-center rounded-[6px] px-[17px] py-[10px] text-[16px] border border-[#333333] text-[#333333] hover:opacity-80 ${machine.moreClassName}`}
        >
          Saiba mais
        </Link>
        <a
          href="#form"
          className={`btn-laranja ${machine.orderClassName}`}
        >
          Peça a sua
        </a>
      </div>
    </div>
  );
}

export default function MaquinasCarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", slidesToScroll: 1 },
    [WheelGesturesPlugin()]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-[30px] lg:px-[100px] mb-8 lg:mb-[60px]">
          <h2 className="section-title text-azul">
            Escolha a azulzinha ideal para o seu negócio
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center mt-4">
            Conheça as soluções de venda presencial da CAIXA.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex pl-[30px] lg:pl-[100px] gap-6">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className="shrink-0 w-[280px] lg:w-[360px]"
              >
                <Card machine={machine} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {machines.map((machine, i) => (
            <button
              key={machine.name}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para ${machine.name}`}
              className={`h-[6px] rounded-full cursor-pointer transition-all ${
                i === selectedIndex
                  ? "w-[28px] bg-laranja"
                  : "w-[6px] bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

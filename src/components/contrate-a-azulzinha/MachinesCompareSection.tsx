"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/assets";

interface Machine {
  name: string;
  description: string;
  image: string;
  href: string;
  features: string[];
}

const machines: Machine[] = [
  {
    name: "azulzinha smart",
    description:
      "A maquininha de cartão para centralizar e simplificar a gestão financeira",
    image: "/images/maquininhas/product-azulzinha-smart.png",
    href: "/azulzinhasmart",
    features: [
      "Compatível com Apps de PDV móvel;",
      "Controle de estoque;",
      "Gestão de fluxo de caixa;",
      "Pagamento portátil NFC, Chip & PIN;",
      "Wi-Fi & Bluetooth;",
      "Bateria de longa duração;",
      "Impressora de bobina;",
      "Use como maquininha convencional.",
    ],
  },
  {
    name: "azulzinha TEF",
    description: "A azulzinha da CAIXA para movimentar grandes volumes",
    image: "/images/maquininhas/product-azulzinha-tef.png",
    href: "/maquininhas/tef",
    features: [
      "Transferência eletrônica de fundos (TEF);",
      "Fácil integração com automação comercial;",
      "Conciliação automática de vendas;",
      "Conexão USB e Serial;",
      "Bateria de longa duração.",
    ],
  },
  {
    name: "azulzinha pro",
    description: "Para levar a maquininha de cartão até o seu cliente",
    image: "/images/maquininhas/product-azulzinha-pro.png",
    href: "/maquininhas/pro",
    features: [
      "Terminal sem fio projetado para a mobilidade;",
      "Conexão Wi-Fi e 3G;",
      "Bateria de longa duração;",
      "Captura de dados;",
      "Leitor de código de barras;",
      "Assinatura eletrônica;",
      "Impressora de bobina;",
      "GPS.",
    ],
  },
];

function MachineCard({ machine }: { machine: Machine }) {
  return (
    <div className="h-full bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-6 lg:p-8 flex flex-col gap-6">
      <div className="relative w-full h-[180px] lg:h-[220px]">
        <Image
          src={asset(machine.image)}
          alt={machine.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-[22px] lg:text-[26px] leading-[1.3] text-azul">
          {machine.name}
        </h3>
        <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
          {machine.description}
        </p>
        <ul className="flex flex-col gap-2 mt-2">
          {machine.features.map((feature) => (
            <li
              key={feature}
              className="text-[14px] lg:text-[16px] leading-[1.4] text-black"
            >
              • {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link href={machine.href} className="btn-laranja self-start">
        Saiba mais
      </Link>
    </div>
  );
}

export default function MachinesCompareSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
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
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="flex flex-col items-center gap-4 mb-8 lg:mb-[60px]">
          <h2 className="section-title text-azul">
            Acelere seu sucesso com a solução ideal
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
            Conheça e compare os modelos de azulzinha:
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <MachineCard key={machine.name} machine={machine} />
          ))}
        </div>

        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {machines.map((machine) => (
                <div
                  key={machine.name}
                  className="flex-[0_0_88%] min-w-0 pr-4"
                >
                  <MachineCard machine={machine} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
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
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import Accordion, { AccordionItem } from "@/components/Accordion";

const features: AccordionItem[] = [
  {
    title: "Interface simplificada",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Usabilidade Android;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Experiência de uso simplificada;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Calculadora integrada.</li>
      </ul>
    ),
  },
  {
    title: "Diversidade de pagamentos",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Aceita Pix, QR Code, cartões;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Carteiras digitais;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Link de pagamento.</li>
      </ul>
    ),
  },
  {
    title: "Design e inovação",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Design moderno e compacto;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Tecnologia de ponta;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Tela touchscreen intuitiva.</li>
      </ul>
    ),
  },
  {
    title: "Interface e navegação intuitiva",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Menu simplificado;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Navegação rápida;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Fácil configuração.</li>
      </ul>
    ),
  },
  {
    title: "Gestão do negócio",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Relatórios em tempo real;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Controle de vendas;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Gestão de estoque.</li>
      </ul>
    ),
  },
  {
    title: "Acesso remoto",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Gerencie de qualquer lugar;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Dashboard online;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Notificações em tempo real.</li>
      </ul>
    ),
  },
];

export default function CloverFeaturesSection() {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-[110px] flex flex-col lg:flex-row gap-8 lg:gap-[78px] items-start">
        {/* Left - Image */}
        <div className="relative w-full lg:w-[605px] h-[300px] lg:h-[426px] rounded-[12px] overflow-hidden shrink-0">
          <Image
            src={asset("/images/clover/features-photo.png")}
            alt="Clover em uso"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-8 flex-1 w-full">
          <h2 className="text-[38px] font-normal leading-[1.3] text-azul">
            Porque escolher a Clover?
          </h2>

          <Accordion
            items={features}
            defaultOpenIndex={0}
            className="bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] px-[32px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

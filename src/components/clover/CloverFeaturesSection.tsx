"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import Accordion, { AccordionItem } from "@/components/shared/Accordion";

const features: AccordionItem[] = [
  {
    title: "Integração simplificada",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Ferramentas que facilitam a integração;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Documentação completa e estruturada;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Suporte rápido e remoto para automação comercial.</li>
      </ul>
    ),
  },
  {
    title: "Diversidade de pagamentos",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Mais de 240 bandeiras com a solução SiTef;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Recebimento em dinheiro;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Venda por aproximação.</li>
      </ul>
    ),
  },
  {
    title: "Design e inovação",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Diversidade de funções, incluindo autoatendimento;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Padronização da sua frente de caixa.</li>
      </ul>
    ),
  },
  {
    title: "Interface e navegação intuitiva",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Usabilidade Android;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Experiência de uso simplificada;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Calculadora integrada.</li>
      </ul>
    ),
  },
  {
    title: "Gestão do negócio",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Cadastro de clientes;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Cadastro de funcionários e controle de turnos;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Gestão de fluxo de caixa;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Portal para acompanhamento das transações online.</li>
      </ul>
    ),
  },
  {
    title: "Acesso remoto",
    content: (
      <ul className="list-disc list-inside flex flex-col gap-0">
        <li className="text-[14px] leading-[1.4] text-[#666]">Controle de ferramentas a distância;</li>
        <li className="text-[14px] leading-[1.4] text-[#666]">Suporte remoto dedicado e sempre disponível.</li>
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

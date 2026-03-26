"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const features = [
  {
    icon: asset("/images/clover/mini-icon-01.svg"),
    title: "Interface simplificada",
    items: [
      "Usabilidade Android;",
      "Experiência de uso simplificada;",
      "Calculadora integrada.",
    ],
  },
  {
    icon: asset("/images/clover/mini-icon-02.svg"),
    title: "Diversidade de pagamentos",
    items: [
      "Aceita Pix, QR Code, cartões;",
      "Carteiras digitais;",
      "Link de pagamento.",
    ],
  },
  {
    icon: asset("/images/clover/mini-icon-03.svg"),
    title: "Design e inovação",
    items: [
      "Design moderno e compacto;",
      "Tecnologia de ponta;",
      "Tela touchscreen intuitiva.",
    ],
  },
  {
    icon: asset("/images/clover/mini-icon-04.svg"),
    title: "Interface e navegação intuitiva",
    items: [
      "Menu simplificado;",
      "Navegação rápida;",
      "Fácil configuração.",
    ],
  },
  {
    icon: asset("/images/clover/mini-icon-05.svg"),
    title: "Gestão do negócio",
    items: [
      "Relatórios em tempo real;",
      "Controle de vendas;",
      "Gestão de estoque.",
    ],
  },
  {
    icon: asset("/images/clover/mini-icon-06.svg"),
    title: "Acesso remoto",
    items: [
      "Gerencie de qualquer lugar;",
      "Dashboard online;",
      "Notificações em tempo real.",
    ],
  },
];

export default function CloverFeaturesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-[110px] flex flex-col lg:flex-row gap-10 lg:gap-[78px]">
        {/* Left - Image */}
        <div className="relative w-full lg:w-[605px] h-[300px] lg:h-[426px] rounded-[12px] overflow-hidden shrink-0">
          <Image
            src={asset("/images/clover/features-photo.png")}
            alt="Clover em uso"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Accordion */}
        <div className="flex flex-col gap-8 flex-1">
          <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul">
            Porque escolher a Clover?
          </h2>

          <div className="flex flex-col">
            {features.map((feature, index) => (
              <div key={feature.title} className="border-b border-[#E2E2E2]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-4 cursor-pointer"
                >
                  <span className="text-[16px] font-bold leading-[1.4] text-black">
                    {feature.title}
                  </span>
                  <div
                    className={`w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-azul"
                        : "bg-azul"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[200px] pb-4" : "max-h-0"
                  }`}
                >
                  <ul className="flex flex-col gap-1">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] leading-[1.6] text-cinza flex items-start gap-2"
                      >
                        <span className="text-cinza mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

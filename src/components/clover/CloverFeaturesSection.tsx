"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const features = [
  {
    title: "Interface simplificada",
    items: [
      "Usabilidade Android;",
      "Experiência de uso simplificada;",
      "Calculadora integrada.",
    ],
  },
  {
    title: "Diversidade de pagamentos",
    items: [
      "Aceita Pix, QR Code, cartões;",
      "Carteiras digitais;",
      "Link de pagamento.",
    ],
  },
  {
    title: "Design e inovação",
    items: [
      "Design moderno e compacto;",
      "Tecnologia de ponta;",
      "Tela touchscreen intuitiva.",
    ],
  },
  {
    title: "Interface e navegação intuitiva",
    items: [
      "Menu simplificado;",
      "Navegação rápida;",
      "Fácil configuração.",
    ],
  },
  {
    title: "Gestão do negócio",
    items: [
      "Relatórios em tempo real;",
      "Controle de vendas;",
      "Gestão de estoque.",
    ],
  },
  {
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
          {/* Title */}
          <h2 className="text-[38px] font-normal leading-[1.3] text-azul">
            Porque escolher a Clover?
          </h2>

          {/* Card with Accordion */}
          <div className="bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] px-[32px] w-full">
            {features.map((feature, index) => (
              <div key={feature.title}>
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-[32px] cursor-pointer"
                >
                  <span className="text-[16px] font-normal leading-[1.4] text-black">
                    {feature.title}
                  </span>
                  <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0 bg-azul flex-none">
                    {openIndex === index ? (
                      /* Minus Icon */
                      <svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        className="transition-all duration-300"
                      >
                        <path
                          d="M1 1H11"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      /* Plus Icon */
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="transition-all duration-300"
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <ul className="pb-[32px] list-disc list-inside flex flex-col gap-0">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] leading-[1.4] text-[#666]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                {index < features.length - 1 && (
                  <div className="h-px bg-[#EBEBEB]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

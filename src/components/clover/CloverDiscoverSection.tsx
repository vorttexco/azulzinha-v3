"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/icons/ArrowIcon";

const features = [
  {
    label: "Gestão fácil: ",
    description: "tudo em uma única plataforma;",
  },
  {
    label: "Mais economia:",
    description: " menos sistemas, mais lucro;",
  },
  {
    label: "Integração rápida:",
    description: " conecte softwares (ERP e CRM) e pagamentos sem complicação.",
  },
];

export default function CloverDiscoverSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-[110px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-[78px]">
        {/* Left content */}
        <div className="flex flex-col gap-6 lg:w-[537px] shrink-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul">
              Descubra o poder do mundo Clover
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              A Clover entrou para a família de soluções da azulzinha da CAIXA
              para simplificar sua rotina, revolucionar sua operação e encantar
              os seus clientes com uma experiência de pagamentos inovadora!
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Com a tecnologia de ponta e o design moderno, você pode ter um PDV
              compacto com a Clover Mini ou um dispositivo móvel completo com a
              Clover Flex para fazer muito mais.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {features.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <ArrowIcon width={22} height={16} />
                <span className="text-[16px] leading-[1.4]">
                  <span className="text-azul">{item.label}</span>
                  <span className="text-black">{item.description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product image */}
        {/* Right - Product image */}
        <div className="relative w-full lg:w-[621px] h-[300px] lg:h-[508px]">
          <div className="relative w-full h-full bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] overflow-hidden">
            <Image
              src={asset("/images/clover/clover-machines.png")}
              alt="Clover Flex e Clover Mini"
              fill
              className="object-contain p-6"
            />

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Clover Mini — texto → linha → bolinha */}
              <text
                x="22"
                y="24"
                fontSize="4.2"
                fill="#006CAD"
                fontFamily="inherit"
                dominantBaseline="middle"
                textAnchor="end"
              >
                Clover Mini
              </text>
              <line x1="22.5" y1="24" x2="33" y2="24" stroke="#006CAD" strokeWidth="0.15" />
              <circle cx="34" cy="24" r="1.4" fill="white" stroke="#006CAD" strokeWidth="0.15" />
              <circle cx="34" cy="24" r="0.5" fill="#006CAD" />

              {/* Clover Flex — bolinha → linha → texto */}
              <circle cx="46" cy="68" r="1.4" fill="white" stroke="#006CAD" strokeWidth="0.15" />
              <circle cx="46" cy="68" r="0.5" fill="#006CAD" />
              <line x1="47.4" y1="68" x2="57" y2="68" stroke="#006CAD" strokeWidth="0.15" />
              <text
                x="58"
                y="68"
                fontSize="4.2"
                fill="#006CAD"
                fontFamily="inherit"
                dominantBaseline="middle"
                textAnchor="start"
              >
                Clover Flex
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

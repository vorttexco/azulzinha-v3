"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/icons/ArrowIcon";

const features = [
  "Gestão fácil:\u00A0tudo em uma única plataforma;",
  "Mais economia:\u00A0menos sistemas, mais lucro;",
  "Integração rápida:\u00A0conecte softwares (ERP e CRM) e pagamentos sem complicação.",
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
              <div key={item} className="flex items-center gap-4">
                <ArrowIcon width={22} height={16} />
                <span className="text-[16px] leading-[1.4] text-azul">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product image */}
        <div className="relative w-full lg:w-[621px] h-[300px] lg:h-[508px]">
          <div className="relative w-full h-full bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
            <Image
              src={asset("/images/clover/clover-machines.png")}
              alt="Clover Flex e Clover Mini"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

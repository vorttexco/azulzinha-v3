import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

const listItems = [
  "Tenha visão estratégica das vendas e pagamentos.",
  "Faça a antecipação do seu dinheiro e receba em até 2 dias, sem burocracia.",
  "Automatize relatórios personalizados.",
  "Solicite bobinas e habilite mais serviços.",
];

export default function PortalAppSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-[110px] flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-between gap-6 lg:gap-16">

        {/* Content — order-1 mobile (top), order-2 desktop (right) */}
        <div className="order-1 lg:order-2 flex flex-col gap-6 w-full lg:max-w-[530px]">
          <h2 className="section-title text-azul lg:text-left">
            Com azulzinha você tem mais facilidade para gerir
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
            Com o apoio do{" "}
            <span className="text-azul">App da azulzinha</span> e do{" "}
            <span className="text-azul">Portal da azulzinha</span> no dia a dia,
            você tem ferramentas completas para gerenciar seu negócio com mais
            simplicidade.
          </p>

          <ul className="flex flex-col gap-3">
            {listItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ArrowIcon width={18} height={13} className="shrink-0 mt-[3px]" />
                <span className="text-[16px] leading-[1.4] text-black">{item}</span>
              </li>
            ))}
          </ul>

          {/* Button — desktop only (inside content column) */}
          <a
            href="/gestao"
            className="hidden lg:inline-flex self-start items-center justify-center px-[17px] py-[10px] rounded-[6px] bg-[linear-gradient(177.34deg,#EDAC39_2.43%,#FC8F01_98%)] text-white text-[16px] font-normal hover:opacity-90 transition-opacity"
          >
            Saiba mais
          </a>
        </div>

        {/* Image — order-2 mobile (below content), order-1 desktop (left) */}
        <div className="order-2 lg:order-1 relative shrink-0 w-full max-w-[624px] aspect-[624/360] lg:aspect-auto lg:w-[624px] lg:h-[360px]">
          <div className="absolute right-0 bottom-0 w-[87%] h-[99%] rounded-[10px] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]" />
          <div className="absolute left-0 top-0 z-10 w-full h-full">
            <Image
              src={asset("/images/img-portal 1.png")}
              alt="Portal azulzinha"
              fill
              className="object-contain object-center lg:object-left-top"
            />
          </div>
        </div>

        {/* Button — mobile only (below image) */}
        <div className="order-3 lg:hidden w-full flex justify-center">
          <a
            href="/gestao"
            className="inline-flex items-center justify-center px-[17px] py-[10px] rounded-[6px] bg-[linear-gradient(177.34deg,#EDAC39_2.43%,#FC8F01_98%)] text-white text-[16px] font-normal hover:opacity-90 transition-opacity"
          >
            Saiba mais
          </a>
        </div>

      </div>
    </section>
  );
}

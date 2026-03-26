import Image from "next/image";
import { asset } from "@/lib/assets";

const cards = [
  {
    icon: asset("/images/icon-big-vendas.svg"),
    title: "Venda em qualquer lugar",
    description: "Soluções para lojas físicas e venda online.",
  },
  {
    icon: asset("/images/icon-big-resultados.svg"),
    title: "Impulsione seus resultados",
    description: "Serviços agregados para impulsionar suas vendas.",
  },
  {
    icon: asset("/images/icon-big-protecao.svg"),
    title: "Negócios sempre protegidos",
    description: "Plataformas robustas e seguras para grandes comércios.",
  },
  {
    icon: asset("/images/icon-big-controle.svg"),
    title: "Controle total do seu negócio",
    description: "Ferramentas completas de gestão em tempo real.",
  },
];

export default function PossibilitiesSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">
          {/* Left side - Text */}
          <div className="w-full lg:w-1/2 flex flex-col  gap-4">
            <h2 className="text-[38px] font-normal leading-[1.3] tracking-[0%] text-[#006CAD] text-left pt-4">
              Com azulzinha você tem mais
              <br className="hidden lg:block" />
              possibilidades para{" "}
              <span className="text-[#FC8F01]">crescer</span>
            </h2>

            <p className="font-normal text-[18px] leading-[140%] tracking-normal text-black">
              Empreenda com as soluções CAIXA em parceria
              <br className="hidden lg:block" />
              com a Fiserv, líder global em tecnologias de
              <br className="hidden lg:block" />
              pagamentos e serviços financeiros.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[250px] lg:h-[400px] rounded-[12px] lg:rounded-r-[20px] overflow-hidden">
            <Image
              src={asset("/images/possibilities-bg.png")}
              alt="Possibilidades com azulzinha"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row: 4 cards — negative margin sobe sobre a imagem no desktop */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:-mt-24">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[12px] w-[288px] h-[244px] pr-[40px] pl-[32px] py-0 flex flex-col justify-center gap-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={card.icon}
                alt=""
                width={40}
                height={40}
                className="w-10 h-10"
                unoptimized
              />
              <h3 className="text-[16px] leading-[1.4] text-[#006CAD] font-normal">
                {card.title}
              </h3>
              <p className="text-[14px] lg:text-[16px] leading-[1.4] text-black">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

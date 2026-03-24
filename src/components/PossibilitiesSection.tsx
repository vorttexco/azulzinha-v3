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
    <section className="w-full bg-[#F5F5F5] py-16">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        {/* Top row: Text left + Image right */}
        <div className="flex items-stretch gap-10">
          {/* Left side - Text */}
          <div className="w-1/2 flex flex-col justify-center gap-4">
            <h2 className="text-[28px] font-bold leading-[1.3] text-[#006CAD]">
              Com azulzinha você tem mais possibilidades para{" "}
              <span className="text-[#FC8F01]">crescer</span>
            </h2>

            <p className="text-[18px] leading-[1.4] text-black">
              Empreenda com as soluções CAIXA em parceria com a Fiserv, líder
              global em tecnologias de pagamentos e serviços financeiros.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative w-1/2 h-[400px] rounded-r-[20px] overflow-hidden">
            <Image
              src={asset("/images/possibilities-bg.png")}
              alt="Possibilidades com azulzinha"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row: 4 cards in a single row */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[12px] p-5 flex flex-col gap-3 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
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
              <p className="text-[16px] leading-[1.4] text-black">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

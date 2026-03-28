import Image from "next/image";
import { asset } from "@/lib/assets";

const cards = [
  {
    icon: "/images/azulzinha-smart/icon-graphic.png",
    title: "Visão consolidada",
    description:
      "Acompanhe os resultados das suas vendas tanto no ponto de venda quanto na maquininha",
  },
  {
    icon: "/images/azulzinha-smart/icon-computer.png",
    title: "Gestão centralizada",
    description:
      "Apps para cuidar do caixa, do estoque, antecipar recebíveis e fazer conciliação diária",
  },
  {
    icon: "/images/azulzinha-smart/icon-chat.png",
    title: "Suporte ao cliente",
    description:
      "Conte com nosso atendimento e conteúdos de ajuda exclusivos",
  },
];

export default function VantagensSmartSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <h2 className="section-title text-azul">
            Inteligente é resolver a vida em uma maquininha
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center gap-4 bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)] px-[60px] py-[52px] lg:py-[89px]"
              >
                <div className="relative w-[73px] h-[74px]">
                  <div className="absolute inset-0 bg-laranja rounded-[12px] translate-x-1 translate-y-1" />
                  <Image
                    src={asset(card.icon)}
                    alt=""
                    width={73}
                    height={74}
                    className="relative z-10 object-contain"
                  />
                </div>
                <h3 className="text-[22px] leading-[1.3] text-azul">
                  {card.title}
                </h3>
                <p className="text-[18px] leading-[1.4] text-black">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

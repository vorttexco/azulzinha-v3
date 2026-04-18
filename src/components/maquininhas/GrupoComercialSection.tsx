import Image from "next/image";
import { asset } from "@/lib/assets";

const benefits = [
  {
    icon: "/images/maquininhas/icon-graphico.png",
    title: "Taxas iguais e mais vantajosas",
    description:
      "Taxas mais atrativas e iguais para todos os estabelecimentos comerciais pertencentes ao Grupo",
  },
  {
    icon: "/images/maquininhas/icon-maq-cartao.png",
    title: "Isenção de custos com maquininha",
    description: "Isenção da taxa de maquininha quando aplicável*",
  },
  {
    icon: "/images/maquininhas/icon-peoples.png",
    title: "Condições exclusivas por segmento",
    description:
      "Todos os estabelecimentos comerciais participantes devem ter o mesmo ramo de atividade",
  },
];

export default function GrupoComercialSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto p-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <div className="flex flex-col items-center gap-[30px] lg:gap-[60px]">
          {/* Title + Description */}
          <div className="flex flex-col items-stretch gap-6 max-w-[952px]">
            <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-center text-azul">
              <span className="text-laranja font-bold"> Grupo Comercial </span> da azulzinha: garanta as melhores condições para os
              seus estabelecimentos
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
              Você tem diferentes estabelecimentos do mesmo ramo? Seu Gerente PJ
              CAIXA pode criar um Grupo Comercial com todos eles e garantir as
              melhores taxas para os seus negócios.
            </p>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center gap-6 bg-white border border-[#F1F1F1] rounded-[24px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] px-[59px] py-[89px] lg:px-[61px] lg:pt-[89px] lg:pb-[52px] text-center"
              >
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={asset(benefit.icon)}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[18px] lg:text-[22px] leading-[1.3] text-azul font-normal">
                  {benefit.title}
                </h3>
                <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer text */}
          <div className="flex flex-col items-stretch gap-4 max-w-[923px] text-center">
            <p className="text-[20px] leading-[1.4] text-azul">
              Fale com seu gerente PJ CAIXA <span className="text-[20px] lg:text-[18px] leading-[1.4] text-black">para conhecer as regras e condições</span>
            </p>
            <p className="text-[14px] leading-[1.4] text-cinza">
              *Verifique as condições de isenção para o seu perfil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

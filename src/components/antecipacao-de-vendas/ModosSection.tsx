import Image from "next/image";
import { asset } from "@/lib/assets";

const modos = [
  {
    icon: "/images/antecipacao-de-vendas/icon-antecipacao-automatica.svg",
    title: "Antecipação automática",
    description:
      "Você pré-define com que frequência deseja receber seu saldo disponível: diariamente, quinzenalmente, semanalmente ou mensalmente. A partir daí, os recebíveis são creditados na sua conta com uma taxa fixa.",
  },
  {
    icon: "/images/antecipacao-de-vendas/icon-antecipacao-eventual.svg",
    title: "Antecipação eventual",
    description:
      "Você negocia o adiantamento do seu saldo atual disponível por meio de uma determinada taxa de desconto. A negociação pode ser feita pelo App da azulzinha, pelo Portal ou direto na azulzinha.",
  },
];

export default function ModosSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <div className="flex flex-col gap-[30px] lg:gap-[78px]">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 lg:max-w-[820px]">
            <h2 className="section-title text-azul text-center lg:text-left">
              Escolha a modalidade que mais se encaixa
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
              São duas as modalidades de antecipação de recebíveis, que você escolhe de acordo com sua conveniência:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {modos.map((modo) => (
              <div
                key={modo.title}
                className="flex-1 flex flex-col gap-6 bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-6 lg:p-14"
              >
                <Image
                  src={asset(modo.icon)}
                  alt=""
                  width={91}
                  height={91}
                  className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px]"
                  unoptimized
                />
                <h3 className="text-[22px] leading-[1.4] text-azul">
                  {modo.title}
                </h3>
                <p className="text-[18px] leading-[1.4] text-black">
                  {modo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

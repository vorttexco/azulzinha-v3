import Image from "next/image";
import { asset } from "@/lib/assets";

const cards = [
  {
    icon: "/images/cliente-loterica/icon-recarga.png",
    text: "Trabalhe com as mesmas taxas do serviço de conveniência do TFL",
  },
  {
    icon: "/images/cliente-loterica/icon-bandeiras-parcial.png",
    text: "Solicite a sua maquininha com aluguel mensal de apenas R$29,90",
  },
  {
    icon: "/images/cliente-loterica/icon-tarifas.svg",
    text: "As tarifas de crédito e débito são pagas pelo portador do cartão",
  },
];

export default function AproveiteCondicoesSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 lg:pt-[80px] lg:pb-[110px] flex flex-col items-center gap-[30px] lg:gap-[60px]">
        <h2 className="section-title text-azul max-w-[1026px]">
          Aproveite as condições e comece a faturar com azulzinha Lotérica pro:
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
          {cards.map((card) => (
            <div
              key={card.text}
              className="flex-1 bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-6 p-[40px] lg:p-[56px] text-center min-h-[280px] lg:min-h-[341px]"
            >
              <div className="relative w-[72px] h-[72px] shrink-0">
                <Image
                  src={asset(card.icon)}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[18px] lg:text-[22px] leading-[1.3] text-azul">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[605px]">
          Contrate já pelo{" "}
          <a href="/app" className="text-laranja">
            App
          </a>
          ,{" "}
          <a href="/portal" className="text-laranja">
            Portal
          </a>{" "}
          ou Central de Atendimento da azulzinha!
        </p>
      </div>
    </section>
  );
}

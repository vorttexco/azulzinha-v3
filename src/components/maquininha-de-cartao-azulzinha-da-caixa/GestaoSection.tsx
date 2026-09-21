import Image from "next/image";
import { asset } from "@/lib/assets";

const items = [
  {
    icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-relatorios.png",
    text: "Automatize relatórios personalizados;",
  },
  {
    icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-servicos.png",
    text: "Solicite bobinas e habilite mais serviços.",
  },
];

export default function GestaoSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-[78px]">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h2 className="section-title text-azul text-center lg:text-left">
              Gerencie as suas vendas em tempo real de onde você estiver
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
              Com o apoio do App e do Portal da azulzinha, você tem tudo para
              gerir o desempenho do seu negócio com agilidade e transparência:
            </p>
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-[16px] lg:text-[18px] leading-[1.4] text-black"
                >
                  <Image
                    src={asset(item.icon)}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain shrink-0"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="btn-laranja self-center lg:self-start LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-peca-azulzinha"
            >
              Peça azulzinha
            </a>
          </div>
          <div className="relative w-full lg:w-1/2 h-[240px] lg:h-[420px]">
            <Image
              src={asset(
                "/images/maquininha-de-cartao-azulzinha-da-caixa/portal.png"
              )}
              alt="Portal e App da azulzinha"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

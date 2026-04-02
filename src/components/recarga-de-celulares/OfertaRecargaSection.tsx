import Image from "next/image";
import { asset } from "@/lib/assets";

const cards = [
  {
    icon: "/images/recarga-de-celulares/icone1.png",
    text: "Sem custos adicionais",
  },
  {
    icon: "/images/recarga-de-celulares/icone2.png",
    text: "Mais uma oportunidade de venda e aumento de receita",
  },
];

export default function OfertaRecargaSection() {
  return (
    <section className="bg-[#F4F4F4] overflow-hidden">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-[110px]">
        {/* Content: Text + Image */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 px-[30px] lg:pl-[100px] lg:pr-0">
          {/* Text */}
          <div className="flex flex-col gap-4 lg:w-[421px] lg:shrink-0">
            <h2 className="section-title text-azul text-center lg:text-left">
              A Azulzinha da Caixa oferece mais uma modalidade de negócios para
              você
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
              Além de facilitar as vendas no seu estabelecimento, a maquininha
              permite que você ofereça o serviço de recarga de telefonia para
              seus clientes. E o melhor disso tudo: sem qualquer custo
              adicional. Basta habilitar o serviço direto nela e começar a
              vender.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full lg:flex-1 h-[256px] lg:h-[426px] rounded-[12px] lg:rounded-l-[20px] lg:rounded-r-none overflow-hidden">
            <Image
              src={asset("/images/recarga-de-celulares/feature-image.png")}
              alt="Casal trabalhando em mercearia"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 mt-[30px] lg:mt-[78px] px-[30px] lg:px-[100px]">
          {cards.map((card) => (
            <div
              key={card.text}
              className="flex items-center gap-6 bg-white rounded-[12px] px-8 py-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] lg:flex-1 h-[184px]"
            >
              <Image
                src={asset(card.icon)}
                alt=""
                width={51}
                height={51}
                className="shrink-0"
              />
              <p className="text-[16px] leading-[1.4] text-azul">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

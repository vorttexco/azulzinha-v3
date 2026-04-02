import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

interface SolucaoCard {
  title: string;
  image: string;
  href: string;
}

const defaultCards: SolucaoCard[] = [
  {
    title: "Venda com PIX",
    image: "/images/pagamentos-whatsapp/solucao-pix.png",
    href: "/pix-azulzinha",
  },
  {
    title: "Venda por aproximação",
    image: "/images/pagamentos-whatsapp/solucao-aproximacao.png",
    href: "/azulzinha-aproxima",
  },
  {
    title: "Antecipe suas vendas",
    image: "/images/pagamentos-whatsapp/solucao-antecipacao.png",
    href: "/antecipacao-de-vendas",
  },
];

interface SolucoesSectionProps {
  title?: string;
  cards?: SolucaoCard[];
}

export default function SolucoesSection({
  title = "Mais soluções azulzinha para o seu negócio",
  cards = defaultCards,
}: SolucoesSectionProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 lg:pb-[110px]">
        <h2 className="section-title text-azul mb-8 lg:mb-[60px]">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="shrink-0 w-[330px] lg:w-auto lg:flex-1 h-[320px] rounded-[10px] overflow-hidden relative group"
            >
              {/* Background image */}
              <Image
                src={asset(card.image)}
                alt={card.title}
                fill
                className="object-cover"
              />

              {/* Blue gradient base */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,#006CAD_8.16%,#038DE1_96.88%)]" />

              {/* Image on top of gradient */}
              <Image
                src={asset(card.image)}
                alt=""
                fill
                className="object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(-1deg,#003D91_34%,rgba(1,61,145,0)_81%)] opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                <h3 className="text-[22px] leading-[1.4] text-white">
                  {card.title}
                </h3>
                <span className="text-[14px] leading-[1.4] text-white inline-flex items-center gap-2 group-hover:opacity-80 transition-opacity">
                  Saiba mais
                  <ArrowIcon width={20} height={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

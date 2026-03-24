"use client";

import Image from "next/image";
import { useRef } from "react";
import { asset } from "@/lib/assets";

type CardVariant = "default" | "variant2" | "variant3";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  variant: CardVariant;
}

const cards: ServiceCard[] = [
  {
    title: "Link de Pagamento",
    description:
      "Lucre muito mais pela internet, redes sociais e aplicativos de mensagens com links seguros e ilimitados.",
    image: asset("/images/card-link-pagamento.png"),
    variant: "default",
  },
  {
    title: "Pix por aproximação",
    description:
      "Agora é só aproximar e pagar via carteira digital ou pelo App do banco.",
    image: asset("/images/card-pix-aproximacao.png"),
    variant: "variant2",
  },
  {
    title: "App azulzinha aproxima",
    description:
      "Controle suas vendas, antecipe recebíveis, crie links de pagamento e muito mais.",
    image: asset("/images/card-app-aproxima.png"),
    variant: "default",
  },
  {
    title: "Recarga e telefonia",
    description:
      "Habilite o serviço sem custo na sua maquininha e tenha uma oportunidade extra de receita.",
    image: asset("/images/card-recarga-telefonia.png"),
    variant: "variant3",
  },
  {
    title: "azulzinha Lotérica Pro",
    description:
      "Ofereça o serviço de conveniência e receba jogos, boletos e contas com os cartões Elo, Visa e Mastercard.",
    image: asset("/images/card-loterica-pro.png"),
    variant: "variant2",
  },
  {
    title: "Pagamento Parcial",
    description:
      "Facilite para o cliente: aceite pagamentos em partes, com flexibilidade e controle total.",
    image: asset("/images/card-pagamento-parcial.png"),
    variant: "default",
  },
  {
    title: "IPVA Licenciamento e multas",
    description:
      "Você pode consultar e parcelar licenciamento, multas, IPVA e muito mais em até 12 vezes.",
    image: asset("/images/card-ipva.png"),
    variant: "variant3",
  },
  {
    title: "Fale com a Zuli!",
    description:
      "Da contratação ao suporte, a Zuli ajuda você a resolver tudo de forma rápida e sem complicação.",
    image: asset("/images/card-zuli.png"),
    variant: "variant2",
  },
];

function ArrowIcon({ color = "#FC8F01" }: { color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M4.16667 10H15.8333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16667L15.8333 10L10 15.8333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScrollArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border-2 border-[#006CAD] flex items-center justify-center hover:bg-[#006CAD]/10 transition-colors cursor-pointer"
      aria-label={
        direction === "left" ? "Rolar para a esquerda" : "Rolar para a direita"
      }
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === "left" ? "rotate-180" : ""}
      >
        <path
          d="M7.5 4.16667L13.3333 10L7.5 15.8333"
          stroke="#006CAD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const variantStyles: Record<
  CardVariant,
  {
    bg: string;
    title: string;
    text: string;
    link: string;
    arrowColor: string;
  }
> = {
  default: {
    bg: "bg-white",
    title: "text-[#006CAD]",
    text: "text-[#333333]",
    link: "text-[#006CAD]",
    arrowColor: "#FC8F01",
  },
  variant2: {
    bg: "bg-gradient-to-br from-[#005A8C] to-[#003B5C]",
    title: "text-white",
    text: "text-white/90",
    link: "text-white",
    arrowColor: "#FC8F01",
  },
  variant3: {
    bg: "bg-[#004080]",
    title: "text-white",
    text: "text-white/90",
    link: "text-white",
    arrowColor: "#FC8F01",
  },
};

function ServiceCardComponent({ card }: { card: ServiceCard }) {
  const styles = variantStyles[card.variant];

  return (
    <div
      className={`shrink-0 w-[294px] rounded-xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] ${styles.bg}`}
    >
      <div className="relative h-[162px] w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="294px"
        />
      </div>

      <div className="p-5 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3
            className={`text-lg leading-[1.4] font-semibold ${styles.title}`}
          >
            {card.title}
          </h3>
          <p className={`text-base leading-[1.4] ${styles.text}`}>
            {card.description}
          </p>
        </div>

        <a
          href="#"
          className={`inline-flex items-center gap-2 text-sm font-semibold ${styles.link} hover:opacity-80 transition-opacity`}
        >
          Saiba mais
          <ArrowIcon color={styles.arrowColor} />
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 318;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-6 lg:gap-[60px]">
        <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.2] lg:leading-[1.3] text-[#006CAD] text-center max-w-[718px] px-[46px] lg:px-4">
          Transforme o dia a dia do seu negócio com a azulzinha
        </h2>

        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pl-[30px] lg:pl-[100px] pr-6 flex items-stretch gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <ServiceCardComponent key={card.title} card={card} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ScrollArrow direction="left" onClick={() => scroll("left")} />
          <ScrollArrow direction="right" onClick={() => scroll("right")} />
        </div>
      </div>
    </section>
  );
}

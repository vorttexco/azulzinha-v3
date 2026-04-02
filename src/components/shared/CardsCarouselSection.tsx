"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useRef, useState, ReactNode } from "react";
import { asset } from "@/lib/assets";

type CardVariant = "default" | "variant2" | "variant3";

export interface CarouselCard {
  title: string;
  description: string;
  image: string;
  variant: CardVariant;
  href?: string;
}

const defaultCards: CarouselCard[] = [
  { title: "Link de Pagamento", description: "Lucre muito mais pela internet, redes sociais e aplicativos de mensagens com links seguros e ilimitados.", image: "/images/card-link-pagamento.png", variant: "default" },
  { title: "Pix por aproximação", description: "Agora é só aproximar e pagar via carteira digital ou pelo App do banco.", image: "/images/card-pix-aproximacao.png", variant: "variant2" },
  { title: "App azulzinha aproxima", description: "Controle suas vendas, antecipe recebíveis, crie links de pagamento e muito mais.", image: "/images/card-app-aproxima.png", variant: "default" },
  { title: "Recarga e telefonia", description: "Habilite o serviço sem custo na sua maquininha e tenha uma oportunidade extra de receita.", image: "/images/card-recarga-telefonia.png", variant: "variant3" },
  { title: "azulzinha Lotérica Pro", description: "Ofereça o serviço de conveniência e receba jogos, boletos e contas com os cartões Elo, Visa e Mastercard.", image: "/images/card-loterica-pro.png", variant: "variant2" },
  { title: "Pagamento Parcial", description: "Facilite para o cliente: aceite pagamentos em partes, com flexibilidade e controle total.", image: "/images/card-pagamento-parcial.png", variant: "default" },
  { title: "IPVA Licenciamento e multas", description: "Você pode consultar e parcelar licenciamento, multas, IPVA e muito mais em até 12 vezes.", image: "/images/card-ipva.png", variant: "variant3" },
  { title: "Fale com a Zuli!", description: "Da contratação ao suporte, a Zuli ajuda você a resolver tudo de forma rápida e sem complicação.", image: "/images/card-zuli.png", variant: "variant2" },
];

const variantStyles: Record<CardVariant, { bg: string; title: string; text: string; link: string }> = {
  default: { bg: "bg-white", title: "text-[#006CAD]", text: "text-[#333333]", link: "text-[#006CAD]" },
  variant2: { bg: "bg-[linear-gradient(0deg,#006CAD_8.16%,#038DE1_96.88%)]", title: "text-white", text: "text-white/90", link: "text-white" },
  variant3: { bg: "bg-[#004080]", title: "text-white", text: "text-white/90", link: "text-white" },
};

interface CardsCarouselSectionProps {
  title?: ReactNode;
  cards?: CarouselCard[];
  sectionClassName?: string;
}

export default function CardsCarouselSection({
  title = <>Transforme o dia a dia do <span className="text-laranja">seu negócio</span> com a azulzinha</>,
  cards = defaultCards,
  sectionClassName = "bg-white py-14 lg:py-20 overflow-hidden",
}: CardsCarouselSectionProps) {
  const autoplay = useRef(Autoplay({ delay: 1500, stopOnInteraction: true, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", containScroll: "trimSnaps" },
    [autoplay.current, WheelGesturesPlugin()]
  );
  const [activeDot, setActiveDot] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setDotCount(emblaApi.scrollSnapList().length);
      onSelect();
    };
    update();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={sectionClassName}>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-6 lg:gap-[40px]">
        <h2 className="section-title max-w-[718px] px-[46px] lg:px-4">
          {title}
        </h2>

        <div className="w-full overflow-hidden py-4 select-none" ref={emblaRef}>
          <div className="flex pl-[30px] lg:pl-[100px] gap-6">
            {cards.map((card) => {
              const s = variantStyles[card.variant];
              return (
                <div key={card.title} className={`shrink-0 w-[294px] h-[343px] rounded-xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] ${s.bg} last:mr-7.5`}>
                  <div className="relative w-full h-[162px]">
                    <Image
                      src={asset(card.image)}
                      alt={card.title}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between h-[calc(343px-162px)]">
                    <div className="flex flex-col gap-2">
                      <h3 className={`card-title ${s.title}`}>{card.title}</h3>
                      <p className={`card-text ${s.text}`}>{card.description}</p>
                    </div>
                    <a href={card.href || "#"} className={`card-link inline-flex items-center gap-2 hover:opacity-80 transition-opacity ${s.link}`}>
                      Saiba mais
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16667 10H15.8333" stroke="#FC8F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="#FC8F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para ${i + 1}`}
              className="transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: i === activeDot ? "28px" : "6px",
                height: "6px",
                backgroundColor: i === activeDot ? "#FC8F01" : "#D9D9D9",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

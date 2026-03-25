"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";

type CardVariant = "default" | "variant2" | "variant3";

const cards = [
  { title: "Link de Pagamento", description: "Lucre muito mais pela internet, redes sociais e aplicativos de mensagens com links seguros e ilimitados.", image: asset("/images/card-link-pagamento.png"), variant: "default" as CardVariant },
  { title: "Pix por aproximação", description: "Agora é só aproximar e pagar via carteira digital ou pelo App do banco.", image: asset("/images/card-pix-aproximacao.png"), variant: "variant2" as CardVariant },
  { title: "App azulzinha aproxima", description: "Controle suas vendas, antecipe recebíveis, crie links de pagamento e muito mais.", image: asset("/images/card-app-aproxima.png"), variant: "default" as CardVariant },
  { title: "Recarga e telefonia", description: "Habilite o serviço sem custo na sua maquininha e tenha uma oportunidade extra de receita.", image: asset("/images/card-recarga-telefonia.png"), variant: "variant3" as CardVariant },
  { title: "azulzinha Lotérica Pro", description: "Ofereça o serviço de conveniência e receba jogos, boletos e contas com os cartões Elo, Visa e Mastercard.", image: asset("/images/card-loterica-pro.png"), variant: "variant2" as CardVariant },
  { title: "Pagamento Parcial", description: "Facilite para o cliente: aceite pagamentos em partes, com flexibilidade e controle total.", image: asset("/images/card-pagamento-parcial.png"), variant: "default" as CardVariant },
  { title: "IPVA Licenciamento e multas", description: "Você pode consultar e parcelar licenciamento, multas, IPVA e muito mais em até 12 vezes.", image: asset("/images/card-ipva.png"), variant: "variant3" as CardVariant },
  { title: "Fale com a Zuli!", description: "Da contratação ao suporte, a Zuli ajuda você a resolver tudo de forma rápida e sem complicação.", image: asset("/images/card-zuli.png"), variant: "variant2" as CardVariant },
];

const variantStyles: Record<CardVariant, { bg: string; title: string; text: string; link: string }> = {
  default:  { bg: "bg-white", title: "text-[#006CAD]", text: "text-[#333333]", link: "text-[#006CAD]" },
  variant2: { bg: "bg-gradient-to-br from-[#005A8C] to-[#003B5C]", title: "text-white", text: "text-white/90", link: "text-white" },
  variant3: { bg: "bg-[#004080]", title: "text-white", text: "text-white/90", link: "text-white" },
};

export default function ServicesSection() {
  const autoplay = useRef(Autoplay({ delay: 1500, stopOnInteraction: true, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps" },
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
    setDotCount(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-6 lg:gap-[60px]">
        <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.2] lg:leading-[1.3] text-[#006CAD] text-center max-w-[718px] px-[46px] lg:px-4">
          Transforme o dia a dia do seu negócio com a azulzinha
        </h2>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex pl-[30px] lg:pl-[100px] pr-6 gap-6">
            {cards.map((card) => {
              const s = variantStyles[card.variant];
              return (
                <div key={card.title} className={`shrink-0 w-[294px] rounded-xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] ${s.bg}`}>
                  <div className="relative h-[162px] w-full overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover" sizes="294px" />
                  </div>
                  <div className="p-5 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className={`text-lg font-semibold ${s.title}`}>{card.title}</h3>
                      <p className={`text-base leading-[1.4] ${s.text}`}>{card.description}</p>
                    </div>
                    <a href="#" className={`inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity ${s.link}`}>
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
                width: i === activeDot ? "32px" : "10px",
                height: "10px",
                backgroundColor: i === activeDot ? "#FC8F01" : "#D9D9D9",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
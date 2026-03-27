"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "O suporte da Azulzinha é excelente, sempre fui muito bem atendida. A maquininha é rápida, funciona bem com o sinal e nunca me deixou na mão. Já recomendei para vários clientes porque confio de verdade no serviço.",
    author: "Maria Betânia T Dantas",
    business: "Loja 2 Irmãos",
  },
  {
    quote:
      "Minha querida azulzinha é a verdadeira heroína do dia a dia! Sempre pronta, ágil e eficiente, facilita o meu trabalho e a vida dos meus clientes.",
    author: "Claudinei Pires",
    business: "Utilar",
  },
  {
    quote:
      "A azulzinha é prática, rápida e nunca me deu dor de cabeça. O atendimento sempre foi ótimo nas raras vezes que precisei. A bateria dura o dia todo, perfeita para o comércio. Recomendo sem medo!",
    author: "Maria José Rolim Pinheiro",
    business: "Esfiharia Serra da Bragança",
  },
  {
    quote:
      "A azulzinha é fácil de usar e agiliza os pagamentos, o que é essencial no nosso dia a dia. O atendimento sempre foi rápido e eficiente. Mesmo sem minha presença, a equipe consegue operar com autonomia. Recomendo com confiança!",
    author: "Viviane Aparecida de Oliveira",
    business: "Padaria Okinawa",
  },
];

function ScrollDots({
  count,
  active,
  onDotClick,
}: {
  count: number;
  active: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Ir para ${i + 1}`}
          className="transition-all duration-300 rounded-full cursor-pointer"
          style={{
            width: i === active ? "28px" : "6px",
            height: "6px",
            backgroundColor: i === active ? "#FC8F01" : "#D9D9D9",
          }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      watchDrag: false, // optional: disable drag if you want zero interruption
    },
    [autoplayRef.current]
  );

  const [activeDot, setActiveDot] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snap = emblaApi.selectedScrollSnap();
    setActiveDot(snap);
    setSelectedIndex(snap);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleDotClick = useCallback(
    (i: number) => {
      emblaApi?.scrollTo(i);
      // Keep autoplay running after manual dot click
      autoplayRef.current.reset();
    },
    [emblaApi]
  );

  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[38px] font-normal leading-[1.3] tracking-[0%] text-[#006CAD] text-center px-[30px] lg:px-4">
          <span className="text-[#FC8F01]">Histórias</span> reais de quem já é
          azulzinha
        </h2>

        <div className="mt-8 lg:mt-[60px]">
          <div className="overflow-hidden" ref={emblaRef} style={{ padding: "20px 0", margin: "-20px 0" }}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_534px] min-w-0 px-3 transition-opacity duration-300"
                  style={{ opacity: index === selectedIndex ? 1 : 0.2 }}
                >
                  <div
                    className="bg-white rounded-xl flex flex-col justify-between shadow-[0_4px_10px_rgba(0,0,0,0.08)] w-full min-h-81.5 pt-10 lg:pt-15 px-5 lg:px-10 pb-10 gap-4 text-center"
                  >
                    <p className="font-normal text-[16px] leading-[180%] tracking-normal text-center italic text-black">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div style={{ marginTop: 0 }}>
                      <p className="font-normal text-[#006CAD] text-[20px] leading-[180%] tracking-normal text-center">
                        {testimonial.author}
                      </p>
                      <p className="font-normal text-black text-[14px] leading-[180%] tracking-normal text-center">
                        {testimonial.business}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollDots
          count={scrollSnaps.length || testimonials.length}
          active={activeDot}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}
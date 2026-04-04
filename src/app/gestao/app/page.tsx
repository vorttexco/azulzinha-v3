"use client";

import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import SimpleVideoSection from "@/components/shared/SimpleVideoSection";
import BlueCta from "@/components/shared/BlueCta";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const phoneScreens = [
  { image: "/images/app-azulzinha/screen-1.png", label: "Home da Azulzinha" },
  { image: "/images/app-azulzinha/screen-2.png", label: "Seus recebimentos" },
  { image: "/images/app-azulzinha/screen-3.png", label: "Extrato detalhado" },
  { image: "/images/app-azulzinha/screen-4.png", label: "Link de pagamento" },
];

function PhoneCarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
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
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-6 lg:mb-8">
          Gerencie suas vendas de qualquer lugar
        </h2>
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[745px]">
            O App da azulzinha da CAIXA é um canal exclusivo para facilitar o
            agitado dia a dia de milhares de brasileiros, empreendedores como
            você.
          </p>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[745px]">
            Baixando o App, você gerencia todas as vendas realizadas através da
            sua azulzinha, quando e de onde quiser, por meio do seu celular.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6 pt-[220px]">
          {phoneScreens.map((screen) => (
            <div key={screen.label} className="relative w-[287px] h-[247px]">
              {/* Phone image — overflows above the card */}
              <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[277px] h-[427px] z-10">
                <Image
                  src={asset(screen.image)}
                  alt={screen.label}
                  fill
                  className="object-contain"
                />
              </div>
              {/* White card */}
              <div className="relative w-full h-full bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] p-5 flex items-end">
                <p className="text-azul text-[18px] leading-[1.4]">
                  {screen.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden overflow-hidden -mx-7.5 mt-8 pt-[220px]" ref={emblaRef}>
          <div className="flex gap-4">
            {phoneScreens.map((screen) => (
              <div
                key={screen.label}
                className="shrink-0 max-w-[287px] w-[calc(100vw-100px)]"
              >
                <div className="relative w-full h-[247px]">
                  {/* Phone image — overflows above */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full h-[427px] z-10">
                    <Image
                      src={asset(screen.image)}
                      alt={screen.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* White card */}
                  <div className="relative w-full h-full bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] p-5 flex items-end">
                    <p className="text-azul text-[18px] leading-[1.4]">
                      {screen.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots - mobile only */}
        <div className="lg:hidden mt-4 flex items-center justify-center gap-2">
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

        {/* Text below carousel */}
        <div className="mt-10 lg:mt-14 max-w-[964px]">
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Além de cuidar do seu caixa e obter relatórios de vendas, com apenas
            alguns cliques você pode antecipar recebíveis, pedir novas bobinas ou
            mais maquininhas, tirar dúvidas e até solicitar atendimento
            personalizado.
          </p>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black mt-4">
            Tudo isso e muito mais funcionalidades com total segurança,
            praticidade e tecnologia, quer ver?
          </p>
        </div>
      </div>
    </section>
  );
}

const motivosCards = [
  {
    icon: "/images/app-azulzinha/icon-gestao.png",
    title: "Gestão de vendas",
    items: [
      "Extraia relatórios de venda",
      "Consulte taxas e tarifas",
      "Antecipe valores a receber",
      "Planeje suas finanças",
      "Gere links de pagamento",
    ],
  },
  {
    icon: "/images/app-azulzinha/icon-nav.png",
    title: "Navegação fácil e segura",
    items: [
      "Alterne estabelecimentos",
      "Habilite a biometria",
      "Oculte valores na tela",
      "Personalize atalhos",
      "Tire suas dúvidas",
    ],
  },
  {
    icon: "/images/app-azulzinha/icon-user.png",
    title: "Demandas do dia a dia",
    items: [
      "Agende manutenções",
      "Habilite mais bandeiras e vouchers Peça mais maquininhas",
      "Solicite mais bobinas",
    ],
  },
];

const avaliacoes = [
  {
    title: "Nova atualização",
    text: "O App está maravilhoso, com essa nova atualização é mais fácil para usar.",
  },
  {
    title: "Muito fácil de usar",
    text: "Simples, com todas as opções bem explicadas.",
  },
  {
    title: "App cumpre o que promete",
    text: "Muito bom!",
  },
];

export default function GestaoAppPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="App da azulzinha"
        description="Controle suas vendas, antecipe recebíveis, crie links de pagamento e muito mais"
        checkItems={[]}
        buttonText="Conheça o app"
        backgroundImage="/images/app-azulzinha/app-hero.png"
      />
      <FeatureSection
        title="Aplicativo da azulzinha"
        paragraphs={[
          "Quando o assunto é cuidar das suas vendas em tempo real, conte com as facilidades do App da azulzinha da CAIXA.",
        ]}
        image="/images/app-azulzinha/celular-app.png"
        imageAlt="App da azulzinha nos celulares"
        cardWidth="605px"
        cardHeight="398px"
        cardBorderRadius="rounded-[10px]"
        imageWidth="494px"
        imageHeight="497px"
        imageClassName="object-contain"
        storeBadges={[
          {
            image: "/images/android.png",
            href: "https://play.google.com",
            alt: "Disponível no Google Play",
          },
          {
            image: "/images/apple.png",
            href: "https://apps.apple.com",
            alt: "Disponível na App Store",
          },
        ]}
      />

      {/* Phone screens carousel */}
      <PhoneCarouselSection />

      {/* Motivos para usar o App */}
      <section className="bg-cinza-claro">
        <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
          <h2 className="section-title text-azul mb-8 lg:mb-14">
            Motivos para usar o App da azulzinha
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {motivosCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] p-6 flex flex-col gap-4"
              >
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src={asset(card.icon)}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-azul text-[16px] leading-[1.4]">
                  {card.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] leading-[1.4] text-black"
                    >
                      <span className="size-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}
      <SimpleVideoSection
        title="Explore todas as novidades da nova versão"
        description="Preparamos um vídeo para você aproveitar ao máximo as novidades em privacidade, personalização, segurança e navegação da mais nova versão disponível na loja de aplicativos do seu celular."
        thumbnail="/images/app-azulzinha/video-thumbnail.png"
      />

      {/* Avaliações de usuários */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
          <h2 className="section-title text-azul mb-4 lg:mb-6">
            Avaliações de usuários
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center mb-8 lg:mb-14">
            Conheça a experiência de quem já usa o App da azulzinha.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {avaliacoes.map((av) => (
              <div
                key={av.title}
                className="bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] p-6 flex flex-col gap-6 h-[203px]"
              >
                <div className="relative w-[166px] h-[29px]">
                  <Image
                    src={asset("/images/app-azulzinha/estrelas.png")}
                    alt="5 estrelas"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-azul text-[16px] leading-[1.4]">
                  {av.title}
                </p>
                <p className="text-[14px] leading-[1.4] text-black">
                  {av.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BlueCta with app image */}
      <BlueCta
        title="Baixe agora para começar a usar o App da azulzinha."
        sectionClassName="bg-linear-to-t from-[#F2F2F2] to-white"
        featureImage="/images/app-azulzinha/celular-app.png"
        featureImageAlt="App da azulzinha"
        storeBadges={[
          {
            image: "/images/app-azulzinha/android.png",
            href: "https://play.google.com",
            alt: "Disponível no Google Play",
          },
          {
            image: "/images/app-azulzinha/apple.png",
            href: "https://apps.apple.com",
            alt: "Disponível na App Store",
          },
        ]}
      />

      {/* Contribua com avaliação */}
      <section className="bg-cinza-claro">
        <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px] flex flex-col items-center">
          <h2 className="section-title text-azul mb-4 lg:mb-6">
            Que tal contribuir com a sua avaliação também?
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[921px]">
            Conte-nos sobre sua experiência escrevendo uma avaliação na loja de
            aplicativos, é simples e rápido!
          </p>
          <a href="#" className="btn-laranja mt-8">
            Avaliar App da azulzinha
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

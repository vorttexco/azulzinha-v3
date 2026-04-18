"use client";

import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BenefitsSection from "@/components/shared/BenefitsSection";
import BlueCta from "@/components/shared/BlueCta";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import { asset } from "@/lib/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const comoFuncionaSteps = [
  { number: 1, text: "O vendedor expõe seus produtos nas redes sociais" },
  { number: 2, text: "O cliente seleciona o produto e fecha o pedido" },
  {
    number: 3,
    text: "O vendedor gera um link usando o portal do lojista, aplicativo ou automação comercial integrada automaticamente via API",
  },
  { number: 4, text: "O cliente acessa o link e preenche os dados do cartão" },
  {
    number: 5,
    text: "A compra é validada pelo sistema de prevenção a fraude e o pagamento é autorizado",
  },
  {
    number: 6,
    text: "O vendedor recebe a confirmação do pagamento e envia o pedido",
  },
];

function ComoFuncionaSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  });
  const [activeDot, setActiveDot] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-cinza-claro">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-8 lg:mb-14">
          Como funciona?
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden -mx-7.5 lg:-mx-25" ref={emblaRef}>
          <div className="flex gap-3 pl-7.5 lg:pl-25">
            {comoFuncionaSteps.map((step) => (
              <div
                key={step.number}
                className="shrink-0 "
              >
                <div className="bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] p-6 flex flex-col gap-4 w-[287px] h-[230px] ">
                  <div className="w-8 h-8 rounded-full bg-azul flex items-center justify-center text-white text-[16px]">
                    {step.number}
                  </div>
                  <p className="text-azul text-[18px] leading-[1.4]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {comoFuncionaSteps.map((_, i) => (
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

export default function GestaoVendasPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Vendas Online"
        description="Conheça soluções para vender muito mais na internet, redes sociais e aplicativos de mensagem."
        checkItems={[]}
        buttonText="Confira"
        backgroundImage="/images/vendas-online/hero-bg.png"
      />

      {/* Amplie suas vendas online */}
      <FeatureSection
        title="Amplie suas vendas online"
        paragraphs={[
          "As vendas online são uma ótima oportunidade para ampliar um negócio. Na CAIXA, você tem a oferta de soluções digitais seguras e ágeis para começar a vender na internet. E você nem precisa de um e-commerce para isso: é só optar pela solução de Link de Pagamentos, por exemplo.",
          "Agora, se você já tem um site ou aplicativo para divulgar sua loja, a solução de e-commerce da CAIXA é a escolha certa para a garantia de um alto desempenho na aprovação das vendas, além de segurança para pagamentos recorrentes.",
        ]}
        image="/images/vendas-online/feature-1.png"
        imageAlt="Vendas Online"
        cardWidth="605px"
        cardHeight="398px"
        hideCard
        cardBorderRadius="rounded-[20px]"
      />

      {/* Pagamentos Online - Link de Pagamento */}
      <div className="bg-cinza-claro">
        <FeatureSection
          title="Pagamentos Online"
          paragraphs={[
            "Aceite os principais meios de pagamento por meio de soluções inovadoras que tornam o pagamento online cada vez mais simples e seguro.",
          ]}
          image="/images/vendas-online/feature-2.png"
          imageAlt="Pagamentos Online"
          cardWidth="814px"
          cardHeight="426px"
          hideCard
          cardBorderRadius="rounded-[20px]"
          bgColor="bg-transparent"
          paddingClassName="pt-14 lg:pt-27.5 pb-6 lg:pb-10"
          itemsAlign="start"
        />

        {/* Cards - recarga-telefone pattern */}
        <div className="relative z-10 -mt-20 max-w-360 mx-auto px-7.5 lg:px-25 pb-14 lg:pb-20 flex flex-col lg:flex-row gap-5 lg:gap-7.5">
          {[
            {
              icon: "/images/vendas-online/icon-link-pagamento.png",
              title: "Link de pagamento",
              text: "Comece a vender no mundo online de forma simples e rápida, sem necessidade de integração.",
            },
            {
              icon: "/images/vendas-online/icon-metodos-pagamento.png",
              title: "Maior aceitação de formas de pagamento do mercado",
              text: "+ de 100 bandeiras de cartões, wallets, auxilio emergencial, boleto e transferência bancária em uma plataforma multiadquirente.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] p-6 lg:w-151.25 shrink-0"
            >
              <div className="relative w-12 h-12 shrink-0">
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
              <p className="text-black text-[18px] leading-[1.4]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vantagens */}
      <BenefitsSection
        title="Vantagens"
        textColor="text-azul"
        items={[
          {
            icon: "/images/vendas-online/icon-vendas-online.png",
            text: "Digital - Você pode vender pela internet, e-mail ou redes sociais",
          },
          {
            icon: "/images/vendas-online/icon-seguranca-online.png",
            text: "É seguro - É 100% digital e seguro",
          },
          {
            icon: "/images/vendas-online/icon-gestao.png",
            text: "Gestão inteligente - Faça a gestão de suas vendas pelo App da azulzinha ou Portal da azulzinha",
          },
          {
            icon: "/images/vendas-online/icon-facil-usar.png",
            text: "Simples de utilizar - Envie quantos links quiser para seus clientes fazerem o pagamento pelo produto/serviço",
          },
          {
            icon: "/images/vendas-online/icon-celular.png",
            text: "Não precisa ter Site - Não é necessário ter um site ou e-commerce para começar a utilizar",
          },
        ]}
      />

      {/* Como funciona? */}
      <ComoFuncionaSection />

      {/* Pagamentos Online - E-commerce */}
      <div className="bg-cinza-claro">
        <FeatureSection
          title="Pagamentos Online"
          paragraphs={[
            "Aceite os principais meios de pagamento por meio de soluções inovadoras que tornam o pagamento online cada vez mais simples e seguro.",
          ]}
          image="/images/vendas-online/feature-3.png"
          imageAlt="Pagamentos Online E-commerce"
          cardWidth="814px"
          cardHeight="426px"
          hideCard
          cardBorderRadius="rounded-[20px]"
          bgColor="bg-transparent"
          paddingClassName="pt-14 lg:pt-27.5 pb-6 lg:pb-10"
          itemsAlign="start"
        />

        {/* Cards with bullet lists */}
        <div className="relative z-10 lg:-mt-20 sm:mt-0 max-w-360 mx-auto px-7.5 lg:px-25 pb-14 lg:pb-20 flex flex-col lg:flex-row gap-5 lg:gap-7.5">
          {[
            {
              icon: "/images/vendas-online/icon-link-pagamento.png",
              title: "Alta conversão de vendas",
              items: [
                "Venda mais facilitando a experiência do seu cliente;",
                "Compre com 1 clique;",
                "Recorrência e assinatura;",
                "Captura parcial;",
                "Pré-autorização e muito mais.",
              ],
            },
            {
              icon: "/images/vendas-online/icon-metodos-pagamento.png",
              title: "Segurança para vender",
              items: [
                "Atendimento 24 horas por dia, 7 dias por semana;",
                "Integração da solução Prevenção à Fraude para proteção do seu negócio e dos seus clientes.",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] lg:p-10 p-8 lg:w-151.25 shrink-0"
            >
              <div className="relative w-12 h-12 shrink-0">
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
              <ul className="flex flex-col gap-1">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 lg:text-[18px] text-[16px] leading-[1.4] text-black"
                  >
                    <span className="size-2 rounded-full bg-black shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <BlueCta
        title={
          "Habilite o Link de Pagamento na sua\nazulzinha através do aplicativo"
        }
        buttonText="App da Azulzinha"
        sectionClassName="bg-linear-to-t from-[#F2F2F2] to-white"
      />

      <Footer />
    </main>
  );
}

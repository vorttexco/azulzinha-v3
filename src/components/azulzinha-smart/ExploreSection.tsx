"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import { useState } from "react";

const categories = [
  "Todos os apps",
  "Atacado",
  "Auto Elétricas, Auto Peças e Mecânicas",
  "Bar",
  "Comércio",
  "Delivery",
  "Direito",
  "Distribuidores de Produtos",
  "Estacionamentos",
  "Eventos, Feiras e Shows",
];

const apps = [
  {
    name: "A00s",
    logo: "/images/azulzinha-smart/logo-a00s.png",
    logoWidth: 83,
    logoHeight: 60,
    description:
      "O App A00s funciona como PDV móvel, integrando vendas, estoque e relatórios diretamente na sua maquininha.",
  },
  {
    name: "Alpino",
    logo: "/images/azulzinha-smart/logo-alpino.png",
    logoWidth: 124,
    logoHeight: 42,
    description:
      "O Alpino Smart é uma solução completa de automação comercial para restaurantes, bares e food service.",
  },
  {
    name: "Anota Aí Smart PDV",
    logo: "/images/azulzinha-smart/logo-anota-ai.png",
    logoWidth: 148,
    logoHeight: 52,
    description:
      "A gestão de frente de loja ficará mais simples e rápida com o Anota Aí Smart PDV.",
  },
  {
    name: "Apliper Pagoo",
    logo: "/images/azulzinha-smart/logo-apliper.png",
    logoWidth: 111,
    logoHeight: 69,
    description:
      "O Apliper Pagoo é um App para capturar o pagamento no balcão ou na mesa do cliente.",
  },
];

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="9.5" cy="9.5" r="7.5" stroke="#1F1F1F" strokeWidth="1.5" />
      <path d="M15 15L20 20" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="#006CAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ExploreSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          {/* Title */}
          <h2 className="section-title text-azul max-w-[817px]">
            Explore novas opções de aplicativos para otimizar e expandir seu
            negócio
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
            Escolha o aplicativo ideal para seu negócio e contrate com
            facilidade
          </p>

          {/* Search bar */}
          <div className="w-full max-w-[600px] flex items-center gap-3 bg-white border border-[#F1F1F1] rounded-[10px] px-4 py-3 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
            <span className="text-[14px] leading-[1.4] text-black/50 flex-1">
              Buscar pelo nome
            </span>
            <SearchIcon />
          </div>

          {/* Categories */}
          <div className="w-full flex flex-col gap-3">
            <p className="text-[18px] leading-[1.4] text-black">
              Categorias:
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(i)}
                  className={`px-5 py-4 rounded-[10px] text-[14px] leading-[1.4] shadow-[0_4px_10px_rgba(0,0,0,0.08)] cursor-pointer transition-colors ${
                    i === activeCategory
                      ? "bg-azul text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Apps header */}
          <div className="w-full flex items-center justify-between">
            <h3 className="text-[28px] leading-[1.4] text-azul">
              Todos os apps
            </h3>
            <span className="text-[18px] leading-[1.4] text-black">
              Ordenar por:
            </span>
          </div>

          {/* App cards grid */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {apps.map((app) => (
                <div
                  key={app.name}
                  className="flex flex-col gap-4 bg-white border border-[#F1F1F1] rounded-[10px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="relative h-[60px] w-[120px]">
                      <Image
                        src={asset(app.logo)}
                        alt={app.name}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <ExpandIcon />
                  </div>
                  <h4 className="text-[18px] leading-[1.4] text-black">
                    {app.name}
                  </h4>
                  <p className="text-[14px] leading-[1.4] text-cinza">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_35%,rgba(255,255,255,0)_81%)] pointer-events-none" />
          </div>

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`rounded-full ${
                  i === 0
                    ? "w-[28px] h-[6px] bg-laranja"
                    : "w-[6px] h-[6px] bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

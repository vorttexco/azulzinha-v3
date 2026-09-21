"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

interface SolutionCard {
  icon: string;
  title: string;
  description: string;
}

interface SolutionTab {
  id: string;
  label: string;
  title: string;
  description: string;
  cards: SolutionCard[];
}

const tabs: SolutionTab[] = [
  {
    id: "pagamentos",
    label: "Pagamentos",
    title: "Soluções de venda digital",
    description:
      "Receba suas vendas com segurança, flexibilidade e gestão unificada",
    cards: [
      {
        icon: "/images/contrate-a-azulzinha/icon-link.png",
        title: "Link de Pagamento",
        description:
          "Crie links seguros e ilimitados direto e compartilhe por SMS, WhatsApp, e-mail e outros canais. Disponível no App da azulzinha.",
      },
      {
        icon: "/images/contrate-a-azulzinha/icon-whatsapp.png",
        title: "Pagamentos no WhatsApp",
        description:
          "Faça cobranças pelo aplicativo mais acessado do Brasil configurando a Fiserv como seu parceiro de pagamentos no WhatsApp Business.",
      },
      {
        icon: "/images/contrate-a-azulzinha/icon-ecommerce.png",
        title: "E-commerce",
        description:
          "Aceite os principais meios de pagamento na sua loja online com a API da azulzinha, e venda com segurança antifraude e alta conversão.",
      },
    ],
  },
  {
    id: "servicos",
    label: "Serviços",
    title: "Venda física e digital",
    description:
      "Potencialize seu fluxo de caixa e otimize a jornada do cliente",
    cards: [
      {
        icon: "/images/contrate-a-azulzinha/icon-antecipacao.png",
        title: "Antecipação de vendas",
        description:
          "Receba antes as vendas no crédito de forma pontual ou programada. Solicite no App da azulzinha ou direto na máquina.",
      },
      {
        icon: "/images/contrate-a-azulzinha/icon-pix.png",
        title: "Pix",
        description:
          "Aceite Pix na sua azulzinha com segurança antifraude, estabilidade, liquidação automática, relatórios detalhados e suporte 24x7.",
      },
      {
        icon: "/images/contrate-a-azulzinha/icon-recarga.png",
        title: "Recarga",
        description:
          "Ofereça o serviço de recarga de telefone para seus clientes direto na máquina, sem qualquer custo adicional.",
      },
      {
        icon: "/images/contrate-a-azulzinha/icon-pagamento-parcial.png",
        title: "Pagamento Parcial",
        description:
          "Ative o serviço para permitir que clientes Visa e Elo, selecionados pelo emissor, dividam o pagamento da compra entre o cartão e outro meio de pagamento.",
      },
    ],
  },
  {
    id: "gestao",
    label: "Gestão de vendas",
    title: "Ferramentas de gerenciamento",
    description: "Administre seus recebimentos e solicite serviços diversos",
    cards: [
      {
        icon: "/images/contrate-a-azulzinha/icon-app.png",
        title: "App da azulzinha",
        description:
          "Acompanhe suas vendas em tempo real, gere links de pagamento, antecipe recebíveis, solicite bobinas e muito mais no aplicativo.",
      },
      {
        icon: "/images/contrate-a-azulzinha/icon-portal.png",
        title: "Portal do Cliente",
        description:
          "Acesse pelo computador uma plataforma completa com gráficos detalhados, exportação de relatórios, serviços e muito mais.",
      },
    ],
  },
];

export default function SolutionsTabsSection() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === selectedTab) ?? tabs[0];

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-8 lg:mb-[60px]">
          Conte também com soluções completas de venda online, serviços e gestão
        </h2>

        <div className="flex border border-[#DDDDDD] shadow-[0px_8px_21px_-8px_rgba(221,221,221,1)] mb-8 lg:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 min-h-[64px] lg:min-h-[80px] px-3 text-[14px] lg:text-[16px] cursor-pointer border-r border-[#DDDDDD] last:border-r-0 ${
                selectedTab === tab.id
                  ? "text-azul border-b-[3px] border-b-azul bg-[#F8F9FA]"
                  : "text-[#333333] border-b-[3px] border-b-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <h3 className="text-[20px] lg:text-[24px] leading-[1.3] text-[#333333] text-center">
            {current.title}
          </h3>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-[#333333] text-center">
            {current.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-6 lg:p-8 flex flex-col gap-4"
            >
              <Image
                src={asset(card.icon)}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <h4 className="text-[18px] leading-[1.4] text-azul">
                {card.title}
              </h4>
              <p className="text-[14px] leading-[1.4] text-[#666666]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

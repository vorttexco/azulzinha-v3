"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AppModal {
  title: string;
  description: string;
  benefits: { label: string; text: string }[];
  image?: string;
}

interface App {
  name: string;
  comingSoon?: boolean;
  modal?: AppModal;
}

interface AppCategory {
  name: string;
  apps: App[];
}

const tabs = [
  {
    label: "Aplicativos gratuitos",
    categories: [
      {
        name: "Gestão de clientes e equipes",
        apps: [
          {
            name: "Clientes",
            modal: {
              title: "Clientes",
              description:
                "Organize dados dos seus clientes e acompanhe transações com praticidade.",
              benefits: [
                {
                  label: "Cadastro simples",
                  text: "Envio de comprovantes por SMS ou e-mail;",
                },
                {
                  label: "Histórico automático",
                  text: "Vinculação de cartões às compras realizadas;",
                },
                {
                  label: "Acompanhamento eficiente",
                  text: "Vincule cartões e monitore as transações de cada cliente.",
                },
              ],
            },
          },
          { name: "Notas" },
          { name: "Turnos" },
          { name: "Gestão de funcionários" },
        ],
      },
      {
        name: "Finanças e Pagamentos",
        apps: [
          { name: "Finanças +" },
          { name: "Link de pagamentos", comingSoon: true },
          { name: "Centraliza", comingSoon: true },
          { name: "Conecta fácil", comingSoon: true },
        ],
      },
      {
        name: "Controle do seu negócio",
        apps: [
          { name: "Autorização" },
          { name: "Transações" },
          { name: "Vendas" },
          { name: "Relatórios" },
          { name: "Fluxo de caixa" },
        ],
      },
      {
        name: "Suporte a Clover",
        apps: [
          { name: "Suporte" },
          { name: "Impressoras" },
          { name: "Ajuda" },
        ],
      },
    ] as AppCategory[],
  },
  {
    label: "Automações comerciais",
    categories: [
      {
        name: "Automações disponíveis",
        apps: [
          { name: "Automação" },
          { name: "Integração ERP" },
          { name: "PDV Completo" },
        ],
      },
    ] as AppCategory[],
  },
];

function PlusIcon({ disabled }: { disabled?: boolean }) {
  return (
    <div
      className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 ${disabled ? "bg-[#B2B2B2]" : "bg-azul"
        }`}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1V11M1 6H11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function CloverAppsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedModal, setSelectedModal] = useState<AppModal | null>(null);

  return (
    <section className="bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul text-center mb-8 lg:mb-[60px]">
          Aplicativos que já vêm na Clover
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-40 mb-8 lg:mb-10">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-[14px] lg:text-[16px] font-normal cursor-pointer transition-colors border-b ${activeTab === index
                ? "text-azul border-azul"
                : "text-black border-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[30px]">
          {tabs[activeTab].categories.map((category) => (
            <div key={category.name} className="flex flex-col gap-3">
              <h3 className="text-[14px] lg:text-[16px] font-bold leading-[1.4] text-black">
                {category.name}
              </h3>
              <div className="flex flex-col gap-2">
                {category.apps.map((app) => (
                  <div
                    key={app.name}
                    onClick={() => app.modal && setSelectedModal(app.modal)}
                    className={`flex items-center justify-between gap-3 bg-white rounded-[10px] px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.06)] ${app.comingSoon ? "opacity-60" : ""} ${app.modal ? "cursor-pointer" : ""}`}
                  >
                    <span
                      className={`text-[14px] leading-[1.4] ${app.comingSoon ? "text-[#B2B2B2]" : "text-black"
                        }`}
                    >
                      {app.name}
                      {app.comingSoon && (
                        <span className="text-[12px] text-[#B2B2B2] ml-1">
                          (Em breve)
                        </span>
                      )}
                    </span>
                    <PlusIcon disabled={app.comingSoon} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Detail Modal */}
      <Dialog open={!!selectedModal} onOpenChange={(open) => !open && setSelectedModal(null)}>
        <DialogContent className="w-217.5 h-135.75 max-w-[calc(100%-2rem)] rounded-[10px] border border-[#E0E0E0] p-8 gap-6 flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-[26px] font-normal leading-[1.4] text-black">
              {selectedModal?.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-[14px] font-normal leading-[1.4] text-[#555]">
            {selectedModal?.description}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-semibold text-black">Benefícios</p>
            <ul className="flex flex-col gap-1">
              {selectedModal?.benefits.map((b) => (
                <li key={b.label} className="text-[14px] text-[#555] leading-normal">
                  <span className="font-semibold text-black">{b.label}: </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

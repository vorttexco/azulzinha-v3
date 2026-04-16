"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { asset } from "@/lib/assets";

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
              image: "/images/clover/tela-clientes.png",
            },
          },
          {
            name: "Notas",
            modal: {
              title: "Notas",
              description:
                "Adicione notas digitais nos dispositivos Clover e elimine os recados físicos.",
              benefits: [
                {
                  label: "Comunicação eficiente",
                  text: "Informações claras e acessíveis em todos os dispositivos;",
                },
                {
                  label: "Sustentabilidade",
                  text: "Substitua papéis por notas digitais.",
                },
              ],
            },
          },
          {
            name: "Turnos",
            modal: {
              title: "Turnos",
              description:
                "Gerencie horários de trabalho de forma prática e precisa com o App Turnos.",
              benefits: [
                {
                  label: "Registro automático",
                  text: "Horários de entrada e saída detalhados;",
                },
                {
                  label: "Facilidade para pagamentos",
                  text: "Ideal para estabelecimentos com jornada por hora;",
                },
                {
                  label: "Otimização de processos",
                  text: "Controle eficiente das equipes.",
                },
              ],
              image: "/images/clover/tela-turnos.png",
            },
          },
          {
            name: "Gestão de funcionários",
            modal: {
              title: "Gestão de funcionários",
              description:
                "Organize e monitore sua equipe com funcionalidades que garantem eficiência e segurança.",
              benefits: [
                {
                  label: "Criação de perfis",
                  text: "Configure diferentes acessos para cada funcionário;",
                },
                {
                  label: "Rastreabilidade",
                  text: "Registre todas as ações realizadas no sistema;",
                },
                {
                  label: "Controle de vendas",
                  text: "Acompanhe o desempenho individual para gestão de comissões;",
                },
                {
                  label: "Segurança avançada",
                  text: "Defina permissões específicas por cargo, com senhas e rastreamento.",
                },
              ],
            },
          },
        ],
      },
      {
        name: "Finanças e Pagamentos",
        apps: [
          {
            name: "Finanças +",
            modal: {
              title: "Finanças +",
              description:
                "Antecipe seus recebíveis de forma prática e com as melhores condições diretamente pelo App Finanças+.",
              benefits: [
                {
                  label: "Disponibilidade imediata",
                  text: "Veja o valor disponível para antecipação de qualquer adquirente;",
                },
                {
                  label: "Comparação de taxas",
                  text: "Encontre as condições mais competitivas;",
                },
                {
                  label: "Fluxo de caixa otimizado",
                  text: "Configure antecipações automáticas e alavanque seu negócio.",
                },
              ],
              image: "/images/clover/tela-financas.png",
            },
          },
          { name: "Link de pagamentos", comingSoon: true },
          { name: "Centraliza", comingSoon: true },
          { name: "Conecta fácil", comingSoon: true },
        ],
      },
      {
        name: "Controle do seu negócio",
        apps: [
          {
            name: "Autorização",
            modal: {
              title: "Autorizações",
              description:
                "Gerencie pré-autorizações com total controle diretamente pelo App.",
              benefits: [
                {
                  label: "Gestão completa",
                  text: "Criação, consulta, confirmação e anulação;",
                },
                {
                  label: "Praticidade",
                  text: "Centralize o controle de autorizações.",
                },
              ],
            },
          },
          {
            name: "Transações",
            modal: {
              title: "Transações",
              description:
                "Gerencie suas transações diretamente pelo App com funcionalidades essenciais.",
              benefits: [
                {
                  label: "Histórico completo",
                  text: "Listagem detalhada de transações feitas na Clover;",
                },
                {
                  label: "Flexibilidade",
                  text: "Cancelamento, reimpressão e envio de comprovantes;",
                },
                {
                  label: "Praticidade",
                  text: "Gestão rápida e eficiente de vendas realizadas.",
                },
              ],
              image: "/images/clover/tela-transacoes.png",
            },
          },
          {
            name: "Vendas",
            modal: {
              title: "Vendas",
              description:
                "Realize vendas com todas as formas de pagamento habilitadas e aceite mais clientes.",
              benefits: [
                {
                  label: "Capilaridade máxima",
                  text: "Aceite todas as formas de pagamento disponíveis via SiTef;",
                },
                {
                  label: "Simplicidade",
                  text: "Todas as opções de pagamento disponíveis no App.",
                },
              ],
              image: "/images/clover/tela-vendas.png",
            },
          },
          {
            name: "Relatórios",
            modal: {
              title: "Relatórios",
              description:
                "Simplifique sua gestão com relatórios detalhados e acompanhamento eficiente de transações e equipes.",
              benefits: [
                {
                  label: "Análises completas",
                  text: "Relatórios por período, funcionário e fechamento de caixa;",
                },
                {
                  label: "Fechamento de caixa",
                  text: "Visualize o fechamento de caixa de todas as suas máquinas;",
                },
                {
                  label: "Comissões sob controle",
                  text: "Monitoramento de vendas por funcionário.",
                },
              ],
              image: "/images/clover/tela-relatorios.png",
            },
          },
          { name: "Fluxo de caixa" },
        ],
      },
      {
        name: "Suporte a Clover",
        apps: [
          {
            name: "Suporte",
            modal: {
              title: "Suporte",
              description:
                "Resolva problemas técnicos e solicite manutenções do seu dispositivo de forma rápida e prática.",
              benefits: [
                {
                  label: "Solicitação fácil",
                  text: "Atendimento direto pelo App;",
                },
                {
                  label: "Agilidade",
                  text: "Soluções rápidas para garantir o funcionamento do seu negócio.",
                },
              ],
            },
          },
          {
            name: "Impressoras",
            modal: {
              title: "Impressoras",
              description:
                "Configure e ajuste suas impressoras de forma simples e eficiente.",
              benefits: [
                {
                  label: "Ajustes rápidos",
                  text: "Controle total das impressoras conectadas;",
                },
                {
                  label: "Facilidade",
                  text: "Personalize as configurações conforme sua necessidade.",
                },
              ],
            },
          },
          {
            name: "Ajuda",
            modal: {
              title: "Ajuda",
              description:
                "Encontre respostas rápidas e úteis para suas dúvidas sobre o terminal Clover.",
              benefits: [
                {
                  label: "Suporte completo",
                  text: "Informações práticas e tutoriais;",
                },
                {
                  label: "Autoatendimento",
                  text: "Resolva questões sem precisar de ajuda externa.",
                },
              ],
            },
          },
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

  const automationCards = [
    { name: "SkyTef", image: "/images/clover/skytef-cinza 2.png" },
    { name: "THR", image: "/images/clover/thr-cinza 1.png" },
    { name: "GZ", image: "/images/clover/gz-cinza 1.png" },
    { name: "Maq", image: "/images/clover/maq-cinza 1.png" },
    { name: "PDV", image: "/images/clover/pdv-cinza 1.png" },
    { name: "SW", image: "/images/clover/sw-cinza 1.png" },
    { name: "POS", image: "/images/clover/pos-cinza 1.png" },
    { name: "Pag", image: "/images/clover/pag-cinza 1.png" },
    { name: "Arus", image: "/images/clover/arus-cinza 1.png" },
    { name: "Mobility", image: "/images/clover/mobility-cinza 2.png" },
  ];

  return (
    <>
      <section className="bg-[#F4F4F4]">
        <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
          <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul text-center mb-8 lg:mb-[60px]">
            Aplicativos que já vêm na Clover
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 lg:gap-40 mb-8 lg:mb-10">
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-[14px] lg:text-[20px] font-normal cursor-pointer transition-colors border-b ${activeTab === index
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
                <h3 className="text-[14px] lg:text-[16px] font-normal leading-[1.4] text-black">
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
          <DialogContent className="w-217.5 max-w-[calc(100%-2rem)] rounded-[10px] border border-[#E0E0E0] p-8 gap-3! flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-[26px] font-normal pb-4 leading-[1.4] text-black">
                {selectedModal?.title}
              </DialogTitle>
            </DialogHeader>
            <p className="text-[14px] font-normal pb-4 leading-[1.4] text-[#666666]">
              {selectedModal?.description}
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-normal text-[#666666]">Benefícios</p>
              <ul className="flex flex-col gap-1">
                {selectedModal?.benefits.map((b) => (
                  <li key={b.label} className="text-[14px] text-[#666666] leading-normal">
                    <span className="font-normal text-[#666666]">• {b.label}: </span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
            {selectedModal?.image && (
              <div className="mt-2">
                <Image
                  src={asset(selectedModal.image)}
                  alt={selectedModal.title}
                  width={385}
                  height={255}
                  className="w-[385px] h-[255px] rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
        <div className="py-25">
          <h2 className="section-title text-azul mb-8 lg:mb-[60px]">
            Contrate aplicativos de automação <br />feitos para o seu negócio
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6 place-items-center max-w-[260px] lg:max-w-[900px] mx-auto">
            {automationCards.map((card) => (
              <div
                key={card.name}
                className="w-[120px] h-[70px] flex items-center justify-center"
              >
                <Image
                  src={asset(card.image)}
                  alt={card.name}
                  width={119}
                  height={64}
                  className="w-[119px] h-[64px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}

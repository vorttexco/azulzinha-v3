"use client";

import { useState } from "react";

interface VideoItem {
  title: string;
  videoSrc?: string;
}

interface Category {
  id: string;
  label: string;
  videos: VideoItem[];
}

const categories: Category[] = [
  {
    id: "todos",
    label: "Todos",
    videos: [
      { title: "Como aceitar o Programa Gás do Povo com a azulzinha aproxima", videoSrc: "https://azulzinhadacaixa.com.br/midias/aproxima-gas-do-povo.mp4" },
      { title: "Como aceitar o Programa Gás do Povo com a azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-smart-gas-do-povo.mp4" },
      { title: "Conheça a azulzinha, a maquininha da CAIXA", videoSrc: "https://azulzinhadacaixa.com.br/midias/chegou-azulzinha.mp4" },
      { title: "Como fazer vendas no débito e crédito na azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/vendas-debito-credito.mp4" },
      { title: "Como fazer vendas parceladas na azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/vendas-parceladas.mp4" },
      { title: "Como conectar sua azulzinha pro no Wi-fi", videoSrc: "https://azulzinhadacaixa.com.br/midias/conectar-wifi.mp4" },
      { title: "Como cuidar da bateria da sua azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha_bateria.mp4" },
      { title: "Como funciona o App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/vantagens-aplicativo.mp4" },
      { title: "Primeiro acesso no App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/primeiro-acesso.mp4" },
      { title: "Como usar a Agenda Financeira no App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-agenda-financeira.mp4" },
      { title: "Dicas para usar a azulzinha da CAIXA com segurança", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-credito-risco.mp4" },
      { title: "Como consultar o extrato no App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/consultar-extrato.mp4" },
      { title: "Como cancelar uma venda no App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/como-cancelar-azulzinha.mp4" },
      { title: "Como fazer uma antecipação de recebíveis no App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/antecipacao-recebiveis.mp4" },
      { title: "Como solicitar bobinas pelo App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/solicitacoes-bobinas.mp4" },
      { title: "Como consultar o histórico de recargas pelo App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/historico-recarga.mp4" },
      { title: "Como consultar as taxas e tarifas da azulzinha pelo App", videoSrc: "https://azulzinhadacaixa.com.br/midias/taxas-tarifas.mp4" },
      { title: "Como declarar imposto de renda pelo App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/imposto-renda.mp4" },
      { title: "Cancelamento de Venda App azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha_cancelamento_de_venda_app_motion.mp4" },
      { title: "Agora tem azulzinha no App CAIXA Tem!", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-CAIXATem-V3-Reduzido-primeiro-acesso.mp4" },
      { title: "Como gerar um Link de Pagamento no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-vendas-link-pagamento.mp4" },
      { title: "Como fazer uma venda com QR Code no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-vendas-qr-code.mp4" },
      { title: "Como fazer uma venda por aproximação no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-vendas-aproximacao.mp4" },
      { title: "Como consultar suas vendas no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-consultar-vendas.mp4" },
      { title: "Como consultar seus recebimentos no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-consultar-recebimentos.mp4" },
      { title: "Como consultar as taxas e tarifas da função azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-taxas-tarifas.mp4" },
      { title: "Como tirar suas dúvidas no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-chatbot.mp4" },
      { title: "Como gerar link de pagamento com o App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/link-de-pagamento.mp4" },
      { title: "Como ver o histórico de links de pagamento gerados no App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/consultar-link-de-pagamento.mp4" },
      { title: "Como acessar o Portal do Cliente da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/acessar-portal-azulzinha.mp4" },
      { title: "Serviço de Conveniência", videoSrc: "https://azulzinhadacaixa.com.br/midias/divulgacao-azulzinha.mp4" },
      { title: "Como funciona a automação comercial?", videoSrc: "https://azulzinhadacaixa.com.br/midias/Fiserv_azulzinha_Automacao_Comercial_V3.mp4" },
      { title: "Como aproveitar o Portal Clover?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-clover-dashboard.mp4" },
      { title: "Como gerenciar suas vendas na Clover?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-transacoes.mp4" },
      { title: "Como acessar seu relatório de vendas?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-relatorios.mp4" },
      { title: "Como gerenciar sua equipe na Clover?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-Funcionarios.mp4" },
    ],
  },
  {
    id: "gas-do-povo",
    label: "Programa Gás do Povo",
    videos: [
      { title: "Como aceitar o Programa Gás do Povo com a azulzinha aproxima", videoSrc: "https://azulzinhadacaixa.com.br/midias/aproxima-gas-do-povo.mp4" },
      { title: "Como aceitar o Programa Gás do Povo com a azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-smart-gas-do-povo.mp4" },
    ],
  },
  {
    id: "sua-maquininha",
    label: "Sua maquininha",
    videos: [
      { title: "Conheça a azulzinha, a maquininha da CAIXA", videoSrc: "https://azulzinhadacaixa.com.br/midias/chegou-azulzinha.mp4" },
      { title: "Como fazer vendas no débito e crédito na azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/vendas-debito-credito.mp4" },
      { title: "Como fazer vendas parceladas na azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/vendas-parceladas.mp4" },
      { title: "Como conectar sua azulzinha pro no Wi-fi", videoSrc: "https://azulzinhadacaixa.com.br/midias/conectar-wifi.mp4" },
      { title: "Como cuidar da bateria da sua azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha_bateria.mp4" },
    ],
  },
  {
    id: "app-azulzinha",
    label: "App da azulzinha",
    videos: [
      { title: "Como funciona o App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/vantagens-aplicativo.mp4" },
      { title: "Primeiro acesso no App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/primeiro-acesso.mp4" },
      { title: "Como usar a Agenda Financeira no App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-agenda-financeira.mp4" },
      { title: "Dicas para usar a azulzinha da CAIXA com segurança", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-credito-risco.mp4" },
      { title: "Como consultar o extrato no App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/consultar-extrato.mp4" },
      { title: "Como cancelar uma venda no App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/como-cancelar-azulzinha.mp4" },
      { title: "Como fazer uma antecipação de recebíveis no App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/antecipacao-recebiveis.mp4" },
      { title: "Como solicitar bobinas pelo App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/solicitacoes-bobinas.mp4" },
      { title: "Como consultar o histórico de recargas pelo App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/historico-recarga.mp4" },
      { title: "Como consultar as taxas e tarifas da azulzinha pelo App", videoSrc: "https://azulzinhadacaixa.com.br/midias/taxas-tarifas.mp4" },
      { title: "Como declarar imposto de renda pelo App da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/imposto-renda.mp4" },
      { title: "Cancelamento de Venda App azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha_cancelamento_de_venda_app_motion.mp4" },
    ],
  },
  {
    id: "caixa-tem",
    label: "CAIXA Tem",
    videos: [
      { title: "Agora tem azulzinha no App CAIXA Tem!", videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-CAIXATem-V3-Reduzido-primeiro-acesso.mp4" },
      { title: "Como gerar um Link de Pagamento no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-vendas-link-pagamento.mp4" },
      { title: "Como fazer uma venda com QR Code no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-vendas-qr-code.mp4" },
      { title: "Como fazer uma venda por aproximação no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-vendas-aproximacao.mp4" },
      { title: "Como consultar suas vendas no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-consultar-vendas.mp4" },
      { title: "Como consultar seus recebimentos no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-consultar-recebimentos.mp4" },
      { title: "Como consultar as taxas e tarifas da função azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-taxas-tarifas.mp4" },
      { title: "Como tirar suas dúvidas no App CAIXA Tem?", videoSrc: "https://azulzinhadacaixa.com.br/midias/caixa-tem-chatbot.mp4" },
    ],
  },
  {
    id: "solucoes",
    label: "Soluções",
    videos: [
      { title: "Como gerar link de pagamento com o App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/link-de-pagamento.mp4" },
      { title: "Como ver o histórico de links de pagamento gerados no App da azulzinha?", videoSrc: "https://azulzinhadacaixa.com.br/midias/consultar-link-de-pagamento.mp4" },
    ],
  },
  {
    id: "portal-cliente",
    label: "Portal do cliente",
    videos: [
      { title: "Como acessar o Portal do Cliente da azulzinha", videoSrc: "https://azulzinhadacaixa.com.br/midias/acessar-portal-azulzinha.mp4" },
    ],
  },
  {
    id: "lotericas",
    label: "Lotéricas",
    videos: [
      { title: "Serviço de Conveniência", videoSrc: "https://azulzinhadacaixa.com.br/midias/divulgacao-azulzinha.mp4" },
    ],
  },
  {
    id: "clover",
    label: "Clover",
    videos: [
      { title: "Como funciona a automação comercial?", videoSrc: "https://azulzinhadacaixa.com.br/midias/Fiserv_azulzinha_Automacao_Comercial_V3.mp4" },
      { title: "Como aproveitar o Portal Clover?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-clover-dashboard.mp4" },
      { title: "Como gerenciar suas vendas na Clover?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-transacoes.mp4" },
      { title: "Como acessar seu relatório de vendas?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-relatorios.mp4" },
      { title: "Como gerenciar sua equipe na Clover?", videoSrc: "https://azulzinhadacaixa.com.br/midias/video-Funcionarios.mp4" },
    ],
  },
];

function PlayIcon() {
  return (
    <div className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
      <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className="ml-1">
        <path d="M0 0L22 13L0 26V0Z" fill="#006CAD" />
      </svg>
    </div>
  );
}

function SmallPlayIcon() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="w-[21px] h-[21px] rounded-full bg-white/30 flex items-center justify-center">
        <svg width="7" height="8" viewBox="0 0 7 8" fill="none">
          <path d="M0 0L7 4L0 8V0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="w-[120px] h-[80px] rounded-[10px] bg-[linear-gradient(135deg,#006CAD_0%,#012B71_100%)] flex items-center justify-center shrink-0 overflow-hidden relative">
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="absolute inset-0">
        <circle cx="56" cy="16" r="24" stroke="white" strokeOpacity="0.15" strokeWidth="1" fill="none" />
        <circle cx="56" cy="16" r="16" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />
        <circle cx="16" cy="56" r="20" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative z-10 w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M0 0L10 6L0 12V0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

function MainVideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#006CAD_0%,#012B71_100%)] flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute inset-0 w-full h-full opacity-20">
        <circle cx="160" cy="40" r="100" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="160" cy="40" r="70" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="40" cy="160" r="80" stroke="white" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-4 px-6">
        <PlayIcon />
        <p className="text-white text-[18px] lg:text-[22px] leading-[1.4] text-center">{title}</p>
      </div>
    </div>
  );
}

export default function AjudaVideoSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("todos");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);
  const [mainVideoIndex, setMainVideoIndex] = useState(0);

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId)!;
  const currentVideos = selectedCategory.videos;
  const mainVideo = currentVideos[mainVideoIndex] ?? currentVideos[0];

  function handleCategorySelect(id: string) {
    setSelectedCategoryId(id);
    setDropdownOpen(false);
    setActiveVideo(null);
    setMainVideoIndex(0);
  }

  function handleVideoSelect(video: VideoItem, index: number) {
    setMainVideoIndex(index);
    if (video.videoSrc) {
      setActiveVideo({ src: video.videoSrc, title: video.title });
    } else {
      setActiveVideo(null);
    }
  }

  function handleMainVideoPlay() {
    if (mainVideo?.videoSrc) {
      setActiveVideo({ src: mainVideo.videoSrc, title: mainVideo.title });
    }
  }

  return (
    <section className="bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-8 lg:mb-[49px]">
          Assista aos nossos tutoriais
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px]">
          {/* Main video */}
          <div className="relative w-full lg:flex-1 h-[250px] lg:h-[480px] rounded-[16px] overflow-hidden cursor-pointer">
            {activeVideo ? (
              <video
                key={activeVideo.src}
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <MainVideoPlaceholder title={mainVideo?.title ?? ""} />
                {mainVideo?.videoSrc && (
                  <div
                    className="absolute inset-0 z-20 flex items-center justify-center"
                    onClick={handleMainVideoPlay}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(359.87deg,#00275E_20.33%,rgba(1,61,145,0)_53.44%),linear-gradient(0deg,rgba(0,41,97,0.2),rgba(0,41,97,0.2))]" />
                    <PlayIcon />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <p className="text-[20px] lg:text-[26px] font-normal leading-[1.4] text-white">
                        {mainVideo.title}
                      </p>
                    </div>
                  </div>
                )}
                {!mainVideo?.videoSrc && (
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 lg:p-8">
                    <p className="text-[20px] lg:text-[26px] font-normal leading-[1.4] text-white">
                      {mainVideo?.title}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4 lg:w-[402px]">
            {/* Category dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#006CAD] rounded-[8px] text-[16px] text-black cursor-pointer"
              >
                <span>{selectedCategory.label === "todos" ? "Selecione uma categoria" : selectedCategory.label}</span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L8 8L15 1" stroke="#006CAD" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 z-30 bg-white border border-[#e0e0e0] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] mt-1 overflow-hidden">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full text-left px-4 py-3 text-[16px] hover:bg-[#f0f7fc] transition-colors duration-150 ${
                        cat.id === selectedCategoryId ? "bg-[#e8f3fb] text-[#006CAD] font-medium" : "text-black"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Video list */}
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-[linear-gradient(to_top,rgb(247,247,247)_0%,rgba(247,247,247,0.8)_40%,transparent_100%)] z-10 pointer-events-none rounded-b-[12px]" />
              <div className="flex flex-col gap-3 lg:gap-4 lg:h-[416px] overflow-y-auto scrollbar-hide pr-1">
                {currentVideos.map((video, index) => (
                  <div
                    key={`${video.title}-${index}`}
                    onClick={() => handleVideoSelect(video, index)}
                    className={`group/card flex items-center gap-4 bg-white rounded-[12px] p-3 lg:p-4 cursor-pointer duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)] ${
                      index === mainVideoIndex && !activeVideo ? "bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)]" : ""
                    }`}
                  >
                    <div className="relative shrink-0">
                      <VideoPlaceholder />
                      <SmallPlayIcon />
                    </div>
                    <p className={`text-[16px] leading-[1.4] transition-colors duration-200 group-hover/card:text-white ${
                      index === mainVideoIndex && !activeVideo ? "text-white" : "text-black"
                    }`}>
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* YouTube CTA */}
        <div className="flex flex-col items-center gap-4 mt-10 lg:mt-[49px]">
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-azul text-center">
            Se inscreva no nosso canal do Youtube
          </p>
          <a
            href="https://www.youtube.com/@azulzinhadacaixa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-laranja inline-flex items-center gap-2"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path
                d="M19.615 2.184A2.506 2.506 0 0017.853.408C16.28 0 10 0 10 0S3.72 0 2.147.408A2.506 2.506 0 00.385 2.184C0 3.773 0 7.084 0 7.084s0 3.312.385 4.9a2.506 2.506 0 001.762 1.777C3.72 14.169 10 14.169 10 14.169s6.28 0 7.853-.408a2.506 2.506 0 001.762-1.777C20 10.396 20 7.084 20 7.084s0-3.311-.385-4.9z"
                fill="#fff"
              />
              <path d="M8 10.121V4.047l5.25 3.037L8 10.121z" fill="#FC8F01" />
            </svg>
            Youtube
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

interface ContactColumn {
  icon: string;
  title: string;
  content: ReactNode;
}

interface FaqBrand {
  logo: string;
  logoW: number;
  logoH: number;
  name: string;
  columns: ContactColumn[];
  buttonText: string;
  buttonHref?: string;
}

const faqBrands: FaqBrand[] = [
  {
    logo: "/images/bandeiras-vouchers/alelo-logo.png",
    logoW: 79,
    logoH: 51,
    name: "Alelo",
    buttonText: "Quero aceitar Alelo",
    buttonHref: "https://credenciamento.alelo.com.br/",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Capitais e Regiões Metropolitanas
              <br />
              <span className="font-bold">4002-5011</span>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Demais localidades
              <br />
              <span className="font-bold">0800-570 5011</span>
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Caso ainda não esteja credenciado, acesse o{" "}
            <a href="https://credenciamento.alelo.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">
              site da Alelo
            </a>
            , clique em &quot;Habilitar Aceitação&quot; no final da página e informe os dados
            solicitados.
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Credenciamento:
              <br />
              <span className="font-bold">15 dias corridos</span>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Habilitação:
              <br />
              <span className="font-bold">15 dias corridos</span>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    logo: "/images/bandeiras-vouchers/ticket-logo1.png",
    logoW: 62,
    logoH: 62,
    name: "Ticket",
    buttonText: "Quero aceitar Ticket",
    buttonHref: "https://www.ticket.com.br/portal-estabelecimento/credenciar",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Caso precise falar com a Ticket, entre em contato pelo telefone:
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Capitais e Regiões Metropolitanas
              <br />
              <a href="tel:40042233" className="font-bold">4004 2233</a>
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              <a href="https://www.ticket.com.br/portal-estabelecimento/credenciar" target="_blank" rel="noopener noreferrer" className="text-azul underline">No site da Ticket</a>, se ainda não estiver credenciado, informe o seu CNPJ, clique no botão &quot;Começar&quot; e siga o preenchimento dos dados solicitados.
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Caso já esteja credenciado, clique no botão &quot;Já sou credenciado&quot; e em seguida preencha o CNPJ e senha cadastrados junto à bandeira Ticket.
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Credenciamento:
              <br />
              <span className="font-bold">10 dias corridos</span>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Habilitação:
              <br />
              <span className="font-bold">2 dias corridos</span>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    logo: "/images/bandeiras-vouchers/icone-note.png",
    logoW: 86,
    logoH: 24,
    name: "pluxee",
    buttonText: "Quero aceitar pluxee",
    buttonHref: "https://www.pluxee.com.br/credenciamento-aceitar-pluxee/",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Capitais e Regiões Metropolitanas
              <br />
              <a href="tel:30035083" className="font-bold">3003 5083</a>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Demais localidades
              <br />
              <a href="tel:08007285083" className="font-bold">0800 728 5083</a>
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              No{" "}
              <a href="https://www.sodexobeneficios.com.br/estabelecimentos/quero-aceitar-sodexo.htm" target="_blank" rel="noopener noreferrer" className="text-azul underline">site da pluxee</a>
              , se ainda não estiver credenciado, primeiro crie o seu cadastro.
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Caso já esteja credenciado, acesse o site com o seu login e senha cadastrados junto à pluxee.
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Credenciamento:
              <br />
              <span className="font-bold">7 dias úteis</span>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Habilitação:
              <br />
              <span className="font-bold">7 dias úteis</span>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    logo: "/images/bandeiras-vouchers/logo-vr.png",
    logoW: 61,
    logoH: 61,
    name: "VR",
    buttonText: "Quero aceitar VR",
    buttonHref: "https://estabelecimentos.vr.com.br/cadastro#/dados-iniciais",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Capitais e Regiões Metropolitanas
              <br />
              <a href="tel:40044938" className="font-bold">4004-4938</a>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Demais localidades
              <br />
              <a href="tel:08005963838" className="font-bold">0800 596 3838</a>
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Para habilitar a VR na azulzinha você precisa primeiro realizar o credenciamento no{" "}
              <a href="https://portal.vr.com.br/portal/portal-vr/area-publica/credenciamento-contato/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal VR</a>.
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Se você já aceita VR, acesse{" "}
              <a href="https://portal.vr.com.br/portal/portal-vr/login/" target="_blank" rel="noopener noreferrer" className="text-azul underline">o portal</a>
              {" "}com o seu login e senha cadastrados junto à VR.
            </p>
          </div>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <div className="flex flex-col gap-4">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Credenciamento:
              <br />
              <span className="font-bold">5 dias úteis</span>
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Habilitação:
              <br />
              <span className="font-bold">5 dias úteis</span>
            </p>
          </div>
        ),
      },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M7 11L14.5 18L22 11"
        stroke="#006CAD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItem({ brand, isOpen, onToggle }: { brand: FaqBrand; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-[20px] px-[30px] lg:px-10 py-[30px] lg:py-10">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <Image
            src={asset(brand.logo)}
            alt={brand.name}
            width={brand.logoW}
            height={brand.logoH}
            className="object-contain shrink-0"
          />
          <span className="text-[20px] lg:text-[26px] font-normal leading-[1.1] text-black text-left">
            Como aceitar {brand.name}
          </span>
        </div>
        <ChevronIcon open={isOpen} />
      </button>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1200px] mt-8" : "max-h-0"
          }`}
      >
        {/* 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-[78px]">
          {brand.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-4 lg:flex-1">
              <Image
                src={asset(col.icon)}
                alt=""
                width={52}
                height={52}
                className="object-contain shrink-0"
              />
              <h3 className="text-[22px] font-normal leading-[1.4] text-azul">
                {col.title}
              </h3>
              {col.content}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E1E1E1] my-8" />

        {/* CTA Button */}
        <div className="flex justify-center">
          <a href={brand.buttonHref ?? "#"} target={brand.buttonHref ? "_blank" : undefined} rel={brand.buttonHref ? "noopener noreferrer" : undefined} className="btn-laranja">
            {brand.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FaqBandeirasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 lg:pb-[110px] px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-[30px] lg:mb-[60px]">
          Saibe como aceitar as bandeiras
        </h2>

        <div className="flex flex-col gap-6 max-w-[1240px] mx-auto">
          {faqBrands.map((brand, index) => (
            <FaqItem
              key={brand.name}
              brand={brand}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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
}

const faqBrands: FaqBrand[] = [
  {
    logo: "/images/bandeiras-vouchers/alelo-logo.png",
    logoW: 79,
    logoH: 51,
    name: "Alelo",
    buttonText: "Quero aceitar Alelo",
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
            Caso ainda não esteja credenciado, acesse o site da Alelo, clique em
            &quot;Habilitar Aceitação&quot; no final da página e informe os dados
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
    logo: "/images/bandeiras-vouchers/ticket-logo.png",
    logoW: 62,
    logoH: 62,
    name: "Ticket",
    buttonText: "Quero aceitar Ticket",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Central de Atendimento
            <br />
            <span className="font-bold">4004-2233</span>
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Acesse o site da Ticket e solicite o credenciamento do seu estabelecimento.
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Credenciamento:
            <br />
            <span className="font-bold">15 dias corridos</span>
          </p>
        ),
      },
    ],
  },
  {
    logo: "/images/bandeiras-vouchers/pluxee-logo.png",
    logoW: 86,
    logoH: 24,
    name: "pluxee",
    buttonText: "Quero aceitar pluxee",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Central de Atendimento
            <br />
            <span className="font-bold">4004-2233</span>
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Acesse o site da Pluxee e solicite o credenciamento do seu estabelecimento.
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Credenciamento:
            <br />
            <span className="font-bold">15 dias corridos</span>
          </p>
        ),
      },
    ],
  },
  {
    logo: "/images/bandeiras-vouchers/vr-logo.png",
    logoW: 61,
    logoH: 61,
    name: "VR",
    buttonText: "Quero aceitar VR",
    columns: [
      {
        icon: "/images/bandeiras-vouchers/icone-telefone.svg",
        title: "Por telefone",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Central de Atendimento
            <br />
            <span className="font-bold">4004-2233</span>
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-note.svg",
        title: "Pelo Site",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Acesse o site da VR e solicite o credenciamento do seu estabelecimento.
          </p>
        ),
      },
      {
        icon: "/images/bandeiras-vouchers/icone-agenda.svg",
        title: "Prazos",
        content: (
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Credenciamento:
            <br />
            <span className="font-bold">15 dias corridos</span>
          </p>
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
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1200px] mt-8" : "max-h-0"
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
          <a href="#" className="btn-laranja">
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
          Saiba tudo sobre as bandeiras
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

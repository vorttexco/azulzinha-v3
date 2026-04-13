import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

// Mapeamento de links para suas respectivas rotas
const linkRoutes: Record<string, string> = {
  "Maquininhas": "/maquininhas",
  "Vendas Online": "/vendas",
  "Gestão": "/gestao/gestao-vendas",
  "Serviços de Conveniência": "/cliente-loterica",
  "Serviços de Conveniência ": "/conveniencia",
  "App CAIXA Tem": "/mei",
  "Blog da azulzinha": "/blog",
  "Central de Ajuda": "/ajuda",
  "Taxas": "/taxas-tarifas",
  "Contrato de Credenciamento azulzinha": "/contrato-credenciamento",
  "Contrato de Credenciamento CAIXA Tem": "/contrato-caixa-tem",
  "Política de Privacidade": "/politica-privacidade",
  "Política de Cookies": "/politica-cookies",
  "LGPD": "/lgpd",
};

const linkGroups1 = [
  {
    title: "Para sua Empresa",
    links: ["Maquininhas", "Vendas Online", "Gestão"],
  },
  {
    title: "Para sua Lotérica",
    links: ["Serviços de Conveniência"],
  },
  {
    title: "Para sua MEI",
    links: ["App CAIXA Tem"],
  },
  {
    title: "Para Você",
    links: ["Serviços de Conveniência "],
  },
];

const linkGroups2 = [
  {
    title: "Conteúdo",
    links: ["Blog da azulzinha"],
  },
  {
    title: "Suporte",
    links: ["Central de Ajuda", "Taxas"],
  },
  {
    title: "Avisos Legais",
    links: [
      "Contrato de Credenciamento azulzinha",
      "Contrato de Credenciamento CAIXA Tem",
      "Política de Privacidade",
      "Política de Cookies",
      "LGPD",
    ],
  },
];

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M17.05 2.91C15.18 1.03 12.69 0 10.04 0C4.58 0 0.11 4.47 0.11 9.93C0.11 11.68 0.59 13.39 1.48 14.89L0.03 20L5.27 18.58C6.72 19.39 8.36 19.82 10.04 19.82C15.5 19.82 19.97 15.35 19.97 9.89C19.97 7.24 18.92 4.79 17.05 2.91ZM10.04 18.15C8.56 18.15 7.11 17.74 5.84 16.97L5.54 16.79L2.39 17.62L3.24 14.55L3.04 14.24C2.19 12.92 1.74 11.44 1.74 9.93C1.74 5.39 5.5 1.63 10.05 1.63C12.25 1.63 14.31 2.49 15.87 4.05C17.43 5.61 18.35 7.69 18.34 9.89C18.34 14.44 14.58 18.15 10.04 18.15ZM14.56 12.01C14.31 11.89 13.09 11.29 12.86 11.21C12.63 11.12 12.47 11.08 12.3 11.33C12.13 11.58 11.67 12.14 11.53 12.3C11.39 12.47 11.25 12.49 11 12.37C10.75 12.24 9.94 11.97 8.98 11.11C8.23 10.44 7.73 9.61 7.59 9.36C7.45 9.11 7.57 8.98 7.7 8.85C7.81 8.74 7.95 8.56 8.07 8.42C8.2 8.28 8.24 8.18 8.32 8.01C8.41 7.84 8.36 7.7 8.3 7.58C8.24 7.45 7.74 6.23 7.53 5.73C7.33 5.24 7.12 5.31 6.97 5.3C6.83 5.29 6.66 5.29 6.5 5.29C6.33 5.29 6.07 5.35 5.84 5.6C5.61 5.85 4.97 6.45 4.97 7.67C4.97 8.89 5.87 10.07 5.99 10.24C6.12 10.41 7.73 12.87 10.25 13.95C10.85 14.21 11.32 14.37 11.69 14.48C12.29 14.67 12.84 14.64 13.27 14.58C13.75 14.51 14.74 13.97 14.94 13.39C15.15 12.8 15.15 12.3 15.08 12.19C15.02 12.08 14.85 12.01 14.56 12.01Z"
        fill="black"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.8C12.67 1.8 13.03 1.81 14.12 1.86C15.18 1.91 15.78 2.08 16.22 2.22C16.77 2.39 17.2 2.62 17.66 3.08C18.12 3.54 18.35 3.97 18.52 4.52C18.66 4.96 18.83 5.56 18.88 6.62C18.93 7.71 18.94 8.07 18.94 10.74C18.94 13.41 18.93 13.77 18.88 14.86C18.83 15.92 18.66 16.52 18.52 16.96C18.35 17.51 18.12 17.94 17.66 18.4C17.2 18.86 16.77 19.09 16.22 19.26C15.78 19.4 15.18 19.57 14.12 19.62C13.03 19.67 12.67 19.68 10 19.68C7.33 19.68 6.97 19.67 5.88 19.62C4.82 19.57 4.22 19.4 3.78 19.26C3.23 19.09 2.8 18.86 2.34 18.4C1.88 17.94 1.65 17.51 1.48 16.96C1.34 16.52 1.17 15.92 1.12 14.86C1.07 13.77 1.06 13.41 1.06 10.74C1.06 8.07 1.07 7.71 1.12 6.62C1.17 5.56 1.34 4.96 1.48 4.52C1.65 3.97 1.88 3.54 2.34 3.08C2.8 2.62 3.23 2.39 3.78 2.22C4.22 2.08 4.82 1.91 5.88 1.86C6.97 1.81 7.33 1.8 10 1.8ZM10 3.6C7.41 3.6 6.98 3.61 5.9 3.66C4.97 3.7 4.48 3.86 4.17 3.99C3.76 4.15 3.47 4.34 3.16 4.65C2.85 4.96 2.66 5.25 2.5 5.66C2.37 5.97 2.21 6.46 2.17 7.39C2.12 8.47 2.11 8.9 2.11 10.49C2.11 12.08 2.12 12.51 2.17 13.59C2.21 14.52 2.37 15.01 2.5 15.32C2.66 15.73 2.85 16.02 3.16 16.33C3.47 16.64 3.76 16.83 4.17 16.99C4.48 17.12 4.97 17.28 5.9 17.32C6.98 17.37 7.41 17.38 10 17.38C12.59 17.38 13.02 17.37 14.1 17.32C15.03 17.28 15.52 17.12 15.83 16.99C16.24 16.83 16.53 16.64 16.84 16.33C17.15 16.02 17.34 15.73 17.5 15.32C17.63 15.01 17.79 14.52 17.83 13.59C17.88 12.51 17.89 12.08 17.89 10.49C17.89 8.9 17.88 8.47 17.83 7.39C17.79 6.46 17.63 5.97 17.5 5.66C17.34 5.25 17.15 4.96 16.84 4.65C16.53 4.34 16.24 4.15 15.83 3.99C15.52 3.86 15.03 3.7 14.1 3.66C13.02 3.61 12.59 3.6 10 3.6Z" fill="#666666" />
      <path d="M10 5.4C7.24 5.4 5 7.64 5 10.4C5 13.16 7.24 15.4 10 15.4C12.76 15.4 15 13.16 15 10.4C15 7.64 12.76 5.4 10 5.4ZM10 13.6C8.34 13.6 7 12.26 7 10.6C7 8.94 8.34 7.6 10 7.6C11.66 7.6 13 8.94 13 10.6C13 12.26 11.66 13.6 10 13.6Z" fill="#666666" />
      <path d="M15.24 5.22C15.9 5.22 16.43 4.69 16.43 4.03C16.43 3.37 15.9 2.84 15.24 2.84C14.58 2.84 14.05 3.37 14.05 4.03C14.05 4.69 14.58 5.22 15.24 5.22Z" fill="#666666" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10.06C20 4.51 15.52 0 9.99 0C4.47 0 0 4.51 0 10.06C0 15.07 3.65 19.26 8.44 19.89V12.9H5.9V10.06H8.44V7.85C8.44 5.34 9.93 3.96 12.22 3.96C13.31 3.96 14.45 4.16 14.45 4.16V6.65H13.19C11.95 6.65 11.56 7.43 11.56 8.23V10.06H14.34L13.89 12.9H11.56V19.9C16.35 19.27 20 15.08 20 10.06Z" fill="#666666" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M2 2C1.45 2 1 2.45 1 3V17C1 17.55 1.45 18 2 18H18C18.55 18 19 17.55 19 17V3C19 2.45 18.55 2 18 2H2ZM3.5 5C4.33 5 5 5.67 5 6.5C5 7.33 4.33 8 3.5 8C2.67 8 2 7.33 2 6.5C2 5.67 2.67 5 3.5 5ZM2 9H5V17H2V9ZM6 9H8.88V10C9.25 9.4 10.13 8.85 11.38 8.85C14.5 8.85 15 10.85 15 13.5V17H12V14C12 12.97 11.92 11.6 10.63 11.6C9.36 11.6 9 12.5 9 13.5V17H6V9Z" fill="#666666" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.54 5.63C19.54 5.63 19.37 4.4 18.87 3.89C18.24 3.2 17.53 3.19 17.2 3.13C15.03 2.95 9.99 2.95 9.99 2.95H9.98C9.98 2.95 4.94 2.95 2.77 3.13C2.44 3.19 1.73 3.2 1.1 3.89C0.6 4.4 0.44 5.63 0.44 5.63S0.35 7 0.35 8.37V9.6C0.35 11 0.44 12.37 0.44 12.37C0.44 12.37 0.6 13.6 1.1 14.11C1.73 14.8 2.53 14.77 2.91 14.85C4.24 14.98 9.98 15.03 9.98 15.03C9.98 15.03 15.03 15.03 17.2 14.85C17.53 14.79 18.24 14.8 18.87 14.11C19.37 13.6 19.54 12.37 19.54 12.37C19.54 12.37 19.63 11 19.63 9.6V8.37C19.63 7 19.54 5.63 19.54 5.63ZM7.98 11.63V7.31L13.1 9.47L7.98 11.63Z" fill="#666666" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top divider */}
      <div className="w-full h-px bg-[#E1E1E1]" />

      {/* Main footer content */}
      <div className="hidden lg:block w-[1440px] h-[682px] mx-auto px-[100px] py-[80px]">
        <div className="flex justify-between h-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Column 1 - Link groups */}
            {linkGroups1.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <h4 className="text-base font-normal text-[#006CAD]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={linkRoutes[link] || "#"}
                        className="text-sm  text-[#717171] hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 flex-1">
            {linkGroups2.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-base font-normal text-[#006CAD]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={linkRoutes[link] || "#"}
                        className="text-sm  text-[#717171] hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3 - Contact info */}
          <div className="flex flex-col gap-10 flex-1">
            {/* WhatsApp */}
            <div className="w-[307px] h-[64px] flex items-center gap-3">
              <Image
                src={asset("/images/footer-zuli.png")}
                alt="Zuli"
                width={64}
                height={64}
                className="rounded-full shrink-0"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-normal text-azul">
                  Fale com a Zuli pelo WhatsApp
                </span>
                <a href="https://wa.me/5511941473336" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity w-fit">
                  <WhatsAppIcon />
                  <span className="text-sm text-[#717171]">(11) 94147-3336</span>
                </a>
              </div>
            </div>

            {/* Central de Relacionamento */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm lg:text-base font-normal text-azul">
                CENTRAL DE RELACIONAMENTO
              </h4>
              <a href="tel:3003-5365" className="text-sm text-[#717171] font-normal hover:underline">3003 5365</a>
              <p className="text-sm text-[#717171]">
                Capital e Grande São Paulo
              </p>
              <a href="tel:0800-729-5365" className="text-sm pt-6 text-[#717171] font-normal hover:underline">
                0800 729 5365
              </a>
              <p className="text-sm text-[#717171]">Demais localidades</p>
              <p className="text-sm text-[#B9B9B9] mt-1">
                Segunda a Domingo das 08h00 às 22h00 (exceto feriados)
              </p>
            </div>

            {/* Azulzinha no CAIXA Tem */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm lg:text-base font-normal text-[#006CAD]">
                AZULZINHA NO CAIXA TEM
              </h4>
              <p className="text-sm lg:text-base text-[#717171]">
                Atendimento somente via chatbot pelo App CAIXA Tem
              </p>
            </div>

            {/* Ouvidoria */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm lg:text-base font-normal text-[#006CAD]">
                OUVIDORIA
              </h4>
              <a href="tel:0800-727-4655" className="text-sm lg:text-base text-[#717171] font-normal hover:underline">
                0800 727 4655
              </a>
              <p className="text-sm text-[#B9B9B9]">
                Segunda a Sexta das 09h00 às 18h00 (exceto feriados)
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <LinkedinIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile footer content */}
      <div className="lg:hidden px-[30px] py-8">
        <div className="flex flex-col gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {linkGroups1.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <h4 className="text-base font-normal text-[#006CAD]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={linkRoutes[link] || "#"}
                        className="text-sm text-[#717171] hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {linkGroups2.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-base font-normal text-[#006CAD]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={linkRoutes[link] || "#"}
                        className="text-sm text-[#717171] hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8">
            {/* WhatsApp */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src={asset("/images/footer-zuli.png")}
                  alt="Zuli"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-sm text-[#717171]">
                  Fale com a Zuli pelo WhatsApp
                </span>
              </div>
              <div className="flex items-center gap-2 ml-[52px]">
                <WhatsAppIcon />
                <a href="https://wa.me/5511941473336" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717171] hover:underline">(11) 94147-3336</a>
              </div>
            </div>

            {/* Central de Relacionamento */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-normal text-[#006CAD]">
                CENTRAL DE RELACIONAMENTO
              </h4>
              <a href="tel:3003-5365" className="text-sm text-[#717171] font-normal hover:underline">3003 5365</a>
              <p className="text-sm text-[#717171]">
                Capital e Grande São Paulo
              </p>
              <a href="tel:0800-729-5365" className="text-sm text-[#717171] font-normal hover:underline">
                0800 729 5365
              </a>
              <p className="text-sm text-[#717171]">Demais localidades</p>
              <p className="text-xs text-[#717171] mt-1">
                Segunda a Domingo das 08h00 às 22h00 (exceto feriados)
              </p>
            </div>

            {/* Azulzinha no CAIXA Tem */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-normal text-[#006CAD]">
                AZULZINHA NO CAIXA TEM
              </h4>
              <p className="text-sm text-[#717171]">
                Atendimento somente via chatbot pelo App CAIXA Tem
              </p>
            </div>

            {/* Ouvidoria */}
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-normal text-[#006CAD]">
                OUVIDORIA
              </h4>
              <a href="tel:0800-727-4655" className="text-sm text-[#717171] font-normal hover:underline">
                0800 727 4655
              </a>
              <p className="text-xs text-[#717171]">
                Segunda a Sexta das 09h00 às 18h00 (exceto feriados)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="w-full h-px bg-[#E1E1E1]" />

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          {/* Caixa Cartoes logo */}
          <Image
            src={asset("/images/footer-caixa-logo.png")}
            alt="CAIXA Cartões"
            width={120}
            height={40}
            className="object-contain shrink-0"
          />

          {/* Copyright text */}
          <p className="text-xs lg:text-sm text-[#717171] flex-1 text-center">
            © 2025 Fiserv do Brasil Instituição de Pagamento Ltda. Todos os
            direitos reservados.{"\n"}SAC Fiserv (24h): 0800 770 6207
          </p>

          {/* Fiserv logo + Dúvidas */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Image
              src={asset("/images/footer-fiserv-logo.png")}
              alt="Fiserv"
              width={100}
              height={32}
              className="object-contain shrink-0"
            />

            {/* Dúvidas button */}
            <button className="flex items-center gap-2 border border-[#006CAD] text-[#006CAD] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#006CAD]/5 transition-colors cursor-pointer shrink-0">
              <Image
                src={asset("/images/footer-zuli.png")}
                alt="Zuli"
                width={24}
                height={24}
                className="rounded-full"
              />
              Dúvidas?
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

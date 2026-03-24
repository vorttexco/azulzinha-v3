import Image from "next/image";
import { asset } from "@/lib/assets";

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
    links: ["Serviços de Conveniência"],
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
        fill="#25D366"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top divider */}
      <div className="w-full h-px bg-[#E1E1E1]" />

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-[100px] py-12">
        <div className="flex gap-12">
          {/* Column 1 - Link groups (stacked vertically) */}
          <div className="flex flex-col gap-6 flex-1">
            {linkGroups1.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <h4 className="text-base font-normal text-[#006CAD]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-base text-[#717171] hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 - More link groups */}
          <div className="flex flex-col gap-6 flex-1">
            {linkGroups2.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-base font-normal text-[#006CAD]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-base text-[#717171] hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3 - Contact info */}
          <div className="flex flex-col gap-8 flex-1">
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
                <span className="text-base text-[#717171]">
                  Fale com a Zuli pelo WhatsApp
                </span>
              </div>
              <div className="flex items-center gap-2 ml-[52px]">
                <WhatsAppIcon />
                <span className="text-base text-[#717171]">(11) 94147-3336</span>
              </div>
            </div>

            {/* Central de Relacionamento */}
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-normal text-[#006CAD]">
                CENTRAL DE RELACIONAMENTO
              </h4>
              <p className="text-base text-[#717171] font-semibold">3003 5365</p>
              <p className="text-base text-[#717171]">
                Capital e Grande São Paulo
              </p>
              <p className="text-base text-[#717171] font-semibold">
                0800 729 5365
              </p>
              <p className="text-base text-[#717171]">Demais localidades</p>
              <p className="text-base text-[#717171] text-sm mt-1">
                Segunda a Domingo das 08h00 às 22h00 (exceto feriados)
              </p>
            </div>

            {/* Azulzinha no CAIXA Tem */}
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-normal text-[#006CAD]">
                AZULZINHA NO CAIXA TEM
              </h4>
              <p className="text-base text-[#717171]">
                Atendimento somente via chatbot pelo App CAIXA Tem
              </p>
            </div>

            {/* Ouvidoria */}
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-normal text-[#006CAD]">
                OUVIDORIA
              </h4>
              <p className="text-base text-[#717171] font-semibold">
                0800 727 4655
              </p>
              <p className="text-base text-[#717171] text-sm">
                Segunda a Sexta das 09h00 às 18h00 (exceto feriados)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="w-full h-px bg-[#E1E1E1]" />

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-[100px] py-6">
        <div className="flex items-center justify-between gap-6">
          {/* Caixa Cartoes logo */}
          <Image
            src={asset("/images/footer-caixa-logo.png")}
            alt="CAIXA Cartões"
            width={120}
            height={40}
            className="object-contain shrink-0"
          />

          {/* Copyright text */}
          <p className="text-sm text-[#717171] flex-1 text-center">
            © 2025 Fiserv do Brasil Instituição de Pagamento Ltda. Todos os
            direitos reservados. SAC Fiserv (24h): 0800 770 6207
          </p>

          {/* Fiserv logo */}
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
    </footer>
  );
}

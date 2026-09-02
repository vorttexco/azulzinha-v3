import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { SOCIAL_LINKS } from "@/lib/social";

type FooterLink = { label: string; href: string };

const linkGroups1: { title: string; links: FooterLink[] }[] = [
  {
    title: "Para sua Empresa",
    links: [
      { label: "Maquininhas", href: "/maquininhas" },
      { label: "Vendas Online", href: "/vendas-online" },
      { label: "Gestão", href: "/gestao" },
    ],
  },
  {
    title: "Para sua Lotérica",
    links: [{ label: "Serviço de Conveniência", href: "/lotericas" }],
  },
  {
    title: "Para sua MEI",
    links: [{ label: "App CAIXA Tem", href: "/azulzinha-caixa-tem" }],
  },
  {
    title: "Para Você",
    links: [{ label: "Serviço de Conveniência", href: "/cliente-loterica" }],
  },
];

const linkGroups2: { title: string; links: FooterLink[] }[] = [
  {
    title: "Conteúdo",
    links: [{ label: "Blog da azulzinha", href: "/blog" }],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", href: "/ajuda" },
      { label: "Taxas", href: "/maquinas-e-taxas" },
    ],
  },
  {
    title: "Avisos Legais",
    links: [
      { label: "Contrato de Credenciamento azulzinha", href: "https://azulzinhadacaixa.com.br/midias/Fiserv_Contrato_de_Adesao_e_Credenciamento_4_RTD_SP.pdf" },
      { label: "Contrato de Credenciamento CAIXA Tem", href: "https://azulzinhadacaixa.com.br/midias/termo-condicoes-complementares-CAIXA_Tem.pdf" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Política de Cookies", href: "/aviso-de-cookies" },
      { label: "LGPD", href: "/termo-lgpd" },
    ],
  },
];

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
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm  text-[#717171] hover:underline"
                      >
                        {link.label}
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
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm  text-[#717171] hover:underline"
                      >
                        {link.label}
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
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity w-fit">
                  <Image src={asset("/images/icon-whatsapp.svg")} alt="WhatsApp" width={20} height={20} className="shrink-0" unoptimized />
                  <span className="text-sm text-[#717171]">{SOCIAL_LINKS.whatsappPhone}</span>
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
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={asset("/images/instagram-icon.png")} alt="Instagram" width={20} height={20} unoptimized />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={asset("/images/facebook-icon.png")} alt="Facebook" width={20} height={20} unoptimized />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={asset("/images/linkedin-icon.png")} alt="LinkedIn" width={20} height={20} unoptimized />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={asset("/images/youtube-icon.png")} alt="YouTube" width={20} height={20} unoptimized />
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
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#717171] hover:underline"
                      >
                        {link.label}
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
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#717171] hover:underline"
                      >
                        {link.label}
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
                <Image src={asset("/images/icon-whatsapp.svg")} alt="WhatsApp" width={20} height={20} unoptimized />
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-[#717171] hover:underline">{SOCIAL_LINKS.whatsappPhone}</a>
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
            © 2024 Fiserv do Brasil Instituição de Pagamento Ltda. Todos os
            direitos reservados.<br />SAC Fiserv (24h): 0800 770 6207
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
            <a
              href={SOCIAL_LINKS.whatsappApi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-azul text-azul rounded-full px-4 py-2 text-sm font-medium hover:bg-azul/5 transition-colors shrink-0"
            >
              <Image
                src={asset("/images/footer-zuli.png")}
                alt="Zuli"
                width={24}
                height={24}
                className="rounded-full"
              />
              Dúvidas?
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

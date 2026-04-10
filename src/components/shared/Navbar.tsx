"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

type DropdownItem = { label: string; href: string };
type DropdownColumn = {
  title: string;
  titleColor: "azul" | "laranja";
  items: DropdownItem[];
  footerLink?: DropdownItem;
};

const empresaColumns: DropdownColumn[] = [
  {
    title: "Maquininhas",
    titleColor: "azul",
    items: [
      { label: "Clover", href: "/clover" },
      { label: "azulzinha pro", href: "/maquininhas/pro" },
      { label: "azulzinha aproxima", href: "/azulzinha-aproxima" },
      { label: "azulzinha smart", href: "/azulzinhasmart" },
      { label: "azulzinha TEF", href: "/maquininhas/tef" },
    ],
    footerLink: { label: "Todos os modelos", href: "/maquininhas" },
  },
  {
    title: "Serviços",
    titleColor: "azul",
    items: [
      { label: "Antecipação de Vendas", href: "/antecipacao-de-vendas" },
      { label: "Bandeiras e Vouchers", href: "/bandeiras-vouchers" },
      { label: "Crediário", href: "/crediario-azulzinha" },
      { label: "Pagamento Parcial", href: "/pagamento-parcial" },
      { label: "Pix", href: "/pix-azulzinha" },
      { label: "Recarga", href: "/recarga-telefone" },
    ],
  },
  {
    title: "Vendas Online",
    titleColor: "azul",
    items: [
      { label: "Link de Pagamento", href: "/link-pagamento" },
      { label: "Pagamentos por WhatsApp", href: "/pagamentos-whatsapp" },
    ],
    footerLink: { label: "Todas as soluções", href: "/vendas" },
  },
  {
    title: "Gestão",
    titleColor: "azul",
    items: [
      { label: "App da azulzinha", href: "/gestao/app" },
      { label: "Portal da azulzinha", href: "/gestao/portal" },
    ],
    footerLink: { label: "Todas as soluções", href: "/gestao/gestao-vendas" },
  },
  {
    title: "Para sua Lotérica",
    titleColor: "laranja",
    items: [{ label: "Serviço de Conveniência", href: "/cliente-loterica" }],
  },
  {
    title: "Para sua MEI",
    titleColor: "laranja",
    items: [{ label: "App CAIXA Tem", href: "/mei" }],
  },
];

const voceColumns: DropdownColumn[] = [
  {
    title: "Serviços",
    titleColor: "azul",
    items: [{ label: "azulzinha pay", href: "/pay" }],
  },
  {
    title: "Lotéricas",
    titleColor: "azul",
    items: [{ label: "Serviço de Conveniência", href: "/conveniencia" }],
  },
];

const navLinks = [
  { label: "Para sua empresa", hasDropdown: true, href: "#" },
  { label: "Para você", hasDropdown: true, href: "#" },
  { label: "Blog", hasDropdown: false, href: "/blog" },
  { label: "Ajuda", hasDropdown: false, href: "/ajuda" },
];

function NavSeparator() {
  return (
    <div
      className="h-[26px] border-l-2 border-[#E1E1E1]"
      aria-hidden="true"
    />
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="5.5" stroke="#FC8F01" strokeWidth="1.5" />
      <path d="M11 11L14.5 14.5" stroke="#FC8F01" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PortalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="5" r="3" stroke="#FC8F01" strokeWidth="1.5" />
      <path d="M2 14C2 11.7909 4.68629 10 8 10C11.3137 10 14 11.7909 14 14" stroke="#FC8F01" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PortalIconMobile() {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="4" r="3" stroke="#FC8F01" strokeWidth="1.5" />
      <path d="M1 16C1 13.2386 3.68629 11 7 11C10.3137 11 13 13.2386 13 16" stroke="#FC8F01" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownColumnView({ column }: { column: DropdownColumn }) {
  const titleColorClass =
    column.titleColor === "azul" ? "text-azul" : "text-laranja";
  return (
    <div className="flex flex-col">
      <h3
        className={`text-[18px] leading-[1.4] ${titleColorClass}`}
      >
        {column.title}
      </h3>
      <div className="border-t border-[#E1E1E1] mt-[10px] mb-[8px]" />
      <ul className="flex flex-col gap-[8px]">
        {column.items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[14px] leading-[1.4] text-black hover:text-azul transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {column.footerLink && (
        <Link
          href={column.footerLink.href}
          className="flex items-center gap-[10px] mt-[14px] text-[14px] leading-[1.4] text-azul hover:opacity-80 transition-opacity"
        >
          {column.footerLink.label}
          <ArrowIcon width={12} height={9} color="#006CAD" />
        </Link>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedItems(new Set());
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <nav className="w-full bg-[#006CAD] relative z-30">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto h-[79px] flex items-center justify-between px-[100px]">
          {/* Left side */}
          <div className="flex items-center gap-12 h-full">
            <Link href="/">
              <Image
                src={asset("/images/logo-azulzinha.png")}
                alt="Azulzinha"
                width={127}
                height={55}
                priority
              />
            </Link>

            <ul className="flex items-center gap-6 h-full">
              {navLinks.map((link, index) => {
                const isOpen = openMenu === link.label;
                return (
                  <Fragment key={link.label}>
                    <li
                      className={`relative h-full flex items-center ${
                        link.hasDropdown && isOpen ? "z-50" : ""
                      }`}
                      onMouseEnter={() =>
                        setOpenMenu(link.hasDropdown ? link.label : null)
                      }
                      onMouseLeave={() => {
                        if (link.hasDropdown) setOpenMenu(null);
                      }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center text-[16px] text-white text-center hover:opacity-80 transition-opacity h-full"
                      >
                        {link.label}
                      </Link>

                      {/* Orange highlight bar at bottom of menu item */}
                      {link.hasDropdown && (
                        <div
                          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-laranja transition-opacity duration-200 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                          aria-hidden="true"
                        />
                      )}

                      {/* Dropdown curtain */}
                      {link.hasDropdown && (
                        <div
                          className={`absolute top-full left-0 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                            isOpen
                              ? "max-h-[700px] opacity-100"
                              : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                          aria-hidden={!isOpen}
                        >
                          {link.label === "Para sua empresa" ? (
                            <div className="bg-white rounded-b-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] w-[778px] px-[54px] pt-[32px] pb-[36px]">
                              <div className="grid grid-cols-3 gap-x-[58px] gap-y-[42px]">
                                {empresaColumns.map((col) => (
                                  <DropdownColumnView
                                    key={col.title}
                                    column={col}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="bg-white rounded-b-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] w-[300px] px-[54px] pt-[32px] pb-[36px]">
                              <div className="flex flex-col gap-[40px]">
                                {voceColumns.map((col) => (
                                  <DropdownColumnView
                                    key={col.title}
                                    column={col}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                    {index < navLinks.length - 1 && <NavSeparator />}
                  </Fragment>
                );
              })}
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <a
              href="#"
              className="flex items-center gap-4 border-b border-white pb-0.5 hover:opacity-80 transition-opacity"
            >
              <SearchIcon />
              <span className="text-[14px] text-white">Buscar</span>
            </a>

            {/* Portal de Acesso */}
            <a
              href="#"
              className="flex items-center gap-1.5 text-[14px] text-white hover:opacity-80 transition-opacity"
            >
              <PortalIcon />
              Portal de Acesso
            </a>

            {/* CTA Button */}
            <a
              href="/peca-azulzinha"
              className="btn-laranja"
            >
              Peça já sua azulzinha
            </a>
          </div>
        </div>
      </div>

      {/* Mobile header bar */}
      <div className="flex lg:hidden h-[79px] items-center justify-between px-[30px]">
        <Link href="/">
          <Image
            src={asset("/images/logo-azulzinha.png")}
            alt="Azulzinha"
            width={127}
            height={55}
            priority
          />
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-center w-[51px] h-[51px] rounded-full bg-linear-to-b from-laranja-claro to-laranja"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[79px] z-50 bg-[#006CAD] overflow-y-auto">
          <div className="flex flex-col px-[24px] pt-[24px] pb-[40px] gap-[12px]">
            {/* CTA Button */}
            <Link
              href="/peca-azulzinha"
              onClick={closeMobileMenu}
              className="btn-laranja text-center"
            >
              Peça sua azulzinha
            </Link>

            {/* Portal de Acesso */}
            <a
              href="#"
              className="flex items-center justify-center gap-[8px] rounded-[6px] py-[10px] text-[14px] text-azul bg-linear-to-b from-white to-[#E3E3E3]"
            >
              <PortalIconMobile />
              Acesse o Portal
            </a>

            {/* Navigation links */}
            <nav className="flex flex-col mt-[4px]">
              {navLinks.map((link) => {
                if (!link.hasDropdown) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-[16px] border-b border-white text-[18px] text-white"
                    >
                      {link.label}
                    </Link>
                  );
                }

                const columns =
                  link.label === "Para sua empresa"
                    ? empresaColumns
                    : voceColumns;
                const isExpanded = expandedItems.has(link.label);

                return (
                  <div
                    key={link.label}
                    className="border-b border-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggleExpand(link.label)}
                      className="w-full flex items-center justify-between py-[16px] text-[18px] text-white text-left"
                      aria-expanded={isExpanded}
                    >
                      <span>{link.label}</span>
                      <ChevronDownIcon
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pb-[16px]">
                        {columns.map((col, colIndex) => {
                          const subKey = `${link.label}::${col.title}`;
                          const subExpanded = expandedItems.has(subKey);
                          const isLastCol = colIndex === columns.length - 1;

                          return (
                            <div
                              key={col.title}
                              className={
                                isLastCol
                                  ? ""
                                  : "border-b border-[#8DB3D3]"
                              }
                            >
                              <button
                                type="button"
                                onClick={() => toggleExpand(subKey)}
                                className="w-full flex items-center justify-between py-[12px] text-[14px] text-white text-left"
                                aria-expanded={subExpanded}
                              >
                                <span>{col.title}</span>
                                <ChevronDownIcon
                                  className={`transition-transform duration-200 ${
                                    subExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {subExpanded && (
                                <div className="flex flex-col pb-[8px]">
                                  {col.items.map((item) => (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className="block pl-[24px] py-[8px] text-[14px] text-white"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                  {col.footerLink && (
                                    <Link
                                      href={col.footerLink.href}
                                      onClick={closeMobileMenu}
                                      className="block pl-[24px] py-[8px] text-[14px] text-laranja"
                                    >
                                      {col.footerLink.label}
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

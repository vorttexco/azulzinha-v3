"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const navLinks = [
  { label: "Para sua empresa", hasDropdown: true },
  { label: "Para você", hasDropdown: true },
  { label: "Blog", hasDropdown: false },
  { label: "Ajuda", hasDropdown: false },
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

function DropdownArrowMobile() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#006CAD] h-[79px]">
      {/* Desktop */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto h-full items-center justify-between px-[100px]">
        {/* Left side */}
        <div className="flex items-center gap-12">
          <Image
            src={asset("/images/logo-azulzinha.png")}
            alt="Azulzinha"
            width={127}
            height={55}
            priority
          />

          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={link.label} className="flex items-center gap-6">
                <a
                  href="#"
                  className="flex items-center font-sans text-[16px] text-white text-center hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && <NavSeparator />}
              </li>
            ))}
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
            <span className="font-sans text-[14px] text-white">Buscar</span>
          </a>

          {/* Portal de Acesso */}
          <a
            href="#"
            className="flex items-center gap-1.5 font-sans text-[14px] text-white hover:opacity-80 transition-opacity"
          >
            <PortalIcon />
            Portal de Acesso
          </a>

          {/* CTA Button */}
          <a
            href="#"
            className="flex items-center justify-center w-[168px] h-[36px] rounded-[6px] font-sans text-[14px] text-white hover:opacity-90 transition-opacity bg-linear-to-b from-laranja-claro to-laranja"
          >
            Peça já sua azulzinha
          </a>
        </div>
      </div>

      {/* Mobile header bar */}
      <div className="flex lg:hidden h-full items-center justify-between px-[22px]">
        <Image
          src={asset("/images/logo-azulzinha.png")}
          alt="Azulzinha"
          width={127}
          height={55}
          priority
        />

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center w-[51px] h-[51px]"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[79px] z-50 bg-[#006CAD] overflow-y-auto">
          <div className="flex flex-col px-[24px] pt-[24px] gap-[12px]">
            {/* CTA Button */}
            <a
              href="#"
              className="flex items-center justify-center rounded-[6px] py-[10px] font-sans text-[15.8px] text-white bg-linear-to-b from-laranja-claro to-laranja"
            >
              Peça sua azulzinha
            </a>

            {/* Portal de Acesso */}
            <a
              href="#"
              className="flex items-center justify-center gap-[8px] rounded-[6px] py-[10px] font-sans text-[14px] text-[#006CAD] bg-linear-to-b from-white to-[#E3E3E3]"
            >
              <PortalIconMobile />
              Acesse o Portal
            </a>

            {/* Navigation links */}
            <div className="flex flex-col mt-[4px]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="flex items-center justify-between py-[16px] border-b border-white/30 font-sans text-[18px] text-white"
                >
                  {link.label}
                  {link.hasDropdown && <DropdownArrowMobile />}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

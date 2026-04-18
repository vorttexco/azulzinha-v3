"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

const formatCPF = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .slice(0, 14);

const defaultCheckItems = [
  "Receba suas vendas no crédito em 1 dia útil",
  "Aceite as principais bandeiras e carteiras digitais",
  "Acompanhe seus recebimentos em tempo real",
];

interface HeroSectionProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  checkItems?: string[];
  buttonText?: string;
  buttonHref?: string;
  buttonSubtext?: string | React.ReactNode;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  highlightWord?: string;
  productImage?: string;
  overlayImage?: string;
  logoImage?: string;
  logoWidth?: number;
  logoHeight?: number;
  inputPlaceholder?: string;
  cpfMask?: boolean;
  textColor?: string;
  showOverlay?: boolean;
  overlayColor?: "blue" | "white";
}

export default function HeroSection({
  title = "Com a azulzinha,eu posso fazer parte do programa Gás do Povo!",
  description = "Aceite benefícios e diversos meios de pagamento!",
  checkItems = defaultCheckItems,
  buttonText = "Saiba mais",
  buttonHref = "#",
  buttonSubtext,
  backgroundImage = "/images/hero-bg.png",
  mobileBackgroundImage,
  highlightWord = "1 dia útil",
  productImage,
  logoImage,
  logoWidth = 196,
  logoHeight = 51,
  inputPlaceholder,
  cpfMask = false,
  textColor = "text-white",
  showOverlay = true,
  overlayColor = "blue",
}: HeroSectionProps = {}) {
  const [cpfValue, setCpfValue] = useState("");

  return (
    <section className="relative w-full min-h-[491px] lg:h-[581px] overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(-44deg,#006CAD_5%,#012B71_100%)]"
      />

      {/* Background image — desktop (always shown) */}
      <Image
        src={asset(backgroundImage)}
        alt=""
        fill
        className={`object-cover object-[center_25%] ${mobileBackgroundImage ? "hidden lg:block" : ""}`}
        priority
      />

      {/* Background image — mobile only (when provided) */}
      {mobileBackgroundImage && (
        <Image
          src={asset(mobileBackgroundImage)}
          alt=""
          fill
          className="object-cover object-right lg:hidden"
          priority
        />
      )}

      {/* Left overlay */}
      {showOverlay && (
        <div className={`absolute inset-0 z-1 opacity-90 ${overlayColor === "white"
          ? "bg-[linear-gradient(90.48deg,#ffffff_45%,rgba(255,255,255,0)_65%)] lg:bg-[linear-gradient(90.48deg,#ffffff_15%,rgba(255,255,255,0)_50%)]"
          : "bg-[linear-gradient(90.48deg,#00275E_50%,rgba(1,61,145,0)_96%)] lg:bg-[linear-gradient(90.48deg,#00275E_25%,rgba(1,61,145,0)_75%)]"
          }`} />
      )}

      {/* Content */}
      <div className="relative z-10  min-h-[491px] lg:h-[581px] flex items-center pl-[30px] pr-[60px] py-[56px] lg:px-[100px] lg:py-0 max-w-[1440px] mx-auto">
        <div className="max-w-[463px] flex flex-col gap-8 lg:gap-0">
          {/* Title + Description + Check items */}
          <div className="flex flex-col gap-4 lg:gap-0">
            {/* Title + Description */}
            <div className="flex flex-col gap-3 lg:gap-0">
              {logoImage && (
                <Image
                  src={asset(logoImage)}
                  alt=""
                  width={logoWidth}
                  height={logoHeight}
                  className="object-contain mb-3"
                />
              )}
              <h1 className={`text-[22px] lg:text-[38px] font-bold leading-[1.3] pr-12 ${textColor}`}>
                {title}
              </h1>

              <p className={`text-[14px] lg:text-[18px] font-normal leading-[1.4] ${textColor} lg:mt-4`}>
                {description}
              </p>
            </div>

            {checkItems.length > 0 && (
              <ul className="flex flex-col gap-2 pr-[70px] lg:pr-0 lg:mt-6">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 lg:items-center lg:gap-4">
                    <ArrowIcon width={20} height={20} />
                    <span className={`text-[15px] lg:text-[16px] leading-[1.4] ${textColor}`}>
                      {highlightWord && item.includes(highlightWord) ? (
                        <>
                          {item.replace(highlightWord, "").trim()}{" "}
                          <span className="text-laranja">{highlightWord}</span>
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {inputPlaceholder && (
            <input
              type="text"
              placeholder={inputPlaceholder}
              value={cpfMask ? cpfValue : undefined}
              onChange={cpfMask ? (e) => setCpfValue(formatCPF(e.target.value)) : undefined}
              maxLength={cpfMask ? 14 : undefined}
              className="bg-white rounded-md px-[23px] py-[17px] text-[16px] text-[#B8B8B8] placeholder:text-[#B8B8B8] outline-none w-full max-w-[302px] lg:mt-6"
            />
          )}

          {buttonText && (
            <a
              href={buttonHref}
              className={`btn-laranja self-start ${inputPlaceholder ? "mt-2 lg:mt-6" : "lg:mt-12"}`}
            >
              {buttonText}
            </a>
          )}

          {buttonSubtext && (
            <p className="text-[12px] font-normal leading-[1.4] pr-20 text-[#666666] mt-3 lg:mt-12">
              {buttonSubtext}
            </p>
          )}

          {productImage && (
            <div className="mt-4 lg:mt-6">
              <Image
                src={asset(productImage)}
                alt="Produtos Azulzinha"
                width={539}
                height={207}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

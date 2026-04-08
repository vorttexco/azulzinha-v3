import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";
import { ReactNode } from "react";

const defaultCards = [
  {
    icon: asset("/images/icon-small-bandeiras.svg"),
    text: "Trabalhe com as principais bandeiras, vouchers e carteiras digitais.",
  },
  {
    icon: asset("/images/icon-small-receba.svg"),
    text: "Receba suas vendas em até 1 dia útil.",
  },
  {
    icon: asset("/images/icon-small-pagamentos.svg"),
    text: "Aceite pagamentos com débito, crédito, aproximação e QR Code.",
  },
  {
    icon: asset("/images/icon-small-celular.svg"),
    text: "Transforme celulares em maquininhas.",
  },
  {
    icon: asset("/images/icon-small-integre.svg"),
    text: "Integre, centralize e concilie as vendas num lugar só.",
  },
  {
    icon: asset("/images/icon-small-controle.svg"),
    text: "Controle suas vendas de forma simples e rápida.",
  },
];

const brandLogos = [
  { src: asset("/images/bandeiras-vouchers/elo.png"), alt: "ELO" },
  { src: asset("/images/bandeiras-vouchers/mastercard.png"), alt: "Mastercard" },
  { src: asset("/images/bandeiras-vouchers/visa.png"), alt: "Visa" },
  { src: asset("/images/bandeiras-vouchers/hipercard.png"), alt: "Bandeira 04" },
  { src: asset("/images/bandeiras-vouchers/logo-04.png"), alt: "Bandeira 05" },
  { src: asset("/images/bandeiras-vouchers/logo-06.png"), alt: "Bandeira 06" },
  { src: asset("/images/bandeiras-vouchers/logo-09.png"), alt: "Bandeira 07" },
  { src: asset("/images/bandeiras-vouchers/hiper.png"), alt: "Bandeira 08" },
];

const defaultTitle = (
  <>
    Tenha{" "}
    <span className="text-[#FC8F01]">muito mais tranquilidade</span>{" "}
    para transformar o seu comércio e impulsionar as vendas com
    agilidade e segurança
  </>
);

interface CardItem {
  icon: string;
  text: string;
  title?: string;
}

interface BenefitsSectionProps {
  title?: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  cards?: CardItem[];
  showBrandLogos?: boolean;
  showLink?: boolean;
  linkText?: string;
  bgColor?: string;
}

function SmallCard({ icon, text, title }: CardItem) {
  return (
    <div
      className="flex items-center gap-3 rounded-[12px] bg-white p-4 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
    >
      <Image
        src={icon.startsWith("/") ? asset(icon) : icon}
        alt=""
        width={24}
        height={24}
        className="shrink-0 w-6 h-6"
        unoptimized
      />
      {title ? (
        <div className="flex flex-col gap-1">
          <p className="text-[16px] leading-[1.4] text-azul">{title}</p>
          <p className="text-[14px] leading-[1.4] text-black">{text}</p>
        </div>
      ) : (
        <p className="text-[16px] leading-[1.4] text-black">{text}</p>
      )}
    </div>
  );
}

export default function BenefitsShowcaseSection({
  title = defaultTitle,
  description,
  image = "/images/benefits-bg.png",
  imageAlt = "Benefícios azulzinha",
  cards = defaultCards,
  showBrandLogos = true,
  showLink = true,
  linkText = "Consulte todas as bandeiras",
  bgColor = "bg-[#F5F5F5]",
}: BenefitsSectionProps) {
  return (
    <section className={`w-full ${bgColor}`}>
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        {/* Top row: Text left + Image right */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">
          {/* Left side - Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="section-title text-left text-azul">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.4] text-black">
                {description}
              </p>
            )}
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[250px] lg:h-[400px] rounded-[12px] lg:rounded-r-[20px] overflow-hidden">
            <Image
              src={asset(image)}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <SmallCard key={card.text} icon={card.icon} text={card.text} title={card.title} />
          ))}
        </div>

        {/* Brand logos */}
        {showBrandLogos && (
          <div className="mt-6 lg:mt-10 flex flex-wrap justify-center gap-6 lg:gap-12 lg:justify-center lg:flex-nowrap">
            {brandLogos.map((brand) => (
              <div key={brand.src} className="flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={65}
                  height={65}
                  className="object-contain w-[65px] h-auto"
                />
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        {showLink && (
          <div className="mt-6 flex justify-center">
            <a
              href="/bandeiras-vouchers"
              className="inline-flex items-center gap-2 rounded-[6px]
               px-[17px] py-[10px] text-[16px] text-[#006CAD] cursor-pointer hover:bg-[#006CAD]/5 transition-colors"
            >
              {linkText}
              <ArrowIcon />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

import Image from "next/image";
import { asset } from "@/lib/assets";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  button2Text?: string;
  button2Href?: string;
  image?: string;
  imageAlt?: string;
}

export default function CtaSection({
  title = "Com azulzinha da CAIXA você pode muito mais!",
  description = "Conte com as melhores taxas e condições para crescer, gerir e prosperar com seu negócio.",
  buttonText = "Peça já a sua",
  buttonHref = "#",
  button2Text,
  button2Href = "#",
  image = "/images/cta-photo.png",
  imageAlt = "Azulzinha CTA",
}: CtaSectionProps = {}) {
  return (
    <section
      className="w-full py-14 lg:py-20 bg-linear-to-b from-white from-50% to-[#F7F7F7]"
    >
      <div className="max-w-[1440px] mx-auto px-[28px] lg:px-[100px]">
        <div className="relative w-full overflow-hidden rounded-[12px] lg:rounded-[24px] flex flex-col lg:flex-row items-stretch bg-[linear-gradient(130deg,rgba(0,108,173,1)_5%,rgba(1,43,113,1)_100%)] p-[30px] gap-6 lg:p-0 lg:gap-0">

          {/* Imagem mobile */}
          <div className="w-full lg:hidden shrink-0">
            <div className="relative w-full h-[205px]">
              <Image
                src={asset(image)}
                alt={imageAlt}
                fill
                className="object-cover object-center rounded-[8px]"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center gap-4 lg:gap-6  lg:pl-16 lg:pr-8 w-full lg:w-1/2 lg:shrink-0 lg:py-0 lg:h-[490px]">
            <h2 className="section-title text-white text-left">
              {title}
            </h2>
            {description && (
              <p className="text-[16px] lg:text-[18px] text-white leading-[1.4]">
                {description}
              </p>
            )}
            <div className={`flex ${button2Text ? "flex-col lg:flex-row gap-4 lg:gap-6" : ""}`}>
              <a
                href={buttonHref}
                className="btn-laranja text-center"
              >
                {buttonText}
              </a>
              {button2Text && (
                <a
                  href={button2Href}
                  className="bg-[linear-gradient(180deg,#FFF_0%,#D7E4E7_100%)] text-azul rounded-[6px] px-[17px] py-[10px] text-[16px] font-normal text-center cursor-pointer hover:opacity-90 transition-opacity"
                >
                  {button2Text}
                </a>
              )}
            </div>
          </div>

          {/* Right side - Photo (desktop only) */}
          <div className="relative w-1/2 hidden lg:block">
            <Image
              src={asset(image)}
              alt={imageAlt}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

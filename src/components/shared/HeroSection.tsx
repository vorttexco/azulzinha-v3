import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

const defaultCheckItems = [
  "Receba suas vendas no crédito em 1 dia útil",
  "Aceite as principais bandeiras e carteiras digitais",
  "Acompanhe seus recebimentos em tempo real",
];

interface HeroSectionProps {
  title?: string;
  description?: string;
  checkItems?: string[];
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  highlightWord?: string;
  productImage?: string;
}

export default function HeroSection({
  title = "Com azulzinha você pode muito mais.",
  description = "Gestão simplificada, segurança, mais vendas e pagamentos rápidos com a azulzinha.",
  checkItems = defaultCheckItems,
  buttonText = "Peça sua azulzinha",
  buttonHref = "#",
  backgroundImage = "/images/hero-bg.png",
  highlightWord = "1 dia útil",
  productImage,
}: HeroSectionProps = {}) {
  return (
    <section className="relative w-full min-h-[491px] lg:h-[581px] overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(-44deg,#006CAD_5%,#012B71_100%)]"
      />

      {/* Background image */}
      <Image
        src={asset(backgroundImage)}
        alt=""
        fill
        className="object-cover object-[center_25%]"
        priority
      />

      {/* Left overlay */}
      <div className="absolute inset-0 opacity-90 bg-[linear-gradient(90.48deg,#00275E_50%,rgba(1,61,145,0)_96%)] lg:bg-[linear-gradient(90.48deg,#00275E_25%,rgba(1,61,145,0)_75%)]" />

      {/* Content */}
      <div className="relative z-10  min-h-[491px] lg:h-[581px] flex items-center pl-[30px] pr-[60px] py-[56px] lg:px-[100px] lg:py-0 max-w-[1440px] mx-auto">
        <div className="max-w-[463px] flex flex-col gap-8 lg:gap-0">
          {/* Title + Description + Check items */}
          <div className="flex flex-col gap-4 lg:gap-0">
            {/* Title + Description */}
            <div className="flex flex-col gap-3 lg:gap-0">
              <h1 className="text-[26px] lg:text-[38px] font-bold leading-[1.3] text-white">
                {title}
              </h1>

              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-white lg:mt-4">
                {description}
              </p>
            </div>

            {checkItems.length > 0 && (
              <ul className="flex flex-col gap-2 pr-[70px] lg:pr-0 lg:mt-6">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 lg:items-center lg:gap-4">
                    <ArrowIcon width={20} height={20} />
                    <span className="text-[15px] lg:text-[16px] leading-[1.4] text-white">
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

          {buttonText && (
            <a
              href={buttonHref}
              className="btn-laranja self-start lg:mt-12"
            >
              {buttonText}
            </a>
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

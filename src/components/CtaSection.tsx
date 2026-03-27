import Image from "next/image";
import { asset } from "@/lib/assets";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
  imageAlt?: string;
}

export default function CtaSection({
  title = "Com azulzinha da CAIXA você pode muito mais!",
  description = "Conte com as melhores taxas e condições para crescer, gerir e prosperar com seu negócio.",
  buttonText = "Peça já a sua",
  image = "/images/cta-photo.png",
  imageAlt = "Azulzinha CTA",
}: CtaSectionProps = {}) {
  return (
    <section
      className="w-full py-14 lg:py-20 bg-linear-to-b from-white from-50% to-[#F7F7F7]"
    >
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div
          className="relative w-full overflow-hidden rounded-[12px] lg:rounded-[24px] flex flex-col lg:flex-row items-stretch bg-[linear-gradient(130deg,rgba(0,108,173,1)_5%,rgba(1,43,113,1)_100%)]"
        >
          {/* Image - shown first on mobile (top), right side on desktop */}
          <div className="relative w-full h-[260px] lg:hidden">
            <Image
              src={asset(image)}
              alt={imageAlt}
              fill
              className="object-cover object-center rounded-t-[8px]"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:pl-16 lg:pr-8 w-full lg:w-1/2 lg:shrink-0 lg:py-0 lg:h-[490px]">
            <h2 className="section-title text-white text-left">
              {title}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-white leading-[1.4]">
              {description}
            </p>
            <div>
              <button
                className="btn-laranja"
              >
                {buttonText}
              </button>
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

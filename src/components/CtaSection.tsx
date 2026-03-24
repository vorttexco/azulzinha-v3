import Image from "next/image";
import { asset } from "@/lib/assets";

export default function CtaSection() {
  return (
    <section
      className="w-full py-20 bg-linear-to-b from-white from-50% to-[#F7F7F7]"
    >
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <div
          className="relative w-full overflow-hidden rounded-[24px] flex items-stretch bg-[linear-gradient(130deg,rgba(0,108,173,1)_5%,rgba(1,43,113,1)_100%)] h-[490px]"
        >
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center gap-6 pl-16 pr-8 w-1/2 shrink-0">
            <h2 className="text-[28px] font-bold text-white leading-[1.3]">
              Com azulzinha da CAIXA você pode muito mais!
            </h2>
            <p className="text-[18px] text-white leading-[1.4]">
              Conte com as melhores taxas e condições para crescer, gerir e
              prosperar com seu negócio.
            </p>
            <div>
              <button
                className="text-white font-semibold cursor-pointer bg-linear-to-b from-laranja-claro to-laranja rounded-[6px] px-[17px] py-[10px]"
              >
                Peça já a sua
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="relative w-1/2">
            <Image
              src={asset("/images/cta-photo.png")}
              alt="Azulzinha CTA"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { asset } from "@/lib/assets";

const bandeiras = [
  { name: "Visa", logo: "/images/crediario-azulzinha/logo-visa.png", width: 92, height: 29 },
  { name: "Mastercard", logo: "/images/crediario-azulzinha/logo-mastercard.png", width: 76, height: 47 },
  { name: "Elo", logo: "/images/crediario-azulzinha/logo-elo.png", width: 95, height: 31 },
  { name: "Hipercard", logo: "/images/crediario-azulzinha/logo-hipercard.png", width: 93, height: 41 },
  { name: "Amex", logo: "/images/crediario-azulzinha/logo-amex.png", width: 71, height: 71 },
  { name: "Hiper", logo: "/images/crediario-azulzinha/logo-hiper.png", width: 72, height: 58 },
];

export default function BandeirasCrediarioSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[39px] lg:gap-10">
          {bandeiras.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] h-[100px] lg:h-[120px]"
            >
              <Image
                src={asset(b.logo)}
                alt={b.name}
                width={b.width}
                height={b.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-[16px] lg:text-[18px] leading-[1.4] text-[#666666] text-center mt-8 max-w-[840px] mx-auto">
          *As taxas e quantidade de parcelas variam de acordo com o banco emissor de cada cartão.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

const brandLogos = [
  { src: "/images/bandeiras-vouchers/elo.png", alt: "ELO" },
  { src: "/images/bandeiras-vouchers/mastercard.png", alt: "Mastercard" },
  { src: "/images/bandeiras-vouchers/visa.png", alt: "Visa" },
  { src: "/images/bandeiras-vouchers/hipercard.png", alt: "Hipercard" },
  { src: "/images/bandeiras-vouchers/logo-04.png", alt: "American Express" },
  { src: "/images/bandeiras-vouchers/hiper.png", alt: "Hiper" },
  { src: "/images/bandeiras-vouchers/logo-06.png", alt: "Bandeira" },
  { src: "/images/bandeiras-vouchers/logo-09.png", alt: "Alelo" },
];

export default function BandeirasHomeSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 max-w-[800px]">
          <h2 className="text-[26px] lg:text-[32px] font-normal leading-[130%] text-azul text-center">
            Venda com mais de{" "}
            <span className="text-laranja">40 bandeiras</span>{" "}
            nacionais, internacionais, regionais e vouchers
          </h2>
          <p className="text-[16px] lg:text-[18px] font-normal leading-[140%] text-black text-center">
            A azulzinha já vem com a maior variedade de bandeiras de débito e crédito e muitas opções para você habilitar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-16">
          {brandLogos.map((brand) => (
            <div
              key={brand.src}
              className="flex items-center justify-center w-[140px] h-[100px] p-4 bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={asset(brand.src)}
                alt={brand.alt}
                width={100}
                height={70}
                className="object-contain max-w-[75%] max-h-[70%]"
                unoptimized
              />
            </div>
          ))}
        </div>

        <a
          href="/bandeiras-vouchers"
          className="inline-flex items-center gap-2 text-[18px] lg:pt-16 font-normal leading-[130%] text-azul hover:opacity-80 transition-opacity"
        >
          Consulte todas as bandeiras
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

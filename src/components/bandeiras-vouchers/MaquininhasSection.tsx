import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

const machines = [
  { src: "/images/bandeiras-vouchers/c680.png", w: 152, h: 308, alt: "C680" },
  { src: "/images/bandeiras-vouchers/mov5000.png", w: 150, h: 311, alt: "MOV5000" },
  { src: "/images/bandeiras-vouchers/sp930.png", w: 145, h: 306, alt: "SP930" },
  { src: "/images/bandeiras-vouchers/lane_frontal2.png", w: 451, h: 922, alt: "Lane" },
];

export default function MaquininhasSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-end justify-center gap-4 lg:gap-8 w-full -mt-20 lg:-mt-30">
            {machines.map((m) => (
              <Image
                key={m.alt}
                src={asset(m.src)}
                alt={m.alt}
                width={m.w}
                height={m.h}
                className="object-contain h-[140px] lg:h-65 w-auto"
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-cinza">
              E muito mais para ampliar suas oportunidades de vendas e negócios.
            </p>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul">
              Conheça a azulzinha.
            </p>
            <Link href="/ajuda" className="btn-laranja mt-2">
              Quero saber mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

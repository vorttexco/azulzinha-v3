import Image from "next/image";
import { asset } from "@/lib/assets";

const checkItems = [
  "Receba suas vendas no crédito em 1 dia útil",
  "Aceite as principais bandeiras e carteiras digitais",
  "Acompanhe seus recebimentos em tempo real",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M16.6667 5L7.50001 14.1667L3.33334 10"
        stroke="#FC8F01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-[581px] overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(-44deg,#006CAD_5%,#012B71_100%)]"
      />

      {/* Background image */}
      <Image
        src={asset("/images/hero-bg.png")}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Left overlay */}
      <div
        className="absolute inset-0 opacity-90 bg-[linear-gradient(91deg,rgba(0,39,94,1)_44%,rgba(1,61,145,0)_96%)]"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[100px] max-w-[1440px] mx-auto">
        <div className="max-w-[463px]">
          <h1 className="text-[38px] font-bold leading-[1.3] text-white">
            Com azulzinha você pode muito mais.
          </h1>

          <p className="mt-4 text-[18px] leading-[1.4] text-white">
            Gestão simplificada, segurança, mais vendas e pagamentos rápidos com
            a azulzinha.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            {checkItems.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[16px] leading-[1.4] text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-12 inline-block rounded-[6px] px-[17px] py-[10px] text-[16px] text-white text-center cursor-pointer bg-linear-to-b from-laranja-claro to-laranja"
          >
            Peça sua azulzinha
          </a>
        </div>
      </div>
    </section>
  );
}

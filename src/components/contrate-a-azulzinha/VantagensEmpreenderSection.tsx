import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/shared/ArrowIcon";

const vantagens = [
  {
    icon: "/images/contrate-a-azulzinha/icon-nfc.png",
    text: "Venda com aproximação (NFC), QR Code, chip e tarja magnética",
  },
  {
    icon: "/images/contrate-a-azulzinha/icon-bandeiras.png",
    text: "Aceite mais de 40 bandeiras de cartão, vouchers, carteiras digitais e Pix",
  },
  {
    icon: "/images/contrate-a-azulzinha/icon-seguranca.png",
    text: "Transacione com proteção antifraude e segurança garantida",
  },
  {
    icon: "/images/contrate-a-azulzinha/icon-suporte.png",
    text: "Conte com nosso suporte técnico disponível 24 horas por dia",
  },
];

export default function VantagensEmpreenderSection() {
  return (
    <section className="bg-[linear-gradient(277deg,#01AADE_0%,#0170B7_100%)] py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col items-center gap-8 lg:gap-[60px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-white">
            Com azulzinha você tem mais apoio para empreender
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-white text-center max-w-[640px]">
            Conheça as vantagens de ter a sua maquininha da CAIXA:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
          {vantagens.map((item) => (
            <div
              key={item.text}
              className="bg-white/10 rounded-[12px] p-5 lg:p-8 flex flex-col items-center text-center gap-4"
            >
              <Image
                src={asset(item.icon)}
                alt=""
                width={63}
                height={63}
                className="h-[48px] lg:h-[63px] w-auto object-contain"
              />
              <p className="text-[14px] lg:text-[16px] leading-[1.4] text-white">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="#form"
          className="inline-flex items-center gap-3 text-white text-[16px] lg:text-[18px] hover:opacity-90"
        >
          Peça a sua
          <ArrowIcon color="#FFFFFF" width={20} height={16} />
        </Link>
      </div>
    </section>
  );
}

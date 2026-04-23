import Image from "next/image";
import { asset } from "@/lib/assets";

const features = [
  {
    icon: "/images/programa-gas-do-povo/icon-nfc.svg",
    text: "Venda com aproximação (NFC), QR Code, chip e tarja magnética",
  },
  {
    icon: "/images/programa-gas-do-povo/icon-cartao.svg",
    text: "Aceite mais de 40 bandeiras de cartão, vouchers, carteiras digitais e Pix *",
  },
  {
    icon: "/images/programa-gas-do-povo/icon-seguranca.svg",
    text: "Transacione com proteção antifraude e segurança garantida",
  },
  {
    icon: "/images/programa-gas-do-povo/icon-suporte.svg",
    text: "Conte com nosso suporte técnico disponível 24 horas por dia",
  },
];

export default function VantagensSection() {
  return (
    <section className="w-full bg-cinza-claro py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col items-center gap-8 lg:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="section-title text-azul max-w-[900px]">
            Com a azulzinha, sua revendedora de gás pode muito mais.
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black max-w-[740px]">
            Conheça as vantagens que só a maquininha da CAIXA pode oferecer para você
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex flex-col items-center gap-4 lg:gap-5 text-center"
            >
              <div className="w-[88px] h-[88px] lg:w-[104px] lg:h-[104px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
                <Image
                  src={asset(feature.icon)}
                  alt=""
                  width={48}
                  height={48}
                  className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] object-contain"
                  unoptimized
                />
              </div>
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul max-w-[240px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[12px] lg:text-[14px] leading-[1.5] text-[#666666] text-center max-w-[900px]">
          *Algumas revendedoras de gás poderão ter a azulzinha com acesso exclusivo apenas à funcionalidade Gás do Povo.
        </p>
      </div>
    </section>
  );
}

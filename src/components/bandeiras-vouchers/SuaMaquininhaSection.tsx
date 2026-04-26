import Image from "next/image";
import { asset } from "@/lib/assets";

const items = [
  {
    icon: "/images/bandeiras-vouchers/wireless-payment-smartphone.png",
    text: "Passa débito, crédito, carteiras digitais, aproximação e QR Code.",
  },
  {
    icon: "/images/bandeiras-vouchers/cash-payment-coin.png",
    text: "Recebe suas vendas em até 2 dias úteis e antecipa valores.",
  },
  {
    icon: "/images/bandeiras-vouchers/self-payment-touch.png",
    text: "Cuida do seu caixa e das suas vendas de forma simples e rápida.",
  },
];

export default function SuaMaquininhaSection() {
  return (
    <section className="bg-azul">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pt-14 lg:pt-20 pb-20">
        <div className="flex flex-col items-center gap-10 lg:gap-[60px]">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="section-title text-white font-bold">
              Sua maquininha de cartão ainda não é uma azulzinha?
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-white max-w-[700px]">
              Além de aceitar até 250 bandeiras nacionais, internacionais, regionais e vouchers, com a azulzinha você:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 w-full pb-14 lg:pb-20">
            {items.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 text-center">
                <Image
                  src={asset(item.icon)}
                  alt=""
                  width={76}
                  height={76}
                  className="object-contain"
                />
                <p className="text-[16px] lg:text-[18px] leading-[1.4] text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

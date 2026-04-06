import Image from "next/image";
import { asset } from "@/lib/assets";

const methods = [
  {
    icon: "/images/azulzinha-smart/icon-visao.png",
    title: "Cartão com chip",
  },
  {
    icon: "/images/azulzinha-smart/icon-aproximacao.png",
    title: "Aproximação",
  },
  {
    icon: "/images/azulzinha-smart/icon-qr-code.png",
    title: "QR Code",
  },
  {
    icon: "/images/azulzinha-smart/icon-pix.png",
    title: "Pix",
  },
];

export default function MetodosPagamentoSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <h2 className="section-title text-azul">
            azulzinha smart combina com todos os jeitos de pagar
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[837px]">
            Seu cliente prefere pagar por aproximação, QR Code ou cartão com
            chip? A azulzinha smart aceita todas as modalidades de pagamento, das
            tradicionais às mais recentes.
          </p>

          <div className="w-full flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-4 lg:gap-6">
            {methods.map((method) => (
              <div
                key={method.title}
                className="w-[330px] lg:w-auto h-[285px] pt-[67px] pr-[8px] pb-[85px] pl-[8px] lg:p-0 flex flex-col items-center justify-center gap-[10px] lg:gap-4 bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
              >
                <div className="relative w-[94px] h-[94px]">
                  <div className="absolute inset-0 rounded-[12px] translate-x-1 translate-y-1" />
                  <Image
                    src={asset(method.icon)}
                    alt=""
                    width={94}
                    height={94}
                    className="relative z-10 object-contain w-[94px] h-[94px]"
                  />
                </div>
                <h3 className="text-[22px] leading-[1.3] text-azul text-center">
                  {method.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

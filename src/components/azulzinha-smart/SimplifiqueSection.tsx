import Image from "next/image";
import { asset } from "@/lib/assets";

export default function SimplifiqueSection() {
  return (
    <section className="w-full bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 lg:gap-6">
            <h2 className="section-title text-azul text-center lg:text-left">
              Simplifique a sua gestão financeira
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
              Com a azulzinha smart, você pode centralizar e conciliar as vendas
              do seu negócio de forma simples e rápida. Não é necessário utilizar
              várias ferramentas diferentes, tudo pode ser feito em um só lugar.
            </p>
          </div>

          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[711px] h-[208px] lg:h-[448px] bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] overflow-hidden">
              <Image
                src={asset("/images/azulzinha-smart/maquininha-smart.png")}
                alt="Maquininha azulzinha smart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { asset } from "@/lib/assets";

export default function TefSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-[110px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[78px] lg:justify-between">
          {/* Text content */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:w-[537px]">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="section-title text-azul text-center lg:text-left">
                TEF
              </h2>
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                A maquininha com o sistema ideal para comércios com alto volume
                de transações com cartão. Facilite suas vendas em supermercados,
                drogarias, padarias, postos de combustível, lojas de
                departamentos, entre outros.
              </p>
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                Com a azulzinha TEF, suas vendas são integradas automaticamente
                ao sistema de automação do seu negócio. Isso significa não só uma
                conciliação de vendas segura, mas também mais agilidade no
                atendimento ao seu cliente, evitando filas e garantindo uma
                gestão mais eficiente do seu negócio.
              </p>
            </div>
            {/* Button - desktop only (below text) */}
            <a href="#" className="btn-laranja hidden lg:inline-block">
              Comece agora
            </a>
          </div>

          {/* Product image */}
          <div className="relative w-[321px] lg:w-[605px] h-[286px] lg:h-[466px]">
            {/* White card background */}
            <div className="absolute bottom-0 left-0 right-0 h-[270px] lg:h-[398px] bg-white rounded-[5px] lg:rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.08)]" />
            {/* Product image */}
            <Image
              src={asset("/images/maquininhas-tef/product-tef.png")}
              alt="azulzinha TEF"
              width={240}
              height={466}
              className="relative z-10 mx-auto w-[140px] lg:w-[240px] h-full object-contain"
            />
          </div>

          {/* Button - mobile only (below image) */}
          <a href="#" className="btn-laranja lg:hidden">
            Comece agora
          </a>
        </div>
      </div>
    </section>
  );
}

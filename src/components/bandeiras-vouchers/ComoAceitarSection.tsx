import Image from "next/image";
import { asset } from "@/lib/assets";

export default function ComoAceitarSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 lg:pb-[110px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[30px] lg:gap-[78px]">
        {/* Text content */}
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-[537px] shrink-0">
          <h2 className="section-title text-azul text-center lg:text-left">
            Como aceitar os principais vouchers de benefícios na azulzinha
          </h2>
          <div className="flex flex-col gap-4 text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
            <p>
              Quer aceitar os principais vouchers do mercado? A azulzinha da CAIXA também já vem pronta para você diversificar as experiências de pagamento para seus clientes!
            </p>
            <p>
              Basta credenciar seu estabelecimento diretamente com cada bandeira que você quer aceitar.
            </p>
            <p>
              Selecione abaixo as bandeiras que você pode habilitar na azulzinha e siga o passo a passo de cada uma para fazer a solicitação.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-[605px] h-[209px] lg:h-[398px] shrink-0 overflow-hidden lg:overflow-visible">
          {/* Background card */}
          <div className="absolute inset-0 bg-white rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]" />
          {/* SVG illustration */}
          <Image
            src={asset("/images/bandeiras-vouchers/ilustracao-como-aceitar.svg")}
            alt="Ilustração como aceitar vouchers"
            fill
            className="object-contain rounded-[10px]"
          />
          {/* Machine overlay */}
          <div className="absolute right-[10px] lg:right-[-60px] top-[10px] lg:top-[12px] w-[160px] lg:w-[362px] h-[190px] lg:h-[380px]">
            <Image
              src={asset("/images/bandeiras-vouchers/maquina-24d507.png")}
              alt="Maquininha azulzinha"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

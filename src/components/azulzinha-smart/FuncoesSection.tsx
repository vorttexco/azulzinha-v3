import Image from "next/image";
import { asset } from "@/lib/assets";

const features = [
  {
    icon: "/images/azulzinha-smart/icon-sim.png",
    text: "Pagamento portátil Chip & PIN",
  },
  {
    icon: "/images/azulzinha-smart/icon-wifi.png",
    text: "GSM/GPRS/4G Quad Band",
  },
  {
    icon: "/images/azulzinha-smart/icon-bluetooth.png",
    text: "Wi-Fi & Bluetooth",
  },
  {
    icon: "/images/azulzinha-smart/icon-android.png",
    text: "Usa a plataforma Android aliada à tecnologia altamente segura da Ingenico",
  },
  {
    icon: "/images/azulzinha-smart/icon-batery.png",
    text: "Terminal de alta performance com longa duração de bateria",
  },
];


export default function FuncoesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <h2 className="section-title text-azul">
            Aproveite todas as funções disponíveis
          </h2>

          {/* Cards */}
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left card - Funcionalidades */}
            <div className="w-full lg:w-1/2 bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col items-center p-8 lg:p-10 gap-6">
              <h3 className="text-[22px] leading-[1.3] text-black text-center">
                Funcionalidades da sua azulzinha smart
              </h3>
              <div className="relative w-full max-w-[559px] h-[186px] lg:h-[385px]">
                <Image
                  src={asset("/images/azulzinha-smart/maquina-c-texto.png")}
                  alt="Funcionalidades azulzinha smart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right card - Terminal completo */}
            <div className="w-full lg:w-1/2 bg-white rounded-[30px] border border-[#F1F1F1] shadow-[0_4px_10px_rgba(0,0,0,0.08)] overflow-hidden p-8 lg:p-10 flex flex-col gap-6">
              <h3 className="text-[22px] leading-[1.3] text-black text-center lg:text-left">
                Um terminal completo
              </h3>
              <div className="flex flex-col gap-4">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-4">
                    <div className="w-[73px] h-[73px] rounded-[20px] bg-[#F6F6F6] border border-[#F1F1F1] shadow-[0_2.62px_6.55px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0">
                      <Image
                        src={asset(feature.icon)}
                        alt=""
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

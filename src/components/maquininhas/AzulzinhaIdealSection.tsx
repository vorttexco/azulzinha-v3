import Image from "next/image";
import { asset } from "@/lib/assets";

const features = [
  {
    icon: "/images/maquininhas/icon-cartao.png",
    label: "Visão consolidada",
  },
  {
    icon: "/images/maquininhas/icon-wireless.png",
    label: "Aproximação",
  },
  {
    icon: "/images/maquininhas/icon-qr-code.png",
    label: "QR Code",
  },
  {
    icon: "/images/maquininhas/icon-pix.png",
    label: "Pix",
  },
];

export default function AzulzinhaIdealSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:pt-20 lg:pb-[110px]">
        <div className="flex flex-col items-center gap-[30px] lg:gap-[60px]">
          {/* Title + Description */}
          <div className="flex flex-col items-center gap-6 max-w-[696px]">
            <h2 className="section-title text-azul max-w-[634px]">
              A azulzinha ideal para o seu negócio está aqui
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
              Todos os modelos de azulzinha já vêm com uma grande rede de
              aceitação de bandeiras, meios de pagamento e serviços adicionais,
              tudo sempre atualizado para você aperfeiçoar a experiência do seu
              cliente, aumentar suas vendas e cuidar da saúde do caixa.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-[10px] bg-white border border-[#F1F1F1] rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] py-[67px] lg:py-[67px] px-2"
              >
                <div className="relative w-[94px] h-[94px]">
                  <Image
                    src={asset(feature.icon)}
                    alt={feature.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[18px] lg:text-[22px] leading-[1.3] text-azul text-center font-normal">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bandeiras */}
          <div className="flex flex-col items-center gap-6 lg:gap-10 w-full">
            <h2 className="section-title text-azul">
              E a mais variada rede de bandeiras e carteiras digitais
            </h2>
            <div className="flex flex-col items-center gap-4 w-full max-w-[1070px]">
              <Image
                src={asset("/images/maquininhas/bandeiras-1.png")}
                alt="Bandeiras aceitas linha 1"
                width={1305}
                height={294}
                className="w-full h-auto object-contain"
              />
              <Image
                src={asset("/images/maquininhas/bandeiras-2.png")}
                alt="Bandeiras aceitas linha 2"
                width={1318}
                height={297}
                className="w-full h-auto object-contain"
              />
              <Image
                src={asset("/images/maquininhas/bandeiras-3.png")}
                alt="Bandeiras aceitas linha 3"
                width={1310}
                height={146}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

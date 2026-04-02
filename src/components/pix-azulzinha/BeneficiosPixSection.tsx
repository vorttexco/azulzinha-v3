import Image from "next/image";
import { asset } from "@/lib/assets";

interface BeneficioItem {
  icon: string;
  title: string;
  description: string;
}

const defaultBeneficios: BeneficioItem[] = [
  {
    icon: "/images/pix-azulzinha/icon-benefit-1.svg",
    title: "Mais eficiência",
    description: "Reduza as etapas da jornada de compra do seu cliente",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-2.svg",
    title: "Mais facilidade",
    description: "Disponibilize uma transação mais rápida e prática",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-3.svg",
    title: "Mais segurança",
    description: "Ofereça proteção com a leitura por aproximação, sem expor o saldo",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-4.svg",
    title: "Mais economia",
    description: "Diminua a movimentação e o transporte de dinheiro em espécie",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-5.svg",
    title: "Mais liquidez",
    description: "Receba suas transações em segundos, sem taxa de MDR",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-6.svg",
    title: "Mais disponibilidade",
    description: "Aceite Pix 24 horas por dia, 7 dias por semana, sem interrupções",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-7.svg",
    title: "Mais opções",
    description: "Transacione com diversas instituições de pagamento",
  },
];

interface BeneficiosPixSectionProps {
  beneficios?: BeneficioItem[];
  buttonText?: string;
  buttonHref?: string;
}

export default function BeneficiosPixSection({
  beneficios = defaultBeneficios,
  buttonText = "Peça sua Azulzinha",
  buttonHref = "#",
}: BeneficiosPixSectionProps) {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
        {/* Cards grid */}
        <div className="w-full flex flex-col gap-[30px] lg:gap-6">
          {/* Row 1 - 3 cards */}
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-6">
            {beneficios.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="w-full lg:flex-1 h-[244px] bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-8 lg:pt-8 lg:pb-0 lg:pl-8 lg:pr-10"
              >
                <div className="flex flex-col gap-6">
                  <Image
                    src={asset(item.icon)}
                    alt=""
                    width={42}
                    height={40}
                    className="shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-normal leading-[1.4] text-azul">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.4] text-black">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - 3 cards */}
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-6">
            {beneficios.slice(3, 6).map((item, i) => (
              <div
                key={i}
                className="w-full lg:flex-1 h-[244px] bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-8 lg:pt-8 lg:pb-0 lg:pl-8 lg:pr-10"
              >
                <div className="flex flex-col gap-6">
                  <Image
                    src={asset(item.icon)}
                    alt=""
                    width={42}
                    height={40}
                    className="shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-normal leading-[1.4] text-azul">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.4] text-black">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - 1 card */}
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-6">
            {beneficios.slice(6).map((item, i) => (
              <div
                key={i}
                className="w-full lg:w-[397px] h-[244px] bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-8 lg:pt-8 lg:pb-0 lg:pl-8 lg:pr-10"
              >
                <div className="flex flex-col gap-6">
                  <Image
                    src={asset(item.icon)}
                    alt=""
                    width={42}
                    height={40}
                    className="shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-normal leading-[1.4] text-azul">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.4] text-black">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href={buttonHref} className="btn-laranja">
          {buttonText}
        </a>
      </div>
    </section>
  );
}

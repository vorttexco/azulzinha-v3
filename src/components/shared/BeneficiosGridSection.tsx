import Image from "next/image";
import { asset } from "@/lib/assets";

interface BeneficioItem {
  icon?: string;
  title: string;
  description: string;
  note?: string;
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

interface BeneficiosGridSectionProps {
  title?: string;
  subtitle?: string;
  beneficios?: BeneficioItem[];
  buttonText?: string;
  buttonHref?: string;
  bgColor?: string;
  paddingClassName?: string;
}

export default function BeneficiosGridSection({
  title,
  subtitle,
  beneficios = defaultBeneficios,
  buttonText = "Peça sua Azulzinha",
  buttonHref = "#",
  bgColor = "bg-white",
  paddingClassName = "pb-14 lg:pb-20",
}: BeneficiosGridSectionProps) {
  // Split items into rows of 3
  const rows: BeneficioItem[][] = [];
  for (let i = 0; i < beneficios.length; i += 3) {
    rows.push(beneficios.slice(i, i + 3));
  }

  return (
    <section className={bgColor}>
      <div className={`max-w-360 mx-auto px-7.5 lg:px-25 ${paddingClassName} flex flex-col items-center gap-7.5 lg:gap-15`}>
        {title && (
          <div className="flex flex-col items-center gap-4">
            <h2 className="section-title text-azul">{title}</h2>
            {subtitle && (
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[564px]">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {/* Cards grid */}
        <div className="w-full flex flex-col gap-7.5 lg:gap-6">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-col lg:flex-row gap-7.5 lg:gap-6">
              {row.map((item, i) => (
                <div
                  key={i}
                  className={`w-full ${row.length < 3 ? "lg:w-99.25" : "lg:flex-1"} bg-white rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-8 lg:pt-8 lg:pl-8 lg:pr-10`}
                >
                  <div className="flex flex-col gap-6">
                    {item.icon && (
                      <Image
                        src={asset(item.icon)}
                        alt=""
                        width={42}
                        height={40}
                        className="shrink-0"
                      />
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[16px] font-normal leading-[1.4] text-azul">
                        {item.title}
                      </h3>
                      <p className="text-[14px] leading-[1.4] text-black">
                        {item.description}
                      </p>
                      {item.note && (
                        <p className="text-[14px] leading-[1.4] text-cinza">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {buttonText && (
          <a href={buttonHref} className="btn-laranja">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}

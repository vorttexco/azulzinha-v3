import Image from "next/image";
import { asset } from "@/lib/assets";

interface VantagemItem {
  icon: string;
  text: string;
}

const defaultVantagens: VantagemItem[] = [
  {
    icon: "/images/maquininhas-pro/icon-rapidez.svg",
    text: "Rapidez ao atendimento ao cliente",
  },
  {
    icon: "/images/maquininhas-pro/icon-mobilidade.svg",
    text: "Projetada para a mobilidade",
  },
  {
    icon: "/images/maquininhas-pro/icon-pagamento.svg",
    text: "Todas as opções de pagamento: mais de 40 bandeiras e vouchers para aumentar as suas vendas",
  },
  {
    icon: "/images/maquininhas-pro/icon-dados.svg",
    text: "Captura de dados, leitor de código de barras, assinatura eletrônica e GPS",
  },
  {
    icon: "/images/maquininhas-pro/icon-conectividade.svg",
    text: "Conectividade garantida",
  },
  {
    icon: "/images/maquininhas-pro/icon-seguranca.svg",
    text: "Segurança absoluta",
  },
];

interface VantagensSectionProps {
  title?: string;
  vantagens?: VantagemItem[];
}

export default function VantagensSection({
  title = "Quais são as vantagens?",
  vantagens = defaultVantagens,
}: VantagensSectionProps = {}) {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_50%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto pb-14 lg:pb-[110px] px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul lg:text-[32px] mb-6 lg:mb-14">
          {title}
        </h2>

        <div className="flex flex-col gap-6 lg:gap-[60px]">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
            {vantagens.slice(0, 3).map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-8 bg-white rounded-[12px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.08)] lg:w-[393px]"
              >
                <Image
                  src={asset(item.icon)}
                  alt=""
                  width={30}
                  height={30}
                  className="shrink-0"
                />
                <p className="text-[16px] font-normal leading-[1.4] text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
            {vantagens.slice(3, 6).map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-8 bg-white rounded-[12px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.08)] lg:w-[393px]"
              >
                <Image
                  src={asset(item.icon)}
                  alt=""
                  width={30}
                  height={30}
                  className="shrink-0"
                />
                <p className="text-[16px] font-normal leading-[1.4] text-black">
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

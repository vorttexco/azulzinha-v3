import Image from "next/image";
import { asset } from "@/lib/assets";

const services = [
  {
    icon: "/images/icone-antecipa 1.png",
    text: "Antecipação de Vendas",
    iconW: 36, iconH: 27,
    iconClass: "w-[36px] h-[27px]",
  },
  {
    icon: "/images/icone-pix 1.png",
    text: "Pix",
    iconW: 33, iconH: 33,
    iconClass: "w-[33px] h-[33px]",
  },
  {
    icon: "/images/icone-cel-home 1.png",
    text: "Recarga de Telefonia",
    iconW: 25, iconH: 30,
    iconClass: "w-[25px] h-[30px]",
  },
  {
    icon: "/images/icon-app 1.png",
    text: "App azulzinha aproxima",
    iconW: 31, iconH: 31,
    iconClass: "w-[31px] h-[31px]",
  },
  {
    icon: "/images/icon-link.png",
    text: "Link de pagamento",
    iconW: 24, iconH: 24,
    iconClass: "w-[24px] h-[24px]",
  },
  {
    icon: "/images/icon-money 3.png",
    text: "Pagamento Parcial",
    iconW: 34, iconH: 20,
    iconClass: "w-[34px] h-[20px]",
  },
];

export default function ServicosHomeSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#FFFFFF_50.07%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col items-center gap-6 lg:gap-[60px]">
        <div className="flex flex-col items-center gap-4 max-w-[840px]">
          <h2 className="section-title text-azul">
            Incremente seu negócio com serviços exclusivos ideais para você e seu estabelecimento
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center">
            Cliente azulzinha também pode antecipar o recebimento das vendas, transformar o celular em maquininha, vender por Pix, online e muito mais!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:gap-[32px] w-full">
          {services.map((service) => (
            <div
              key={service.text}
              className="flex items-center gap-8 h-[92px] rounded-[12px] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-6"
            >
              <Image
                src={asset(service.icon)}
                alt=""
                width={service.iconW}
                height={service.iconH}
                className={`shrink-0 ${service.iconClass} object-contain`}
                unoptimized
              />
              <p className="text-[16px] font-normal leading-[1.4] text-black text-left">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/maquininhas"
          className="inline-flex items-center justify-center gap-[10px] w-[206px] h-[44px] rounded-[6px] bg-[linear-gradient(177.34deg,#EDAC39_2.43%,#FC8F01_98%)] text-white text-[16px] font-normal hover:opacity-90 transition-opacity"
        >
          Solicite sua azulzinha
        </a>
      </div>
    </section>
  );
}

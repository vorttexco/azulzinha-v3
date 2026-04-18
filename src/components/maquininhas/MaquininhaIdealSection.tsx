import Image from "next/image";
import { asset } from "@/lib/assets";

interface Product {
  name: string;
  subtitle: string;
  features: string[];
  image: string;
  href: string;
  imageContained: boolean;
  manualHref?: string;
}

const products: Product[] = [
  {
    name: "Clover Flex",
    subtitle: "Para atender no balcão, na mesa ou em qualquer lugar",
    features: [
      "Tudo em um só dispositivo: faça pedidos, receba pagamentos e gerencie seu negócio em um só lugar;",
      "Mobilidade: elimine filas e aceite pagamentos no balcão, na mesa ou em qualquer lugar;",
      "Praticidade: conecte-se a outros dispositivos Clover e integre novas aplicações sempre que precisar.",
    ],
    image: "/images/maquininhas/product-clover-flex.png",
    href: "/clover",
    imageContained: false,
  },
  {
    name: "Clover Mini",
    subtitle: "Para ter um PDV perfeito para qualquer espaço",
    features: [
      "Tela touch: tela de 8\" sensível ao toque para autoatendimento e conferência da compra;",
      "Pagamentos simplificados: entrada para cartão e contactless na parte frontal para mais praticidade;",
      "Impressora integrada: emissão imediata de comprovantes impressos ou envio por e-mail e SMS.",
    ],
    image: "/images/maquininhas/product-clover-mini.png",
    href: "/clover",
    imageContained: true,
  },
  {
    name: "azulzinha pro",
    subtitle: "Para levar a maquininha até o cliente",
    features: [
      "Pagamento por aproximação (NFC);",
      "Conexão Wi-Fi e 3G;",
      "Bateria de longa duração.",
    ],
    image: "/images/maquininhas/product-azulzinha-pro.png",
    href: "/maquininhas/pro",
    manualHref: "/maquininhas/pro#manual-section",
    imageContained: false,
  },
  {
    name: "azulzinha aproxima",
    subtitle: "Para transformar um celular ou tablet em maquininha",
    features: [
      "Venda mais e onde quiser com o App azulzinha aproxima;",
      "Instale o aplicativo no seu celular ou tablet;",
      "Receba pagamentos por aproximação, Pix e carteiras digitais.",
    ],
    image: "/images/maquininhas/product-azulzinha-aproxima.png",
    href: "/azulzinha-aproxima",
    manualHref: "https://azulzinhadacaixa.com.br/midias/manual_azulzinha_aproxima.pdf",
    imageContained: false,
  },
  {
    name: "azulzinha smart",
    subtitle: "Para centralizar e simplificar a gestão financeira",
    features: [
      "Visão consolidada com integradoras de aplicativos (Mobility, Navs, Pagzilla, Pos Controle e Smart pos);",
      "Pagamento portátil Chip & PIN;",
      "Wi-Fi & Bluetooth;",
      "Bateria de longa duração.",
    ],
    image: "/images/maquininhas/product-azulzinha-smart.png",
    href: "/azulzinhasmart",
    manualHref: "https://azulzinhadacaixa.com.br/midias/azulzinhasmart.pdf",
    imageContained: false,
  },
  {
    name: "azulzinha TEF",
    subtitle: "Para negócios com grande volume de transações",
    features: [
      "Transferência eletrônica de fundos (TEF);",
      "Pagamento por aproximação (NFC);",
      "Conexão USB e Serial;",
      "Bateria de longa duração.",
    ],
    image: "/images/maquininhas/product-azulzinha-tef.png",
    href: "/maquininhas/tef",
    manualHref: "https://azulzinhadacaixa.com.br/midias/LO_Manual_Azulzinha_Tef_Lane_3000_23_MARC_23_v1.pdf",
    imageContained: false,
  },
];

export default function MaquininhaIdealSection() {
  return (
    <section id="ancora" className="w-full">
      {/* Section Title */}
      <div className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pt-14 lg:pt-20 pb-8 lg:pb-[60px]">
          <h2 className="section-title text-azul">
            A maquininha ideal para seu negócio
          </h2>
        </div>
      </div>

      {/* Product Rows */}
      {products.map((product, index) => {
        // Even index: white bg, image on right; Odd index: gray bg, image on left
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-white" : "bg-[#F4F4F4]";

        return (
          <div key={product.name} className={`w-full ${bgClass}`}>
            <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
              <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-10 lg:gap-[78px]`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul">
                      {product.name}
                    </h3>
                    <p className="text-[14px] lg:text-[16px] leading-[1.4] text-azul">
                      {product.subtitle}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[14px] lg:text-[16px] leading-[1.6] text-black"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <a href={product.href} className="btn-laranja">
                      Saiba mais
                    </a>
                    {product.manualHref && (
                      <a
                        href={product.manualHref}
                        target={product.manualHref.startsWith("http") ? "_blank" : undefined}
                        rel={product.manualHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="btn-laranja"
                      >
                        Baixe o manual
                      </a>
                    )}
                  </div>
                </div>

                {/* Product Image with rectangle card */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div
                    className={`relative w-[330px] h-[183px] lg:h-[334px] lg:w-[605px] bg-white rounded-[20px] shadow-[0px_4px_10px_0px_#00000014] flex items-center justify-center overflow-visible`}
                  >
                    <div
                      className={`relative w-[254px] lg:w-[466px] lg:h-[372px] h-[202px] border-none rounded-[10px] flex items-center justify-center ${product.imageContained ? "overflow-visible" : "overflow-visible"
                        }`}
                    >
                      <Image
                        src={asset(product.image)}
                        alt={product.name}
                        fill
                        className={product.imageContained ? "object-contain object-bottom" : "object-contain"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

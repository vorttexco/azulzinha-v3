import Image from "next/image";
import { asset } from "@/lib/assets";

const products = [
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
  },
];

export default function MaquininhaIdealSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        {/* Section Title */}
        <h2 className="section-title text-azul mb-8 lg:mb-[60px]">
          A maquininha ideal para seu negócio
        </h2>

        {/* Product Cards */}
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          {products.map((product, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={product.name}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-[78px]`}
              >
                {/* Product Image */}
                <div className="relative w-full lg:w-1/2 h-[250px] lg:h-[400px] flex items-center justify-center">
                  <div className="relative w-[200px] lg:w-[300px] h-full">
                    <Image
                      src={asset(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

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

                  <a href={product.href} className="btn-laranja self-start">
                    Comece agora
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

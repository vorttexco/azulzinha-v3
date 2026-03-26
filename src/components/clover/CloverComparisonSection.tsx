import Image from "next/image";
import { asset } from "@/lib/assets";

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductSpec {
  label: string;
  value: string;
}

interface CloverProduct {
  name: string;
  image: string;
  description: string;
  whyChooseTitle: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  ctaText: string;
}

const products: CloverProduct[] = [
  {
    name: "Clover Flex",
    image: "/images/product-clover-flex.png",
    description:
      "Receba pagamentos e gerencie seu negócio com flexibilidade e tenha todos os recursos na palma da mão com um checkout rápido e prático.",
    whyChooseTitle: "Por que escolher a Clover Flex?",
    features: [
      {
        title: "Segura",
        description: "Criptografia de ponta a ponta para proteger seus dados",
      },
      {
        title: "Completa",
        description:
          "Aceita Pix, QR Code, cartões (chip, tarja e aproximação), carteiras digitais e link de pagamento",
      },
      {
        title: "Sempre conectada",
        description:
          "Wi-Fi, 4G, 3G e 2G para um sinal estável onde você estiver",
      },
      {
        title: "Mobilidade sem preocupação",
        description:
          "Bateria de longa duração e recarga prática via base ou USB-C",
      },
      {
        title: "Mais comodidade",
        description: "Impressão de recibos e envio digital por SMS ou e-mail",
      },
      {
        title: "Rápida e confiável",
        description: "Processador Qualcomm Snapdragon™ e mais memória",
      },
    ],
    specs: [
      { label: "Tela", value: 'Colorida e sensível ao toque (5,99")' },
      {
        label: "Câmera",
        value: "Leitura de código de barras e QR Code (1D/2D)",
      },
      { label: "Segurança", value: "Proteção total com criptografia" },
      { label: "Acessório", value: "Capa de silicone para maior durabilidade" },
      { label: "Carregamento", value: "Recarga de bateria por indução" },
    ],
    ctaText: "Peça a sua Clover Flex",
  },
  {
    name: "Clover Mini",
    image: "/images/product-clover-mini.png",
    description:
      "Pequena no tamanho, gigante no desempenho, a Clover Mini é um PDV compacto que cabe em qualquer espaço, facilita a gestão do seu negócio e melhora a experiência dos seus clientes.",
    whyChooseTitle: "Por que escolher a Clover Mini?",
    features: [
      {
        title: "Segura",
        description: "Criptografia de ponta a ponta para proteger seus dados",
      },
      {
        title: "Completa",
        description:
          "Aceita Pix, QR Code, cartões (chip, tarja e aproximação), carteiras digitais e link de pagamento",
      },
      {
        title: "Sempre conectada",
        description:
          "Wi-Fi, 4G, 3G e 2G para um sinal estável onde você estiver",
      },
      {
        title: "Mais comodidade",
        description: "Impressão de recibos e envio digital por SMS ou e-mail",
      },
      {
        title: "Rápida e confiável",
        description: "Processador Qualcomm Snapdragon™ e mais memória",
      },
    ],
    specs: [
      { label: "Tela", value: 'Colorida e sensível ao toque (3,99")' },
      {
        label: "Câmera",
        value: "Leitura de código de barras e QR Code (1D/2D)",
      },
      { label: "Segurança", value: "Proteção total com criptografia" },
      { label: "Acessório", value: "Capa de silicone para maior durabilidade" },
      { label: "Carregamento", value: "Recarga de bateria por indução" },
    ],
    ctaText: "Peça a sua Clover Mini",
  },
];

function OrangeBullet() {
  return (
    <div className="w-[8px] h-[8px] rounded-full bg-laranja mt-[6px] shrink-0" />
  );
}

function ProductCard({ product }: { product: CloverProduct }) {
  return (
    <div className="flex-1 bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col mt-[140px] lg:mt-[160px]">
      {/* Product image - flutua acima do card com margem negativa */}
      <div className="relative w-full h-[280px] lg:h-[320px] -mt-[140px] lg:-mt-[160px] pointer-events-none">
        <Image
          src={asset(product.image)}
          alt={product.name}
          fill
          className="object-contain object-bottom"
        />
      </div>


      {/* Content */}
      <div className="flex flex-col gap-6 p-6 lg:p-8 flex-1">
        {/* Name + Description */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[22px] lg:text-[24px] font-bold leading-[1.3] text-azul">
            {product.name}
          </h3>
          <p className="text-[14px] lg:text-[16px] leading-[1.5] text-black">
            {product.description}
          </p>
        </div>

        {/* Why Choose - Features */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[16px] font-bold leading-[1.4] text-black">
            {product.whyChooseTitle}
          </h4>
          <div className="flex flex-col gap-3">
            {product.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <OrangeBullet />
                <div>
                  <span className="text-[14px] font-bold text-black">
                    {feature.title}
                  </span>
                  <br />
                  <span className="text-[14px] leading-[1.5] text-cinza">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ficha Técnica - always visible */}
        <div className="border-t border-[#E2E2E2] pt-6">
          <h4 className="text-[16px] font-bold leading-[1.4] text-black mb-4">
            Ficha Técnica
          </h4>
          <div className="flex flex-col gap-3">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex items-start gap-3">
                <OrangeBullet />
                <div>
                  <span className="text-[14px] font-bold text-black">
                    {spec.label}
                  </span>
                  <br />
                  <span className="text-[14px] leading-[1.5] text-cinza">
                    {spec.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="self-start rounded-[6px] px-[17px] py-[10px] text-[16px] text-white text-center cursor-pointer bg-linear-to-b from-laranja-claro to-laranja mt-auto"
        >
          {product.ctaText}
        </a>
      </div>
    </div>
  );
}

export default function CloverComparisonSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="text-[26px] lg:text-[38px] font-normal leading-[1.3] text-azul text-center mb-10 lg:mb-[60px]">
          Compare e escolha a sua Clover
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[31px] justify-center items-end overflow-visible">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

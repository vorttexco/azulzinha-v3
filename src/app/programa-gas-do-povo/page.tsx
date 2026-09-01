import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import HighlightsSection from "@/components/programa-gas-do-povo/HighlightsSection";
import VantagensSection from "@/components/programa-gas-do-povo/VantagensSection";
import BlueCta from "@/components/shared/BlueCta";
import CtaSection from "@/components/shared/CtaSection";
import ProdutosSection, { ProdutosSectionCard } from "@/components/shared/ProdutosSection";
import VideosSection from "@/components/programa-gas-do-povo/VideosSection";
import Footer from "@/components/shared/Footer";

const modelosGasDoPovo: ProdutosSectionCard[] = [
  {
    name: "azulzinha smart",
    description:
      "A maquininha de cartão para centralizar e simplificar a gestão financeira",
    image: "/images/programa-gas-do-povo/produto-smart.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-1.svg", text: "Compatível com Apps de PDV móvel;" },
      { icon: "/images/taxas-tarifas/icon-smart2.svg", text: "Controle de estoque;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Gestão de fluxo de caixa;" },
      { icon: "/images/taxas-tarifas/icon-smart-4.svg", text: "Pagamento portátil NFC, Chip & PIN;" },
      { icon: "/images/taxas-tarifas/icon-smart-5.svg", text: "Wi-Fi & Bluetooth;" },
      { icon: "/images/taxas-tarifas/icon-smart-6.svg", text: "Bateria de longa duração;" },
      { icon: "/images/taxas-tarifas/icon-smart-7.svg", text: "Impressora de bobina;" },
      { icon: "/images/taxas-tarifas/icon-smart-8.svg", text: "Use como maquininha convencional." },
    ],
    href: "/azulzinhasmart",
  },
  {
    name: "azulzinha aproxima",
    description:
      "Transforme o seu celular ou tablet em maquininha com o App da azulzinha",
    image: "/images/programa-gas-do-povo/produto-aproxima.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-4.svg", text: "Disponível para Android versão 12 ou superior;" },
      { icon: "/images/taxas-tarifas/icon-smart-4.svg", text: "Pagamento por aproximação (NFC);" },
      { icon: "/images/taxas-tarifas/icon-smart-5.svg", text: "Conexão Wi-Fi e 3G | 4G | 5G;" },
      { icon: "/images/taxas-tarifas/icon-smart-1.svg", text: "Aceita cartões por aproximação, carteiras digitais e Pix;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Envio de comprovante por SMS, e-mail ou WhatsApp;" },
      { icon: "/images/taxas-tarifas/icon-smart2.svg", text: "Relatório de vendas;" },
    ],
    href: "/azulzinha-aproxima",
  },
  {
    name: "azulzinha pro",
    description: "Para levar a maquininha de cartão até o seu cliente",
    image: "/images/programa-gas-do-povo/produto-pro.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-8.svg", text: "Terminal sem fio projetado para a mobilidade;" },
      { icon: "/images/taxas-tarifas/icon-smart-5.svg", text: "Conexão Wi-Fi e 3G;" },
      { icon: "/images/taxas-tarifas/icon-smart-6.svg", text: "Bateria de longa duração;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Captura de dados;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Leitor de código de barras;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Assinatura eletrônica;" },
      { icon: "/images/taxas-tarifas/icon-smart-7.svg", text: "Impressora de bobina;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "GPS." },
    ],
    href: "/maquininhas/pro",
  },
];

export default function ProgramaGasDoPovoPage() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Com a azulzinha, eu posso fazer parte do programa Gás do Povo!"
        description="Aceite benefícios e diversos meios de pagamento!"
        checkItems={[]}
        buttonText="Saiba mais"
        buttonHref="#highlights"
        buttonSubtext="Funcionalidade disponível na azulzinha smart, azulzinha pro e no App azulzinha aproxima"
        backgroundImage="/images/programa-gas-do-povo/hero-art.png"
        mobileBackgroundImage="/images/programa-gas-do-povo/hero-art-mobile.png"
        textColor="text-azul"
        overlayColor="white"
      />

      <HighlightsSection />

      <VantagensSection />

      <BlueCta
        title="azulzinha aproxima é alternativa sem aluguel, direto no seu celular ou tablet"
        description="Receba transações do Programa Gás do Povo por aproximação. A azulzinha aproxima transforma o seu celular ou tablet em maquininha e você pode receber pagamentos do Programa Gás do Povo por aproximação, de forma prática e segura."
        buttonText="Clique aqui para saber mais"
        buttonHref="/azulzinha-aproxima"
      />

      <ProdutosSection
        title="A azulzinha tem a solução ideal para você"
        subtitle="Conheça e compare os modelos da maquininha da CAIXA disponíveis para revendas de gás"
        products={modelosGasDoPovo}
        buttonText="Fale com seu Gerente PJ CAIXA"
        buttonHref="/peca-azulzinha"
      />

      <VideosSection />

      <CtaSection
        title="Com a azulzinha da CAIXA você pode muito mais!"
        description="Fale com seu Gerente PJ CAIXA ou preencha o formulário para receber uma oferta para seu negócio."
        buttonText="Peça já a sua azulzinha"
        buttonHref="/peca-azulzinha"
        image="/images/programa-gas-do-povo/cta-formulario.png"
        imageAlt="Maquininha azulzinha sobre bancada"
      />

      <Footer />
    </main>
  );
}

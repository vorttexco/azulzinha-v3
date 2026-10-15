import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import OfertaConditionsSection from "@/components/oferta-especial-azulzinha-da-caixa/OfertaConditionsSection";
import OfertaRatesSection from "@/components/oferta-especial-azulzinha-da-caixa/OfertaRatesSection";
import CircularFeaturesSection from "@/components/shared/CircularFeaturesSection";
import ProdutosSection, {
  ProdutosSectionCard,
} from "@/components/shared/ProdutosSection";
import FormSection from "@/components/shared/FormSection";
import Footer from "@/components/shared/Footer";

const modelosOfertaEspecial: ProdutosSectionCard[] = [
  {
    name: "azulzinha smart",
    description:
      "A maquininha de cartão para centralizar e simplificar a gestão financeira",
    image: "/images/taxas-tarifas/maquininha-smart.png",
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
    name: "azulzinha TEF",
    description:
      "A azulzinha da CAIXA para movimentar grandes volumes",
    image: "/images/taxas-tarifas/maquininha-tef.png",
    features: [
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Transferência eletrônica de fundos (TEF);" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Fácil integração com automação comercial;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Conciliação automática de vendas;" },
      { icon: "/images/taxas-tarifas/icon-smart-3.svg", text: "Conexão USB e Serial;" },
      { icon: "/images/taxas-tarifas/icon-smart-6.svg", text: "Bateria de longa duração." },
    ],
    href: "/maquininhas/tef",
  },
  {
    name: "azulzinha pro",
    description: "Para levar a maquininha de cartão até o seu cliente",
    image: "/images/taxas-tarifas/maquininha-pro.png",
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

export const metadata: Metadata = pageMetadata({
  title: "Sua azulzinha com taxas reduzidas | azulzinha da CAIXA",
  description:
    "Peça sua azulzinha com aluguel zero e taxas especiais para o seu ramo de atividade. Aproveite a promoção por tempo limitado! Clique e saiba mais.",
  path: "/oferta-especial-azulzinha-da-caixa",
});

export default function OfertaEspecialPage() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Com azulzinha você pode muito mais!"
        description="Economize em taxas e melhore suas vendas."
        checkItems={[]}
        buttonText="Saiba mais"
        buttonHref="#formulario"
        buttonSubtext="*Somente para clientes que contratarem a antecipação automática. A taxa de crédito varia conforme o faturamento. Consulte as condições com seu gerente."
        backgroundImage="/images/oferta-especial-azulzinha-da-caixa/hero.png"
        mobileBackgroundImage="/images/oferta-especial-azulzinha-da-caixa/hero-mobile.png"
        mobileImageClassName="object-top"
        showOverlay={false}
      />

      <OfertaConditionsSection />

      <OfertaRatesSection />

      <CircularFeaturesSection
        title="Com azulzinha seu negócio pode muito mais"
        subtitle="Conheça as vantagens que só a maquininha da CAIXA pode oferecer para você"
        bgColor="bg-white"
        features={[
          {
            icon: "/images/programa-gas-do-povo/icon-nfc.svg",
            text: "Venda com aproximação (NFC), QR Code, chip e tarja magnética",
          },
          {
            icon: "/images/programa-gas-do-povo/icon-cartao.svg",
            text: "Aceite mais de 40 bandeiras de cartão, vouchers, carteiras digitais e Pix",
          },
          {
            icon: "/images/programa-gas-do-povo/icon-seguranca.svg",
            text: "Transacione com proteção antifraude e segurança garantida",
          },
          {
            icon: "/images/programa-gas-do-povo/icon-suporte.svg",
            text: "Conte com nosso suporte técnico disponível 24 horas por dia",
          },
        ]}
      />

      <ProdutosSection
        title="Acelere o seu sucesso com a solução ideal"
        subtitle="Conheça e compare os modelos de azulzinha:"
        products={modelosOfertaEspecial}
      />

      <FormSection
        id="formulario"
        title="Solicite agora a sua azulzinha da CAIXA"
      />

      <Footer />
    </main>
  );
}

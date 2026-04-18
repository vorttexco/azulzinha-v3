import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BeneficiosGridSection from "@/components/shared/BeneficiosGridSection";
import TabelaIsencaoSection from "@/components/taxas-tarifas/TabelaIsencaoSection";
import CalculadoraSection from "@/components/taxas-tarifas/CalculadoraSection";
import ProdutosSection from "@/components/taxas-tarifas/ProdutosSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

export default function TaxasTarifasPage() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Taxas e tarifas"
        description="Conheça as condições da azulzinha e peça já a sua."
        checkItems={[]}
        buttonText="Saiba mais"
        backgroundImage="/images/taxas-tarifas/hero-bg.png"
      />

      <FeatureSection
        title="Empreendedor, com a azulzinha você conta com taxas sob medida para crescer"
        paragraphs={[
          "Conheça as nossas taxas e tarifas na tabela a seguir e solicite a sua azulzinha da CAIXA!",
          "Se você já é cliente azulzinha, descubra no vídeo como gerenciar suas taxas e tarifas de maneira prática e rápida.",
          "Vamos juntos?",
        ]}
        image="/images/taxas-tarifas/feature-image.png"
        imageAlt="Casal empreendedor"
        hideCard
        cardWidth="608px"
        cardHeight="355px"
        cardBorderRadius="rounded-[20px]"
        imageBorderRadius="rounded-[20px]"
      />

      {/* Taxas e condições de vendas - cards sem ícone */}
      <BeneficiosGridSection
        title="Taxas e condições de vendas e antecipação de recebíveis"
        subtitle="Os valores podem variar de acordo com o modelo de maquininha, perfil do seu estabelecimento e negociação comercial."
        bgColor="bg-[#F7F7F7]"
        paddingClassName="py-14 lg:py-20"
        buttonText="Escolha a sua azulzinha"
        beneficios={[
          {
            title: "Aluguel mensal",
            description: "A partir de R$ 19,90*",
            note: "*Conforme o modelo do equipamento",
          },
          {
            title: "Débito",
            description: "A partir de 0,81%",
          },
          {
            title: "Crédito à vista",
            description: "A partir de 1,27%",
          },
          {
            title: "Crédito parcelado 2x a 6x",
            description: "A partir de 1,48%",
          },
          {
            title: "Crédito parcelado 7x a 12x",
            description: "A partir de 1,92%",
          },
          {
            title: "Antecipação de vendas",
            description: "A partir de 1,87%*",
            note: "*Conforme o modelo do equipamento",
          },
        ]}
      />

      {/* Vantagens - cards com ícone */}
      <BeneficiosGridSection
        title="Nossas vantagens são para quem quer muito mais"
        subtitle="Descubra todos os benefícios para o seu negócio."
        bgColor="bg-white"
        paddingClassName="py-14 lg:py-20"
        buttonText="Peça a sua azulzinha"
        buttonHref="/peca-azulzinha"
        beneficios={[
          {
            icon: "/images/taxas-tarifas/icon-benefit-1.svg",
            title: "Opções diferenciadas de aluguel",
            description:
              "Aproveite as condições de contratação com aluguel zero",
          },
          {
            icon: "/images/taxas-tarifas/icon-benefit-2.svg",
            title: "Taxas reduzidas no Grupo Comercial",
            description:
              "Melhore suas taxas agrupando estabelecimentos do mesmo ramo",
          },
          {
            icon: "/images/taxas-tarifas/icon-benefit-3.svg",
            title: "Oportunidades de faturar",
            description:
              "Gere links de pagamento e use o App azulzinha aproxima sem taxa extra",
          },
          {
            icon: "/images/taxas-tarifas/icon-benefit-4.svg",
            title: "Apoio para empreender",
            description:
              "Antecipe suas vendas com recebimento em até 1 dia útil",
          },
          {
            icon: "/images/taxas-tarifas/icon-benefit-5.svg",
            title: "Condições para negociar",
            description:
              "Inclua outras maquininhas na antecipação com taxas especiais",
          },
          {
            icon: "/images/taxas-tarifas/icon-benefit-6.svg",
            title: "Recursos para gerenciar",
            description:
              "Consulte suas taxas via App ou Portal sempre que precisar",
          },
        ]}
      />

      <TabelaIsencaoSection />

      <CalculadoraSection />

      <ProdutosSection />

      <CtaSection
        title="Com a azulzinha da CAIXA você pode muito mais!"
        description="Receba uma oferta personalizada para seu negócio, com as melhores taxas e condições que só a CAIXA pode oferecer para você."
        buttonText="Peça a sua azulzinha"
        buttonHref="/peca-azulzinha"
        image="/images/taxas-tarifas/cta-image.png"
        imageAlt="Mulher empreendedora com azulzinha"
      />

      <Footer />
    </main>
  );
}

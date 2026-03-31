import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import ModosSection from "@/components/antecipacao-de-vendas/ModosSection";
import BenefitsShowcaseSection from "@/components/shared/BenefitsShowcaseSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";
import { asset } from "@/lib/assets";

const vantagensCards = [
  {
    icon: asset("/images/antecipacao-de-vendas/icon-flexibilidade.svg"),
    title: "Flexibilidade",
    text: "Antecipe o quanto quiser, quando quiser. Escolha bandeiras e transações de acordo com a sua preferência.",
  },
  {
    icon: asset("/images/antecipacao-de-vendas/icon-transparencia.svg"),
    title: "Transparência",
    text: "Simule valores e taxas antes de escolher a melhor opção para o seu negócio.",
  },
  {
    icon: asset("/images/antecipacao-de-vendas/icon-simplicidade.svg"),
    title: "Simplicidade e rapidez",
    text: "O processo de antecipação é feito em segundos, seja pela maquininha, App da azulzinha ou Portal da azulzinha.",
  },
];

export default function AntecipacaoDeVendas() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Antecipação de Vendas"
        description="Com a azulzinha da CAIXA você antecipa as vendas feitas com cartão e equilibra o fluxo de caixa."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/antecipacao-de-vendas/hero-bg.png"
      />
      <ModosSection />
      <BenefitsShowcaseSection
        title="Vantagens da antecipação Caixa"
        description="Com a solução de antecipação da CAIXA, você tem flexibilidade para escolher quando receber, total transparência nas taxas e agilidade para manter o caixa do seu negócio sempre saudável."
        image="/images/antecipacao-de-vendas/vantagens-bg.png"
        imageAlt="Vantagens da antecipação"
        cards={vantagensCards}
        showBrandLogos={false}
        showLink={false}
        bgColor="bg-[#F4F4F4]"
      />
      <CtaSection
        title="Contrate agora mesmo pelo App ou Portal da azulzinha"
        description=""
        buttonText="App da azulzinha"
        button2Text="Portal da Azulzinha"
        image="/images/antecipacao-de-vendas/cta-photo.png"
        imageAlt="CTA Antecipação de Vendas"
      />
      <Footer />
    </main>
  );
}

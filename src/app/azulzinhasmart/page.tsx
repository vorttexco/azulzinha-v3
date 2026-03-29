import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SimplifiqueSection from "@/components/azulzinha-smart/SimplifiqueSection";
import ExploreSection from "@/components/azulzinha-smart/ExploreSection";
import SimpleVideoSection from "@/components/SimpleVideoSection";
import IntegradorasSection from "@/components/azulzinha-smart/IntegradorasSection";
import FuncoesSection from "@/components/azulzinha-smart/FuncoesSection";
import VantagensSmartSection from "@/components/azulzinha-smart/VantagensSmartSection";
import ImprevistoSection from "@/components/azulzinha-smart/ImprevistoSection";
import MetodosPagamentoSection from "@/components/azulzinha-smart/MetodosPagamentoSection";
import BandeirasSection from "@/components/azulzinha-smart/BandeirasSection";
import VideoPlanetaSection from "@/components/azulzinha-smart/VideoPlanetaSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function AzulzinhaSmartPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="azulzinha smart"
        description="Nossa azulzinha mais rápida, moderna, eficiente e com muito mais funcionalidades para multiplicar seu sucesso."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/azulzinha-smart/hero-bg.png"
      />
      <SimplifiqueSection />
      <ExploreSection />
      <SimpleVideoSection
        title="Tudo o que você precisa saber antes de ter a sua"
        description="Assista ao vídeo para conhecer as vantagens da azulzinha smart e começar a centralizar suas vendas e gerenciar seu negócio de forma mais simples e inteligente que nunca!"
        thumbnail="/images/azulzinha-smart/video-thumbnail-1.png"
      />
      <IntegradorasSection />
      <FuncoesSection />
      <VantagensSmartSection />
      <ImprevistoSection />
      <MetodosPagamentoSection />
      <BandeirasSection />
      <VideoPlanetaSection />
      <CtaSection
        title="Este modelo de maquininha tem tudo a ver com o seu negócio?"
        description=""
        buttonText="Peça já sua azulzinha"
        image="/images/azulzinha-smart/cta-market-bg.png"
        imageAlt="Azulzinha Smart CTA"
      />
      <Footer />
    </main>
  );
}

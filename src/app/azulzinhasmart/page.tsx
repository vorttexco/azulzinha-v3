import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import SimplifiqueSection from "@/components/azulzinha-smart/SimplifiqueSection";
import SimpleVideoSection from "@/components/shared/SimpleVideoSection";
import IntegradorasSection from "@/components/azulzinha-smart/IntegradorasSection";
import FuncoesSection from "@/components/azulzinha-smart/FuncoesSection";
import VantagensSmartSection from "@/components/azulzinha-smart/VantagensSmartSection";
import ImprevistoSection from "@/components/azulzinha-smart/ImprevistoSection";
import MetodosPagamentoSection from "@/components/azulzinha-smart/MetodosPagamentoSection";
import BandeirasSection from "@/components/azulzinha-smart/BandeirasSection";
import VideoPlanetaSection from "@/components/azulzinha-smart/VideoPlanetaSection";
import CategorizedSection from "@/components/shared/CategorizedSection";
import appsData from "@/app/azulzinhasmart/appsData";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";
import BlueCta from "@/components/shared/BlueCta";

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
      <CategorizedSection
        variant="cardlist"
        data={appsData}
        title="Explore novas opções de aplicativos para otimizar e expandir seu negócio"
        subtitle="Escolha o aplicativo ideal para seu negócio e contrate com facilidade"
        searchPlaceholder="Buscar pelo nome"
      />

      <SimpleVideoSection
        title="Tudo o que você precisa saber antes de ter a sua"
        description="Assista ao vídeo para conhecer as vantagens da azulzinha smart e começar a centralizar suas vendas e gerenciar seu negócio de forma mais simples e inteligente que nunca!"
        thumbnail="/images/azulzinha-smart/video-thumbnail-1.png"
      />
      <IntegradorasSection />
      <FuncoesSection />
      {/* Blue CTA */}
      <BlueCta
        title="Sua azulzinha smart acabou de chegar?"
        buttonText="Leia o manual"
        icon="/images/azulzinha-smart/book-icon.png"
        iconAlt="Manual"
      />
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

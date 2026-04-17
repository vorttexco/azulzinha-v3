import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import CloverDiscoverSection from "@/components/clover/CloverDiscoverSection";
import CloverFeaturesSection from "@/components/clover/CloverFeaturesSection";
import CloverComparisonSection from "@/components/clover/CloverComparisonSection";
import CloverAppsSection from "@/components/clover/CloverAppsSection";
import FullImageSection from "@/components/shared/FullImageSection";
import VideoSection from "@/components/shared/VideoSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

export default function CloverPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Clover"
        description="Praticidade na gestão e uma experiência de compra que encanta seus clientes"
        checkItems={[]}
        buttonText="Conheça"
        buttonHref="#clover-discover"
        backgroundImage="/images/clover/hero-bg-1f8314.png"
      />
      <CloverDiscoverSection />
      <CloverFeaturesSection />
      <CloverComparisonSection />
      <CloverAppsSection />
      <FullImageSection />
      <VideoSection href="https://www.youtube.com/@azulzinhadaCAIXA" />
      <CtaSection
        title="Descubra o poder do mundo Clover com a azulzinha"
        description="Preencha o formulário e receba uma oferta sob medida com as soluções da Clover e as condições exclusivas que só a CAIXA tem para o seu negócio."
        buttonText="Peça a sua Clover"
        buttonHref="/peca-azulzinha"
        image="/images/clover/cta-photo.png"
        imageAlt="Clover CTA"
      />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CloverDiscoverSection from "@/components/clover/CloverDiscoverSection";
import CloverFeaturesSection from "@/components/clover/CloverFeaturesSection";
import CloverComparisonSection from "@/components/clover/CloverComparisonSection";
import CloverAppsSection from "@/components/clover/CloverAppsSection";
import CloverFullImageSection from "@/components/clover/CloverFullImageSection";
import CloverVideoSection from "@/components/clover/CloverVideoSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function CloverPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Clover"
        description="Praticidade na gestão e uma experiência de compra que encanta seus clientes"
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/clover/hero-bg-1f8314.png"
      />
      <CloverDiscoverSection />
      <CloverFeaturesSection />
      <CloverComparisonSection />
      <CloverAppsSection />
      <CloverFullImageSection />
      <CloverVideoSection />
      <CtaSection
        title="Descubra o poder do mundo Clover com a azulzinha"
        description="Preencha o formulário e receba uma oferta sob medida com as soluções da Clover e as condições exclusivas que só a CAIXA tem para o seu negócio."
        buttonText="Peça a sua Clover"
        image="/images/clover/cta-photo.png"
        imageAlt="Clover CTA"
      />
      <Footer />
    </main>
  );
}

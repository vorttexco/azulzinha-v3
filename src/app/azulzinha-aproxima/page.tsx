import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import AproximaSection from "@/components/azulzinha-aproxima/AproximaSection";
import PaymentMethodsSection from "@/components/azulzinha-aproxima/PaymentMethodsSection";
import VrBenefitsSection from "@/components/azulzinha-aproxima/VrBenefitsSection";
import ProductFeaturesSection from "@/components/azulzinha-aproxima/ProductFeaturesSection";
import HabilitarSection from "@/components/azulzinha-aproxima/HabilitarSection";
import CtaSection from "@/components/shared/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";

export default function AzulzinhaAproximaPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="azulzinha aproxima"
        description="Instale o App e venda muito mais por aproximação, carteiras digitais e Pix no seu celular ou tablet."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/azulzinha-aproxima/hero-bg.png"
      />
      <AproximaSection />
      <PaymentMethodsSection />
      <VrBenefitsSection />
      <ProductFeaturesSection />
      <HabilitarSection />
      <CtaSection
        title="Já habilitou azulzinha aproxima?"
        description=""
        buttonText="Leia o manual"
        image="/images/azulzinha-aproxima/cta-photo.png"
        imageAlt="Azulzinha aproxima CTA"
      />
      <FaqSection />
      <Footer />
    </main>
  );
}

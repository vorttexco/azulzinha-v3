import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import CardsCarouselSection from "@/components/shared/CardsCarouselSection";
import PossibilitiesSection from "@/components/shared/PossibilitiesSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsShowcaseSection from "@/components/shared/BenefitsShowcaseSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection buttonHref="/peca-azulzinha" />
      <CardsCarouselSection />
      <PossibilitiesSection />
      <ProductsSection />
      <BenefitsShowcaseSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

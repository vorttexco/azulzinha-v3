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
      <HeroSection
        buttonHref="/peca-azulzinha"
        checkItems={[]}
        textColor="text-azul"
        overlayColor="white"
        mobileBackgroundImage="/images/hero-gas-home_mobile.png"
        description={<>Aceite benefícios e diversos<br />meios de pagamento!</>}
        buttonSubtext={<>Funcionalidade disponível na azulzinha smart,<br className="hidden lg:block" /> azulzinha pro e no App azulzinha aproxima</>}
      />
      <CardsCarouselSection />
      <PossibilitiesSection />
      <ProductsSection />
      <BenefitsShowcaseSection
        cardClassName="flex items-center gap-3 rounded-[12px] bg-white p-4 shadow-[0_4px_10px_rgba(0,0,0,0.08)] h-[92px]"
        cardsGridClassName="lg:-mt-[60px] grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10"
        contentClassName="w-full lg:w-1/2 flex flex-col justify-center lg:pb-[60px]"
      />
      <TestimonialsSection />
      <CtaSection buttonHref="/peca-azulzinha" />
      <Footer />
    </main>
  );
}

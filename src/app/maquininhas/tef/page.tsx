import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import TefSection from "@/components/maquininhas-tef/TefSection";
import VantagensSection from "@/components/shared/VantagensSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

export default function MaquininhasTefPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="azulzinha TEF"
        description="Integre suas vendas para uma experiência de compra ágil, conciliação segura e gestão eficaz do seu negócio."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/maquininhas-tef/hero-bg.png"
      />
      <TefSection />
      <VantagensSection />
      <CtaSection
        title="Dúvidas?"
        description="Acesse nossa página de ajuda para obter mais informações sobre a azulzinha"
        buttonText="Clique aqui"
        image="/images/maquininhas-tef/cta-photo.png"
        imageAlt="Dúvidas azulzinha TEF"
      />
      <Footer />
    </main>
  );
}

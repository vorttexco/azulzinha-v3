import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function GestaoVendasPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Gestão de Vendas"
        description="No App ou no Portal, gerencie seu negócio e solicite mais serviços com apenas um clique."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/hero-backgrounds/gestao-de-vendas.png"
      />
      <FeatureSection
        title="Aplicativo da Azulzinha"
        paragraphs={[
          "O App da azulzinha é um canal online que oferece informações para você realizar a gestão do seu negócio quando e onde quiser.",
          "Gestão das suas vendas de forma simples, rápida e segura.",
        ]}
        image="/images/gestao-de-vendas/gestao-discover.png"
        imageAlt="Aplicativo da Azulzinha"
        imageWidth="333px"
        imageHeight="592px"
        imageWidthMobile="240px"
        imageHeightMobile="380px"
        buttonText="Saiba mais"
        buttonHref="#"
      />
      <Footer />
    </main>
  );
}

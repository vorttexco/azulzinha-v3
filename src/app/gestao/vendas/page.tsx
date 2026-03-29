import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
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
        image="/images/gestao-de-vendas/celular-3.png"
        imageAlt="Aplicativo da Azulzinha"
        imageWidth="333px"
        imageHeight="592px"
        imageWidthMobile="240px"
        imageHeightMobile="380px"
        buttonText="Saiba mais"
        buttonHref="#"
      />
      <FeatureSection
        title="Portal da Azulzinha"
        paragraphs={[]}
        listItems={[
          "Tenha uma visão clara das suas vendas e pagamentos",
          "Receba suas vendas de forma antecipada",
          "Gerencie o seu negócio com um simples acesso",
        ]}
        image="/images/gestao-de-vendas/laptop_azulzinha1.png"
        imageAlt="Portal da Azulzinha"
        imageWidth="702px"
        imageHeight="438px"
        cardWidth="605px"
        cardHeight="422px"
        buttonText="Saiba mais"
        buttonHref="#"
        bgColor="bg-cinza-claro"
        reverse
      />
      <Footer />
    </main>
  );
}

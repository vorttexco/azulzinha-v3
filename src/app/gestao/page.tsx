import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import Footer from "@/components/shared/Footer";

export default function GestaoVendasPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Gestão de Vendas"
        description={<>No App ou no Portal, gerencie seu negócio<br />e solicite mais serviços com apenas um clique.</>}
        checkItems={[]}
        buttonText="Conheça"
        buttonHref="#dobra"
        mobileBackgroundImage="/images/hero-backgrounds/gestao-de-vendas.png"
        mobileImageClassName="object-[40%_25%]"
        backgroundImage="/images/hero-backgrounds/gestao-de-vendas.png"
      />
      <div id="dobra" />
      <FeatureSection
        title="Aplicativo da Azulzinha"
        paragraphs={[
          "O App da azulzinha é um canal online que oferece informações para você realizar a gestão do seu negócio quando e onde quiser.",
          <span key="destaque" className="text-laranja font-bold">
            Gestão das suas vendas de forma simples, rápida e segura.
          </span>,
        ]}
        image="/images/gestao-de-vendas/celular-3.png"
        imageAlt="Aplicativo da Azulzinha"
        imageWidth="333px"
        imageHeight="592px"
        imageWidthMobile="240px"
        imageHeightMobile="380px"
        buttonText="Saiba mais"
        buttonHref="/app"
      />
      <FeatureSection
        title="Portal da Azulzinha"
        paragraphs={[
          "O Portal da azulzinha promove informações, ferramentas e serviços para o gerenciamento e controle do seu estabelecimento sobre as operações efetuadas com cartões.",
          <span key="destaque" className="text-laranja font-bold">
            Controle suas vendas em um único lugar.
          </span>,
        ]}
        image="/images/gestao-de-vendas/laptop_azulzinha1.png"
        imageAlt="Portal da Azulzinha"
        imageWidth="702px"
        imageHeight="438px"
        cardWidth="605px"
        cardHeight="422px"
        buttonText="Saiba mais"
        buttonHref="/portal"
        bgColor="bg-cinza-claro"
        reverse
      />
      <Footer />
    </main>
  );
}

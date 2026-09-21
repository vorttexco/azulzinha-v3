import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FormSection from "@/components/suaazulzinha/FormSection";
import MachinesCompareSection from "@/components/contrate-a-azulzinha/MachinesCompareSection";
import VantagensEmpreenderSection from "@/components/contrate-a-azulzinha/VantagensEmpreenderSection";
import BandeirasSection from "@/components/shared/BandeirasSection";
import SolutionsTabsSection from "@/components/contrate-a-azulzinha/SolutionsTabsSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = pageMetadata({
  title: "azulzinha: a maquininha de cartão ideal para seu negócio | azulzinha da CAIXA",
  description:
    "Conheça os modelos das maquininhas da CAIXA, seus benefícios e serviços disponíveis! Clique e escolha a azulzinha ideal para seu negócio!",
  path: "/contrate-a-azulzinha",
});

export default function ContrateAAzulzinhaPage() {
  return (
    <main>
      <Navbar />
      <div id="conversao">
        <HeroSection
          title={
            <>
              Com azulzinha você pode{" "}
              <span className="text-laranja">muito mais</span>!
            </>
          }
          description="Preencha o formulário e receba uma proposta sob medida para o seu negócio."
          checkItems={[]}
          buttonText="Peça já a sua"
          buttonHref="#form"
          backgroundImage="/images/contrate-a-azulzinha/hero-bg.png"
          mobileBackgroundImage="/images/contrate-a-azulzinha/hero-bg.png"
          mobileImageClassName="object-[70%_25%]"
        />
        <FormSection
          id="form"
          title="Peça já a sua!"
          subtitle="Preencha o formulário e receba uma proposta sob medida para o seu negócio."
        />
      </div>
      <MachinesCompareSection />
      <VantagensEmpreenderSection />
      <BandeirasSection
        title="Ao ativar sua azulzinha, você já pode aceitar os principais cartões e carteiras digitais"
        description=""
        bgColor="bg-white"
        fadeClassName="bg-[linear-gradient(0deg,#FFFFFF_62%,rgba(255,255,255,0)_100%)]"
      />
      <SolutionsTabsSection />
      <CtaSection
        title="Com azulzinha o seu negócio pode muito mais"
        description="Conecte-se a mundo de soluções que só a CAIXA pode oferecer para apoiar sua empresa."
        buttonText="Peça já a sua azulzinha"
        buttonHref="#form"
        image="/images/maquininhas/cta-bg.png"
        imageAlt="Peça já a sua azulzinha"
      />
      <Footer />
    </main>
  );
}

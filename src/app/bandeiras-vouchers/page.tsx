import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BandeirasSection from "@/components/shared/BandeirasSection";
import BlueCta from "@/components/shared/BlueCta";
import FeatureSection from "@/components/shared/FeatureSection";
import FaqBandeirasSection from "@/components/bandeiras-vouchers/FaqBandeirasSection";
import Footer from "@/components/shared/Footer";

export default function BandeirasVouchers() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Bandeiras, Vouchers e Carteiras Digitais"
        description="Conte com a maior rede de aceitação do mercado para oferecer ao seu cliente."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/hero-backgrounds/bandeiras-vouchers.png"
      />
      <BandeirasSection />
      <BlueCta
        title="Novidade! Você sabia que já pode receber pagamentos com VR Benefícios na sua azulzinha?"
        buttonText="Baixe o manual"
        icon="/images/bandeiras-vouchers/logo-vr-cta.png"
        iconAlt="VR Benefícios"
        sectionClassName="bg-[#FAFAFA]"
      />
      <FeatureSection
        title="Como aceitar os principais vouchers de benefícios na azulzinha"
        paragraphs={[
          "Quer aceitar os principais vouchers do mercado? A azulzinha da CAIXA também já vem pronta para você diversificar as experiências de pagamento para seus clientes!",
          "Basta credenciar seu estabelecimento diretamente com cada bandeira que você quer aceitar.",
          "Selecione abaixo as bandeiras que você pode habilitar na azulzinha e siga o passo a passo de cada uma para fazer a solicitação.",
        ]}
        image="/images/bandeiras-vouchers/maquina-24d507.png"
        imageAlt="Ilustração como aceitar vouchers"
        imageWidth="723px"
        imageHeight="489px"
        cardWidth="605px"
        cardHeight="398px"
        cardBorderRadius="rounded-[10px]"
        bgColor="bg-white"
      />
      <FaqBandeirasSection />
      <Footer />
    </main>
  );
}

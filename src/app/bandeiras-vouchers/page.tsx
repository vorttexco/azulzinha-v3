import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BandeirasSection from "@/components/bandeiras-vouchers/BandeirasSection";
import BlueCta from "@/components/shared/BlueCta";
import ComoAceitarSection from "@/components/bandeiras-vouchers/ComoAceitarSection";
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
        backgroundImage="/images/bandeiras-vouchers/hero-bg-72b5d7.png"
        overlayImage="/images/bandeiras-vouchers/bandeiras-voucher-overlay.png"
      />
      <BandeirasSection />
      <BlueCta
        title="Novidade! Você sabia que já pode receber pagamentos com VR Benefícios na sua azulzinha?"
        buttonText="Baixe o manual"
        icon="/images/bandeiras-vouchers/logo-vr-cta.png"
        iconAlt="VR Benefícios"
        sectionClassName="bg-[#FAFAFA]"
      />
      <ComoAceitarSection />
      <FaqBandeirasSection />
      <Footer />
    </main>
  );
}

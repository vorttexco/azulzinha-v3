import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import AutonomiaSection from "@/components/maquininhas-pro/AutonomiaSection";
import VantagensSection from "@/components/shared/VantagensSection";
import ModelosSection from "@/components/maquininhas-pro/ModelosSection";
import VideoSection from "@/components/shared/VideoSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

export default function MaquininhasProPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="azulzinha pro"
        description="Nossa azulzinha mais prática e sem fio, ideal para levar até o cliente e agilizar o atendimento."
        checkItems={[]}
        buttonText="Conheça"
        buttonHref="#autonomia-pro"
        backgroundImage="/images/maquininhas-pro/hero-bg.png"
      />
      <AutonomiaSection />
      <VantagensSection />
      <ModelosSection />
      <VideoSection
        title="Assista aos vídeos sobre o funcionamento da azulzinha pro"
        mainVideoImage="/images/maquininhas-pro/video-main.png"
        mainVideoTitle="Como fazer vendas no débito e crédito"
        backgroundColor="bg-[#F7F7F7]"
        videos={[
          {
            title: "Como fazer vendas no débito e crédito",
            thumbnail: "/images/maquininhas-pro/video-thumb-1.png",
          },
          {
            title: "Como fazer vendas parceladas",
            thumbnail: "/images/maquininhas-pro/video-thumb-2.png",
          },
          {
            title: "Como conectar sua azulzinha pro no Wi-fi",
            thumbnail: "/images/maquininhas-pro/video-thumb-3.png",
          },
        ]}
      />
      <CtaSection
        title="Dúvidas?"
        description="Acesse nossa página de ajuda para obter mais informações sobre a azulzinha"
        buttonText="Clique aqui"
        buttonHref="/ajuda"
        image="/images/maquininhas-pro/cta-photo.png"
        imageAlt="Dúvidas azulzinha"
      />
      <Footer />
    </main>
  );
}

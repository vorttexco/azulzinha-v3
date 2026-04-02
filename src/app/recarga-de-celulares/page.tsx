import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import OfertaRecargaSection from "@/components/recarga-de-celulares/OfertaRecargaSection";
import BlueCta from "@/components/shared/BlueCta";
import Footer from "@/components/shared/Footer";

export default function RecargaDeCelulares() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Recarga de Telefonia"
        description="Habilite o serviço sem custo na sua maquininha e tenha uma oportunidade extra de receita."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/recarga-de-celulares/hero-bg.png"
      />

      <OfertaRecargaSection />

      <BlueCta
        title={"Conheça também as soluções\npara vendas online da azulzinha"}
        buttonText="Saiba mais"
        sectionClassName="bg-[#FAFAFA]"
      />

      <Footer />
    </main>
  );
}

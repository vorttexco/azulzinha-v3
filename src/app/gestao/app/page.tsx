import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import Footer from "@/components/shared/Footer";

export default function GestaoAppPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="App da azulzinha"
        description="Controle suas vendas, antecipe recebíveis, crie links de pagamento e muito mais"
        checkItems={[]}
        buttonText="Conheça o app"
        backgroundImage="/images/hero-bg.png"
      />
      <Footer />
    </main>
  );
}

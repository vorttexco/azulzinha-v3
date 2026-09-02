import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import LgpdTermsContent from "@/components/termo-lgpd/LgpdTermsContent";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "LGPD | azulzinha da CAIXA",
  description:
    "Lei Geral de Proteção de Dados: leia a declaração de aceite aos termos e condições para uso de informações e dados pessoais e outras avenças deste site.",
};

export default function TermoLgpdPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Lei Geral de Proteção de Dados Pessoais"
        description="Leia a declaração de aceite aos termos e condições para uso de informações e dados pessoais e outras avenças deste site."
        checkItems={[]}
        buttonText=""
        backgroundImage="/images/termo-lgpd/hero.png"
      />
      <LgpdTermsContent />
      <Footer />
    </main>
  );
}

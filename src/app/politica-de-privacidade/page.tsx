import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import PrivacyPolicyContent from "@/components/politica-de-privacidade/PrivacyPolicyContent";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | azulzinha da CAIXA",
  description:
    "Confira a política de privacidade quanto à coleta, utilização, compartilhamento e segurança de seus dados pessoais ao visitar o nosso site.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Política de Privacidade"
        description="Confira a política de privacidade quanto à coleta, utilização, compartilhamento e segurança de seus dados pessoais ao visitar o nosso site."
        checkItems={[]}
        buttonText=""
        backgroundImage="/images/politica-de-privacidade/hero.png"
      />
      <PrivacyPolicyContent />
      <Footer />
    </main>
  );
}

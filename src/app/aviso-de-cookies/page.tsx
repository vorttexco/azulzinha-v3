import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import CookieNoticeContent from "@/components/aviso-de-cookies/CookieNoticeContent";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Aviso de Cookies | azulzinha da CAIXA",
  description:
    "Saiba como usamos cookies para melhorar o site, medir a audiência, melhorar sua experiência e fornecer conteúdo e publicidade adequados aos seus interesses.",
};

export default function AvisoDeCookiesPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Aviso de Cookies"
        description="Saiba como usamos cookies para melhorar o site, medir a audiência, melhorar sua experiência e fornecer conteúdo e publicidade adequados aos seus interesses."
        checkItems={[]}
        buttonText=""
        backgroundImage="/images/aviso-de-cookies/hero.png"
      />
      <CookieNoticeContent />
      <Footer />
    </main>
  );
}

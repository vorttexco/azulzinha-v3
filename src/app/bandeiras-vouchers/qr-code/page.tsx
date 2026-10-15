import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import QrCodeHeroSection from "@/components/bandeiras-vouchers/QrCodeHeroSection";
import QrCodeStartSection from "@/components/bandeiras-vouchers/QrCodeStartSection";
import QrCodeUpdateSection from "@/components/bandeiras-vouchers/QrCodeUpdateSection";
import QrCodeStepsSection from "@/components/bandeiras-vouchers/QrCodeStepsSection";
import SuaMaquininhaSection from "@/components/bandeiras-vouchers/SuaMaquininhaSection";
import MaquininhasSection from "@/components/bandeiras-vouchers/MaquininhasSection";

export const metadata: Metadata = pageMetadata({
  title: "VR Benefícios | azulzinha da CAIXA",
  description:
    "Sem cartão e sem contato físico: sua azulzinha da CAIXA agora aceita pagamento com VR por QR Code. Saiba como habilitar agora!",
  path: "/bandeiras-vouchers/qr-code",
});

export default function BandeirasQrCodePage() {
  return (
    <main>
      <Navbar />
      <QrCodeHeroSection />
      <QrCodeStartSection />
      <QrCodeUpdateSection />
      <QrCodeStepsSection />
      <SuaMaquininhaSection />
      <MaquininhasSection />
      <Footer />
    </main>
  );
}

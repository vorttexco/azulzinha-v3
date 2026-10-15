import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import FeatureSection from "@/components/shared/FeatureSection";
import FaqBandeirasSection from "@/components/bandeiras-vouchers/FaqBandeirasSection";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = pageMetadata({
  title: "QR Code e vouchers | azulzinha da CAIXA",
  description:
    "Saiba como aceitar os principais vouchers de benefícios na azulzinha e siga o passo a passo de credenciamento de cada bandeira.",
  path: "/bandeiras-vouchers/qr-code",
});

export default function BandeirasQrCodePage() {
  return (
    <main>
      <Navbar />
      <FeatureSection
        title="Como aceitar os principais vouchers de benefícios na azulzinha"
        paragraphs={[
          "Quer aceitar os principais vouchers do mercado? A azulzinha da CAIXA também já vem pronta para você diversificar as experiências de pagamento para seus clientes!",
          "Basta credenciar seu estabelecimento diretamente com cada bandeira que você quer aceitar.",
          <strong key="bold-vouchers">
            Selecione abaixo as bandeiras que você pode habilitar na azulzinha e siga o passo a passo de cada uma para fazer a solicitação.
          </strong>,
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

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import TefSection from "@/components/maquininhas-tef/TefSection";
import VantagensSection from "@/components/shared/VantagensSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

const vantagensTef = [
  {
    icon: "/images/maquininhas-pro/icon-rapidez.svg",
    text: "Rapidez ao atendimento ao cliente",
  },
  {
    icon: "/images/maquininhas-pro/icon-mobilidade.svg",
    text: "Fácil instalação",
  },
  {
    icon: "/images/maquininhas-pro/icon-pagamento.svg",
    text: "Todas as opções de pagamento: mais de 250 bandeiras e vouchers para aumentar as suas vendas",
  },
  {
    icon: "/images/maquininhas-pro/icon-dados.svg",
    text: "Mais eficiência na gestão do seu negócio",
  },
  {
    icon: "/images/maquininhas-pro/icon-conectividade.svg",
    text: "Conciliação automática das vendas",
  },
  {
    icon: "/images/maquininhas-pro/icon-seguranca.svg",
    text: "Fácil integração com automações comerciais",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "azulzinha TEF | azulzinha da CAIXA",
  description:
    "Para negócios com grande volume de transações e automação comercial, azulzinha TEF é a solução ideal e mais utilizada pelo varejo. Facilite a conciliação e ganhe agilidade no atendimento.",
  path: "/maquininhas/tef",
});

export default function MaquininhasTefPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="azulzinha TEF"
        description="Integre suas vendas para uma experiência de compra ágil, conciliação segura e gestão eficaz do seu negócio."
        checkItems={[]}
        buttonText="Conheça"
        buttonHref="#manual-section"
        backgroundImage="/images/maquininhas-tef/hero-bg.png"
      />
      <TefSection />
      <VantagensSection vantagens={vantagensTef} />
      <CtaSection
        title="Dúvidas?"
        description="Acesse nossa página de ajuda para obter mais informações sobre a azulzinha"
        buttonText="Clique aqui"
        buttonHref="/ajuda"
        image="/images/maquininhas-tef/cta-photo.png"
        imageAlt="Dúvidas azulzinha TEF"
      />
      <Footer />
    </main>
  );
}

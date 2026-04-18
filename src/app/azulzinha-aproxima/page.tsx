import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import AproximaSection from "@/components/azulzinha-aproxima/AproximaSection";
import PaymentMethodsSection from "@/components/azulzinha-aproxima/PaymentMethodsSection";
import VrBenefitsSection from "@/components/azulzinha-aproxima/VrBenefitsSection";
import ProductFeaturesSection from "@/components/azulzinha-aproxima/ProductFeaturesSection";
import HabilitarSection from "@/components/azulzinha-aproxima/HabilitarSection";
import CtaSection from "@/components/shared/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";

const faqItems = [
  {
    title: "Posso instalar azulzinha aproxima em mais de um celular ou tablet?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Sim. Basta solicitar mais um acesso ao aplicativo azulzinha aproxima através da Central de Atendimento.
      </p>
    ),
  },
  {
    title: "O App azulzinha aproxima funciona em quais aparelhos?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        <p className="mb-2">O App funciona em qualquer celular ou tablet que:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Utilize sistema operacional Android versão 12 ou superior;</li>
          <li>Tenha tecnologia de NFC (ou Antena NFC);</li>
          <li>Esteja conectado a alguma rede de Wi-fi ou 5G | 4G | 3G.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "O App azulzinha aproxima é seguro?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Sim. O nosso aplicativo utiliza os padrões mais altos de segurança e criptografia. Nenhum dado fica armazenado durante as transações.
      </p>
    ),
  },
];

export default function AzulzinhaAproximaPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="azulzinha aproxima"
        description="Instale o App e venda muito mais por aproximação, carteiras digitais e Pix no seu celular ou tablet."
        checkItems={[]}
        buttonText="Conheça"
        buttonHref="#aproxima"
        backgroundImage="/images/azulzinha-aproxima/hero-bg.png"
      />
      <AproximaSection />
      <PaymentMethodsSection />
      <VrBenefitsSection />
      <ProductFeaturesSection />
      <HabilitarSection />
      <CtaSection
        title="Já habilitou azulzinha aproxima?"
        description=""
        buttonText="Leia o manual"
        buttonHref="https://azulzinhadacaixa.com.br/midias/manual_azulzinha_aproxima.pdf"
        buttonTarget="_blank"
        image="/images/azulzinha-aproxima/cta-photo.png"
        imageAlt="Azulzinha aproxima CTA"
      />
      <FaqSection items={faqItems} />
      <Footer />
    </main>
  );
}

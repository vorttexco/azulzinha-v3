import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import TodasMaquinasSection from "@/components/maquininhas/TodasMaquinasSection";
import SimpleVideoSection from "@/components/shared/SimpleVideoSection";
import AzulzinhaIdealSection from "@/components/maquininhas/AzulzinhaIdealSection";
import MaquininhaIdealSection from "@/components/maquininhas/MaquininhaIdealSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import GrupoComercialSection from "@/components/maquininhas/GrupoComercialSection";
import FaqSection from "@/components/shared/FaqSection";
import AjudaCtaSection from "@/components/maquininhas/AjudaCtaSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

const faqItems = [
  {
    title: "Existe um limite de maquininhas por pedido?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Sim. No momento do credenciamento a solicitação é de até 05 terminais, podendo posteriormente ser liberado até 20 equipamentos por estabelecimento. Acima de 20 maquininhas, é necessária uma avaliação.
      </p>
    ),
  },
  {
    title: "Existe a possibilidade de compra da maquininha ou somente aluguel?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Neste momento, está disponível a opção aluguel.
      </p>
    ),
  },
  {
    title: "A maquininha precisa de celular?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Não, não precisa.
      </p>
    ),
  },
];

export default function MaquininhasPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Com a azulzinha, maquininha da CAIXA, você pode muito mais!"
        description="Conheça as nossas opções de aluguel"
        checkItems={[]}
        buttonText="Saiba mais"
        buttonHref="#dobra"
        backgroundImage="/images/maquininhas/hero-bg.png"
      />
      <TodasMaquinasSection />
      <SimpleVideoSection
        title="Para ter uma solução móvel completa"
        description="Ela é azulzinha porque é da CAIXA! Conheça as vantagens que só a maquininha da CAIXA pode oferecer para você. Assista ao vídeo:"
        thumbnail="/images/maquininhas/video-thumbnail.png"
        className="bg-[#F4F4F4] lg:bg-white"
      />
      <AzulzinhaIdealSection />
      <MaquininhaIdealSection />
      <TestimonialsSection />
      <GrupoComercialSection />
      <FaqSection title="Saiba tudo sobre a azulzinha" items={faqItems} />
      <AjudaCtaSection />
      <CtaSection
        title="Com a azulzinha da CAIXA você pode muito mais!"
        description="Preencha o formulário e receba uma oferta personalizada para seu negócio, com as melhores taxas e condições que só a CAIXA pode oferecer para você."
        buttonText="Peça já a sua azulzinha"
        buttonHref="/peca-azulzinha"
        image="/images/maquininhas/cta-bg.png"
        imageAlt="Azulzinha maquininhas CTA"
      />
      <Footer />
    </main>
  );
}

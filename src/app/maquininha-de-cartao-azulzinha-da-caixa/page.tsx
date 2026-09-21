import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import VantagensListSection from "@/components/maquininha-de-cartao-azulzinha-da-caixa/VantagensListSection";
import MaquinasCarouselSection from "@/components/maquininha-de-cartao-azulzinha-da-caixa/MaquinasCarouselSection";
import IconCardsSection from "@/components/maquininha-de-cartao-azulzinha-da-caixa/IconCardsSection";
import BandeirasSection from "@/components/shared/BandeirasSection";
import GestaoSection from "@/components/maquininha-de-cartao-azulzinha-da-caixa/GestaoSection";
import FormSection from "@/components/suaazulzinha/FormSection";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = pageMetadata({
  title: "Peça azulzinha | azulzinha da CAIXA",
  description:
    "Com azulzinha você pode muito mais: impulsionar suas vendas, oferecer serviços e gerenciar seu negócio com agilidade e segurança. Saiba mais!",
  path: "/maquininha-de-cartao-azulzinha-da-caixa",
});

export default function MaquininhaDeCartaoPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Com azulzinha você pode muito mais"
        description="Conheça a maquininha que te conecta a um mundo de soluções que a CAIXA oferece para o seu negócio"
        checkItems={[]}
        buttonText="Escolha a sua"
        buttonHref="#dobra"
        buttonClassName="LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-banner"
        backgroundImage="/images/maquininha-de-cartao-azulzinha-da-caixa/hero-bg.png"
        mobileBackgroundImage="/images/maquininha-de-cartao-azulzinha-da-caixa/hero-bg.png"
        mobileImageClassName="object-[70%_30%]"
      />
      <VantagensListSection />
      <MaquinasCarouselSection />
      <IconCardsSection
        title="Impulsione suas vendas online"
        description="A azulzinha da CAIXA tem tudo para você lucrar na internet, redes sociais e aplicativos de mensagem."
        cards={[
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-link.png",
            label: "Link de Pagamento",
          },
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-ecommerce.png",
            label: "E-commerce",
          },
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-whatsapp.png",
            label: "Pagamentos por WhatsApp",
          },
        ]}
      />
      <BandeirasSection
        title="Ofereça uma rede completa de aceitação"
        description="A azulzinha da CAIXA aceita mais de 40 bandeiras, vouchers e carteiras digitais favoritas do seu cliente."
      />
      <IconCardsSection
        title="Gire o fluxo de caixa e fidelize o seu cliente"
        description="Adiante seus recebimentos e ofereça serviços com a azulzinha da CAIXA"
        columns={4}
        cards={[
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-antecipacao.png",
            label: "Antecipação de Vendas",
          },
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-recarga.png",
            label: "Recarga de Telefonia",
          },
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-pix.png",
            label: "Pix",
          },
          {
            icon: "/images/maquininha-de-cartao-azulzinha-da-caixa/icon-pagamento-parcial.png",
            label: "Pagamento Parcial",
          },
        ]}
      />
      <GestaoSection />
      <FormSection
        id="form"
        title="Comece a vender com a azulzinha da CAIXA!"
        subtitle="Preencha o formulário abaixo com os seus dados e em breve um gerente da CAIXA entrará em contato para apresentar taxas personalizadas para sua empresa e tirar todas as suas dúvidas."
        sufixo="LP-maquininha-de-cartao-azulzinha-da-caixa"
      />
      <Footer />
    </main>
  );
}

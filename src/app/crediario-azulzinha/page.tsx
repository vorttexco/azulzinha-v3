import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BandeirasCrediarioSection from "@/components/crediario-azulzinha/BandeirasCrediarioSection";
import BeneficiosCrediarioSection from "@/components/crediario-azulzinha/BeneficiosCrediarioSection";
import StepsCarouselSection from "@/components/shared/StepsCarouselSection";
import CtaSection from "@/components/shared/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import CardsCarouselSection, { CarouselCard } from "@/components/shared/CardsCarouselSection";
import Footer from "@/components/shared/Footer";

const faqItems = [
  {
    title: "O que é o Crediário da azulzinha da CAIXA?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        O Crediário permite que você realize vendas parceladas em até 48 vezes, enquanto recebe o valor total da venda à vista. É uma solução ideal para aumentar o ticket médio e facilitar compras de maior valor para seus clientes.
      </p>
    ),
  },
  {
    title: "Como funcionam as taxas e o número de parcelas?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        As taxas e o número de parcelas disponíveis variam de acordo com o banco emissor de cada cartão de crédito. Você pode simular as condições diretamente na sua azulzinha antes de finalizar a venda.
      </p>
    ),
  },
  {
    title: "Quais as vantagens do Crediário para o meu negócio?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Com o Crediário você recebe o valor total da venda à vista, aumenta o ticket médio, facilita compras de maior valor e não precisa se preocupar com inadimplência.
      </p>
    ),
  },
  {
    title: "Como faço uma venda parcelada no Crediário?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Basta digitar o valor da venda, selecionar a opção &quot;Venda digitada&quot;, escolher &quot;Crediário&quot;, definir o número de parcelas e inserir os dados do cartão do cliente.
      </p>
    ),
  },
  {
    title: "Preciso realizar uma análise de crédito para oferecer o Crediário?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Não. As parcelas são cobradas diretamente na fatura do cartão de crédito do cliente, sem necessidade de análise de crédito por parte do estabelecimento.
      </p>
    ),
  },
  {
    title: "Como posso antecipar meus recebíveis de vendas parceladas?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Você pode antecipar seus recebíveis diretamente pelo App ou Portal da azulzinha, com condições especiais para vendas realizadas no Crediário.
      </p>
    ),
  },
];

const highlightCards: CarouselCard[] = [
  {
    title: "Venda online",
    description: "Soluções digitais para vender na internet. Link de pagamento, E-commerce, Pagamentos por WhatsApp",
    image: "/images/crediario-azulzinha/highlight-venda-online.png",
    variant: "default",
  },
  {
    title: "Serviços",
    description: "Soluções integradas. Antecipação de Vendas, Pix, Pagamento Parcial, Recarga de Telefonia",
    image: "/images/crediario-azulzinha/highlight-servicos.png",
    variant: "variant2",
  },
  {
    title: "Gestão de venda",
    description: "Ferramentas da azulzinha. App da azulzinha, E-commerce, Portal da azulzinha",
    image: "/images/crediario-azulzinha/highlight-gestao.png",
    variant: "default",
  },
  {
    title: "Suporte",
    description: "Canais de atendimento. WhatsApp, Central de Relacionamento, Página de Ajuda",
    image: "/images/crediario-azulzinha/highlight-suporte.png",
    variant: "variant3",
  },
  {
    title: "Blog Azulzinha",
    description: "Conteúdos úteis para impulsionar sua estratégia de vendas. Blog da azulzinha",
    image: "/images/crediario-azulzinha/highlight-blog.png",
    variant: "default",
  },
];

export default function CrediarioAzulzinha() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Crediário"
        description="Ofereça parcelamentos em até 48x no crédito e receba à vista"
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/crediario-azulzinha/hero-bg.png"
      />

      <FeatureSection
        title="Venda a prazo, receba à vista e aumente seu faturamento"
        paragraphs={[
          "Com a azulzinha da CAIXA, você pode aceitar pagamentos em até 48 parcelas fixas* nos principais cartões de crédito do mercado, enquanto recebe tudo à vista, com uma única taxa.",
        ]}
        image="/images/crediario-azulzinha/crediario-tela.png"
        imageAlt="Tela do crediário na azulzinha"
        buttonText="Siga o passo a passo"
        cardWidth="605px"
        cardHeight="398px"
        imageWidth="292px"
        imageHeight="517px"
        imageWidthMobile="162px"
        imageHeightMobile="287px"
        imageClassName="object-contain object-bottom"
        paddingClassName="py-14 lg:py-20"
      />

      <BandeirasCrediarioSection />

      <BeneficiosCrediarioSection />

      <StepsCarouselSection />

      <CtaSection
        title="Com a azulzinha da CAIXA você pode muito mais!"
        description="Preencha o formulário e receba uma oferta personalizada para seu negócio, com as melhores taxas e condições que só a CAIXA pode oferecer para você."
        buttonText="Peça já a sua azulzinha"
        buttonHref="/peca-azulzinha"
        image="/images/crediario-azulzinha/cta-photo.png"
      />

      <FaqSection
        title="Tire suas dúvidas sobre Crediário na azulzinha da CAIXA"
        items={faqItems}
        buttonText="Ainda tem dúvidas? Visite a Central de Ajuda"
        buttonHref="/ajuda"
      />

      <CardsCarouselSection
        title="Aproveite todos os benefícios de vender com a azulzinha da CAIXA"
        cards={highlightCards}
        sectionClassName="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)] py-14 lg:py-20 overflow-hidden"
      />

      <Footer />
    </main>
  );
}

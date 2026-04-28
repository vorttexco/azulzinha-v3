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
        O Crediário permite que você realize vendas parceladas em até 48 vezes, enquanto recebe o valor total da venda à vista. Assim, seus clientes podem pagar de forma acessível, e você garante o recebimento imediato, com uma única taxa aplicada.
      </p>
    ),
  },
  {
    title: "Como funcionam as taxas e o número de parcelas?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        As taxas e a quantidade de parcelas podem variar de acordo com o banco emissor do cartão do cliente. Consulte as condições no simulador da sua azulzinha.
      </p>
    ),
  },
  {
    title: "Quais as vantagens do Crediário para o meu negócio?",
    content: (
      <ul className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black flex flex-col gap-2 list-disc pl-5">
        <li>Recebimento garantido: Receba o valor integral da venda, independentemente do número de parcelas escolhidas pelo cliente;</li>
        <li>Vendas maiores: Permita que seus clientes comprem valores mais altos com parcelas que cabem no bolso;</li>
        <li>Inadimplência zero:Sem análise de crédito ou complicações; as parcelas são cobradas diretamente na fatura do cliente;</li>
        <li>Crédito para sua loja: Antecipe seus recebíveis e melhore o fluxo de caixa;</li>
        <li>Gestão centralizada: Controle suas vendas e recebimentos futuros direto no App e no Portal da azulzinha.</li>
      </ul>
    ),
  },
  {
    title: "Como faço uma venda parcelada no Crediário?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black flex flex-col gap-3">
        <p>Sua azulzinha já vem pronta para aceitar cartões de crédito. Para realizar uma venda no Crediário, siga estes passos:</p>
        <ol className="list-decimal pl-5 flex flex-col gap-2">
          <li>Insira o valor da compra na maquininha;</li>
          <li>Selecione a opção &ldquo;Crediário&rdquo;;</li>
          <li>Use o simulador para ajudar o cliente a escolher o número de parcelas;</li>
          <li>Confirme a venda e entregue o comprovante ao cliente.</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Preciso realizar uma análise de crédito para oferecer o Crediário?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Não. O Crediário da azulzinha não exige análise de crédito. As parcelas serão cobradas diretamente na fatura do cartão do cliente.
      </p>
    ),
  },
  {
    title: "Como posso antecipar meus recebíveis de vendas parceladas?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        No App ou no Portal da azulzinha, você pode acessar as opções de antecipação de recebíveis e escolher a melhor condição para impulsionar seu fluxo de caixa.
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
    href: "/vendas-online",
  },
  {
    title: "Serviços",
    description: "Soluções integradas. Antecipação de Vendas, Pix, Pagamento Parcial, Recarga de Telefonia",
    image: "/images/crediario-azulzinha/highlight-servicos.png",
    variant: "variant2",
    href: "/antecipacao-de-vendas",
  },
  {
    title: "Gestão de venda",
    description: "Ferramentas da azulzinha. App da azulzinha, E-commerce, Portal da azulzinha",
    image: "/images/crediario-azulzinha/highlight-gestao.png",
    variant: "default",
    href: "/gestao",
  },
  {
    title: "Suporte",
    description: "Canais de atendimento. WhatsApp, Central de Relacionamento, Página de Ajuda",
    image: "/images/crediario-azulzinha/highlight-suporte.png",
    variant: "variant3",
    href: "/ajuda",
  },
  {
    title: "Blog Azulzinha",
    description: "Conteúdos úteis para impulsionar sua estratégia de vendas. Blog da azulzinha",
    image: "/images/crediario-azulzinha/highlight-blog.png",
    variant: "default",
    href: "/blog",
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
        buttonHref="#conheça"
        backgroundImage="/images/crediario-azulzinha/hero-bg.png"
        mobileBackgroundImage="/images/crediario-azulzinha/hero-bg.png"
        mobileImageClassName="object-[70%_25%]"
      />

      <div id="conheça" />

      <FeatureSection
        title="Venda a prazo, receba à vista e aumente seu faturamento"
        paragraphs={[
          "Com a azulzinha da CAIXA, você pode aceitar pagamentos em até 48 parcelas fixas* nos principais cartões de crédito do mercado, enquanto recebe tudo à vista, com uma única taxa.",
        ]}
        image="/images/crediario-azulzinha/crediario-tela.png"
        imageAlt="Tela do crediário na azulzinha"
        buttonText="Siga o passo a passo"
        buttonHref="#beneficios-section"
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

      <StepsCarouselSection
        headerContent={
          <div className="flex flex-col gap-4">
            <p className=" section-title text-left tracking-widest text-azul uppercase">Tutorial</p>
            <h2 className="section-title text-azul text-left">Como fazer uma venda no Crediário</h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Sua azulzinha já vem pronta para aceitar cartões de crédito. Siga o passo a passo para acessar o simulador e fazer sua primeira transação:
            </p>
          </div>
        }
      />

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

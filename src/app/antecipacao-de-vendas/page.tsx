import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import ModosSection from "@/components/antecipacao-de-vendas/ModosSection";
import BenefitsShowcaseSection from "@/components/shared/BenefitsShowcaseSection";
import VantagensSection from "@/components/shared/VantagensSection";
import ComoAnteciparSection from "@/components/antecipacao-de-vendas/ComoAnteciparSection";
import FaqSection from "@/components/shared/FaqSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";
import { asset } from "@/lib/assets";

const vantagensCards = [
  {
    icon: asset("/images/antecipacao-de-vendas/icon-flexibilidade.svg"),
    title: "Flexibilidade",
    text: "Antecipe o quanto quiser, quando quiser. Escolha bandeiras e transações de acordo com a sua preferência.",
  },
  {
    icon: asset("/images/antecipacao-de-vendas/icon-transparencia.svg"),
    title: "Transparência",
    text: "Simule valores e taxas antes de escolher a melhor opção para o seu negócio.",
  },
  {
    icon: asset("/images/antecipacao-de-vendas/icon-simplicidade.svg"),
    title: "Simplicidade e rapidez",
    text: "O processo de antecipação é feito em segundos, seja pela maquininha, App da azulzinha ou Portal da azulzinha.",
  },
];

const resumoVantagens = [
  {
    icon: "/images/antecipacao-de-vendas/icon-simplicidade.svg",
    title: "Receba o valor no mesmo dia*",
  },
  {
    icon: "/images/antecipacao-de-vendas/icon-flexibilidade.svg",
    title: "Controle o fluxo de caixa",
  },
  {
    icon: "/images/antecipacao-de-vendas/icon-data-recebimento.svg",
    title: "Acompanhe a data do recebimento",
  },
  {
    icon: "/images/icon-small-celular.svg",
    title: "Escolha com que frequência receber",
  },
  {
    icon: "/images/icon-small-receba.svg",
    title: "Simule a taxa antes de contratar",
  },
  {
    icon: "/images/clover/icon-rapida.svg",
    title: "Faça o pedido em segundos",
  },
];

const faqAnswerClass = "text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black";

const faqItems = [
  {
    title: "O que é antecipação de vendas?",
    content: (
      <p className={faqAnswerClass}>
        A antecipação de vendas adianta o recebimento das vendas feitas no crédito, à vista ou parcelado. Com a azulzinha da CAIXA, você recebe esses valores sem esperar o prazo total do pagamento, pela antecipação automática ou eventual.
      </p>
    ),
  },
  {
    title: "Qual a diferença entre antecipação automática e eventual?",
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul">Antecipação automática</p>
          <p className={faqAnswerClass}>
            Nessa modalidade, você pré-define com que frequência deseja receber seu saldo disponível (diariamente, quinzenalmente, semanalmente ou mensalmente). A partir daí, os recebíveis do cartão de crédito são antecipados e creditados na conta da sua empresa, tudo isso a partir de uma única taxa fixa. É a forma mais simples e prática para gerenciar o seu fluxo de caixa.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul">Antecipação eventual</p>
          <p className={faqAnswerClass}>
            Com a antecipação eventual, é possível negociar o adiantamento do seu saldo atual disponível, através de uma determinada taxa de desconto. Nessa modalidade, você pode negociar todos os seus recebíveis pelo App da azulzinha, Portal da azulzinha ou na própria azulzinha da CAIXA.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Como fazer a antecipação pela azulzinha?",
    content: (
      <div className="space-y-2">
        <p className={faqAnswerClass}>
          No App da azulzinha, clique em “Antecipar”, abaixo dos recebimentos do dia. No Portal da azulzinha, abra “Minhas Vendas” e selecione a aba “Antecipação”. Na maquininha, na tela inicial, selecione “Menu” e “Antecipação”.
        </p>
        <p className={faqAnswerClass}>
          Em seguida, escolha a antecipação automática ou eventual, simule valor e taxa e confirme a contratação.
        </p>
      </div>
    ),
  },
  {
    title: "Posso receber no mesmo dia?",
    content: (
      <p className={faqAnswerClass}>
        Funcionalidade disponível para clientes elegíveis. Caso a opção não esteja disponível no App ou Portal da azulzinha, entre em contato com a nossa Central de Atendimento.
      </p>
    ),
  },
  {
    title: "Qual o prazo da antecipação eventual?",
    content: (
      <p className={faqAnswerClass}>
        Na antecipação eventual, se o pedido for feito até 12h, o crédito ocorre em D+0. Se o estabelecimento faturar acima de R$ 360.000 por ano na maquininha, o recebimento é em D+1.
      </p>
    ),
  },
  {
    title: "Onde o valor da antecipação é creditado?",
    content: (
      <p className={faqAnswerClass}>
        Os recebíveis antecipados são creditados na conta da sua empresa, o domicílio bancário já cadastrado para os recebimentos da maquininha.
      </p>
    ),
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Antecipação de vendas | azulzinha da CAIXA",
  description:
    "Antecipação de vendas no crédito com a azulzinha da CAIXA. Escolha a modalidade automática ou eventual e veja o passo a passo.",
  imageAlt: "Antecipação de vendas no crédito com a azulzinha da CAIXA.",
  path: "/antecipacao-de-vendas",
});

export default function AntecipacaoDeVendas() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Antecipação de Vendas"
        description="Com a azulzinha você antecipa as vendas feitas no crédito, à vista ou parcelado."
        checkItems={[]}
        buttonText="Saiba mais"
        buttonHref="#como-antecipar"
        backgroundImage="/images/antecipacao-de-vendas/hero-bg.png"
      />
      <div className="bg-white pt-14 lg:pt-20">
        <VantagensSection
          title="Por que antecipar as vendas no crédito?"
          description="Veja o que muda no dia a dia do seu estabelecimento."
          sectionClassName="bg-white"
          vantagens={resumoVantagens}
          footnote={
            <>
              * <b>Funcionalidade disponível para clientes elegíveis.</b> Caso a opção não esteja disponível no App ou Portal da azulzinha, entre em contato com a nossa Central de Atendimento.
            </>
          }
        />
      </div>
      <BenefitsShowcaseSection
        id="dobra"
        title={<span>Com a antecipação<br />você pode mais</span>}
        description="Tenha flexibilidade para escolher quando receber, total transparência nas taxas e agilidade para manter o caixa do seu negócio sempre saudável."
        image="/images/antecipacao-de-vendas/vantagens-bg.png"
        imageAlt="Adiante o recebimento das vendas no crédito"
        cards={vantagensCards}
        showBrandLogos={false}
        showLink
        linkText="Quero antecipar"
        linkHref="#antecipe"
        bgColor="bg-[#F4F4F4]"
        cardClassName="flex flex-col items-start gap-[24px] rounded-[12px] bg-white pt-[32px] pr-[40px] pl-[32px] pb-[32px] w-full lg:h-[244px] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
        iconClassName="shrink-0 w-[43.69px] h-[44.67px]"
        cardsGridClassName="mt-6 lg:-mt-[110px] grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10"
        sectionClassName="lg:min-h-[756px]"
        contentClassName="w-full lg:w-1/2 flex flex-col lg:pb-[110px]"
        titleClassName="section-title text-left text-azul"
      />
      <ModosSection />
      <ComoAnteciparSection />
      <CtaSection
        id="antecipe"
        title="Comece a antecipar agora mesmo com a azulzinha"
        description=""
        buttonText="App da azulzinha"
        button2Text="Portal da azulzinha"
        buttonHref="/app"
        button2Href="/portal"
        image="/images/antecipacao-de-vendas/cta-photo.png"
        imageAlt="Contrate a antecipação pelo App ou pelo Portal da azulzinha"
      />
      <FaqSection
        title="Tire suas dúvidas sobre antecipação de vendas com a azulzinha"
        items={faqItems}
        buttonText="Ainda tem dúvidas? Visite a Central de Ajuda"
        buttonHref="/ajuda"
      />
      <Footer />
    </main>
  );
}

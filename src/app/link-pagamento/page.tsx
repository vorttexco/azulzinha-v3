import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BandeirasSection from "@/components/shared/BandeirasSection";
import BeneficiosGridSection from "@/components/shared/BeneficiosGridSection";
import BlueCta from "@/components/shared/BlueCta";
import StepsCarouselSection, { StepItem } from "@/components/shared/StepsCarouselSection";
import FeatureSection from "@/components/shared/FeatureSection";
import FaqSection from "@/components/shared/FaqSection";
import SolucoesSection from "@/components/shared/SolucoesSection";
import Footer from "@/components/shared/Footer";

const beneficios = [
  { icon: "/images/link-pagamento/icon-1.png", title: "Crie links no app Azulzinha", description: "" },
  { icon: "/images/link-pagamento/icon-2.png", title: "Use sem taxas escondidas", description: "" },
  { icon: "/images/link-pagamento/icon-3.png", title: "Divulgue em qualquer lugar", description: "" },
  { icon: "/images/link-pagamento/icon-4.png", title: "Gere links 24 horas", description: "" },
  { icon: "/images/link-pagamento/icon-5.png", title: "Aceite débito e crédito", description: "" },
  { icon: "/images/link-pagamento/icon-6.png", title: "Receba com segurança", description: "" },
  { icon: "/images/link-pagamento/icon-7.png", title: "Gerencie tudo no app", description: "" },
  { icon: "/images/link-pagamento/icon-8.png", title: "Receba em um dia", description: "" },
  { icon: "/images/link-pagamento/icon-9.png", title: "Conquiste seu cliente", description: "" },
];

const steps: StepItem[] = [
  { number: 1, text: "Toque em Link de Pagamento na tela inicial do App da azulzinha.", image: "/images/link-pagamento/step-1.png" },
  { number: 2, text: "Clique em \"Gerar link de pagamento\".", image: "/images/link-pagamento/step-2.png" },
  { number: 3, text: "Escreva uma descrição para o produto ou serviço.", image: "/images/link-pagamento/step-3.png" },
  { number: 4, text: "Escolha o tipo de pagamento.", image: "/images/link-pagamento/step-4.png" },
  { number: 5, text: "Digite o valor da venda.", image: "/images/link-pagamento/step-5.png" },
  { number: 6, text: "Informe o número de parcelas, se a venda for a prazo, com ou sem juros.", image: "/images/link-pagamento/step-6.png" },
  { number: 7, text: "Confira os dados no resumo da transação.", image: "/images/link-pagamento/step-7.png" },
  { number: 8, text: "Compartilhe o comprovante com seu cliente.", image: "/images/link-pagamento/step-8.png" },
];

const faqItems = [
  {
    title: "O que é o Link de Pagamento?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        O Link de Pagamento trata-se de um endereço eletrônico que o lojista envia para o cliente e é um jeito prático e simples de cobrar, pagar e receber. Com o Link de Pagamento é possível realizar vendas online, seja pela internet, e-mail ou redes sociais, gerando um link único.
      </p>
    ),
  },
  {
    title: "O Link de Pagamento está disponível para todos os tipos de negócios?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        O link de pagamento pode não estar disponível para todos os clientes. Para verificar se essa opção está liberada para o seu estabelecimento, entre em contato com seu gerente CAIXA.
      </p>
    ),
  },
  {
    title: "Existe um limite diário de valor para o uso do Link de Pagamento?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Não existe um limite diário de valor para as suas vendas com o Link de Pagamento da azulzinha. Além disso, a quantidade de links que você pode gerar por dia também é ilimitada. Aproveite!
      </p>
    ),
  },
  {
    title: "Quais são as medidas de segurança para proteger as vendas feitas através do Link de Pagamento?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        O Link de Pagamento funciona em ambiente protegido 100% PCI compliance e possui ferramentas de segurança que apoiam na análise de risco da transação (autenticação 3ds e antifraude).
      </p>
    ),
  },
  {
    title: "Preciso tomar outras precauções de segurança na hora de vender com o Link de Pagamento?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Sim, pois nas transações feitas através do Link de Pagamento ou digitadas, não há validação por senha, como ocorre nas transações com cartão físico. Se o cliente contestar a compra, o lojista pode não receber o pagamento.
      </p>
    ),
  },
  {
    title: "Como posso aumentar a minha segurança nas vendas com Link de Pagamento?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        <p className="mb-2">Para aumentar a segurança das suas vendas, recomendamos algumas práticas:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Registre e monitore suas vendas, observando padrões de compra fora do comum;</li>
          <li>Fique atento a pedidos urgentes e a clientes que utilizam vários cartões de crédito diferentes;</li>
          <li>Fique atento a pedidos de quantidades elevadas do mesmo produto ou entregas em um único endereço;</li>
          <li>Considere estabelecer um responsável pela gestão e geração dos Links de Pagamento no seu estabelecimento.</li>
        </ul>
      </div>
    ),
  },
];

export default function LinkPagamento() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Link de Pagamento"
        description="Lucre muito mais pela internet, redes sociais e aplicativos de mensagens com links seguros e ilimitados."
        checkItems={[]}
        buttonText="Confira"
        buttonHref="#dobra"
        backgroundImage="/images/link-pagamento/hero-bg.png"
      />

      <BeneficiosGridSection
        title="Feche muito mais vendas no digital sem precisar ter uma loja online"
        subtitle="Agilize suas cobranças, facilite para o cliente e lucre em todos os canais com o Link de Pagamento"
        beneficios={beneficios}
        buttonText=""
        paddingClassName="py-14 lg:py-20"
      />

      <div id="dobra" />

      <BlueCta
        title={"O Link de Pagamento é uma ferramenta exclusiva para clientes azulzinha.\nAinda não tem a maquininha da CAIXA?"}
        buttonText="Peça já a sua"
        buttonHref="/peca-azulzinha"
        sectionClassName="bg-white"
      />

      <BandeirasSection
        title="Gere links para débito e crédito"
        description="Facilite a cobrança com as principais bandeiras e opções de pagamento."
      />

      <StepsCarouselSection
        steps={steps}
        bgClassName="bg-white"
        paddingClassName="py-14 lg:py-20"
        bottomTitle="Comece a vender no digital!"
        bottomButtonText="Peça já a sua"
        bottomButtonHref="/peca-azulzinha"
        headerContent={
          <div className="flex flex-col items-center gap-4 max-w-[850px] mx-auto text-center">
            <h2 className="section-title text-azul">
              Já é cliente azulzinha? Veja como é fácil criar um Link de Pagamento pelo aplicativo
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              Abra o App da azulzinha em seu celular e siga o passo a passo para gerar o primeiro link:
            </p>
          </div>
        }
      />

      <FeatureSection
        title="Gerencie suas vendas no App da azulzinha"
        paragraphs={[
          "Aonde quer que esteja, você pode visualizar e controlar suas vendas de forma simples e eficiente, desfrutando de relatórios personalizados e serviços exclusivos.",
          "Baixe agora mesmo o App da azulzinha para Android e iOS e simplifique sua gestão hoje mesmo!",
        ]}
        image="/images/link-pagamento/phone-app.png"
        imageAlt="App da azulzinha"
        cardWidth="605px"
        cardHeight="398px"
        imageClassName="object-contain"
        imageWidth="494px"
        imageHeight="497px"
        bgColor="bg-[#F4F4F4]"
        cardBorderRadius="rounded-[10px]"
        storeBadges={[
          { image: "/images/android.png", href: "https://play.google.com/store/apps/details?id=com.fiserv.gestao.caixa&hl=pt_BR&gl=US", alt: "Google Play" },
          { image: "/images/apple.png", href: "https://apps.apple.com/br/app/app-da-azulzinha/id1570685624", alt: "App Store" },
        ]}
      />

      <FaqSection
        title="Tire suas dúvidas sobre Link de Pagamento"
        items={faqItems}
      />

      <SolucoesSection
        title="Conheça soluções azulzinha para as suas vendas"
      />

      <Footer />
    </main>
  );
}

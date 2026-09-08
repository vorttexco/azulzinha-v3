import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BeneficiosGridSection from "@/components/shared/BeneficiosGridSection";
import BlueCta from "@/components/shared/BlueCta";
import StepsCarouselSection, { StepItem } from "@/components/shared/StepsCarouselSection";
import FaqSection from "@/components/shared/FaqSection";
import SolucoesSection from "@/components/shared/SolucoesSection";
import Footer from "@/components/shared/Footer";

const beneficios = [
  {
    icon: "/images/pagamentos-whatsapp/icon-praticidade.png",
    title: "Praticidade",
    description: "Interaja, venda e atraia mais clientes à sua lista de contatos",
  },
  {
    icon: "/images/pagamentos-whatsapp/icon-preferencia.png",
    title: "Preferência",
    description: "Fidelize o cliente com a melhor experiência de pagamento",
  },
  {
    icon: "/images/pagamentos-whatsapp/icon-seguranca.png",
    title: "Segurança",
    description: "Receba pagamentos confiáveis com sistema antifraude",
  },
  {
    icon: "/images/pagamentos-whatsapp/icon-app.png",
    title: "App da azulzinha",
    description: "Cuide das vendas e da saúde do seu caixa onde estiver",
  },
  {
    icon: "/images/pagamentos-whatsapp/icon-oportunidade.png",
    title: "Oportunidade",
    description: "Tenha sua loja completa no aplicativo mais utilizado no Brasil",
  },
];

const stepsAtivar: StepItem[] = [
  { number: 1, text: "Abra o WhatsApp Business. Clique nos três pontinhos e selecione o item \"Cobrança\".", image: "/images/pagamentos-whatsapp/step1-screenshot-01.png" },
  { number: 2, text: "Em seguida, clique no botão \"Começar\".", image: "/images/pagamentos-whatsapp/step1-screenshot-02.png" },
  { number: 3, text: "Na tela \"Selecione um parceiro de pagamentos\", clique em Fiserv.", image: "/images/pagamentos-whatsapp/step1-screenshot-03.png" },
  { number: 4, text: "Aceite os Termos de Serviço da plataforma.", image: "/images/pagamentos-whatsapp/step1-screenshot-04.png" },
  { number: 5, text: "Conecte a sua conta Fiserv com seu CPF ou CNPJ.", image: "/images/pagamentos-whatsapp/step1-screenshot-05.png" },
  { number: 6, text: "Para confirmar, insira o código enviado via SMS para o número de telefone cadastrado na azulzinha da CAIXA.", image: "/images/pagamentos-whatsapp/step1-screenshot-06.png" },
  { number: 7, text: "Na sequência, confira seus dados na tela e clique em \"Conectar conta\".", image: "/images/pagamentos-whatsapp/step1-screenshot-07.png" },
  { number: 8, text: "Pronto! A sua conta azulzinha está conectada aos pagamentos no WhatsApp. Aguarde o prazo indicado para ativação.", image: "/images/pagamentos-whatsapp/step1-screenshot-08.png" },
  { number: 9, text: "Acompanhe o status da conexão no menu Pedidos, abaixo do Histórico, em \"Formas de Pagamento\".", image: "/images/pagamentos-whatsapp/step1-screenshot-09.png" },
  { number: 10, text: "O status indicará quando a sua conta estiver ativa e pronta para vender!", image: "/images/pagamentos-whatsapp/step1-screenshot-10.png" },
];

const stepsVender: StepItem[] = [
  { number: 1, text: "No chat do WhatsApp, clique no clipe de papel e selecione \"Cobrar cliente\".", image: "/images/pagamentos-whatsapp/step2-screenshot-01.png" },
  { number: 2, text: "Na tela de \"Cobrar cliente\", adicione os itens que você vai vender.", image: "/images/pagamentos-whatsapp/step2-screenshot-02.png" },
  { number: 3, text: "Na tela \"Adicionar item\" descreva o nome, o preço e a quantidade.", image: "/images/pagamentos-whatsapp/step2-screenshot-03.png" },
  { number: 4, text: "Confira as informações e clique no botão \"Adicionar item\".", image: "/images/pagamentos-whatsapp/step2-screenshot-04.png" },
  { number: 5, text: "Depois de conferir a quantidade, preço e condições de parcelamento da venda, clique em \"Enviar cobrança\".", image: "/images/pagamentos-whatsapp/step2-screenshot-05.png" },
  { number: 6, text: "Pronto! Seu cliente receberá a cobrança direto na conversa.", image: "/images/pagamentos-whatsapp/step2-screenshot-06.png" },
];

const faqItems = [
  {
    title: "Sou cliente azulzinha, como faço para receber pagamentos pelo WhatsApp?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        <p className="mb-2">Para habilitar a função de pagamentos no WhatsApp, você precisa selecionar a Fiserv como &quot;parceiro de pagamentos&quot;.</p>
        <p className="mb-2">Siga o passo a passo:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Abra o WhatsApp Business e acesse a opção &quot;Cobrança&quot; no menu;</li>
          <li>Selecione &quot;Começar&quot; e escolha a Fiserv como parceira de pagamentos;</li>
          <li>Aceite os Termos de Serviço e conecte sua conta Fiserv com seu CPF ou CNPJ;</li>
          <li>Confirme a conexão inserindo o código enviado via SMS;</li>
          <li>Após conectar a conta, aguarde a ativação e acompanhe o status no menu &quot;Pedidos&quot;.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Depois de ativar a função de pagamentos, como fazer uma cobrança no WhatsApp?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        <p className="mb-2">Siga o passo a passo para enviar um pagamento para o seu cliente:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>No chat do WhatsApp Business, clique no clipe de papel e selecione &quot;Cobrar cliente&quot;;</li>
          <li>Adicione os itens da venda e envie a cobrança;</li>
          <li>Seu cliente receberá a cobrança diretamente na conversa e pode pagar no débito ou no crédito.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Como gerenciar minhas vendas pelo WhatsApp no App da azulzinha?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        No aplicativo da azulzinha você consegue visualizar e gerenciar os recebimentos, comprovantes e relatórios de todas as suas vendas no WhatsApp, junto com as vendas da maquininha.
      </p>
    ),
  },
  {
    title: "Existe alguma taxa associada à ativação do serviço?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Nenhuma taxa será cobrada do cliente azulzinha pela habilitação de pagamentos no WhatsApp.
      </p>
    ),
  },
];

function StepHeader({ stepNumber, stepTitle, sectionTitle, subtitle, subtitleAfterStep }: {
  stepNumber: number;
  stepTitle: string;
  sectionTitle: string;
  subtitle: string;
  subtitleAfterStep?: boolean;
}) {
  const stepIndicator = (
    <div className="flex items-center gap-4">
      <div className="w-[49px] h-[49px] shrink-0 rounded-full bg-laranja flex items-center justify-center">
        <span className="text-[26px] text-white">{stepNumber}</span>
      </div>
      <p className="text-[22px] lg:text-[26px] leading-[1.3] text-azul text-left">
        {stepTitle}
      </p>
    </div>
  );

  const subtitleEl = (
    <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
      {subtitle}
    </p>
  );

  return (
    <div className="flex flex-col items-center text-center gap-15">
      <div className="flex flex-col items-center gap-4">
        {sectionTitle && <h2 className="section-title text-azul">{sectionTitle}</h2>}
        {!subtitleAfterStep && subtitleEl}
      </div>
      {subtitleAfterStep ? (
        <div className="flex flex-col items-center gap-6">
          {stepIndicator}
          {subtitleEl}
        </div>
      ) : stepIndicator}
    </div>
  );
}

export default function PagamentosWhatsApp() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Pagamentos por WhatsApp"
        description="Receba pagamentos no WhatsApp com a mesma tecnologia da sua maquininha."
        checkItems={[]}
        buttonText="Saiba como"
        buttonHref="#dobrawpp1"
        backgroundImage="/images/pagamentos-whatsapp/hero-bg.png"
      />

      <div id="dobrawpp1" />

      <FeatureSection
        title="A azulzinha está no WhatsApp, assim como os brasileiros!"
        paragraphs={[
          "Os clientes da azulzinha já podem receber pagamentos pelo WhatsApp com a mesma agilidade e segurança da maquininha da CAIXA.",
          "Habilite hoje o envio de cobranças com o parceiro de pagamentos Fiserv e comece a faturar!",
        ]}
        image="/images/pagamentos-whatsapp/intro-celphone.png"
        imageAlt="Celular com WhatsApp azulzinha"
        cardWidth="605px"
        cardHeight="334px"
        imageClassName="object-contain"
        imageWidth="310px"
        imageHeight="528px"
      />

      <div className="h-22.5" />

      <BeneficiosGridSection
        title="Explore as vantagens de vender no aplicativo mais usado do Brasil"
        subtitle="Ative os pagamentos e ganhe um poderoso aliado para sua estratégia de vendas"
        beneficios={beneficios}
        buttonText=""
      />

      <BlueCta
        title="Ainda não tem sua azulzinha?"
        buttonText="Peça agora mesmo"
        buttonHref="/peca-azulzinha"
        sectionClassName="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F7_100%)]"
      />

      <StepsCarouselSection
        steps={stepsAtivar}
        bgClassName="bg-white"
        paddingClassName="py-14 lg:py-20"

        headerContent={
          <StepHeader
            stepNumber={1}
            stepTitle="Vincule sua conta da azulzinha através da tecnologia Fiserv"
            sectionTitle="Veja como é fácil ativar o serviço"
            subtitle="Selecione a Fiserv, parceira da azulzinha no WhatsApp Business e fature mais. Veja o passo a passo:"
          />
        }
      />

      <StepsCarouselSection
        steps={stepsVender}
        bgClassName="bg-white"
        paddingClassName="pb-14 lg:pb-[110px]"
        headerContent={
          <StepHeader
            stepNumber={2}
            stepTitle="Faça a sua primeira venda e envie a cobrança"
            sectionTitle=""
            subtitle="Depois de configurar a Fiserv, veja como vender e receber um pagamento direto na sua conversa."
            subtitleAfterStep
          />
        }
      />

      <FeatureSection
        title="Gerencie suas vendas no App da azulzinha"
        paragraphs={[
          "Aonde quer que esteja, você pode visualizar e controlar suas vendas de forma simples e eficiente, desfrutando de relatórios personalizados e serviços exclusivos.",
          "Baixe agora mesmo o App da azulzinha para Android e iOS e simplifique sua gestão hoje mesmo!",
        ]}
        image="/images/pagamentos-whatsapp/app-celular.png"
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
        title="Tire suas dúvidas sobre pagamentos por WhatsApp"
        items={faqItems}
      />

      <SolucoesSection />

      <Footer />
    </main>
  );
}

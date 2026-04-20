import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BeneficiosGridSection from "@/components/shared/BeneficiosGridSection";
import BancosSection from "@/components/pix-azulzinha/BancosSection";
import CtaSection from "@/components/shared/CtaSection";
import StepsTimelineSection from "@/components/shared/StepsTimelineSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";

const beneficios = [
  {
    icon: "/images/pix-azulzinha/icon-benefit-1.svg",
    title: "Mais eficiência",
    description: "Simplifique a jornada de compra do seu cliente e elimine etapas desnecessárias.",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-2.svg",
    title: "Mais facilidade",
    description: "Transações concluídas em segundos, direto pelo app do banco ou carteira digital do cliente.",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-3.svg",
    title: "Mais segurança",
    description: "O pagamento por aproximação mantém as informações protegidas, sem expor o saldo.",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-4.svg",
    title: "Mais economia",
    description: "Diminua a movimentação e o transporte de dinheiro em espécie",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-5.svg",
    title: "Mais liquidez",
    description: "Receba suas transações em segundos, sem taxa de MDR",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-6.svg",
    title: "Mais disponibilidade",
    description: "Aceite Pix 24 horas por dia, 7 dias por semana, sem interrupções",
  },
  {
    icon: "/images/pix-azulzinha/icon-benefit-7.svg",
    title: "Mais opções",
    description: "Transacione com diversas instituições de pagamento",
  },
];

const stepsApp = [
  { number: 1, text: "Na tela inicial do App da azulzinha, certifique-se de que o código de estabelecimento está correto e toque em \u201CMais opções\u201D;" },
  { number: 2, text: "Em seguida, no menu \u201CMais opções\u201D, selecione \u201CConfigurações\u201D;" },
  { number: 3, text: "Na tela \u201CConfigurações\u201D, toque em Chaves Pix;" },
  { number: 4, text: "Digite a senha administrativa do seu estabelecimento e toque em \u201CContinuar\u201D;" },
  { number: 5, text: "Selecione a CAIXA\u00B9 ou qualquer outro banco em que possui o Pix cadastrado;" },
  { number: 6, text: "Escolha como deseja receber o token da verificação em duas etapas;" },
  { number: 7, text: "Insira o código token. Atenção: ele é válido por 90 segundos. Caso não o receba, solicite-o novamente. Se o token for digitado incorretamente, o cronômetro reiniciará;" },
  { number: 8, text: "Escolha o tipo de chave que deseja cadastrar. A chave precisa ser a mesma cadastrada no banco de sua preferência;" },
  { number: 9, text: "Confira e confirme a chave cadastrada;" },
  { number: 10, text: "Depois da tela de resumo da operação, aguarde o término do processo de habilitação do Pix;" },
  { number: 11, text: "Pronto! Sua chave foi cadastrada com sucesso. Boas vendas!" },
];

const stepsMaquininha = [
  { number: 1, text: "No menu da tela inicial da sua azulzinha, selecione \u201CMais opções\u201D;" },
  { number: 2, text: "Na tela \u201CMais opções\u201D, selecione a opção 3, menu \u201CConfigurações\u201D;" },
  { number: 3, text: "Escolha a opção \u201CChave Pix\u201D para prosseguir;" },
  { number: 4, text: "Digite a senha administrativa e toque em continuar;" },
  { number: 5, text: "Aguarde para seguir com a verificação;" },
  { number: 6, text: "Selecione a CAIXA\u00B9 ou qualquer outro banco em que possui o Pix cadastrado;" },
  { number: 7, text: "Escolha como deseja receber o token da verificação em duas etapas;" },
  { number: 8, text: "Insira o código token para prosseguir com o cadastro;" },
  { number: 9, text: "Selecione o tipo de chave que deseja cadastrar;" },
  { number: 10, text: "Confirme os dados e se certifique de que a chave é a mesma que você já cadastrou no seu banco de preferência;" },
  { number: 11, text: "Aguarde a confirmação;" },
  { number: 12, text: "Pronto! Sua chave Pix foi cadastrada com sucesso na azulzinha." },
];

const stepsTransacao = [
  { number: 1, text: "Selecione \"Nova Venda\";" },
  { number: 2, text: "Insira o valor da transação;" },
  { number: 3, text: "Um QR Code será exibido para o cliente fazer o pagamento;" },
  { number: 4, text: "Aguarde a mensagem de \"Transação Aprovada\" aparecer na tela;" },
  { number: 5, text: "Imprima ou envie o comprovante por e-mail para o cliente." },
];

const chaveCaixaFootnote = "1) Cliente CAIXA: não será necessário informar \u201Cusuário\u201D ou \u201Csenha\u201D no momento da etapa de associação da chave Pix. E, ao final do processo, é preciso aguardar cerca de 2 minutos para a habilitação ser concluída com sucesso.";

const faqItems = [
  {
    title: "O que é o Pix por aproximação?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        O Pix por aproximação é uma nova forma de pagamento criada pelo Banco Central que permite ao cliente pagar com Pix apenas aproximando o celular da maquininha, sem precisar abrir o aplicativo do banco, escanear QR Code ou digitar dados manualmente.
      </p>
    ),
  },
  {
    title: "Quais são as vantagens do Pix por aproximação?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        As principais vantagens incluem maior agilidade no pagamento, mais segurança por não expor dados bancários, praticidade para o cliente e mais uma opção de recebimento para o seu negócio.
      </p>
    ),
  },
  {
    title: "O que é uma chave Pix?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        A chave Pix é um identificador que representa sua conta para receber transferências. Pode ser seu CPF/CNPJ, e-mail, número de telefone ou uma chave aleatória gerada pelo sistema.
      </p>
    ),
  },
  {
    title: "Para que e por que preciso de uma chave Pix?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        A chave Pix é necessária para que você possa receber pagamentos via Pix na sua maquininha. Sem ela, não é possível habilitar a função de cobrança por Pix.
      </p>
    ),
  },
  {
    title: "Como consigo a chave e credenciais Pix para cadastro?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Você pode cadastrar sua chave Pix diretamente pelo App da azulzinha ou pela própria maquininha, seguindo o passo a passo disponível nesta página.
      </p>
    ),
  },
];

export default function PixAzulzinha() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Pix"
        description="Receba transferências 24 horas direto na sua azulzinha e fature ainda mais."
        checkItems={[]}
        buttonText="Habilite já"
        buttonHref="#habilita"
        backgroundImage="/images/pix-azulzinha/hero-bg.png"
      />

      <FeatureSection
        title="É aproximação, é agilidade, é Pix!"
        paragraphs={[
          "Com o Pix por aproximação, seus clientes pagam em poucos segundos aproximando o celular da sua azulzinha. Simples, prático e direto pelo app do banco ou carteira digital, o pagamento é concluído rapidamente, garantindo agilidade no atendimento e uma experiência melhor para o seu cliente.",
          "Rápido e seguro, o Pix por aproximação está disponível em todas as maquininhas.",
          "Ainda não ativou o Pix na sua azulzinha?",
        ]}
        image="/images/pix-azulzinha/cel-maq-icons.png"
        imageAlt="Celular e maquininha com ícones de pagamento"
        cardWidth="605px"
        cardHeight="398px"
        imageClassName="object-contain"
        imageWidth="507px"
        imageHeight="436px"
        buttonText="Veja como habilitar"
        buttonHref="#habilita"
      />

      <BeneficiosGridSection
        title="Com o Pix na azulzinha, fica mais fácil para pagar e mais fácil para vender:"
        beneficios={beneficios}
        buttonCaption="Se você ainda não tem a azulzinha, peça a sua e ofereça o Pix"
        buttonText="Peça já"
        buttonHref="/peca-azulzinha"
      />

      <BancosSection />

      <div id="habilita" />

      <CtaSection
        eyebrow="Tutorial"
        title="Como habilitar o Pix na azulzinha da CAIXA"
        description="Para usar o Pix na sua azulzinha, habilite a função pelo aplicativo ou diretamente na maquininha. Confira o passo a passo:"
        buttonText="Habilitar via App"
        buttonHref="#anchor-app"
        button2Text="Habilitar via Maquininha"
        button2Href="#anchor-maq"
        image="/images/pix-azulzinha/cta-bg.png"
        imageAlt="Mercado com azulzinha"
      />

      <div id="anchor-app" />

      <StepsTimelineSection
        title="Como habilitar o Pix no App da azulzinha"
        steps={stepsApp}
        phoneImage="/images/pix-azulzinha/phone-mockup-1.png"
        footnote={chaveCaixaFootnote}
      />

      <div id="anchor-maq" />

      <StepsTimelineSection
        title="Como habilitar o Pix na maquininha"
        steps={stepsMaquininha}
        phoneImage="/images/pix-azulzinha/phone-mockup-2.png"
        bgColor="bg-[#F4F4F4]"
        footnote={chaveCaixaFootnote}
      />

      <StepsTimelineSection
        title="Faça a primeira transação com Pix na sua maquininha"
        subtitle="Depois de habilitar a função de pagamento por Pix via App da azulzinha ou maquininha, siga o passo a passo para fazer a primeira venda:"
        steps={stepsTransacao}
        phoneImage="/images/pix-azulzinha/phone-mockup-3.png"
        footnote="Se o comprovante não for impresso, ocorrerá a devolução dos valores - desfazimento da transação."
      />

      <CtaSection
        title="Com a azulzinha da CAIXA você pode muito mais!"
        description="Preencha o formulário e receba uma oferta personalizada para seu negócio, com as melhores taxas e condições que só a CAIXA pode oferecer para você."
        buttonText="Peça a sua azulzinha"
        buttonHref="/peca-azulzinha"
        image="/images/pix-azulzinha/cta-bg.png"
        imageAlt="Mercado com azulzinha"
      />

      <FaqSection
        title="Perguntas frequentes"
        items={faqItems}
        buttonText="Ver todas perguntas"
      />

      <Footer />
    </main>
  );
}

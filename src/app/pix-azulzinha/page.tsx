import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BeneficiosPixSection from "@/components/pix-azulzinha/BeneficiosPixSection";
import BancosSection from "@/components/pix-azulzinha/BancosSection";
import CtaSection from "@/components/shared/CtaSection";
import StepsTimelineSection from "@/components/shared/StepsTimelineSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";

const stepsApp = [
  { number: 1, text: "Na tela inicial do App, toque no ícone de configuração (engrenagem no canto inferior direito)" },
  { number: 2, text: "Selecione \"Pix\" na lista de opções" },
  { number: 3, text: "Leia as orientações e toque em \"Continuar\"" },
  { number: 4, text: "Informe os dados solicitados: CPF/CNPJ, e-mail e telefone" },
  { number: 5, text: "Escolha o tipo de chave que deseja cadastrar" },
  { number: 6, text: "Confirme os dados e toque em \"Cadastrar\"" },
  { number: 7, text: "Aguarde a validação da chave" },
  { number: 8, text: "Caso necessário, confirme o código enviado por SMS ou e-mail" },
  { number: 9, text: "Após a confirmação, sua chave será ativada" },
  { number: 10, text: "Você receberá uma notificação de sucesso no App" },
  { number: 11, text: "Pronto! Sua chave foi cadastrada com sucesso." },
];

const stepsMaquininha = [
  { number: 1, text: "No menu principal da maquininha, selecione \"Pix\"" },
  { number: 2, text: "Selecione \"Configurações\"" },
  { number: 3, text: "Escolha \"Cadastrar chave Pix\"" },
  { number: 4, text: "Selecione o tipo de chave (CPF/CNPJ, e-mail, telefone ou aleatória)" },
  { number: 5, text: "Informe os dados da chave escolhida" },
  { number: 6, text: "Confirme os dados informados" },
  { number: 7, text: "Aguarde a validação" },
  { number: 8, text: "Se necessário, confirme o código de verificação" },
  { number: 9, text: "Após a confirmação, sua chave será cadastrada" },
  { number: 10, text: "Aguarde a impressão do comprovante" },
  { number: 11, text: "Confira os dados no comprovante impresso" },
  { number: 12, text: "Pronto! Sua chave Pix está ativa na maquininha." },
];

const stepsTransacao = [
  { number: 1, text: "No menu principal, selecione \"Pix\"" },
  { number: 2, text: "Selecione \"Cobrar com Pix\"" },
  { number: 3, text: "Digite o valor da venda e confirme" },
  { number: 4, text: "O QR Code será exibido na tela da maquininha" },
  { number: 5, text: "Peça ao cliente para escanear o QR Code com o celular e confirmar o pagamento" },
];

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
        backgroundImage="/images/pix-azulzinha/hero-bg.png"
      />

      <FeatureSection
        title="É aproximação, é agilidade, é Pix!"
        paragraphs={[
          "Agora, seus clientes podem pagar apenas aproximando o celular da sua azulzinha. Com o Pix por aproximação, a transação é feita de forma rápida, prática e segura — sem precisar abrir o app do banco ou escanear QR Code.",
        ]}
        image="/images/pix-azulzinha/cel-maq-icons.png"
        imageAlt="Celular e maquininha com ícones de pagamento"
        cardWidth="605px"
        cardHeight="398px"
        imageClassName="object-contain"
        imageWidth="507px"
        imageHeight="436px"
        buttonText="Veja como habilitar"
      />

      <BeneficiosPixSection />

      <BancosSection />

      <CtaSection
        title="Como habilitar o Pix na azulzinha da CAIXA"
        description="Para que o Pix funcione na sua azulzinha, você pode habilitar via aplicativo ou na própria maquininha. Confira o passo a passo:"
        buttonText="Habilitar via App"
        button2Text="Habilitar via Maquininha"
        image="/images/pix-azulzinha/cta-bg.png"
        imageAlt="Mercado com azulzinha"
      />

      <StepsTimelineSection
        title="Como habilitar o Pix no App da azulzinha"
        steps={stepsApp}
        phoneImage="/images/pix-azulzinha/phone-mockup-1.png"
        footnote="*Caso você seja cliente CAIXA, a chave poderá ser cadastrada automaticamente com o CPF/CNPJ vinculado à conta."
      />

      <StepsTimelineSection
        title="Como habilitar o Pix na maquininha"
        steps={stepsMaquininha}
        phoneImage="/images/pix-azulzinha/phone-mockup-2.png"
        bgColor="bg-[#F4F4F4]"
        footnote="Se o comprovante não for impresso, ocorrerá a devolução dos valores ao pagador automaticamente."
      />

      <StepsTimelineSection
        title="Faça a primeira transação com Pix na sua maquininha"
        subtitle="Depois de habilitar a função de pagamento por Pix via App da azulzinha ou maquininha, siga o passo a passo para fazer a primeira venda:"
        steps={stepsTransacao}
        phoneImage="/images/pix-azulzinha/phone-mockup-3.png"
      />

      <CtaSection
        title="Com a azulzinha da CAIXA você pode muito mais!"
        description="Preencha o formulário e receba uma oferta personalizada para seu negócio. As melhores taxas e condições estão aqui."
        buttonText="Peça já a sua azulzinha"
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

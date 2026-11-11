import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BenefitsSection from "@/components/shared/BenefitsSection";
import BlueCta from "@/components/shared/BlueCta";
import ComoFuncionaSection from "@/components/deposito-judicial/ComoFuncionaSection";
import SegurancaSection from "@/components/deposito-judicial/SegurancaSection";
import FaqSection from "@/components/shared/FaqSection";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

const CAIXA_DEPOSITO_URL = "https://novodepositojudicial.caixa.gov.br/deposito";

const beneficios = [
  {
    icon: "/images/deposito-judicial/icon-parcelamento.svg",
    text: "Possibilidade de parcelamento do valor",
  },
  {
    icon: "/images/deposito-judicial/icon-digital.svg",
    text: "Processo 100% digital",
  },
  {
    icon: "/images/deposito-judicial/icon-seguranca.svg",
    text: "Ambiente seguro para transações",
  },
  {
    icon: "/images/deposito-judicial/icon-comprovante.svg",
    text: "Comprovante disponível ao final da operação",
  },
  {
    icon: "/images/deposito-judicial/icon-agilidade.svg",
    text: "Agilidade no cumprimento de obrigações judiciais",
  },
];

const steps = [
  {
    number: 1,
    title: "Acesse o portal da CAIXA",
    description: "Informe o número do processo e preencha os dados solicitados.",
    image: "/images/deposito-judicial/step-1.webp",
  },
  {
    number: 2,
    title: "Escolha a forma de pagamento",
    description: "Após a validação dos dados, selecione a opção Cartão de Crédito.",
    image: "/images/deposito-judicial/step-2.webp",
  },
  {
    number: 3,
    title: "Selecione o parcelamento",
    description: "Visualize as condições disponíveis e escolha a quantidade de parcelas desejada.",
    image: "/images/deposito-judicial/step-3.webp",
  },
  {
    number: 4,
    title: "Informe os dados do cartão",
    description: "Preencha as informações do cartão de crédito e confirme a operação.",
    image: "/images/deposito-judicial/step-4.webp",
  },
  {
    number: 5,
    title: "Conclua o pagamento",
    description: "Após a aprovação, você poderá visualizar e salvar o comprovante.",
    image: "/images/deposito-judicial/step-5.webp",
  },
];

const faqItems = [
  {
    title: "Onde o pagamento é realizado?",
    content: (
      <p className="text-[16px] font-normal leading-[1.4] text-black lg:text-[18px]">
        O pagamento é iniciado por meio do Portal da CAIXA e processado pela azulzinha.
      </p>
    ),
  },
  {
    title: "Posso parcelar o pagamento?",
    content: (
      <p className="text-[16px] font-normal leading-[1.4] text-black lg:text-[18px]">
        Sim. As opções de parcelamento são apresentadas durante a jornada de pagamento.
      </p>
    ),
  },
  {
    title: "Recebo comprovante?",
    content: (
      <p className="text-[16px] font-normal leading-[1.4] text-black lg:text-[18px]">
        Sim. Após a conclusão da operação, o comprovante fica disponível para consulta e download.
      </p>
    ),
  },
  {
    title: "Posso pagar qualquer processo?",
    content: (
      <p className="text-[16px] font-normal leading-[1.4] text-black lg:text-[18px]">
        A disponibilidade depende das regras e dos convênios vigentes para cada tribunal.
      </p>
    ),
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Depósito judicial | azulzinha da CAIXA",
  description:
    "Realize depósitos judiciais com cartão de crédito com a azulzinha. Mais praticidade, segurança e possibilidade de parcelamento.",
  path: "/deposito-judicial",
});

export default function DepositoJudicial() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title={
          <>
            Depósito judicial com mais praticidade utilizando{" "}
            <span className="text-[#C5E4F7]">cartão de crédito</span>
          </>
        }
        description="Facilidade, praticidade e mais segurança no pagamento de taxas judiciais."
        checkItems={[]}
        buttonText="Saiba mais"
        buttonHref="#dobra"
        backgroundImage="/images/deposito-judicial/hero-bg.webp"
        imagePositionClassName="object-[center_60%]"
      />

      <FeatureSection
        id="dobra"
        title="Pague depósitos judiciais com cartão de crédito"
        paragraphs={[
          "Agora, depósitos judiciais e taxas vinculadas a processos podem ser pagos com cartão de crédito, oferecendo mais flexibilidade e conveniência para quem precisa realizar o pagamento.",
          "A solução da azulzinha permite pagamento de forma simples, segura e com a possibilidade de parcelamento.",
        ]}
        image="/images/deposito-judicial/pagamento.webp"
        imageAlt="Pessoa pagando um depósito judicial com cartão de crédito no notebook"
        cardWidth="605px"
        cardHeight="398px"
        imageClassName="object-cover"
        hideCard
      />

      <BenefitsSection
        title="Mais facilidade para pagar depósitos judiciais e taxas vinculadas"
        subtitle="Ao escolher o pagamento com cartão de crédito, você conta com benefícios como:"
        items={beneficios}
        textColor="text-azul"
        centerLastRow
      />

      <BlueCta
        title="Realize o pagamento de forma simples, segura e com a possibilidade de parcelamento."
        buttonText="Acesse o Portal da CAIXA"
        buttonHref={CAIXA_DEPOSITO_URL}
        buttonTarget="_blank"
        sectionClassName="bg-linear-to-t from-[#F2F2F2] to-white"
      />

      <ComoFuncionaSection portalHref={CAIXA_DEPOSITO_URL} steps={steps} />

      <SegurancaSection portalHref={CAIXA_DEPOSITO_URL} />

      <FaqSection title="Perguntas frequentes" items={faqItems} />

      <CtaSection
        title="Faça seu pagamento"
        description="Realize seu depósito judicial com mais conveniência utilizando seu cartão de crédito."
        buttonText="Ir para o Portal da CAIXA"
        buttonHref={CAIXA_DEPOSITO_URL}
        buttonTarget="_blank"
        image="/images/azulzinha-aproxima/cta-photo.webp"
        imageAlt="Pessoa segurando um cartão de crédito e um celular"
      />

      <Footer />
    </main>
  );
}

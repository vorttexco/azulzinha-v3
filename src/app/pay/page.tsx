import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BeneficiosGridSection from "@/components/shared/BeneficiosGridSection";
import StepsCarouselSection, { StepItem } from "@/components/shared/StepsCarouselSection";
import FeatureSection from "@/components/shared/FeatureSection";
import CtaSection from "@/components/shared/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";
import VantagensPaySection from "@/components/pay/VantagensPaySection";
import SeguraConfiavelSection from "@/components/pay/SeguraConfiavelSection";

const oQueVocePaga = [
  {
    icon: "/images/pay/icon-ipva.svg",
    title: "IPVA",
    description: "Atual e de anos\nanteriores",
  },
  {
    icon: "/images/pay/icon-multas.svg",
    title: "Multas",
    description: "Pague todas as multas\nde uma vez só",
  },
  {
    icon: "/images/pay/icon-licenciamento.svg",
    title: "Licenciamento",
    description: "Mesmo após o\nvencimento",
  },
];

const passoSteps: StepItem[] = [
  { number: 1, text: "Após acessar a conta, digite a placa no campo de busca", image: "/images/pay/passo-1.png" },
  { number: 2, text: "Confira os débitos pendentes e escolha quais deseja regularizar", image: "/images/pay/passo-2.png" },
  { number: 3, text: "Selecione a quantidade de parcelas e finalize o pagamento usando o seu cartão de crédito", image: "/images/pay/passo-3.png" },
  { number: 4, text: "Pronto! Sua conta foi paga e será processada em até 2 dias", image: "/images/pay/passo-4.png" },
];

const faqItems = [
  {
    title: "Como consultar meus débitos veiculares?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black flex flex-col gap-2">
        <p>Ao acessar o portal da Azulzinha Pay, siga as etapas para consultar as informações do seu veículo.</p>
        <p>1. No campo &ldquo;Digite sua Placa&rdquo;, insira a placa completa do veículo e clique no botão &ldquo;Consultar&rdquo;.</p>
        <p>2. Em seguida, forneça os quatros últimos dígitos do seu RENAVAN, e o estado em que o veículo está registrado. Dependendo do Detran, pode ser necessário informar o RENAVAM completo, e o CPF do proprietário para concluir a consulta.</p>
        <p>3. O número do REVAVAN (Registro Nacional de Veículos Automotores) pode ser encontrado no documento do veículo, na nota fiscal, no site ou aplicativo do Detran de seu estado ou no recibo de pagamento de débitos.</p>
        <p>4. Você pode salvar os dados do veículo para consultas futuras clicando em &ldquo;Salvar Veículo&rdquo;.</p>
        <p>5. Caso haja contas a pagar relacionadas ao seu carro, você poderá selecionar quais deseja pagar. Se não houver débitos, será informado de que está tudo regular.</p>
      </div>
    ),
  },
  {
    title: "Quais débitos posso pagar?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Você pode pagar IPVA, multas e licenciamento veicular dos principais Detrans do Brasil.
      </p>
    ),
  },
  {
    title: "Quais são as formas de pagamento?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
  {
    title: "Quais são as taxas de parcelamento?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
  {
    title: "Posso pagar débitos vencidos?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
];

export default function AzulzinhaPay() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="azulzinha pay"
        description="Uma solução da Caixa, garantia de segurança e confiabilidade."
        checkItems={[]}
        inputPlaceholder="Digite seu CPF aqui"
        buttonText="Cadastrar gratuitamente"
        backgroundImage="/images/cliente-loterica/hero-bg-pessoa-72b5d7.png"
      />

      <BeneficiosGridSection
        title="O que você pode pagar"
        beneficios={oQueVocePaga}
        buttonText=""
        paddingClassName="py-14 lg:py-20"
      />

      <VantagensPaySection />

      <StepsCarouselSection
        title="Passo a passo para habilitar a azulzinha no seu App CAIXA Tem"
        description=""
        steps={passoSteps}
        bgClassName="bg-white"
        paddingClassName="py-14 lg:py-20"
        bottomButtonText="Consulte seus débitos"
      />

      <FeatureSection
        title="Parcelamento de IPVA, licenciamento e multas em até 12"
        paragraphs={["Abra sua conta e consulte gratuitamente os débitos do seu veículo"]}
        image="/images/pay/parcelamento-ipva.png"
        imageAlt="Parcelamento de IPVA"
        cardWidth="605px"
        cardHeight="398px"
        imageClassName="object-contain"
        bgColor="bg-white"
        buttonText="Consultar débitos"
        hideCard
        cardBorderRadius="rounded-[30px]"
      />

      <SeguraConfiavelSection />

      <CtaSection
        title="A azulzinha pay é a sua nova forma de pagar débitos veiculares!"
        description="Cadastre-se grátis e pague seus débitos em minutos."
        inputPlaceholder="Digite seu CPF aqui"
        buttonText="Cadastrar"
        image="/images/pay/cta-market.png"
        imageAlt="Azulzinha Pay"
      />

      <FaqSection title="Perguntas frequentes" items={faqItems} />

      <Footer />
    </main>
  );
}

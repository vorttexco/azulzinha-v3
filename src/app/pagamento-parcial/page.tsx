import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import VantagensParciaisSection from "@/components/pagamento-parcial/VantagensParciaisSection";
import FeatureSection from "@/components/shared/FeatureSection";
import FullImageSection from "@/components/shared/FullImageSection";
import StepsCarouselSection from "@/components/shared/StepsCarouselSection";
import ServicosRelacionadosSection from "@/components/pagamento-parcial/ServicosRelacionadosSection";
import Footer from "@/components/shared/Footer";

const habilitarSteps = [
  { number: 1, text: "No menu principal, selecione a opção \"Serviços\"", image: "/images/pagamento-parcial/device-1.png" },
  { number: 2, text: "Entre as opções de lista, selecione \"Pagamento Parcial\"", image: "/images/pagamento-parcial/device-2.png" },
  { number: 3, text: "O sistema pedirá uma senha administrativa em uma nova tela", image: "/images/pagamento-parcial/device-3.png" },
  { number: 4, text: "Ao digitar a senha confirme se quer habilitar a funcionalidade", image: "/images/pagamento-parcial/device-4.png" },
  { number: 5, text: "Na tela seguinte, o sistema informará \"Funcionalidade Habilitada\"", image: "/images/pagamento-parcial/device-5.png" },
  { number: 6, text: "Aguarda a emissão do comprovante de confirmação e boas vendas!", image: "/images/pagamento-parcial/device-6.png" },
];

export default function PagamentoParcial() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Pagamento Parcial"
        description="Facilite as condições do cliente na hora de pagar e incremente suas receitas."
        checkItems={[]}
        buttonText="Peça sua azulzinha"
        backgroundImage="/images/pagamento-parcial/hero-bg-72b5d7.png"
      />

      <VantagensParciaisSection />

      <FeatureSection
        title="Clientes com cartão Visa e Elo têm mais comodidade na hora de pagar"
        paragraphs={[
          "O Pagamento Parcial é um serviço que pode fazer toda a diferença na redução de negativas no pagamento presencial em seu negócio, pois permite ao cliente Visa ou Elo pagar uma parte da compra com o cartão e acertar a diferença com outro meio de pagamento.",
          "Ao passar pelo caixa, basta que o cliente confirme na própria azulzinha como deseja complementar o pagamento para o operador, que pode ser de diversas formas: em dinheiro, outro cartão de crédito ou débito e transferências bancárias.",
        ]}
        image="/images/pagamento-parcial/maquinas-parcial.png"
        imageAlt="Maquininhas com Pagamento Parcial"
        cardWidth="605px"
        cardHeight="398px"
        imageClassName="object-contain"
        paddingClassName="pb-14 lg:pb-[200px]"
        bgColor="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]"
      />

      <FullImageSection
        image="/images/pagamento-parcial/banner-full.png"
        imageAlt="Azulzinha - Maquininha de Cartão da CAIXA"
        heightMobile="h-[250px]"
        heightDesktop="lg:h-[604px]"
      />

      <StepsCarouselSection
        title="Como habilitar o serviço"
        description="Se você já vende com azulzinha, é preciso que ela esteja com atualização em dia do software. Para ter certeza que você está na última versão, basta deixar a sua maquininha conectada durante a noite e ela atualizará automaticamente."
        steps={habilitarSteps}
        bgClassName="bg-white"
        cardMode="inline"
      />

      <ServicosRelacionadosSection />

      <Footer />
    </main>
  );
}

import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import VantagensParciaisSection from "@/components/pagamento-parcial/VantagensParciaisSection";
import FeatureSection from "@/components/shared/FeatureSection";
import FullImageSection from "@/components/shared/FullImageSection";
import HabilitarCarouselSection from "@/components/pagamento-parcial/HabilitarCarouselSection";
import ServicosRelacionadosSection from "@/components/pagamento-parcial/ServicosRelacionadosSection";
import Footer from "@/components/shared/Footer";

const habilitarSteps = [
  {
    number: 1,
    title: "Menu principal",
    content: (
      <div className="flex flex-col gap-1">
        <span>0 &nbsp;- Pix</span>
        <span>1 &nbsp;- Crédito</span>
        <span>2 &nbsp;- Débito</span>
        <span>3 &nbsp;- Voucher</span>
        <span>4 &nbsp;- Antecipação</span>
        <span className="bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)] text-white px-4 py-2 pr-10 rounded-md w-fit">5 &nbsp;- Serviços</span>
      </div>
    ),
    description: "No menu principal, selecione a opção \"Serviços\"",
  },
  {
    number: 2,
    title: "Serviços",
    content: (
      <div className="flex flex-col gap-1">
        <span>0 &nbsp;- Ekko</span>
        <span>1 &nbsp;- E-vale Ultragáz</span>
        <span>2 &nbsp;- Recarga Celular</span>
        <span>3 &nbsp;- RodOil Mais</span>
        <span>4 &nbsp;- Pagar Débitos</span>
        <span className="bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)] text-white px-4 py-2 rounded-md w-fit">5 &nbsp;- Pagamento Parcial</span>
      </div>
    ),
    description: "Entre as opções de lista, selecione \"Pagamento Parcial\"",
  },
  {
    number: 3,
    title: "Pagamento Parcial",
    content: (
      <div className="flex flex-col items-center gap-3 pt-4">
        <span>Digite a senha do supervisor&quot;</span>
        <div className="bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)] text-white pb-1.5 pt-3 px-10  rounded-md text-center tracking-[4px]">******</div>
      </div>
    ),
    description: "O sistema pedirá uma senha administrativa em uma nova tela",
  },
  {
    number: 4,
    title: "Pagamento Parcial",
    content: (
      <div className="flex flex-col items-center gap-3 pt-4 text-azul text-center font-normal">
        <span>Deseja que a funcionalidade permaneça habilitada?</span>
        <div className="bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)] text-white px-10 py-2 rounded font-normal">12 - Não</div>
      </div>
    ),
    description: "Ao digitar a senha confirme se quer habilitar a funcionalidade",
  },
  {
    number: 5,
    title: "Pagamento Parcial",
    content: (
      <div className="flex items-center justify-center pt-6">
        <span className=" text-azul font-normal text-center">Funcionalidade Habilitada</span>
      </div>
    ),
    description: "Na tela seguinte, o sistema informará \"Funcionalidade Habilitada\"",
  },
  {
    type: "image" as const,
    image: "/images/pagamento-parcial/logo-credenciada.png",
    description: "Aguarda a emissão do comprovante de confirmação e boas vendas!",
  },
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
        buttonHref="/peca-azulzinha"
        backgroundImage="/images/pagamento-parcial/hero-bg.png"
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
        paddingClassName="pb-14 pt-14 lg:pb-[200px]"
        bgColor="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]"
      />

      <FullImageSection
        image="/images/pagamento-parcial/banner-full.png"
        imageAlt="Azulzinha - Maquininha de Cartão da CAIXA"
        heightMobile="h-[250px]"
        heightDesktop="lg:h-[604px]"
      />

      <HabilitarCarouselSection steps={habilitarSteps} />

      <ServicosRelacionadosSection />

      <Footer />
    </main>
  );
}

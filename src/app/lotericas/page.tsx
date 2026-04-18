import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import BenefitsSection from "@/components/shared/BenefitsSection";
import PossibilitiesSection from "@/components/shared/PossibilitiesSection";
import BlueCta from "@/components/shared/BlueCta";
import Footer from "@/components/shared/Footer";
import NoDebitoSection from "@/components/cliente-loterica/NoDebitoSection";
import AproveiteCondicoesSection from "@/components/cliente-loterica/AproveiteCondicoesSection";
import { asset } from "@/lib/assets";

const beneficiosItems = [
  { icon: "/images/portal-azulzinha/portal1.png", text: "Não há cobrança de aluguel ou taxa para você, Lotérico" },
  { icon: "/images/portal-azulzinha/portal2.png", text: "Gera mais oportunidade no fluxo e volume de transações" },
  { icon: "/images/portal-azulzinha/portal3.png", text: "Mais segurança, eliminando a movimentação de dinheiro em espécie" },
  { icon: "/images/portal-azulzinha/portal4.png", text: "Segurança e redução de despesa de numerário na sua unidade Lotérica" },
  { icon: "/images/portal-azulzinha/portal5.png", text: "Comodidade e praticidade no dia a dia do cliente" },
];

const azulzinhaLotericaCards = [
  {
    icon: "/images/cliente-loterica/icon-agilidade.svg",
    title: "Agilidade para reduzir filas",
  },
  {
    icon: "/images/cliente-loterica/icon-mobilidade.png",
    title: "Mobilidade para receber pagamentos em qualquer lugar",
  },
  {
    icon: "/images/cliente-loterica/icon-comodidade.svg",
    title: "Comodidade nos atendimentos",
  },
  {
    icon: "/images/cliente-loterica/icon-praticidade.svg",
    title: "Praticidade para a sua operação",
  },
];

export default function ClienteLoterica() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Fature ainda mais com a azulzinha Lotérica pro"
        description="Aumente seu faturamento recebendo boletos, jogos e contas com qualquer cartão no TFL ou com a azulzinha pro."
        checkItems={[]}
        buttonText="Saiba mais"
        buttonHref="#dobra"
        backgroundImage="/images/cliente-loterica/hero-bg.png"
      />

      <div id="dobra" />
      <NoDebitoSection />

      <BenefitsSection
        title="Benefícios para sua Lotérica e todos os seus clientes"
        textColor="text-azul"
        items={beneficiosItems}
      />

      <PossibilitiesSection
        title="azulzinha Lotérica pro: o terminal móvel para você!"
        description="Tenha as facilidades do serviço de conveniência do TFL no terminal móvel. Saiba quais são as vantagens:"
        image="/images/cliente-loterica/azulzinha-loterica-hero.png"
        imageAlt="azulzinha Lotérica pro"
        cards={azulzinhaLotericaCards}
        bgColor="bg-cinza-claro"
      />

      <AproveiteCondicoesSection />

      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
          <Image
            src={asset("/images/conveniencia/lotericalogo.png")}
            alt="azulzinha Lotérica"
            width={220}
            height={60}
            className="object-contain h-auto w-auto max-h-[60px]"
          />
          <h2 className="section-title text-azul max-w-[876px]">
            Quer saber como pagar suas contas na Lotérica?
          </h2>
          <a href="/cliente-loterica" className="btn-laranja">
            Clique aqui
          </a>
        </div>
      </section>

      <BlueCta
        title="Habilite o Serviço de Conveniência"
        description="No Conexão Parceiros, aceite o &ldquo;Termo de Credenciamento azulzinha Serviço de Conveniência&rdquo; e acesse a cartilha e o vídeo com o passo a passo de ativação."
        buttonText="Ir para o Conexão Parceiros"
        buttonHref="https://www.parceiros.caixa.gov.br/"
        buttonTarget="_blank"
        sectionClassName="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]"
        contentClassName="!px-[100px]"
      />

      <Footer />
    </main>
  );
}

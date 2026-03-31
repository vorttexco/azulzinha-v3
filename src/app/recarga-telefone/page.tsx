import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BlueCta from "@/components/shared/BlueCta";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import { asset } from "@/lib/assets";

export default function RecargaTelefone() {
  return (
    <main>
      <Navbar />
      <HeroSection
        title="Recarga de Telefonia"
        description="Habilite o serviço sem custo na sua maquininha e tenha uma oportunidade extra de receita."
        checkItems={[]}
        buttonText="Conheça"
        backgroundImage="/images/hero-backgrounds/recarga-telefone.png"
      />
      {/* Feature + Cards no mesmo bloco com gradiente */}
      <div className="bg-linear-to-t from-[#F2F2F2] to-white">
        <FeatureSection
          title="A Azulzinha da Caixa oferece mais uma modalidade de negócios para você"
          paragraphs={[
            "Além de facilitar as vendas no seu estabelecimento, a maquininha permite que você ofereça o serviço de recarga de telefonia para seus clientes. E o melhor disso tudo: sem qualquer custo adicional. Basta habilitar o serviço direto nela e começar a vender.",
          ]}
          image="/images/recarga-telefone/featuretel.jpg"
          imageAlt="Recarga de telefonia azulzinha"
          cardWidth="814px"
          cardHeight="426px"
          cardBorderRadius="rounded-[20px]"
          hideCard
          bgColor="bg-transparent"
          paddingClassName="pt-14 lg:pt-27.5 pb-6 lg:pb-10"
        />

        {/* Cards */}
        <div className="relative z-10 -mt-15 max-w-360 mx-auto px-7.5 lg:px-25 pb-14 lg:pb-20 flex flex-col lg:flex-row gap-5 lg:gap-7.5">
          {[
            { icon: "/images/recarga-telefone/1.png", text: "Sem custos adicionais" },
            { icon: "/images/recarga-telefone/2.png", text: "Mais uma oportunidade de venda e aumento de receita" },
          ].map((card) => (
            <div
              key={card.text}
              className="flex flex-col justify-center gap-3 bg-white rounded-[10px] shadow-[0px_4px_10px_0px_#00000014] px-6 lg:w-151.25 h-40.75 shrink-0"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image src={asset(card.icon)} alt="" fill className="object-contain" />
              </div>
              <p className="text-azul text-[16px] leading-[1.4]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <BlueCta
        title="Conheça também as soluções para vendas online da azulzinha"
        buttonText="Saiba mais"
      />
      <Footer />
    </main>
  );
}

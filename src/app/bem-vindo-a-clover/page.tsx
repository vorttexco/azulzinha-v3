import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import WelcomeHeroSection from "@/components/bem-vindo-a-clover/WelcomeHeroSection";
import ManuaisSection from "@/components/bem-vindo-a-clover/ManuaisSection";
import VideoSection from "@/components/shared/VideoSection";
import PortalCloverSection from "@/components/bem-vindo-a-clover/PortalCloverSection";
import CloverAppsSection from "@/components/clover/CloverAppsSection";
import CategorizedCardsSection from "@/components/shared/CategorizedCardsSection";
import appsData from "@/app/azulzinhasmart/appsData";
import HelpCtaSection from "@/components/help/HelpCtaSection";
import Footer from "@/components/shared/Footer";
import { SOCIAL_LINKS } from "@/lib/social";

const cloverVideos = [
  {
    title: "Como funciona a automação comercial?",
    videoSrc:
      "https://azulzinhadacaixa.com.br/midias/Fiserv_azulzinha_Automacao_Comercial_V3.mp4",
  },
  {
    title: "Como aproveitar o Portal Clover?",
    videoSrc: "https://azulzinhadacaixa.com.br/midias/video-clover-dashboard.mp4",
  },
  {
    title: "Como gerenciar suas vendas na Clover?",
    videoSrc: "https://azulzinhadacaixa.com.br/midias/video-transacoes.mp4",
  },
  {
    title: "Como acessar seu relatório de vendas?",
    videoSrc: "https://azulzinhadacaixa.com.br/midias/video-relatorios.mp4",
  },
  {
    title: "Como gerenciar sua equipe na Clover?",
    videoSrc: "https://azulzinhadacaixa.com.br/midias/video-Funcionarios.mp4",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Bem-vindo à Clover: Soluções em Pagamentos | azulzinha da CAIXA",
  description:
    "Conheça todas funcionalidades e aproveite ao máximo seu dispostivo: manuais, aplicativos, suporte, dashboard e muito mais. Clique e confira agora!",
  path: "/bem-vindo-a-clover",
});

export default function BemVindoACloverPage() {
  return (
    <main>
      <Navbar />
      <WelcomeHeroSection />
      <ManuaisSection />
      <VideoSection
        title="Configure sua Clover com a ajuda de nossos tutoriais"
        videos={cloverVideos}
        href={SOCIAL_LINKS.youtube}
      />
      <PortalCloverSection />
      <div id="apps">
        <CloverAppsSection />
        <CategorizedCardsSection
          data={appsData}
          title="Explore novas opções de aplicativos para otimizar e expandir seu negócio"
          subtitle="Escolha o aplicativo ideal para seu negócio e contrate com facilidade"
          searchPlaceholder="Buscar pelo nome"
        />
      </div>
      <div id="suporte">
        <HelpCtaSection showCaixaTem={false} />
      </div>
      <Footer />
    </main>
  );
}

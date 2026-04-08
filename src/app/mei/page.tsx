import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import SimpleVideoSection from "@/components/shared/SimpleVideoSection";
import BenefitsSection from "@/components/shared/BenefitsSection";
import BandeirasSection from "@/components/shared/BandeirasSection";
import StepsCarouselSection, { StepItem } from "@/components/shared/StepsCarouselSection";
import BlueCta from "@/components/shared/BlueCta";
import VideoSection from "@/components/shared/VideoSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/shared/Footer";

const comAzulzinhaItems = [
  { icon: "/images/mei/icon-link-pagamento.png", text: "Link de pagamento" },
  { icon: "/images/mei/icon-qrcode.png", text: "QR Code" },
  { icon: "/images/mei/icon-gestao.png", text: "Gestão facilitada" },
  { icon: "/images/mei/icon-suporte.png", text: "Suporte 100% digital" },
  { icon: "/images/mei/icon-aproximacao.svg", text: "Pagamentos por aproximação" },
];

const ativacaoSteps: StepItem[] = [
  { number: 1, text: 'Na tela inicial do App CAIXA Tem, toque em "azulzinha". Importante: você precisa ter uma Conta Digital MEI para visualizar esta opção no menu "Produtos e Serviços".', image: "/images/mei/ativacao-1.png" },
  { number: 2, text: 'Em seguida, você verá uma tela que explica os benefícios da azulzinha para o dia a dia do seu negócio. Toque em "próximo".', image: "/images/mei/ativacao-2.png" },
  { number: 3, text: 'Na tela de escolha do seu plano de uso, você verá o "Plano Flex" sem mensalidade. Toque em "Aceitar plano" para prosseguir. E tocando em "ver mais detalhes" você visualiza suas taxas.', image: "/images/mei/ativacao-3.png" },
  { number: 4, text: 'Clique em "Continuar" para prosseguir com a revisão dos seus dados cadastrais e a leitura dos termos e condições de uso da azulzinha.', image: "/images/mei/ativacao-4.png" },
  { number: 5, text: "Verifique seus dados e corrija, se necessário. Antes de confirmar, leia e aceite os Termos e Condições.", image: "/images/mei/ativacao-5.png" },
  { number: 6, text: 'Na tela de resumo, confira sua proposta, leia o Contrato de serviços e clique em "Confirmar". Agora é só aguardar a liberação da sua azulzinha!', image: "/images/mei/ativacao-6.png" },
];

const identificacaoSteps: StepItem[] = [
  { number: 1, text: 'Selecione a azulzinha no menu "Serviços e Produtos" e clique em "Continuar".', image: "/images/mei/identificacao-1.png" },
  { number: 2, text: "Digite o número do celular usado no seu cadastro e seu CPF para receber um SMS com o link de acesso, que é válido por 24 horas.", image: "/images/mei/identificacao-2.png" },
  { number: 3, text: 'Clique no link de acesso e realize a confirmação da sua identificação. Basta conferir as indicações na tela e clicar em "Começar".', image: "/images/mei/identificacao-3.png" },
  { number: 4, text: "Na tela de permissão do acesso, confira os termos de uso, marque a opção de aceite e clique em permitir.", image: "/images/mei/identificacao-4.png" },
  { number: 5, text: "Tire uma foto do seu documento - CNH ou RG - e siga as orientações. Será preciso enviar a foto da frente e do verso do documento.", image: "/images/mei/identificacao-5.png" },
  { number: 6, text: "Para concluir, tire e envie uma foto nítida do seu rosto e aguarde até 48 horas. Após a aprovação, você já poderá receber com a azulzinha!", image: "/images/mei/identificacao-6.png" },
];

const videos = [
  { title: "Agora tem azulzinha no App CAIXA Tem!", thumbnail: "/images/mei/video-thumb.png" },
  { title: "Como gerar um Link de Pagamento no App CAIXA Tem?", thumbnail: "/images/mei/video-thumb.png" },
  { title: "Como fazer uma venda com QR Code no App CAIXA Tem?", thumbnail: "/images/mei/video-thumb.png" },
  { title: "Como fazer uma venda por aproximação no App CAIXA Tem?", thumbnail: "/images/mei/video-thumb.png" },
];

const faqItems = [
  {
    title: "O que é a azulzinha no App CAIXA Tem?",
    content: (
      <div className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black flex flex-col gap-2">
        <p>Além de facilitar o acesso a serviços bancários e sociais, o aplicativo CAIXA Tem oferece recursos que facilitam o dia a dia de quem é Microempreendedor Individual (MEI).</p>
        <p>Ao habilitar a azulzinha da CAIXA no seu App CAIXA Tem, você pode:</p>
        <p>Receber pagamentos via link de pagamento ou QR Code, direto no App CAIXA Tem;</p>
        <p>Transformar o celular em uma maquininha, usando o App azulzinha aproxima, para aceitar pagamentos por aproximação.</p>
      </div>
    ),
  },
  {
    title: "Sou MEI. Como faço para receber pagamentos com a azulzinha?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
  {
    title: "Como habilitar a azulzinha no CAIXA Tem?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
  {
    title: "O que preciso fazer no meu primeiro acesso?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
  {
    title: "Preciso de suporte, como faço?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Consulte as condições junto à equipe comercial da azulzinha.
      </p>
    ),
  },
];

export default function ParaSuaMei() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title="Agora tem azulzinha no App CAIXA Tem!"
        description="Receba pagamentos no WhatsApp com a mesma tecnologia da sua maquininha."
        checkItems={[]}
        buttonText="Saiba como"
        backgroundImage="/images/cliente-loterica/hero-bg-pessoa-72b5d7.png"
        logoImage="/images/mei/caixa-tem-logo.svg"
        logoWidth={200}
        logoHeight={56}
      />

      <SimpleVideoSection
        title="Tudo 100% digital para você vender mais"
        description="Você, que tem o App CAIXA Tem, pode transformar seu celular em maquininha e começar a vender com a azulzinha da CAIXA. Tudo de forma simples e prática com recebimento de suas vendas direto na conta digital MEI, disponível também pelo aplicativo. Assista ao vídeo e saiba como ter sua azulzinha!"
        thumbnail="/images/mei/tudo-100-main.png"
      />

      <BenefitsSection
        title="Com a azulzinha no seu celular você pode muito mais! Conheça as funcionalidades disponíveis:"
        textColor="text-azul"
        items={comAzulzinhaItems}
      />

      <BandeirasSection
        title="A azulzinha aceita as bandeiras, vouchers e carteiras digitais favoritas do seu cliente*"
        description="Venda de maneira conveniente, sem a maquininha, e receba o dinheiro diretamente em sua conta digital MEI."
      />

      <StepsCarouselSection
        steps={ativacaoSteps}
        bgClassName="bg-white"
        paddingClassName="pt-14 lg:pt-20"
        headerContent={
          <div className="flex flex-col gap-8 lg:gap-[60px]">
            <h2 className="section-title text-azul text-center">
              Passo a passo para habilitar a azulzinha no seu App CAIXA Tem
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-[49px] h-[49px] rounded-full bg-laranja flex items-center justify-center shrink-0">
                <span className="text-[26px] text-white">1</span>
              </div>
              <span className="text-[20px] lg:text-[26px] text-azul">Ativação</span>
            </div>
          </div>
        }
      />

      <StepsCarouselSection
        steps={identificacaoSteps}
        bgClassName="bg-white"
        paddingClassName="pt-8 lg:pt-12 pb-14 lg:pb-20"
        headerContent={
          <div className="flex items-center gap-4">
            <div className="w-[49px] h-[49px] rounded-full bg-laranja flex items-center justify-center shrink-0">
              <span className="text-[26px] text-white">2</span>
            </div>
            <span className="text-[20px] lg:text-[26px] text-azul">Identificação</span>
          </div>
        }
      />

      <BlueCta
        title="Ainda não tem o App CAIXA Tem? Baixe o seu agora!"
        description={"Não se esqueça: para ter a azulzinha,\nvocê precisa ter a Conta Digital MEI"}
        sectionClassName="bg-white"
        storeBadges={[
          { image: "/images/link-pagamento/google-play.png", href: "#", alt: "Google Play", width: 235, height: 91 },
          { image: "/images/link-pagamento/app-store.png", href: "#", alt: "App Store", width: 235, height: 70 },
        ]}
      />

      <VideoSection
        title="Assista aos nossos tutoriais"
        mainVideoImage="/images/mei/video-main.png"
        mainVideoTitle="Agora tem azulzinha no App CAIXA Tem!"
        videos={videos}
      />

      <FaqSection
        title="Tire suas dúvidas sobre o App CAIXA Tem!"
        items={faqItems}
        buttonText="Ver todas perguntas"
      />

      <Footer />
    </main>
  );
}

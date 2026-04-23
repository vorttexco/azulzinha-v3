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
  { icon: "/images/mei/icon-aproximacao.png", text: "Pagamentos por aproximação" },
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
  { title: "Como gerar um Link de Pagamento no App CAIXA Tem?", videoSrc: "/midias/caixa-tem-vendas-link-pagamento.mp4" },
  { title: "Como fazer uma venda com QR Code no App CAIXA Tem?", videoSrc: "/midias/caixa-tem-vendas-qr-code.mp4" },
  { title: "Como fazer uma venda por aproximação no App CAIXA Tem?", videoSrc: "/midias/caixa-tem-vendas-aproximacao.mp4" },
  { title: "Como usar o atendimento pelo chatbot?", videoSrc: "/midias/caixa-tem-chatbot.mp4" },
  { title: "Como consultar seus recebimentos?", videoSrc: "/midias/caixa-tem-consultar-recebimentos.mp4" },
  { title: "Como consultar suas vendas?", videoSrc: "/midias/caixa-tem-consultar-vendas.mp4" },
  { title: "Como ver as taxas e tarifas?", videoSrc: "/midias/caixa-tem-taxas-tarifas.mp4" },
];

const p = "text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black";
const ul = "list-disc pl-5 flex flex-col gap-1 text-[16px] lg:text-[18px] leading-[1.4] text-black";

const faqItems = [
  {
    title: "O que é a azulzinha no App CAIXA Tem?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Além de facilitar o acesso a serviços bancários e sociais, o aplicativo CAIXA Tem oferece recursos que facilitam o dia a dia de quem é Microempreendedor Individual (MEI).</p>
        <p>Ao habilitar a azulzinha da CAIXA no seu App CAIXA Tem, você pode:</p>
        <ul className={ul}>
          <li>Receber pagamentos via link de pagamento ou QR Code, direto no App CAIXA Tem;</li>
          <li>Transformar o celular em uma maquininha, usando o App azulzinha aproxima, para aceitar pagamentos por aproximação.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Sou MEI. Como faço para receber pagamentos com a azulzinha?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Para ativar os pagamentos com a azulzinha, o primeiro passo é criar uma Conta Corrente Digital MEI. Para isso, acesse o site da CAIXA e preencha seus dados. É importante que você tenha em mãos os seguintes documentos:</p>
        <ul className={ul}>
          <li>CNPJ;</li>
          <li>Certificado da Condição do Microempreendedor Individual (CCMEI).</li>
        </ul>
        <p>Se você já tem uma Conta Corrente MEI da CAIXA, siga as orientações da próxima pergunta ou assista ao tutorial de habilitação da azulzinha no App CAIXA Tem.</p>
      </div>
    ),
  },
  {
    title: "Como habilitar a azulzinha no CAIXA Tem?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Se você já criou uma conta digital MEI da CAIXA, depois que ela for aprovada, você pode habilitar a azulzinha para receber pagamentos pelo CAIXA Tem direto na sua conta digital MEI.</p>
        <p>Siga o passo a passo e veja como é fácil:</p>
        <ul className={ul}>
          <li>Na tela inicial do App CAIXA Tem, selecione &quot;azulzinha&quot;;</li>
          <li>Na etapa seguinte, veja os benefícios da azulzinha para o dia a dia do seu negócio e clique em &quot;próximo&quot;;</li>
          <li>Você verá o plano de uso da azulzinha – &quot;Plano Flex&quot; sem mensalidade. Clique em &quot;Aceitar plano&quot; para seguir (ou em &quot;ver mais detalhes&quot; para conferir as taxas);</li>
          <li>Clique em &quot;Continuar&quot; para ir à tela seguinte, revisar seus dados cadastrais e corrigir, se necessário;</li>
          <li>Leia e aceite os termos e condições para ser direcionado à tela de resumo, onde você poderá conferir a proposta e o Contrato de serviços. Toque na caixa de seleção para concordar com os termos e depois clique em &quot;Confirmar&quot;.</li>
        </ul>
        <p>Depois de receber a liberação da azulzinha no seu CAIXA Tem, é hora de realizar o primeiro acesso e começar a receber pagamentos com a azulzinha.</p>
      </div>
    ),
  },
  {
    title: "O que preciso fazer no meu primeiro acesso?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Antes de você começar a receber pagamentos, você precisará habilitar a azulzinha seguindo os passos abaixo:</p>
        <ul className={ul}>
          <li>Selecione a azulzinha no menu &quot;Serviços e Produtos&quot;, clique em &quot;Continuar&quot; e siga os passos seguintes;</li>
          <li>Digite o número do celular usado no seu cadastro e seu CPF para receber um SMS com o link de acesso, que é válido por 24 horas;</li>
          <li>Clique no link de acesso e realize a confirmação da sua identificação (basta conferir as indicações na tela e clicar em &quot;Continuar&quot;);</li>
          <li>Na tela seguinte, confira os termos, marque a opção de aceite e clique em permitir;</li>
          <li>Tire uma foto do seu documento – CNH ou RG – e siga as orientações para o envio da imagem. Será preciso enviar a foto da frente e do verso do documento;</li>
          <li>Em seguida, faça uma foto nítida do seu rosto de acordo com as indicações na tela e clique em &quot;Sim, enviar foto&quot;;</li>
        </ul>
        <p>Pronto, agora é só aguardar a análise dos documentos, que leva até 48 horas. Após a aprovação, você já pode começar a receber com a azulzinha no CAIXA Tem.</p>
      </div>
    ),
  },
  {
    title: "Preciso de suporte, como faço?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>O suporte da azulzinha é 100% digital. No App CAIXA Tem, selecione o menu azulzinha e clique no ícone de atendimento para acessar o chat e tirar suas dúvidas de forma facilitada e rápida, já que o menu apresenta diversas opções organizadas por tipo de assunto.</p>
      </div>
    ),
  },
  {
    title: "Como faço para vender com a azulzinha?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Você pode realizar vendas usando QR Code ou Link de Pagamento. Basta acessar seu aplicativo CAIXA Tem, clicar em azulzinha no menu, depois em &quot;Nova Venda&quot; e escolher a melhor opção de pagamento para atender o seu cliente.</p>
        <p>Se precisar de ajuda para gerar seu primeiro Link de Pagamento ou QR Code, assista aos vídeos com o passo a passo na seção de tutoriais.</p>
      </div>
    ),
  },
  {
    title: "Não consigo visualizar a opção de link de pagamento. O que preciso fazer?",
    content: (
      <p className={p}>A tecnologia Link de Pagamento está liberada apenas para alguns ramos de atividade. Para obter mais informações sobre a liberação para o seu estabelecimento, acesse o nosso atendimento digital no menu azulzinha do aplicativo CAIXA Tem.</p>
    ),
  },
  {
    title: "Não achei a opção de pagamento por aproximação. Como faço?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Para transformar o seu celular em maquininha, você precisa fazer o download do App azulzinha aproxima. Antes de acessar a Google Play Store, certifique-se de que o seu celular utilize sistema operacional Android versão 12 ou superior, tenha tecnologia NFC (ou antena NFC) e esteja conectado a alguma rede de Wi-Fi ou 5G, 4G e 3G.</p>
        <p>Baixe o aplicativo e siga o passo a passo:</p>
        <ul className={ul}>
          <li>Ao abrir o App azulzinha aproxima pela primeira vez, selecione &quot;Ative a sua conta&quot;;</li>
          <li>Depois digite o seu CNPJ e clique em confirmar;</li>
          <li>Na sequência, leia os termos, dê o aceite em cada um e finalize clicando em &quot;De acordo&quot;. Esse procedimento será feito apenas uma vez.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Já baixei o App azulzinha aproxima. Como faço para vender?",
    content: (
      <p className={p}>Para saber mais sobre as funcionalidades, benefícios e fazer suas vendas por aproximação, assista ao tutorial em vídeo na seção de tutoriais.</p>
    ),
  },
  {
    title: "Posso consultar minhas vendas e pagamentos no App CAIXA Tem?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Sim. Para consultar suas vendas, clique em azulzinha no menu, depois em &quot;Ver Vendas&quot;. Para ter acesso aos pagamentos realizados, clique em &quot;Ver Recebimentos&quot;.</p>
      </div>
    ),
  },
  {
    title: "Quais são as taxas aplicadas?",
    content: (
      <p className={p}>Consulte as taxas direto no App CAIXA Tem clicando em azulzinha no menu, depois na opção &quot;Taxas e Tarifas&quot;, onde você poderá ver as taxas por bandeira e tipo de transação.</p>
    ),
  },
  {
    title: "Como criar um link de pagamento?",
    content: (
      <div className={`flex flex-col gap-3 ${p}`}>
        <p>Siga o passo a passo para criar seu primeiro link de pagamento no App CAIXA Tem com a azulzinha:</p>
        <ul className={ul}>
          <li>Abra o App CAIXA Tem e clique no menu azulzinha;</li>
          <li>Vá até a opção Nova Venda;</li>
          <li>Selecione Link de Pagamento;</li>
          <li>Se for seu primeiro acesso, leia e aceite os termos de condições;</li>
          <li>Crie uma descrição para facilitar a identificação da venda (opcional);</li>
          <li>Insira o valor do produto ou serviço;</li>
          <li>Escolha a forma de pagamento: à vista ou parcelado (com ou sem juros);</li>
          <li>Na tela final, revise todos os passos anteriores;</li>
          <li>Se precisar corrigir algo, clique no ícone de lápis ao lado da informação para editar;</li>
          <li>Quando estiver tudo correto, clique em Gerar link de pagamento.</li>
        </ul>
        <p>Pronto! Agora é só encaminhar o link gerado para seu cliente via redes sociais ou aplicativos de mensagens.</p>
      </div>
    ),
  },
  {
    title: "O que é o QR Code e como usá-lo?",
    content: (
      <p className={p}>O QR Code permite que o seu cliente pague rapidamente por um produto ou serviço escaneando o código com o celular. No aplicativo CAIXA Tem, depois de clicar em &quot;azulzinha&quot; no menu, você pode gerar um QR Code para compartilhar com o cliente e realizar uma venda.</p>
    ),
  },
  {
    title: "Como consultar minhas vendas realizadas?",
    content: (
      <p className={p}>Saiba como consultar seus recebimentos com a azulzinha no App CAIXA Tem assistindo ao tutorial em vídeo na seção de tutoriais.</p>
    ),
  },
  {
    title: "Contratei a azulzinha no aplicativo CAIXA Tem e quero uma maquininha. Como solicito?",
    content: (
      <p className={p}>As vendas na azulzinha via aplicativo CAIXA Tem podem ser feitas somente através do QR Code, link de pagamento e azulzinha aproxima.</p>
    ),
  },
  {
    title: "Quais bandeiras de cartões são aceitas pela azulzinha?",
    content: (
      <p className={p}>A azulzinha aceita as principais bandeiras, vouchers e carteiras digitais favoritas do seu cliente. Consulte todas as bandeiras disponíveis diretamente no aplicativo CAIXA Tem.</p>
    ),
  },
  {
    title: "Como posso saber mais sobre produtos como empréstimos ou capital de giro?",
    content: (
      <p className={p}>Além das vendas, o App CAIXA Tem oferece informações sobre outros produtos, como empréstimos e capital de giro. Para saber mais, acesse o menu da azulzinha e consulte as opções disponíveis.</p>
    ),
  },
];

export default function ParaSuaMei() {
  return (
    <main>
      <Navbar />

      <HeroSection
        title={<>Agora tem <br /> azulzinha no App CAIXA Tem!</>}
        description="Receba pagamentos no WhatsApp com a mesma tecnologia da sua maquininha."
        checkItems={[]}
        buttonText="Saiba como"
        backgroundImage="/images/mei/hero.png"

      />

      <SimpleVideoSection
        title="Tudo 100% digital para você vender mais"
        description={<>Você, que tem o App CAIXA Tem, pode transformar seu celular em maquininha e começar a vender com a azulzinha da CAIXA. Tudo de forma simples e prática com recebimento de suas vendas direto na conta digital MEI, disponível também pelo aplicativo.<br /> Assista ao vídeo e saiba como ter sua azulzinha!
        </>}
        thumbnail="/images/mei/tudo-100-main.png"
        videoSrc="/midias/azulzinha-CAIXATem-V3-Reduzido-primeiro-acesso.mp4"
      />

      <BenefitsSection
        title={<>Com a azulzinha no seu celular você pode muito mais! <br /> Conheça as funcionalidades disponíveis:</>}
        textColor="text-azul"
        items={comAzulzinhaItems}
      />

      <BandeirasSection
        title="A azulzinha aceita as bandeiras, vouchers e carteiras digitais favoritas do seu cliente*"
        description="Venda de maneira conveniente, sem a maquininha, e receba o dinheiro diretamente em sua conta digital MEI."
        footnote="*Bandeira American Express disponível via Link de Pagamento, VR Benefícios por meio de QR Code. Para azulzinha aproxima, utilizando a bandeira Visa, o limite das transações é de R$200, mas pode variar conforme banco emissor."
      />

      <StepsCarouselSection
        steps={ativacaoSteps}
        bgClassName="bg-white"
        paddingClassName="pt-14 lg:pt-20"
        cardHeight="h-[470px]"
        imageTopOffset="-top-24"
        carouselPaddingTop="pt-28"
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
        cardHeight="h-[470px]"
        imageTopOffset="-top-24"
        carouselPaddingTop="pt-28"
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
          { image: "/images/link-pagamento/google-play.png", href: "https://play.google.com/store/apps/details?id=br.gov.caixa.tem&hl=pt_BR", alt: "Google Play", width: 235, height: 91 },
          { image: "/images/link-pagamento/app-store.png", href: "https://apps.apple.com/br/app/caixa-tem/id1485424267", alt: "App Store", width: 235, height: 70 },
        ]}
      />

      <VideoSection
        title="Assista aos nossos tutoriais"
        mainVideoImage="/images/mei/video-main.png"
        mainVideoTitle="Agora tem azulzinha no App CAIXA Tem!"
        mainVideoSrc="/midias/azulzinha-CAIXATem-V3-Reduzido-primeiro-acesso.mp4"
        videos={videos}
      />

      <FaqSection
        title="Tire suas dúvidas sobre o App CAIXA Tem!"
        items={faqItems}
      />

      <Footer />
    </main>
  );
}

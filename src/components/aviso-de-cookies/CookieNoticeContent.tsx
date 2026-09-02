import type { ReactNode } from "react";

const bodyText = "text-[16px] lg:text-[18px] leading-[1.4] text-black mb-3";
const sectionHeading = "text-azul text-[24px] lg:text-[32px] leading-[1.3] mt-8 mb-3";
const tableCell = "border border-black px-3 py-2 align-top";
const tableCellText = "text-[16px] leading-[1.4] text-black mb-2 last:mb-0";
const linkClass = "text-laranja underline";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className={linkClass} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function CookieNoticeContent() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <article>
          <h2 className={`${sectionHeading} mt-0`}>Aviso de cookies</h2>
          <p className={bodyText}>
            Este Aviso de Cookies descreve o uso de cookies online pelo grupo de empresas Fiserv,
            sendo Fiserv, Inc. e suas subsidiárias e afiliadas (incluindo First Data Corporation e
            suas subsidiárias e afiliadas) (coletivamente, “Fiserv”, “nós”, “nós ”Ou“ nosso ”).
          </p>
          <p className={bodyText}>
            Este Aviso de Cookies se aplica aos sites que possuímos ou controlamos e que publicam um
            link para este Aviso de Cookies. Se você estiver no Espaço Econômico Europeu, Reino
            Unido, Estados Unidos, Brasil ou outras regiões, poderá acessar e alterar suas
            preferências de cookies a qualquer momento clicando [aqui].
          </p>
          <p className={bodyText}>
            Você pode ler mais sobre as práticas gerais de privacidade da Fiserv em seu Aviso de
            Privacidade Global.
          </p>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            O que são cookies?
          </h3>
          <p className={bodyText}>
            Um cookie é um pequeno arquivo que é baixado em um dispositivo como um computador ou
            dispositivo móvel quando você acessa nossos sites. Um cookie é uma pequena porção de
            dados, normalmente composta por letras e números, que um site pede ao seu navegador para
            armazenar em seu computador ou dispositivo móvel.
          </p>
          <p className={bodyText}>
            {
              'Os cookies permitem que um site "lembre" suas ações ou preferências ao longo do tempo. Assim, quando você visita nosso site, os cookies podem armazenar ou recuperar informações em seu navegador, que podem ser sobre você, suas preferências e / ou seu dispositivo.'
            }
          </p>
          <p className={bodyText}>
            Usamos cookies, incluindo cookies de terceiros, para operar e melhorar o site, medir
            nossa audiência, melhorar sua experiência e fornecer a você conteúdo e publicidade
            adequados aos seus interesses com base em suas atividades de navegação e ações neste e
            em outros sites.
          </p>
          <p className={bodyText}>
            Para obter mais informações sobre cookies ou armazenamento local, incluindo como ver
            quais cookies foram definidos e como gerenciá-los, bloqueá-los e excluí-los, consulte:{" "}
            <ExternalLink href="https://www.allaboutcookies.org/">
              https://www.allaboutcookies.org/
            </ExternalLink>.
          </p>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            Tipos de cookies que usamos
          </h3>
          <p className={bodyText}>
            Nossos sites podem usar cookies de sessão e cookies persistentes para fornecer a você
            uma experiência mais pessoal e interativa em nossos sites:
          </p>
          <p className={bodyText}>
            • <b>Os cookies de sessão</b> permitem que um site se lembre de suas ações durante uma
            sessão de navegação e expire quando você fecha o navegador. Os cookies de sessão podem
            ser usados para uma variedade de finalidades, como lembrar que você fez login em um de
            nossos sites.
          </p>
          <p className={bodyText}>
            • <b>Cookies persistentes</b> - são armazenados em seu dispositivo e podem continuar a
            existir até que expirem ou você os exclua. Os cookies persistentes podem ser usados para
            uma variedade de finalidades, incluindo lembrar as preferências e escolhas dos usuários
            ao usar um site ou para direcionar publicidade.
          </p>
          <p className={bodyText}>
            Os cookies podem ser categorizados como cookies primários ou de terceiros. Nossos sites
            usam os dois tipos de cookies:
          </p>
          <p className={bodyText}>
            • <b>Cookies primários</b> - os cookies primários são definidos diretamente por nós, a
            partir do nome de domínio do site exibido na janela URL.
          </p>
          <p className={bodyText}>
            • <b>Cookies de terceiros</b> - Cookies de terceiros são cookies definidos por um nome
            de domínio diferente daquele que está sendo visitado pelo usuário. Por exemplo, se
            definirmos um cookie no fiserv.com usando um cookie de outro nome de domínio que
            possuímos ou controlamos, esse cookie é um cookie de “terceiros”. Da mesma forma, também
            podemos permitir que nossos provedores de serviços ou parceiros definam cookies
            diretamente em nosso site a partir de seus próprios nomes de domínio; estes também são
            cookies de terceiros.
          </p>
          <p className={bodyText}>
            Nossos sites usam os seguintes tipos de cookies para os fins definidos abaixo:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="bg-cinza-claro">
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <b>Tipo de cookie</b>
                    </p>
                  </td>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <b>Objetivo</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <i>Cookies essenciais</i>
                    </p>
                  </td>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      Esses cookies são estritamente necessários para fornecer a você os serviços
                      disponíveis em nossos sites e para permitir que você use alguns de seus
                      recursos. Esses cookies não podem ser desabilitados em nossos sistemas e
                      habilitam funcionalidades básicas, como segurança, gerenciamento de rede e
                      acessibilidade. Sem esses cookies, os serviços que você solicitou não podem
                      ser fornecidos e nós apenas usamos esses cookies para fornecer esses serviços.
                      Esses cookies são usados para coletar informações como se você está conectado
                      e quais páginas você navega durante uma sessão de navegação.
                    </p>
                    <p className={tableCellText}>
                      Observe que você pode configurar seu navegador para bloquear esses cookies,
                      mas isso pode afetar o funcionamento do nosso site.
                    </p>
                  </td>
                </tr>
                <tr className="bg-cinza-claro">
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <i>Cookies de funcionalidade</i>
                    </p>
                  </td>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      Esses cookies permitem que nossos sites se lembrem das escolhas que você faz
                      ao usar nossos sites. O objetivo desses cookies é fornecer a você uma
                      experiência mais pessoal e evitar que você tenha que selecionar novamente suas
                      preferências toda vez que visitar nossos sites. Esses cookies coletam
                      informações sobre as preferências que você escolheu em nosso site.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <i>Cookies analíticos e de desempenho</i>
                    </p>
                  </td>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      Esses cookies são usados para coletar informações sobre o tráfego em nossos
                      sites e como os usuários usam nossos sites. As informações coletadas podem
                      incluir o tipo de sistema operacional de seu computador ou dispositivo móvel e
                      número de versão, fabricante e modelo, identificador de dispositivo, tipo de
                      navegador, resolução de tela, endereço IP, o site que você visitou antes de
                      navegar em nosso site, informações gerais de localização, como cidade, estado
                      ou área geográfica; e informações sobre seu uso e ações em ou em nossos sites,
                      como páginas que você acessou, quanto tempo você passou em uma página,
                      caminhos de navegação entre páginas, informações sobre sua atividade em uma
                      página, tempos de acesso e duração do acesso
                    </p>
                  </td>
                </tr>
                <tr className="bg-cinza-claro">
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <i>Cookies de mídia social</i>
                    </p>
                  </td>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      Esses cookies são usados quando você compartilha informações usando um botão
                      de compartilhamento de mídia social ou botão “curtir” (ou semelhante) em
                      nossos sites, ou vincula sua conta ou interage com nosso conteúdo em ou por
                      meio de um site de rede social como o Facebook ou Twitter. Esses cookies
                      coletam informações sobre sua interação de mídia social com nosso site, como
                      se você tem ou não uma conta no site de mídia social e se você está conectado
                      a ela quando interage com o conteúdo de nosso site. Quando coletamos dados
                      pessoais através dos botões de compartilhamento de mídia social do Facebook,
                      Linkedin e Twitter ou botões “curtir” (ou semelhantes) em nossos sites, somos
                      um controlador conjunto desses dados pessoais. Isso significa que somos
                      conjuntamente responsáveis pela coleta dos dados do cookie e pela proteção dos
                      seus dados pessoais. Você pode entrar em contato conosco ou com a organização
                      de mídia social relevante para obter mais informações sobre isso.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      <i>Cookies direcionados e de publicidade</i>
                    </p>
                  </td>
                  <td className={tableCell}>
                    <p className={tableCellText}>
                      Esses cookies rastreiam seus hábitos de navegação para permitir que redes de
                      publicidade de terceiros entreguem anúncios que podem ser do seu interesse.
                      Esses cookies usam informações sobre seu histórico de navegação para agrupá-lo
                      com outros usuários que têm interesses ou comportamentos de navegação
                      semelhantes. Com base nos cookies que a rede de publicidade de terceiros
                      define em nossos sites e outros sites, os anunciantes podem exibir anúncios
                      que podem ser relevantes aos seus interesses em nossos sites e enquanto você
                      estiver em sites de terceiros. Você pode optar por não usar o seu
                      comportamento de navegação para fins de publicidade direcionada (em muitos
                      sites, não apenas nos sites Fiserv) conforme descrito na seção intitulada
                      “Publicidade Comportamental Online” abaixo.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            Suas escolhas
          </h3>
          <p className={bodyText}>
            <i>Suas preferências de cookies em nosso site</i>
          </p>
          <p className={bodyText}>
            Você pode retirar seu consentimento para cookies em nossos sites a qualquer momento.
            Para gerenciar suas preferências de cookies em nosso site, clique no botão Cookies
            localizado no canto inferior direito da tela.
          </p>
          <p className={bodyText}>
            <i>Desativando cookies nas configurações do seu navegador</i>
          </p>
          <p className={bodyText}>
            Normalmente, você pode remover ou rejeitar cookies por meio das configurações do
            navegador. Isso definirá suas preferências de cookies para todos os sites, não apenas
            para os sites Fiserv. Para fazer isso, siga as instruções fornecidas pelo seu navegador
            (geralmente localizadas nos menus “configurações”, “ajuda”, “ferramentas” ou “edição”).
            Muitos navegadores estão configurados para aceitar cookies até que você altere suas
            configurações.
          </p>
          <p className={bodyText}>
            Se você não aceitar nossos cookies, poderá experimentar alguns inconvenientes no uso de
            nossos sites. Por exemplo, podemos não ser capazes de reconhecer seu computador ou
            dispositivo móvel e você pode precisar fazer login sempre que visitar nossos sites.
          </p>
          <p className={bodyText}>
            <i>Publicidade Comportamental Online</i>
          </p>
          <p className={bodyText}>
            Alguns dos terceiros que definem cookies em nossos sites podem ser membros de
            organizações ou programas que fornecem opções a indivíduos em relação ao uso de seu
            comportamento de navegação para fins de publicidade direcionada. Separadamente de
            quaisquer opções de consentimento em nossos sites, os usuários podem optar por não
            receber publicidade direcionada em sites por meio de membros participantes das seguintes
            organizações ou programas:
          </p>
          <p className={bodyText}>
            ·{" "}
            <ExternalLink href="https://www.networkadvertising.org/choices">
              <b>
                <i>Network Advertising Initiative</i>
              </b>
            </ExternalLink>{" "}
            (USA)
          </p>
          <p className={bodyText}>
            ·{" "}
            <ExternalLink href="https://www.aboutads.info/choices">
              <b>
                <i>Digital Advertising Alliance</i>
              </b>
            </ExternalLink>{" "}
            (USA)
          </p>
          <p className={bodyText}>
            ·{" "}
            <ExternalLink href="https://www.youronlinechoices.eu/">
              <b>
                <i>European Interactive Digital Advertising Alliance</i>
              </b>
            </ExternalLink>{" "}
            (Europa)
          </p>
          <p className={bodyText}>
            ·{" "}
            <ExternalLink href="https://youradchoices.ca/choices/">
              <b>
                <i>Digital Advertising Alliance of Canada</i>
              </b>
            </ExternalLink>{" "}
            (Canadá)
          </p>
          <p className={bodyText}>
            ·{" "}
            <ExternalLink href="https://www.youronlinechoices.com.au/">
              <b>
                <i>Australian Digital Advertising Alliance</i>
              </b>
            </ExternalLink>{" "}
            (Austrália)
          </p>
          <p className={bodyText}>
            ·{" "}
            <ExternalLink href="https://www.ddai.info/optout">
              <b>
                <i>Data Driven Advertising Initiative</i>
              </b>
            </ExternalLink>(Japão)
          </p>
          <p className={bodyText}>
            Observe que também podemos trabalhar com empresas que oferecem seus próprios mecanismos
            de opt-out e não podem participar dos mecanismos de opt-out que vinculamos acima.
          </p>
          <p className={bodyText}>
            Se você optar por não receber anúncios direcionados, ainda verá anúncios online, mas
            eles podem não ser relevantes para você. Nem todas as empresas que oferecem publicidade
            comportamental on-line são membros das organizações listadas acima, portanto, mesmo que
            você opte por não participar, ainda poderá receber alguns cookies e anúncios
            personalizados de empresas que não estão listadas.
          </p>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            Aviso de cookies não cobre sites de terceiros
          </h3>
          <p className={bodyText}>
            Observe que este Aviso de Cookies não se aplica a, e não somos responsáveis por,
            práticas de cookies de sites de terceiros para os quais podemos nos vincular a partir do
            site.
          </p>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            Cookies de terceiros
          </h3>
          <p className={bodyText}>
            Quando você usa nosso site, terceiros que colocam cookies em nosso site terão acesso aos
            dados dos cookies. Não controlamos o armazenamento ou acesso a esses cookies. Você deve
            revisar as políticas de privacidade e cookies desses serviços para descobrir como esses
            terceiros usam cookies e se seus dados de cookies serão transferidos para um terceiro
            país. Uma lista de terceiros que colocam cookies em nossos sites pode ser encontrada
            aqui.
          </p>
          <p className={bodyText}>
            Integramos o serviço Google Analytics neste site. O operador do serviço Google Analytics
            é Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, EUA. A informação
            gerada pelo cookie do Google Analytics sobre a sua utilização deste site é normalmente
            transmitida a um servidor Google nos EUA e aí armazenada. O Google pode transferir as
            informações pessoais coletadas para terceiros públicos e privados.
          </p>
          <p className={bodyText}>
            O link a seguir fornece uma explicação adicional do Google Analytics. Como o Google usa
            os dados quando você usa sites ou aplicativos de nossos parceiros.
          </p>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            Retenção de cookies
          </h3>
          <p className={bodyText}>
            Mantemos as informações coletadas dos cookies por um período máximo de 13 meses.
          </p>

          <h3 className="text-azul text-[20px] lg:text-[24px] leading-[1.3] mt-6 mb-2">
            Mudanças no Aviso de Cookies
          </h3>
          <p className={bodyText}>
            Podemos alterar este Aviso de Cookies a qualquer momento e encorajamos você a revisar o
            aviso de tempos em tempos para se manter informado sobre como estamos usando cookies.
          </p>
        </article>
      </div>
    </section>
  );
}

# Review técnico — Métricas e eventos (requisitos do slide "Métricas")

Data: 06/10/2026
Escopo: código-fonte do `azulzinha-v3` (Next.js 15, App Router, `output: "export"`), build em `dist/`.
Método: leitura estática do código (`src/`, `public/`, `next.config.ts`, `.htaccess`) e inspeção do HTML gerado em `dist/index.html`. Nenhuma alteração de código foi feita.

Legenda de status:

- **Atendido** — o site já emite o dado necessário; a métrica pode ser lida em GTM/GA4 sem mudança de código.
- **Parcial** — existe instrumentação, mas com lacunas que impedem medir o requisito como descrito.
- **Não atendido** — não existe instrumentação no site.
- **Externo** — não depende de código do site; depende de configuração em GTM, GA4, Search Console ou nas plataformas de mídia. O site só precisa fornecer a base (tag presente, URLs rastreáveis etc.).

Observação importante: o container GTM (`GTM-WR66X47`) e a propriedade GA4 não fazem parte do repositório. Tudo que estiver marcado como **Externo** foi avaliado apenas quanto ao que o site precisa expor; a configuração em si não pôde ser verificada.

---

## 1. Resumo executivo

| # | Categoria | Requisito | Status |
|---|-----------|-----------|--------|
| 1.1 | Aquisição | Tráfego orgânico e pago por canal | Externo (base OK) |
| 1.2 | Aquisição | Impressões e cliques por palavra-chave | Externo (base OK) |
| 1.3 | Aquisição | CTR dos anúncios (Facebook, LinkedIn, Google) | Externo (base parcial) |
| 2.1 | Comportamento | Taxa de rejeição e tempo médio por página | Atendido (base) / Externo |
| 2.2 | Comportamento | Scroll depth | Não atendido |
| 2.3 | Comportamento | Cliques nos CTAs principais ("Peça já", "Saiba mais", "Habilite já") | Parcial |
| 2.4 | Comportamento | Cliques no WhatsApp da Zuli | Não atendido |
| 2.5 | Comportamento | Interações com banners e produtos (Clover, Pix, Lotérica Pro) | Não atendido |
| 3.1 | Conversão | Taxa de conversão do CTA de solicitação | Parcial |
| 3.2 | Conversão | Leads gerados | Atendido |
| 3.3 | Conversão | Acessos ao portal | Parcial |
| 3.4 | Conversão | Conversas iniciadas no WhatsApp | Não atendido |
| 3.5 | Conversão | Ligações geradas pelo rodapé | Não atendido |
| 4.1 | Canais associados | Engajamento nas redes sociais | Parcial (cliques de saída não rastreados) / Externo |
| 4.2 | Canais associados | Acesso mobile vs desktop | Atendido (automático em GA4) |
| 5.1 | Performance técnica | Core Web Vitals (LCP, CLS, INP) | Parcial |
| 5.2 | Performance técnica | Velocidade de carregamento | Parcial |
| 5.3 | Performance técnica | Indexação no Google Search Console | Atendido (base) / Externo |
| 5.4 | Performance técnica | Taxa de aceite de cookies | Não atendido |

Contagem: 3 atendidos, 7 parciais, 6 não atendidos, 3 exclusivamente externos.

---

## 2. Infraestrutura de tracking existente

O que o site já faz hoje, para contextualizar os itens abaixo.

### 2.1 Tags carregadas

- **Google Tag Manager** `GTM-WR66X47` via `@next/third-parties` — `src/app/layout.tsx` L51. Confirmado no HTML gerado (`dist/index.html` contém `googletagmanager.com/gtm.js`).
- **Meta Pixel** `405492278595747` com `fbq('init')` + `fbq('track','PageView')` — `src/app/layout.tsx` L80-92, com fallback `<noscript>` (L94-104).
- **Não há** LinkedIn Insight Tag, Google Ads tag ou GA4 direto no código. Se existirem, estão dentro do container GTM.
- O GTM **não tem** o `<noscript>` com iframe `ns.html` (confirmado no `dist/index.html`). Impacto baixo (usuários sem JS), mas é o padrão recomendado pelo Google.

### 2.2 Camada de dados (`src/lib/analytics.ts`)

Todos os eventos passam por `pushGtm()` → `window.dataLayer.push()`. Os nomes de evento foram mantidos iguais aos do site Angular legado para que os gatilhos já existentes no GTM continuem funcionando.

| Helper | Evento emitido | Onde é disparado |
|--------|----------------|------------------|
| `buildPageViewEvent` | `{ event: "page", pageName: <pathname>, transactionId }` | `src/components/shared/GtmPageView.tsx` — a cada mudança de `pathname` (inclui o primeiro load) |
| `pushNavGtm(label)` | `{ event: "clicou-em-<slug-do-label>", name }` | `src/components/shared/Navbar.tsx` — links do menu, dropdowns, "Portal de Acesso", "Peça já sua azulzinha" |
| `pushFormGtm(tag, sufixo)` | `clicou_CNPJ`, `clicou_email`, …, `clicou_Enviar_formulario`, `Form_Sucesso`, `Form_Erro` | `src/components/suaazulzinha/FormSection.tsx` — clique em cada campo, envio, sucesso, erro |
| `pushVideoGtm(action, tag, title)` | `clicou-<tag>`, `play-<tag>`, `fim-<tag>` | `VideoSection`, `SimpleVideoSection`, `AjudaVideoSection`, `TrackedVideo`, `HabilitarSection`, `VrBenefitsSection` |

### 2.3 O que **não** está instrumentado

Nenhum `pushGtm` nos componentes abaixo (todos renderizam CTAs ou links relevantes para o slide):

- `src/components/shared/HeroSection.tsx` (botão principal do hero em todas as páginas)
- `src/components/shared/CtaSection.tsx` (CTA "Peça já a sua" no fim das páginas)
- `src/components/shared/CardsCarouselSection.tsx` (carrossel de banners da home: Gás do Povo, Pix, Zuli, Clover, Pix por aproximação, Lotérica pro, etc.)
- `src/components/ProductsSection.tsx` (cards de produtos da home: Clover Flex/Mini, smart, pro, TEF, aproxima)
- `src/components/shared/PossibilitiesSection.tsx`, `BlueCta.tsx`, `BeneficiosGridSection.tsx`, `PortalAppSection.tsx`
- `src/components/shared/Footer.tsx` (WhatsApp, telefones, redes sociais)
- `src/components/help/HelpCtaSection.tsx` (WhatsApp e telefones da página de ajuda)
- `src/components/shared/CookieBanner.tsx` (botão "Aceitar")

### 2.4 Consentimento

`CookieBanner` grava `localStorage.cookie = "accept"` (`src/lib/cookies.ts`) e some. GTM e Meta Pixel são carregados **antes e independentemente** do aceite; não há Google Consent Mode nem bloqueio de tags. Isso reproduz o comportamento do site legado, mas vale registrar como risco LGPD (ver seção 5).

---

## 3. Detalhamento por requisito

### 3.1 Aquisição

#### 1.1 Tráfego orgânico e pago por canal — **Externo (base OK)**

- **O que o site precisa fornecer:** tag de analytics presente em todas as páginas e preservação de parâmetros UTM/`gclid`/`fbclid` na URL de entrada.
- **Evidência:** GTM está no `RootLayout`, portanto em 100% das rotas. O build é estático, sem redirecionamentos que descartem query string (`.htaccess` só força HTTPS e barra final, preservando `%{REQUEST_URI}`; query string é mantida por padrão no Apache). `HeroSection` até propaga a query string nos links de âncora (`HeroAnchorLink`, L10-29).
- **O que falta:** nada no código. A atribuição por canal é feita no GA4 (grupos de canais padrão) desde que a tag GA4 esteja configurada no GTM. Não foi possível verificar o container.
- **Viável:** sim, sem código.

#### 1.2 Impressões e cliques por palavra-chave — **Externo (base OK)**

- **O que o site precisa fornecer:** páginas indexáveis, `robots.txt`, `sitemap.xml`, canônicas corretas (para Search Console) e tag do Google Ads / GA4 vinculada (para pago).
- **Evidência:** `src/app/robots.ts`, `src/app/sitemap.ts` (36 rotas estáticas + posts do blog), `pageMetadata()` em `src/lib/seo.ts` com `alternates.canonical` em todas as páginas. `dist/index.html` contém `rel="canonical"` e JSON-LD.
- **O que falta:** nada no código. Palavras-chave orgânicas vêm do relatório de Desempenho do Search Console; pagas, do Google Ads vinculado ao GA4.
- **Viável:** sim, sem código.

#### 1.3 CTR dos anúncios (Facebook, LinkedIn, Google) — **Externo (base parcial)**

- **Evidência:** CTR é métrica da plataforma de anúncios, não do site. O site contribui com pixels de conversão para otimização: Meta Pixel presente; Google Ads e LinkedIn Insight **não** aparecem no código.
- **O que falta:** se o LinkedIn Insight Tag e a tag do Google Ads não estiverem no GTM, precisam ser adicionados lá (sem código). Adicionalmente, o Meta Pixel só dispara `PageView` no primeiro carregamento (ver 3.2 abaixo); não há `fbq('track','Lead')` nem eventos customizados — reduz a qualidade da otimização de campanhas no Meta.
- **Viável:** sim. Tags via GTM; evento `Lead` do Meta pode ser disparado pelo GTM no evento `Form_Sucesso` já existente, ou adicionado em `FormSection.onSubmit` (1 linha).

### 3.2 Comportamento

#### 2.1 Taxa de rejeição e tempo médio por página — **Atendido (base) / Externo**

- **Evidência:** GA4 calcula engajamento automaticamente a partir de `page_view`, `user_engagement` e `scroll`. O site emite o evento `page` no `dataLayer` em cada mudança de rota (`GtmPageView.tsx` L10-12), permitindo que o GTM dispare `page_view` virtuais na navegação client-side.
- **Ponto de atenção:** se o GTM também tiver uma tag GA4 Config disparando em "All Pages" (Container Loaded) **e** uma tag de `page_view` no evento `page`, o primeiro load gera **duas** page views. Precisa ser conferido no container.
- **O que falta:** nada no código (assumindo GA4 configurado no GTM).
- **Viável:** sim.

#### 2.2 Scroll depth — **Não atendido**

- **Evidência:** nenhuma referência a `IntersectionObserver`, `scroll` listener ou evento de scroll no `dataLayer` em `src/`.
- **Opções:**
  1. **Sem código:** usar o gatilho nativo "Scroll Depth" do GTM (25/50/75/90%) ou o evento `scroll` do Enhanced Measurement do GA4 (só 90%). Limitação: em navegação SPA o gatilho do GTM não reinicia automaticamente a cada rota; é preciso marcar "Enable this trigger on: Window Loaded + Custom Event `page`" ou ativar a opção de reset por History Change.
  2. **Com código (recomendado para precisão em SPA):** criar `src/components/shared/ScrollDepthTracker.tsx` ("use client") que escuta `scroll`, calcula percentuais atingidos por `pathname`, e faz `pushGtm({ event: "scroll_depth", pageName, percent })` uma vez por limiar por página. Montar no `RootLayout` ao lado de `GtmPageView`.
- **Viável:** sim. Esforço baixo (~1 componente, ~40 linhas).

#### 2.3 Cliques nos CTAs principais ("Peça já", "Saiba mais", "Habilite já") — **Parcial**

- **Instrumentado hoje:**
  - Navbar: "Peça já sua azulzinha" (desktop, L497) e "Peça sua azulzinha" (mobile, L581) → `clicou-em-peca-ja-a-azulzinha`.
  - Links do menu/dropdown → `clicou-em-<label>`.
- **Não instrumentado (a maioria dos CTAs do site):**
  - `HeroSection` — botão do hero em todas as páginas (`Saiba mais`, `Peça já`, `Habilite já` etc.). É renderizado como `<a>` ou `<Link>` sem `onClick` (L204-231).
  - `CtaSection` — "Peça já a sua" / "Peça a sua azulzinha" (L91-98), presente no rodapé de quase todas as páginas.
  - `CardsCarouselSection` — "Saiba mais", "Habilite já", "Confira a novidade" (L185-196).
  - `ProductsSection` — "Peça a sua azulzinha" (L68) e "Saiba mais"/"Baixe o manual" por produto (L91-107).
  - `PossibilitiesSection` — "Solicite sua azulzinha" (L135-139).
  - `BlueCta`, `BeneficiosGridSection`, `PortalAppSection`, `ServicesSection`, `SolucoesSection`, `ProdutosSection`, `MaquininhaIdealSection`, `MachinesCompareSection`, entre outros.
- **Alternativa sem código:** gatilho GTM "Click - All Elements / Just Links" filtrando por `Click Text` (`Peça já`, `Saiba mais`, `Habilite já`) ou `Click Classes contains btn-laranja`. Funciona, mas é frágil: textos variam ("Peça já a sua", "Peça a sua azulzinha", "Solicite sua azulzinha"), e não identifica **qual** CTA (hero vs rodapé vs card) sem variáveis de DOM adicionais.
- **Recomendação com código:** criar um helper `pushCtaGtm({ label, location, href, page })` em `src/lib/analytics.ts` e um componente `TrackedLink`/prop `gtmLabel` nos componentes compartilhados (`HeroSection`, `CtaSection`, `BlueCta`, `CardsCarouselSection`, `ProductsSection`, `PossibilitiesSection`). Nome de evento sugerido: `cta_click` com parâmetros `cta_label`, `cta_location`, `cta_href`. Como são componentes compartilhados, a cobertura é alta com poucas alterações.
- **Viável:** sim. Esforço médio (6-8 componentes compartilhados + helper).

#### 2.4 Cliques no WhatsApp da Zuli — **Não atendido**

- **Onde o WhatsApp aparece:**
  - `Footer.tsx` — link do número (desktop L126, mobile L260) e botão "Dúvidas?" (L340-354). Sem `onClick`.
  - `CardsCarouselSection.tsx` — card "Olá, eu sou a Zuli!" com "Fale comigo" (L56-62). Sem `onClick`.
  - `HelpCtaSection.tsx` (página Ajuda) — o número `(11) 94147-3336` é **texto puro** (L42-44), **não é link**. Além de não rastreável, o usuário não consegue clicar.
  - FAQ (`faqData.tsx`, `regulatoryFaqData.tsx`) — links `wa.me` dentro de HTML estático.
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL contains wa.me OR api.whatsapp.com`. Cobre todos os casos acima **exceto** o `HelpCtaSection` (não é link).
- **Recomendação com código:** (a) transformar o número em `HelpCtaSection` em `<a href={SOCIAL_LINKS.whatsapp}>`; (b) adicionar `onClick={() => pushGtm({ event: "whatsapp_click", location: "footer" | "home-carousel" | "ajuda" })}` nos três componentes. Observação: hoje `Footer` e `CardsCarouselSection` usam `SOCIAL_LINKS.whatsapp` e `SOCIAL_LINKS.whatsappApi` (duas URLs diferentes); padronizar facilita o filtro no GTM.
- **Viável:** sim. Esforço baixo.

#### 2.5 Interações com banners e produtos (Clover, Pix, Lotérica Pro) — **Não atendido**

- **Evidência:** `CardsCarouselSection` (banners da home) e `ProductsSection` (produtos) não emitem evento nem no clique nem na visualização do card. O Embla Carousel expõe `select`/`slidesInView`, mas não há listener de tracking.
- **Agravante:** vários `href` desses cards apontam para URLs absolutas de produção (`https://azulzinhadacaixa.com.br/clover`, `/pix-azulzinha`, `/lotericas`, `/antecipacao-de-vendas` — `CardsCarouselSection` L53, L69, L77, L93, L101, L109; `ProductsSection` L16-50). Efeitos: (1) recarga completa da página em vez de navegação client-side; (2) em ambiente de homologação (`basePath /azulzinha`) o usuário sai para produção; (3) o evento `page` do SPA não captura a navegação como transição interna. Deveriam ser caminhos relativos com `<Link>`.
- **Recomendação com código:** evento `banner_click` / `product_click` com `item_name` (ex.: "Clover da azulzinha", "Pix por aproximação", "azulzinha Lotérica pro"), `item_index` e `href`. Opcional: `banner_view` via `IntersectionObserver` ou `emblaApi.on("slidesInView")` para calcular CTR por banner.
- **Viável:** sim. Esforço baixo-médio (2 componentes + correção de hrefs).

### 3.3 Conversão

#### 3.1 Taxa de conversão do CTA de solicitação — **Parcial**

- **Numerador (conversão):** disponível. `Form_Sucesso` é emitido em `FormSection.onSubmit` (L156-160) e o usuário é redirecionado para `/obrigado`, que também gera o evento `page` com `pageName: "/obrigado"`. Qualquer um dos dois serve como conversão no GA4.
- **Denominador (clique no CTA):** só o CTA da Navbar é rastreado. Os CTAs de hero, `CtaSection`, `PossibilitiesSection`, `ProductsSection` que levam a `/peca-azulzinha` **não** emitem evento (ver 2.3). Hoje o único denominador confiável é a page view de `/peca-azulzinha`.
- **O que falta:** instrumentar os CTAs (item 2.3). Com isso é possível calcular `Form_Sucesso / cta_click[href=/peca-azulzinha]` e também por origem (`cta_location`).
- **Viável:** sim; depende do item 2.3.

#### 3.2 Leads gerados — **Atendido**

- **Evidência:** `FormSection.tsx` emite `clicou_Enviar_formulario` no submit, `Form_Sucesso` quando a API `leads-management-api` responde 2xx, e `Form_Erro` caso contrário. Também há evento por campo (`clicou_CNPJ`, `clicou_email`…) que permite funil de preenchimento. O prefixo `sufixo` permite distinguir formulários em páginas diferentes.
- **Melhoria opcional:** disparar `fbq('track','Lead')` no sucesso (para o Meta) — pode ser feito no GTM a partir de `Form_Sucesso`. Também vale enviar `faturamento` (faixa) como parâmetro do evento para segmentar leads por porte (dado não sensível).
- **Viável:** já está.

#### 3.3 Acessos ao portal — **Parcial**

- **Instrumentado:** Navbar desktop "Portal de Acesso" (L482-491) e mobile "Acesse o Portal" (L588-597) → `clicou-em-acesse-o-portal`.
- **Não instrumentado:** link em `src/components/gestao-portal/PortalFaqSection.tsx` L16; mais de 15 links para `portal.azulzinhadacaixa.com.br` dentro do FAQ (`faqData.tsx`, `regulatoryFaqData.tsx`).
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL contains portal.azulzinhadacaixa.com.br`. Cobre todos os casos, pois são todos `<a>`.
- **Limitação estrutural:** "acesso ao portal" medido no site é apenas o **clique de saída**; o login efetivo só pode ser medido se o portal tiver a mesma propriedade GA4 (cross-domain) — fora do escopo deste repositório.
- **Viável:** sim, sem código para a parte do site.

#### 3.4 Conversas iniciadas no WhatsApp — **Não atendido**

- Mesmo diagnóstico de 2.4. O site só consegue medir o **clique** no link `wa.me`; a conversa efetivamente iniciada é dado da plataforma do WhatsApp Business (ou do fornecedor da Zuli). Recomenda-se padronizar a URL com parâmetro `text=` pré-preenchido por origem (ex.: `?text=Olá, vim do site (rodapé)`) para que o time de atendimento consiga atribuir a origem.
- **Viável:** clique sim (código ou GTM); conversa iniciada só via plataforma externa.

#### 3.5 Ligações geradas pelo rodapé — **Não atendido**

- **Evidência:** `Footer.tsx` tem três links `tel:` (3003 5365 L138, 0800 729 5365 L142, 0800 727 4655 L166 e equivalentes mobile L269/273/297). Nenhum tem `onClick`. Em `HelpCtaSection.tsx` os números são texto puro (L67, L73) — não geram ligação nem evento.
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL starts with tel:`.
- **Recomendação com código:** `onClick={() => pushGtm({ event: "phone_click", phone, location: "footer" })}` e converter os números do `HelpCtaSection` em `<a href="tel:">`.
- **Limitação:** mede a intenção (clique), não a ligação completada. No desktop o clique em `tel:` geralmente não resulta em chamada.
- **Viável:** sim. Esforço baixo.

### 3.4 Canais associados

#### 4.1 Engajamento nas redes sociais (Instagram, Facebook, LinkedIn, YouTube) — **Parcial / Externo**

- **Engajamento dentro das redes** (curtidas, seguidores, views) é métrica de cada plataforma; não é responsabilidade do site.
- **O que o site pode medir:** cliques de saída para as redes. `Footer.tsx` L176-187 renderiza os quatro ícones com `SOCIAL_LINKS` sem `onClick`. `VideoSection` tem link "Se inscreva no nosso canal do Youtube" sem tracking.
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL matches RegEx instagram\.com|facebook\.com|linkedin\.com|youtube\.com` (`Outbound click` do Enhanced Measurement do GA4 também cobre, mas sem distinguir rede).
- **Recomendação com código:** `pushGtm({ event: "social_click", network, location })` no `Footer` (único lugar centralizado).
- **Viável:** sim. Esforço baixo.

#### 4.2 Acesso mobile vs desktop — **Atendido**

- GA4 coleta `device_category` automaticamente. Nenhuma ação necessária.

### 3.5 Performance técnica

#### 5.1 Core Web Vitals (LCP, CLS, INP) — **Parcial**

- **Medição:** não há `useReportWebVitals` nem `web-vitals` no código; o site não envia LCP/CLS/INP para o GA4. Dados de campo ficam disponíveis apenas via CrUX / relatório "Core Web Vitals" do Search Console, se o site tiver tráfego suficiente.
- **Riscos de performance identificados no código:**
  - `next.config.ts` → `images: { unoptimized: true }` (obrigatório para `output: "export"`): `next/image` **não** gera WebP/AVIF nem `srcset`. Cada imagem é servida no tamanho e formato original.
  - `public/images`: 818 PNG totalizando ~211 MB; 1 WebP. Maiores arquivos: `recarga-de-celulares/feature-image.png` 10,9 MB, `azulzinha-aproxima/cta-photo.png` 7,6 MB, `vendas-online/feature-3.png` 5,9 MB, `mei/tudo-100-main.png` 5,7 MB, `azulzinha-smart/hero-bg.png` 3,4 MB (hero → LCP). Há também referências de design no `public` que não deveriam ir para produção (`blog/figma-desktop-ref.png` 8,8 MB, `pix-azulzinha/figma-ref-desktop.png` 4,1 MB).
  - `.htaccess` não define `Cache-Control`/`Expires` nem `mod_deflate`/`mod_brotli`; depende da configuração padrão do host.
  - Pontos positivos: build 100% estático; fontes locais com `display: swap`; `priority` nas imagens de hero (`HeroSection` L115/L125); scripts de terceiros `afterInteractive`.
- **O que fazer:**
  1. Medição: adicionar `src/components/shared/WebVitalsReporter.tsx` com `useReportWebVitals` (do `next/web-vitals`) fazendo `pushGtm({ event: "web_vitals", metric_name, metric_value, metric_id, metric_rating })` e montar no `RootLayout`. No GTM, criar tag GA4 Event para `web_vitals`.
  2. Otimização: converter PNGs fotográficos para WebP (ou AVIF) com um script de build (`sharp`), redimensionar para o maior tamanho exibido (hero ≤ 1920px, cards ≤ 600px), remover arquivos `figma-ref*` do `public`.
  3. Adicionar diretivas de cache e compressão no `.htaccess` (ou confirmar que o host já aplica).
- **Viável:** sim. Medição: esforço baixo. Otimização de imagens: esforço médio (volume), mas é o item com maior ganho de LCP.

#### 5.2 Velocidade de carregamento — **Parcial**

- Mesmo diagnóstico de 5.1. O HTML é estático e leve; o gargalo é peso de imagens e ausência de cache headers. Medição de campo pode ser obtida via GA4 (`web_vitals` acima) ou PageSpeed Insights/Lighthouse (lab, sem código).
- **Viável:** sim.

#### 5.3 Indexação no Google Search Console — **Atendido (base) / Externo**

- **Evidência:** `robots.ts` (allow all + sitemap), `sitemap.ts` (36 rotas + blog), canonical e Open Graph por página (`pageMetadata`), JSON-LD `Organization`/`WebSite` no layout, `not-found.tsx`, `trailingSlash: true` coerente com o `.htaccess`. O trabalho de SEO documentado em `tasks/SEO/blog-seo.md` foi executado.
- **Ponto de atenção — host canônico inconsistente:** `src/lib/seo.ts` define `SITE_URL = "https://www.azulzinhadacaixa.com.br"` (com `www`), e por isso canonical, sitemap e robots usam `www`. Porém dezenas de links internos usam `https://azulzinhadacaixa.com.br/...` (sem `www`) — `CardsCarouselSection`, `ProductsSection`, `faqData.tsx`, `blog.ts`, PDFs do rodapé. O `.htaccess` força HTTPS, mas **não** redireciona não-www → www (nem o inverso). Se ambos os hosts responderem 200, o Google verá conteúdo duplicado e a canonical resolve, mas desperdiça crawl budget e divide sinais. Deve-se escolher um host e adicionar o redirect 301 no `.htaccess`.
- **O que falta:** verificação da propriedade no Search Console e envio do sitemap (ação humana). Não é possível verificar daqui.
- **Viável:** sim.

#### 5.4 Taxa de aceite de cookies — **Não atendido**

- **Evidência:** `CookieBanner.tsx` → `handleAccept()` grava `localStorage` e esconde o banner (L16-19). Não há `pushGtm` nem qualquer sinal para o GTM. Não há opção de recusar, então "taxa de aceite" na prática seria `aceitou / viu o banner`.
- **Alternativa sem código:** gatilho GTM "Click - All Elements" com `Click ID equals btn-entendi` (o botão tem `id="btn-entendi"`). Para o denominador seria preciso um gatilho de visibilidade de elemento (`role="dialog"` + `aria-label="Aviso de cookies e privacidade"`). Frágil.
- **Recomendação com código:** `pushGtm({ event: "cookie_banner_view" })` no `useEffect` quando o banner se torna visível e `pushGtm({ event: "cookie_consent", choice: "accept" })` em `handleAccept`.
- **Nota LGPD:** como GTM e Meta Pixel carregam antes do consentimento, o aceite hoje é apenas informativo. Se o requisito evoluir para consentimento real, a implementação recomendada é Google Consent Mode v2 (`gtag('consent','default', {...denied})` antes do GTM e `gtag('consent','update', {...granted})` no aceite), mantendo o botão de recusar. Isso **muda** o volume de dados coletados (só usuários que aceitarem serão medidos com cookies), e é uma decisão de negócio/jurídico, não só técnica.
- **Viável:** sim. Esforço baixo (eventos) a médio (Consent Mode).

---

## 4. Itens que não podem ser verificados neste repositório

- Conteúdo do container `GTM-WR66X47`: quais tags (GA4, Google Ads, LinkedIn), gatilhos e variáveis existem; se há duplicidade de `page_view`.
- Configuração do GA4: eventos marcados como conversão, grupos de canais, vínculos com Google Ads e Search Console.
- Propriedade do Search Console e status de indexação.
- Métricas internas das plataformas (CTR de anúncios, engajamento nas redes, conversas no WhatsApp Business).

Recomenda-se exportar o container GTM (JSON) e anexar a este review para fechar as lacunas marcadas como **Externo**.

---

## 5. Riscos transversais encontrados durante o review

1. **Meta Pixel só registra o primeiro `PageView`.** `fbq('track','PageView')` roda uma vez no `Script` do layout; navegações client-side não disparam novo `PageView`. Correção: em `GtmPageView`, chamar `window.fbq?.('track','PageView')` nas mudanças de `pathname` subsequentes (ou disparar via GTM no evento `page`).
2. **Links internos absolutos para produção** (`https://azulzinhadacaixa.com.br/...`) em `CardsCarouselSection`, `ProductsSection` e FAQ: quebram navegação SPA, vazam de homologação para produção e misturam hosts `www`/não-`www`. Substituir por caminhos relativos com `<Link>`.
3. **Host canônico não forçado** no `.htaccess` (ver 5.3).
4. **Tags carregam antes do consentimento** (ver 5.4).
5. **Imagens de referência de design em `public/`** (`figma-ref*.png`, ~13 MB) vão para o build de produção.
6. **Ausência de testes** para `src/lib/analytics.ts` (o `vitest` está configurado, mas não há nenhum arquivo `*.test.ts`). Como os nomes de evento são contrato com o GTM, um teste de snapshot dos helpers `build*GtmEvent` evitaria regressões silenciosas.
7. **Credenciais da API de leads no bundle** (`src/lib/leads.ts` — `apiKey`/`apiSecret` de homologação e produção). Herdado do legado e fora do escopo de métricas, mas é visível a qualquer usuário no DevTools; registrado para ciência.

---

## 6. Plano sugerido (priorizado)

| Prioridade | Ação | Requisitos atendidos | Esforço | Precisa de código? |
|-----------|------|----------------------|---------|--------------------|
| P0 | Exportar e revisar o container GTM; confirmar GA4, Google Ads, LinkedIn; eliminar `page_view` duplicado | 1.1, 1.2, 1.3, 2.1 | Baixo | Não |
| P0 | Helper `pushCtaGtm` + instrumentar `HeroSection`, `CtaSection`, `BlueCta`, `PossibilitiesSection`, `ProductsSection`, `CardsCarouselSection` | 2.3, 2.5, 3.1 | Médio | Sim |
| P1 | Eventos `whatsapp_click`, `phone_click`, `social_click`, `portal_click` em `Footer`, `HelpCtaSection`, `CardsCarouselSection`, `PortalFaqSection`; transformar números do `HelpCtaSection` em links | 2.4, 3.3, 3.4, 3.5, 4.1 | Baixo | Sim (ou gatilhos de link no GTM como paliativo) |
| P1 | `ScrollDepthTracker` no `RootLayout` | 2.2 | Baixo | Sim |
| P1 | `WebVitalsReporter` (`useReportWebVitals` → `dataLayer`) | 5.1, 5.2 | Baixo | Sim |
| P1 | Eventos `cookie_banner_view` / `cookie_consent` | 5.4 | Baixo | Sim |
| P2 | Converter PNG → WebP, redimensionar, remover `figma-ref*`; cache/compressão no `.htaccess` | 5.1, 5.2 | Médio | Sim (script de build) |
| P2 | Corrigir links absolutos → relativos; redirect 301 para host canônico | 5.3, risco 2/3 | Baixo | Sim |
| P2 | `fbq PageView` em navegação SPA; `Lead` no `Form_Sucesso` | 1.3 | Baixo | Sim (ou GTM) |
| P3 | Consent Mode v2 com opção de recusa | 5.4 (compliance) | Médio | Sim + decisão jurídica |
| P3 | Testes unitários para `analytics.ts` | — | Baixo | Sim |

Todos os itens acima são tecnicamente viáveis dentro da arquitetura atual (static export + GTM). Nenhum exige backend ou mudança de hospedagem.

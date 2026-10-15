# Review técnico — Métricas e eventos (requisitos do slide "Métricas")

Data do review original: 06/10/2026
Revisão 2: 06/10/2026, sobre o mesmo arquivo, depois da instrumentação em `src/` (spec `.scratch/site-metrics-instrumentation/spec.md`).
Escopo: código-fonte do `azulzinha-v3` (Next.js 15, App Router, `output: "export"`).
Método original: leitura estática do código e do HTML em `dist/index.html`, sem alterar código.
Método da revisão 2: releitura do código instrumentado. O status original de cada item foi mantido. O status atual usa a mesma legenda.

Quando o site passa a emitir um evento novo (`cta_click`, `scroll_depth`, etc.), o status atual é **Atendido (código) / Externo (GTM)**: o `dataLayer` já tem o dado, mas o container `GTM-WR66X47` ainda precisa de um gatilho Custom Event para o GA4 enxergar. Isso não foi configurado neste repositório.

Legenda de status:

- **Atendido** — o site já emite o dado necessário; a métrica pode ser lida em GTM/GA4 sem mudança de código.
- **Parcial** — existe instrumentação, mas com lacunas que impedem medir o requisito como descrito.
- **Não atendido** — não existe instrumentação no site.
- **Externo** — não depende de código do site; depende de configuração em GTM, GA4, Search Console ou nas plataformas de mídia. O site só precisa fornecer a base (tag presente, URLs rastreáveis etc.).

Observação importante: o container GTM (`GTM-WR66X47`) e a propriedade GA4 não fazem parte do repositório. Tudo que estiver marcado como **Externo** foi avaliado apenas quanto ao que o site precisa expor; a configuração em si não pôde ser verificada.

---

## 1. Resumo executivo

| # | Categoria | Requisito | Status original | Status atual |
|---|-----------|-----------|-----------------|--------------|
| 1.1 | Aquisição | Tráfego orgânico e pago por canal | Externo (base OK) | Externo (base OK) |
| 1.2 | Aquisição | Impressões e cliques por palavra-chave | Externo (base OK) | Externo (base OK) |
| 1.3 | Aquisição | CTR dos anúncios (Facebook, LinkedIn, Google) | Externo (base parcial) | Externo (base OK) |
| 2.1 | Comportamento | Taxa de rejeição e tempo médio por página | Atendido (base) / Externo | Atendido (base) / Externo |
| 2.2 | Comportamento | Scroll depth | Não atendido | Atendido (código) / Externo (GTM) |
| 2.3 | Comportamento | Cliques nos CTAs principais ("Peça já", "Saiba mais", "Habilite já") | Parcial | Atendido (código) / Externo (GTM) |
| 2.4 | Comportamento | Cliques no WhatsApp da Zuli | Não atendido | Atendido (código) / Externo (GTM) |
| 2.5 | Comportamento | Interações com banners e produtos (Clover, Pix, Lotérica Pro) | Não atendido | Atendido (código) / Externo (GTM) |
| 3.1 | Conversão | Taxa de conversão do CTA de solicitação | Parcial | Atendido (código) / Externo (GTM) |
| 3.2 | Conversão | Leads gerados | Atendido | Atendido |
| 3.3 | Conversão | Acessos ao portal | Parcial | Parcial |
| 3.4 | Conversão | Conversas iniciadas no WhatsApp | Não atendido | Atendido (clique) / Externo (conversa) |
| 3.5 | Conversão | Ligações geradas pelo rodapé | Não atendido | Atendido (código) / Externo (GTM) |
| 4.1 | Canais associados | Engajamento nas redes sociais | Parcial (cliques de saída não rastreados) / Externo | Atendido (clique) / Externo (rede) |
| 4.2 | Canais associados | Acesso mobile vs desktop | Atendido (automático em GA4) | Atendido (automático em GA4) |
| 5.1 | Performance técnica | Core Web Vitals (LCP, CLS, INP) | Parcial | Parcial |
| 5.2 | Performance técnica | Velocidade de carregamento | Parcial | Parcial |
| 5.3 | Performance técnica | Indexação no Google Search Console | Atendido (base) / Externo | Atendido (base) / Externo |
| 5.4 | Performance técnica | Taxa de aceite de cookies | Não atendido | Atendido (código) / Externo (GTM) |

Contagem original: 3 atendidos, 7 parciais, 6 não atendidos, 3 exclusivamente externos.
Contagem atual: 13 atendidos no código (vários ainda dependem de gatilho novo no GTM), 3 parciais (3.3, 5.1, 5.2), 0 não atendidos, 3 exclusivamente externos (1.1–1.3).

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

### 2.3 O que **não** estava instrumentado (review original)

No primeiro review, nenhum `pushGtm` existia nos componentes abaixo. A revisão 2 substitui esta lista pela seção 2.5.

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

### 2.5 O que a revisão 2 encontra instrumentado

Helpers novos em `src/lib/analytics.ts`, com testes em `src/lib/analytics.test.ts`. Eventos: `cta_click`, `banner_click`, `product_click`, `whatsapp_click`, `phone_click`, `social_click`, `portal_click`, `scroll_depth`, `web_vitals`, `cookie_banner_view`, `cookie_consent`. O componente `TrackedAnchor` cobre vários CTAs de seções servidor. `ScrollDepthTracker` e `WebVitalsReporter` estão montados em `src/app/layout.tsx`.

Ainda sem evento próprio: links de portal e WhatsApp dentro de `faqData.tsx` / `regulatoryFaqData.tsx`; botão de `ProdutosSection`; cards de `MachinesCompareSection`; links de `ServicesSection` (href `#`). A Navbar continua só com `clicou-em-*`, de propósito, para não duplicar `cta_click` / `portal_click`.

---

## 3. Detalhamento por requisito

### 3.1 Aquisição

#### 1.1 Tráfego orgânico e pago por canal — original: **Externo (base OK)** · atual: **Externo (base OK)**

**Atualização:** sem mudança de responsabilidade. O redirect apex → www em `.htaccess` preserva `%{REQUEST_URI}`, então UTM, `gclid` e `fbclid` continuam na URL. A atribuição por canal segue no GA4.

- **O que o site precisa fornecer:** tag de analytics presente em todas as páginas e preservação de parâmetros UTM/`gclid`/`fbclid` na URL de entrada.
- **Evidência:** GTM está no `RootLayout`, portanto em 100% das rotas. O build é estático, sem redirecionamentos que descartem query string (`.htaccess` só força HTTPS e barra final, preservando `%{REQUEST_URI}`; query string é mantida por padrão no Apache). `HeroSection` até propaga a query string nos links de âncora (`HeroAnchorLink`, L10-29).
- **O que falta:** nada no código. A atribuição por canal é feita no GA4 (grupos de canais padrão) desde que a tag GA4 esteja configurada no GTM. Não foi possível verificar o container.
- **Viável:** sim, sem código.

#### 1.2 Impressões e cliques por palavra-chave — original: **Externo (base OK)** · atual: **Externo (base OK)**

**Atualização:** a base de indexação melhorou (301 do apex para `www`, alinhado a `SITE_URL`), mas impressões e cliques por palavra-chave continuam no Search Console e no Google Ads.

- **O que o site precisa fornecer:** páginas indexáveis, `robots.txt`, `sitemap.xml`, canônicas corretas (para Search Console) e tag do Google Ads / GA4 vinculada (para pago).
- **Evidência:** `src/app/robots.ts`, `src/app/sitemap.ts` (36 rotas estáticas + posts do blog), `pageMetadata()` em `src/lib/seo.ts` com `alternates.canonical` em todas as páginas. `dist/index.html` contém `rel="canonical"` e JSON-LD.
- **O que falta:** nada no código. Palavras-chave orgânicas vêm do relatório de Desempenho do Search Console; pagas, do Google Ads vinculado ao GA4.
- **Viável:** sim, sem código.

#### 1.3 CTR dos anúncios (Facebook, LinkedIn, Google) — original: **Externo (base parcial)** · atual: **Externo (base OK)**

**Atualização:** o CTR continua sendo métrica da plataforma de mídia. A lacuna de código que deixava a base parcial foi fechada: `GtmPageView` chama `fbq('track','PageView')` nas trocas de rota depois do primeiro load, e o sucesso do formulário chama `fbq('track','Lead')` logo depois de `Form_Sucesso` (`trackFormSuccess`). Google Ads e LinkedIn Insight seguem fora do código-fonte; se estiverem no container, não precisam de alteração aqui.

- **Evidência:** CTR é métrica da plataforma de anúncios, não do site. O site contribui com pixels de conversão para otimização: Meta Pixel presente; Google Ads e LinkedIn Insight **não** aparecem no código.
- **O que falta:** se o LinkedIn Insight Tag e a tag do Google Ads não estiverem no GTM, precisam ser adicionados lá (sem código). Adicionalmente, o Meta Pixel só dispara `PageView` no primeiro carregamento (ver 3.2 abaixo); não há `fbq('track','Lead')` nem eventos customizados — reduz a qualidade da otimização de campanhas no Meta.
- **Viável:** sim. Tags via GTM; evento `Lead` do Meta pode ser disparado pelo GTM no evento `Form_Sucesso` já existente, ou adicionado em `FormSection.onSubmit` (1 linha).

### 3.2 Comportamento

#### 2.1 Taxa de rejeição e tempo médio por página — original: **Atendido (base) / Externo** · atual: **Atendido (base) / Externo**

**Atualização:** o evento `page` permanece. O risco de `page_view` duplicado no primeiro load continua dependendo do container GTM.

- **Evidência:** GA4 calcula engajamento automaticamente a partir de `page_view`, `user_engagement` e `scroll`. O site emite o evento `page` no `dataLayer` em cada mudança de rota (`GtmPageView.tsx` L10-12), permitindo que o GTM dispare `page_view` virtuais na navegação client-side.
- **Ponto de atenção:** se o GTM também tiver uma tag GA4 Config disparando em "All Pages" (Container Loaded) **e** uma tag de `page_view` no evento `page`, o primeiro load gera **duas** page views. Precisa ser conferido no container.
- **O que falta:** nada no código (assumindo GA4 configurado no GTM).
- **Viável:** sim.

#### 2.2 Scroll depth — original: **Não atendido** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** `ScrollDepthTracker` escuta o scroll da janela, usa a maior altura entre `documentElement` e `body`, e emite `scroll_depth` em 25, 50, 75 e 90 uma vez por limiar por `pathname`. Páginas mais curtas que o limiar não disparam. Falta o gatilho no GTM.

- **Evidência:** nenhuma referência a `IntersectionObserver`, `scroll` listener ou evento de scroll no `dataLayer` em `src/`.
- **Opções:**
  1. **Sem código:** usar o gatilho nativo "Scroll Depth" do GTM (25/50/75/90%) ou o evento `scroll` do Enhanced Measurement do GA4 (só 90%). Limitação: em navegação SPA o gatilho do GTM não reinicia automaticamente a cada rota; é preciso marcar "Enable this trigger on: Window Loaded + Custom Event `page`" ou ativar a opção de reset por History Change.
  2. **Com código (recomendado para precisão em SPA):** criar `src/components/shared/ScrollDepthTracker.tsx` ("use client") que escuta `scroll`, calcula percentuais atingidos por `pathname`, e faz `pushGtm({ event: "scroll_depth", pageName, percent })` uma vez por limiar por página. Montar no `RootLayout` ao lado de `GtmPageView`.
- **Viável:** sim. Esforço baixo (~1 componente, ~40 linhas).

#### 2.3 Cliques nos CTAs principais ("Peça já", "Saiba mais", "Habilite já") — original: **Parcial** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** `cta_click` sai de `HeroSection` (`hero`), `CtaSection` (botão primário e secundário), `BlueCta`, `PossibilitiesSection`, `FeatureSection`, `BeneficiosGridSection`, `FaqSection` (só o link, não "Ver todas perguntas"), `PortalAppSection`, `StepsCarouselSection`, `MaquininhaIdealSection` e `MaquinasCarouselSection`. "Habilite já" do carrossel vai como `banner_click`. A Navbar continua só com `clicou-em-peca-ja-a-azulzinha`. Fora desta leva: `ProdutosSection`, `MachinesCompareSection` e `ServicesSection`. Os três CTAs extras de página usam `location: "cta-section"`, o mesmo valor do CTA de fechamento, então o relatório não separa essas superfícies.

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

#### 2.4 Cliques no WhatsApp da Zuli — original: **Não atendido** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** `whatsapp_click` no rodapé (`footer`), no botão "Dúvidas?" (`footer-duvidas`), no card Zuli do carrossel (`home-carousel`, um evento só, sem `banner_click`) e na Ajuda (`ajuda`). O número da Ajuda agora é link para `SOCIAL_LINKS.whatsapp`. Links `wa.me` dentro do HTML do FAQ continuam sem evento.

- **Onde o WhatsApp aparece:**
  - `Footer.tsx` — link do número (desktop L126, mobile L260) e botão "Dúvidas?" (L340-354). Sem `onClick`.
  - `CardsCarouselSection.tsx` — card "Olá, eu sou a Zuli!" com "Fale comigo" (L56-62). Sem `onClick`.
  - `HelpCtaSection.tsx` (página Ajuda) — o número `(11) 94147-3336` é **texto puro** (L42-44), **não é link**. Além de não rastreável, o usuário não consegue clicar.
  - FAQ (`faqData.tsx`, `regulatoryFaqData.tsx`) — links `wa.me` dentro de HTML estático.
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL contains wa.me OR api.whatsapp.com`. Cobre todos os casos acima **exceto** o `HelpCtaSection` (não é link).
- **Recomendação com código:** (a) transformar o número em `HelpCtaSection` em `<a href={SOCIAL_LINKS.whatsapp}>`; (b) adicionar `onClick={() => pushGtm({ event: "whatsapp_click", location: "footer" | "home-carousel" | "ajuda" })}` nos três componentes. Observação: hoje `Footer` e `CardsCarouselSection` usam `SOCIAL_LINKS.whatsapp` e `SOCIAL_LINKS.whatsappApi` (duas URLs diferentes); padronizar facilita o filtro no GTM.
- **Viável:** sim. Esforço baixo.

#### 2.5 Interações com banners e produtos (Clover, Pix, Lotérica Pro) — original: **Não atendido** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** o carrossel emite `banner_click` com `gtmName` em texto ("Clover da azulzinha", "Pix por aproximação", "azulzinha Lotérica pro", etc.). Os hrefs internos passaram a caminhos relativos (`/clover`, `/pix-azulzinha`, `/lotericas`, `/antecipacao-de-vendas`); Reclame Aqui, azulzinhapay e WhatsApp continuam absolutos. `ProductsSection` emite `product_click` em "Peça a sua azulzinha", "Saiba mais" e "Baixe o manual"; páginas do site são relativas e `<Link>`; PDFs em `/midias/` continuam absolutos. O nome do manual é `"<produto> — manual"`, não o rótulo "Baixe o manual". Não há evento de visualização do card (`banner_view`), que era opcional neste review.

- **Evidência:** `CardsCarouselSection` (banners da home) e `ProductsSection` (produtos) não emitem evento nem no clique nem na visualização do card. O Embla Carousel expõe `select`/`slidesInView`, mas não há listener de tracking.
- **Agravante:** vários `href` desses cards apontam para URLs absolutas de produção (`https://azulzinhadacaixa.com.br/clover`, `/pix-azulzinha`, `/lotericas`, `/antecipacao-de-vendas` — `CardsCarouselSection` L53, L69, L77, L93, L101, L109; `ProductsSection` L16-50). Efeitos: (1) recarga completa da página em vez de navegação client-side; (2) em ambiente de homologação (`basePath /azulzinha`) o usuário sai para produção; (3) o evento `page` do SPA não captura a navegação como transição interna. Deveriam ser caminhos relativos com `<Link>`.
- **Recomendação com código:** evento `banner_click` / `product_click` com `item_name` (ex.: "Clover da azulzinha", "Pix por aproximação", "azulzinha Lotérica pro"), `item_index` e `href`. Opcional: `banner_view` via `IntersectionObserver` ou `emblaApi.on("slidesInView")` para calcular CTR por banner.
- **Viável:** sim. Esforço baixo-médio (2 componentes + correção de hrefs).

### 3.3 Conversão

#### 3.1 Taxa de conversão do CTA de solicitação — original: **Parcial** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** o numerador segue `Form_Sucesso` e a page view de `/obrigado`. O denominador agora inclui `cta_click` com `href` e `location` nos CTAs compartilhados que levam a `/peca-azulzinha`, além do evento antigo da Navbar. O cálculo no GA4 depende dos gatilhos novos.

- **Numerador (conversão):** disponível. `Form_Sucesso` é emitido em `FormSection.onSubmit` (L156-160) e o usuário é redirecionado para `/obrigado`, que também gera o evento `page` com `pageName: "/obrigado"`. Qualquer um dos dois serve como conversão no GA4.
- **Denominador (clique no CTA):** só o CTA da Navbar é rastreado. Os CTAs de hero, `CtaSection`, `PossibilitiesSection`, `ProductsSection` que levam a `/peca-azulzinha` **não** emitem evento (ver 2.3). Hoje o único denominador confiável é a page view de `/peca-azulzinha`.
- **O que falta:** instrumentar os CTAs (item 2.3). Com isso é possível calcular `Form_Sucesso / cta_click[href=/peca-azulzinha]` e também por origem (`cta_location`).
- **Viável:** sim; depende do item 2.3.

#### 3.2 Leads gerados — original: **Atendido** · atual: **Atendido**

**Atualização:** o funil de formulário não mudou. No sucesso, `trackFormSuccess` dispara `Form_Sucesso` e em seguida `fbq('track','Lead')`. Há teste unitário dessa ordem. `faturamento` continua fora do evento.

- **Evidência:** `FormSection.tsx` emite `clicou_Enviar_formulario` no submit, `Form_Sucesso` quando a API `leads-management-api` responde 2xx, e `Form_Erro` caso contrário. Também há evento por campo (`clicou_CNPJ`, `clicou_email`…) que permite funil de preenchimento. O prefixo `sufixo` permite distinguir formulários em páginas diferentes.
- **Melhoria opcional:** disparar `fbq('track','Lead')` no sucesso (para o Meta) — pode ser feito no GTM a partir de `Form_Sucesso`. Também vale enviar `faturamento` (faixa) como parâmetro do evento para segmentar leads por porte (dado não sensível).
- **Viável:** já está.

#### 3.3 Acessos ao portal — original: **Parcial** · atual: **Parcial**

**Atualização:** a Navbar segue com `clicou-em-acesse-o-portal` apenas. `PortalFaqSection` agora emite `portal_click` (`location: "portal-faq"`) e o href saiu do componente para `PORTAL_URL` em `src/lib/seo.ts`. Os links de portal dentro de `faqData.tsx` e `regulatoryFaqData.tsx` continuam sem evento. O login no portal segue fora deste repositório.

- **Instrumentado:** Navbar desktop "Portal de Acesso" (L482-491) e mobile "Acesse o Portal" (L588-597) → `clicou-em-acesse-o-portal`.
- **Não instrumentado:** link em `src/components/gestao-portal/PortalFaqSection.tsx` L16; mais de 15 links para `portal.azulzinhadacaixa.com.br` dentro do FAQ (`faqData.tsx`, `regulatoryFaqData.tsx`).
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL contains portal.azulzinhadacaixa.com.br`. Cobre todos os casos, pois são todos `<a>`.
- **Limitação estrutural:** "acesso ao portal" medido no site é apenas o **clique de saída**; o login efetivo só pode ser medido se o portal tiver a mesma propriedade GA4 (cross-domain) — fora do escopo deste repositório.
- **Viável:** sim, sem código para a parte do site.

#### 3.4 Conversas iniciadas no WhatsApp — original: **Não atendido** · atual: **Atendido (clique) / Externo (conversa)**

**Atualização:** o clique está coberto pelo item 2.4 (`whatsapp_click`). A conversa de fato iniciada continua sendo dado do WhatsApp Business. O texto pré-preenchido por origem não foi adicionado.

- Mesmo diagnóstico de 2.4. O site só consegue medir o **clique** no link `wa.me`; a conversa efetivamente iniciada é dado da plataforma do WhatsApp Business (ou do fornecedor da Zuli). Recomenda-se padronizar a URL com parâmetro `text=` pré-preenchido por origem (ex.: `?text=Olá, vim do site (rodapé)`) para que o time de atendimento consiga atribuir a origem.
- **Viável:** clique sim (código ou GTM); conversa iniciada só via plataforma externa.

#### 3.5 Ligações geradas pelo rodapé — original: **Não atendido** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** os três `tel:` do rodapé (desktop e mobile) emitem `phone_click` com os dígitos (`30035365`, `08007295365`, `08007274655`) e `location: "footer"`. Na Ajuda, `3003 5365` e `0800 729 5365` viraram links e emitem `phone_click` com `location: "ajuda"`. Continua medindo o clique, não a chamada completada.

- **Evidência:** `Footer.tsx` tem três links `tel:` (3003 5365 L138, 0800 729 5365 L142, 0800 727 4655 L166 e equivalentes mobile L269/273/297). Nenhum tem `onClick`. Em `HelpCtaSection.tsx` os números são texto puro (L67, L73) — não geram ligação nem evento.
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL starts with tel:`.
- **Recomendação com código:** `onClick={() => pushGtm({ event: "phone_click", phone, location: "footer" })}` e converter os números do `HelpCtaSection` em `<a href="tel:">`.
- **Limitação:** mede a intenção (clique), não a ligação completada. No desktop o clique em `tel:` geralmente não resulta em chamada.
- **Viável:** sim. Esforço baixo.

### 3.4 Canais associados

#### 4.1 Engajamento nas redes sociais (Instagram, Facebook, LinkedIn, YouTube) — original: **Parcial / Externo** · atual: **Atendido (clique) / Externo (rede)**

**Atualização:** curtidas e seguidores continuam nas plataformas. O site emite `social_click` nos ícones do rodapé (`instagram`, `facebook`, `linkedin`, `youtube`, `location: "footer"`) e no CTA de YouTube de `VideoSection` e `CloverVideoSection` (`location: "video-section"`).

- **Engajamento dentro das redes** (curtidas, seguidores, views) é métrica de cada plataforma; não é responsabilidade do site.
- **O que o site pode medir:** cliques de saída para as redes. `Footer.tsx` L176-187 renderiza os quatro ícones com `SOCIAL_LINKS` sem `onClick`. `VideoSection` tem link "Se inscreva no nosso canal do Youtube" sem tracking.
- **Alternativa sem código:** gatilho GTM "Click - Just Links" com `Click URL matches RegEx instagram\.com|facebook\.com|linkedin\.com|youtube\.com` (`Outbound click` do Enhanced Measurement do GA4 também cobre, mas sem distinguir rede).
- **Recomendação com código:** `pushGtm({ event: "social_click", network, location })` no `Footer` (único lugar centralizado).
- **Viável:** sim. Esforço baixo.

#### 4.2 Acesso mobile vs desktop — original: **Atendido** · atual: **Atendido**

**Atualização:** sem mudança. GA4 segue com `device_category`.

- GA4 coleta `device_category` automaticamente. Nenhuma ação necessária.

### 3.5 Performance técnica

#### 5.1 Core Web Vitals (LCP, CLS, INP) — original: **Parcial** · atual: **Parcial**

**Atualização:** a medição no site passou a existir. `WebVitalsReporter` usa `useReportWebVitals` e envia `web_vitals` para LCP, CLS, INP, FCP e TTFB (CLS com 4 casas; os demais em ms inteiros). FID é ignorado. O callback é estável para o hook não empilhar listeners. A otimização não foi feita: imagens continuam sem WebP/`srcset`, os PNG grandes e os `figma-ref*` seguem em `public/`, e `.htaccess` ainda não define cache nem compressão. O status permanece parcial por causa do desempenho, não da coleta.

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

#### 5.2 Velocidade de carregamento — original: **Parcial** · atual: **Parcial**

**Atualização:** igual ao 5.1. Dá para ler LCP/TTFB no `dataLayer` depois do gatilho GTM. O peso das imagens e a falta de cache headers não mudaram.

- Mesmo diagnóstico de 5.1. O HTML é estático e leve; o gargalo é peso de imagens e ausência de cache headers. Medição de campo pode ser obtida via GA4 (`web_vitals` acima) ou PageSpeed Insights/Lighthouse (lab, sem código).
- **Viável:** sim.

#### 5.3 Indexação no Google Search Console — original: **Atendido (base) / Externo** · atual: **Atendido (base) / Externo**

**Atualização:** `.htaccess` agora faz 301 de `azulzinhadacaixa.com.br` para `https://www.azulzinhadacaixa.com.br`, só quando o host é exatamente o apex, preservando path e query. Homolog (`vhomolog…`) não entra na regra. Os cards do carrossel e os produtos da home que apontavam para o apex viraram rotas relativas. Links absolutos do próprio site dentro do FAQ e alguns `/midias/` continuam. A verificação no Search Console segue ação humana.

- **Evidência:** `robots.ts` (allow all + sitemap), `sitemap.ts` (36 rotas + blog), canonical e Open Graph por página (`pageMetadata`), JSON-LD `Organization`/`WebSite` no layout, `not-found.tsx`, `trailingSlash: true` coerente com o `.htaccess`. O trabalho de SEO documentado em `tasks/SEO/blog-seo.md` foi executado.
- **Ponto de atenção — host canônico inconsistente:** `src/lib/seo.ts` define `SITE_URL = "https://www.azulzinhadacaixa.com.br"` (com `www`), e por isso canonical, sitemap e robots usam `www`. Porém dezenas de links internos usam `https://azulzinhadacaixa.com.br/...` (sem `www`) — `CardsCarouselSection`, `ProductsSection`, `faqData.tsx`, `blog.ts`, PDFs do rodapé. O `.htaccess` força HTTPS, mas **não** redireciona não-www → www (nem o inverso). Se ambos os hosts responderem 200, o Google verá conteúdo duplicado e a canonical resolve, mas desperdiça crawl budget e divide sinais. Deve-se escolher um host e adicionar o redirect 301 no `.htaccess`.
- **O que falta:** verificação da propriedade no Search Console e envio do sitemap (ação humana). Não é possível verificar daqui.
- **Viável:** sim.

#### 5.4 Taxa de aceite de cookies — original: **Não atendido** · atual: **Atendido (código) / Externo (GTM)**

**Atualização:** o banner emite `cookie_banner_view` na primeira vez em que aparece e `cookie_consent` com `name: "accept"` no Aceitar, antes de gravar o `localStorage`. Não há botão de recusar nem Consent Mode; as tags continuam carregando antes do aceite. A taxa é `cookie_consent / cookie_banner_view` depois do gatilho no GTM.

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

1. **Meta Pixel só registrava o primeiro `PageView`.** Situação atual: `GtmPageView` chama `fbq('track','PageView')` só quando o `pathname` muda depois do primeiro load. O `Script` do layout continua responsável pelo primeiro `PageView`.
2. **Links internos absolutos para produção.** Situação atual: carrossel da home e `ProductsSection` usam rotas relativas (PDFs `/midias/` continuam absolutos). O FAQ (`faqData.tsx`, `regulatoryFaqData.tsx`) ainda tem `https://azulzinhadacaixa.com.br/...`.
3. **Host canônico.** Situação atual: `.htaccess` redireciona só o host `azulzinhadacaixa.com.br` para `https://www.azulzinhadacaixa.com.br` (ver 5.3).
4. **Tags carregam antes do consentimento** (ver 5.4).
5. **Imagens de referência de design em `public/`** (`figma-ref*.png`, ~13 MB) vão para o build de produção.
6. **Testes de analytics.** Situação atual: `src/lib/analytics.test.ts` cobre os payloads novos e a ordem `Form_Sucesso` → `Lead`. O alias do Vitest aponta para `src/`.
7. **Credenciais da API de leads no bundle** (`src/lib/leads.ts` — `apiKey`/`apiSecret` de homologação e produção). Herdado do legado e fora do escopo de métricas, mas é visível a qualquer usuário no DevTools; registrado para ciência.

---

## 6. Plano sugerido (priorizado)

| Prioridade | Ação | Requisitos atendidos | Esforço | Precisa de código? | Situação na revisão 2 |
|-----------|------|----------------------|---------|--------------------|----------------------|
| P0 | Exportar e revisar o container GTM; confirmar GA4, Google Ads, LinkedIn; eliminar `page_view` duplicado | 1.1, 1.2, 1.3, 2.1 | Baixo | Não | Aberto. Agora também faltam gatilhos para os eventos novos |
| P0 | Helper `pushCtaGtm` + instrumentar `HeroSection`, `CtaSection`, `BlueCta`, `PossibilitiesSection`, `ProductsSection`, `CardsCarouselSection` | 2.3, 2.5, 3.1 | Médio | Sim | Feito no código |
| P1 | Eventos `whatsapp_click`, `phone_click`, `social_click`, `portal_click` em `Footer`, `HelpCtaSection`, `CardsCarouselSection`, `PortalFaqSection`; transformar números do `HelpCtaSection` em links | 2.4, 3.3, 3.4, 3.5, 4.1 | Baixo | Sim | Feito no código. FAQ de portal continua sem evento (3.3 segue parcial) |
| P1 | `ScrollDepthTracker` no `RootLayout` | 2.2 | Baixo | Sim | Feito no código |
| P1 | `WebVitalsReporter` (`useReportWebVitals` → `dataLayer`) | 5.1, 5.2 | Baixo | Sim | Feito no código. Otimização de imagens segue aberta |
| P1 | Eventos `cookie_banner_view` / `cookie_consent` | 5.4 | Baixo | Sim | Feito no código |
| P2 | Converter PNG → WebP, redimensionar, remover `figma-ref*`; cache/compressão no `.htaccess` | 5.1, 5.2 | Médio | Sim (script de build) | Aberto |
| P2 | Corrigir links absolutos → relativos; redirect 301 para host canônico | 5.3, risco 2/3 | Baixo | Sim | Parcial: carrossel, produtos e redirect www feitos; FAQ absoluto permanece |
| P2 | `fbq PageView` em navegação SPA; `Lead` no `Form_Sucesso` | 1.3 | Baixo | Sim (ou GTM) | Feito no código |
| P3 | Consent Mode v2 com opção de recusa | 5.4 (compliance) | Médio | Sim + decisão jurídica | Aberto, fora do escopo da instrumentação |
| P3 | Testes unitários para `analytics.ts` | — | Baixo | Sim | Feito (`src/lib/analytics.test.ts`) |

Todos os itens acima são tecnicamente viáveis dentro da arquitetura atual (static export + GTM). Nenhum exige backend ou mudança de hospedagem.

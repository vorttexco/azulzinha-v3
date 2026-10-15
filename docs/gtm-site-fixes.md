# GTM conditions the site still has to match

Source: `GTM-WR66X47` workspace 59, exported 2026-10-15. Container `azulzinhadacaixa.com.br`.

A trigger fires only when **every** condition is true. Click triggers read the live DOM (`Click Text`, `Click URL`, `Click Element`, `Page Path`). They do not read the `dataLayer` events pushed from `src/lib/analytics.ts`.

Values below are what the site must expose. Strings are exact, including accents, spaces, and capitalization.

## 1. Host, trailing slash, and base path

Internal links stay relative, so Next.js keeps client navigation, `trailingSlash`, and `basePath`. The `www` host is removed.

| Setting | Current site | Value GTM compares | Status |
| --- | --- | --- | --- |
| Host | `SITE_URL` is `https://azulzinhadacaixa.com.br`. `public/.htaccess` redirects `www` to that apex host | `https://azulzinhadacaixa.com.br` (no `www`) | Fixed. A relative `/ajuda` on the apex host resolves to `https://azulzinhadacaixa.com.br/ajuda/` |
| Trailing slash | `trailingSlash: true` on the production static export, and `.htaccess` adds a slash for real directories | paths and absolute URLs **without** a trailing slash | Still open. `EQUALS` fails on `/ajuda/` |
| Base path | Vorttex export uses `basePath: "/azulzinha"` | paths start at `/`, not `/azulzinha` | Still open on the Vorttex export |

`Page Path` `CONTAINS` still matches a trailing slash (`/ajuda/` contains `/ajuda`). `EQUALS` does not.

### Page path must equal exactly

Still open. On the production static export the pathname keeps the trailing slash, so these `EQUALS` checks fail.

| Trigger | Required `Page Path` |
| --- | --- |
| Home banners `[364, 380, 382, 384, 386, 388, 390, 391, 393, 469]` | `/` |
| Ajuda phones and WhatsApp `[437, 439, 440]` | `/ajuda` |
| CAIXA Tem store badges `[429, 431]` | `/azulzinha-caixa-tem` |
| Bandeiras phones and credential links `[444, 446, 448, 450, 452, 454, 455, 457, 459, 460, 462, 463]` | `/bandeiras-vouchers` |
| Clover CTAs `[366, 368, 370]` | `/clover` |
| Lotéricas partner link `[465]` | `/lotericas` |
| Maquininhas CTAs `[433, 435]` | `/maquininhas` |
| Oferta especial `[344, 346, 348]` | `/oferta-especial-azulzinha-da-caixa` |
| Portal login `[442]` | `/portal` |

`CONTAINS` paths already tolerate a trailing slash: `/azulzinha-caixa-tem` on `[352, 354]` and `/peca-azulzinha` on `[350]`.

### Internal click URL must equal exactly

The host now matches. The trailing slash still does not: on the production export these links resolve to `https://azulzinhadacaixa.com.br<path>/`.

| Trigger | Required `Click URL` | Where the link lives |
| --- | --- | --- |
| `[425]` header/footer Ajuda, `[435]` Ir para ajuda | `https://azulzinhadacaixa.com.br/ajuda` | Navbar `Ajuda`, footer `Central de Ajuda`, `AjudaCtaSection` |
| `[423]` Blog | `https://azulzinhadacaixa.com.br/blog` | Navbar `Blog`, footer `Blog da azulzinha` |
| `[386]` `[491]` Antecipação | `https://azulzinhadacaixa.com.br/antecipacao-de-vendas` | Home card “Crédito em 1 dia útil!”, navbar |
| `[401]` App da azulzinha | `https://azulzinhadacaixa.com.br/app` | Navbar |
| `[482]` azulzinha aproxima | `https://azulzinhadacaixa.com.br/azulzinha-aproxima` | Navbar |
| `[382]` `[501]` CAIXA Tem | `https://azulzinhadacaixa.com.br/azulzinha-caixa-tem` | Navbar, footer. Home “Confira a novidade” does not use this URL — see section 2 |
| `[483]` azulzinha smart | `https://azulzinhadacaixa.com.br/azulzinhasmart` | Navbar |
| `[388]` `[493]` Bandeiras | `https://azulzinhadacaixa.com.br/bandeiras-vouchers` | Home “Consulte todas as bandeiras”, navbar |
| `[364]` `[487]` Clover | `https://azulzinhadacaixa.com.br/clover` | Home card “Clover da azulzinha”, navbar |
| `[409]` Crediário | `https://azulzinhadacaixa.com.br/crediario-azulzinha` | Navbar |
| `[497]` `[505]` Gestão | `https://azulzinhadacaixa.com.br/gestao` | Navbar “Todas as soluções”, footer `Gestão` |
| `[411]` Link de Pagamento | `https://azulzinhadacaixa.com.br/link-pagamento` | Navbar |
| `[499]` Serviço de Conveniência (empresa) | `https://azulzinhadacaixa.com.br/lotericas` | Footer and header. Header label is still plural — see section 2 |
| `[384]` Lotérica banner | `https://azulzinhadacaixa.com.br/lotericas` | Home card “azulzinha Lotérica pro” |
| `[507]` Taxas | `https://azulzinhadacaixa.com.br/maquinas-e-taxas` | Footer `Taxas` |
| `[397]` `[489]` Maquininhas | `https://azulzinhadacaixa.com.br/maquininhas` | Footer `Maquininhas`, navbar “Todos os modelos” |
| `[479]` azulzinha pro | `https://azulzinhadacaixa.com.br/maquininhas/pro` | Navbar |
| `[485]` azulzinha TEF | `https://azulzinhadacaixa.com.br/maquininhas/tef` | Navbar |
| `[415]` Pagamento Parcial | `https://azulzinhadacaixa.com.br/pagamento-parcial` | Navbar |
| `[366]` `[368]` `[370]` `[391]` `[433]` Peça a azulzinha | `https://azulzinhadacaixa.com.br/peca-azulzinha` | Clover CTAs, home “Peça já a sua”, maquininhas CTA. `[390]` is a different control — see section 2 |
| `[380]` `[419]` Pix | `https://azulzinhadacaixa.com.br/pix-azulzinha` | Home “Habilite já” and “Tire suas dúvidas”, navbar |
| `[393]` `[403]` Portal page | `https://azulzinhadacaixa.com.br/portal` | Navbar “Portal da azulzinha”. Home “Saiba mais” still goes to `/gestao` — see section 2 |
| `[421]` Recarga | `https://azulzinhadacaixa.com.br/recarga-de-celulares` | Navbar |
| `[399]` `[495]` Vendas Online | `https://azulzinhadacaixa.com.br/vendas-online` | Footer, navbar “Todas as soluções” |
| `[503]` Serviço de Conveniência (você) | `https://azulzinhadacaixa.com.br/cliente-loterica` | Footer and header. Header label is still plural — see section 2 |

These absolute URLs already match and do not need a host change:

- Instagram, Facebook, LinkedIn, YouTube in `src/lib/social.ts` (`[509, 511, 513, 515]`)
- `https://www.azulzinhapay.com.br/` (`[360, 362]`)
- `https://credenciamento.alelo.com.br/` on the Alelo button (`[446]`)
- `https://www.parceiros.caixa.gov.br/` on `/lotericas` (`[465]`), once that page path equals `/lotericas`
- `https://apps.apple.com/br/app/caixa-tem/id1485424267` on the CAIXA Tem page (`[429]`), once that page path equals `/azulzinha-caixa-tem`

`Click URL` `CONTAINS` (not `EQUALS`) already survives host and slash:

- `[23]` any link whose URL contains `/ajuda`
- `[25]` any link whose URL contains `https://apps.apple.com/br/app/app-da-azulzinha/id1570685624`
- `[26]` any link whose URL contains `https://play.google.com/store/apps/details?id=com.fiserv.gestao.caixa`

## 2. Labels, hrefs, and missing pages

Fix these even after section 1. `Click Text` is the text of the element that was clicked.

### Header and footer

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[517]` Peça já a azulzinha | Click text `Peça já a azulzinha`, link to `https://azulzinhadacaixa.com.br/peca-azulzinha` | Navbar button text is `Peça já sua azulzinha` (`src/components/shared/Navbar.tsx`). The href is the relative `/peca-azulzinha`. The dataLayer label is already `Peça já a azulzinha`, but this trigger never reads the dataLayer |
| `[499]` `[503]` Serviço de Conveniência | Click text `Serviço de Conveniência` | Header items are `Serviços de Conveniência` (plural) for `/lotericas` and `/cliente-loterica`. Footer copy is already singular |
| `[417]` Pagamentos por WhatsApp | Click text `Pagamentos por WhatsApp` and URL `https://azulzinhadacaixa.com.br/pagamentos-whatsapp` | Item is not in the navbar. `src/app/pagamentos-whatsapp/page.disabled.tsx` is not a route |
| `[427]` Portal externo | `Click URL` `https://portal.azulzinhadacaixa.com.br/` (trailing slash) | `PORTAL_URL` in `src/lib/seo.ts` is `https://portal.azulzinhadacaixa.com.br` |

### Home

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[390]` Solicite a sua azulzinha | Click text `Solicite a sua azulzinha` and URL `.../peca-azulzinha`, on `/` | `ServicosHomeSection` says `Solicite sua azulzinha` and links to `/maquininhas` |
| `[382]` Banner CAIXA Tem | Click text `Confira a novidade` and URL `.../azulzinha-caixa-tem`, on `/` | No home card uses that pair. “Confira a novidade” goes to `/clover` and `/lotericas` |
| `[393]` Saiba mais portal | Click text `Saiba mais` and URL `.../portal`, on `/` | `PortalAppSection` “Saiba mais” links to `/gestao` |
| `[469]` Banner Zuli | Click text `Me adicione no WhatsApp!` and URL `https://api.whatsapp.com/send/?phone=5511941473336`, on `/` | Home card CTA is `Fale comigo`. The WhatsApp API URL already matches |

Home links for “Peça já a sua” (`CtaSection`), “Habilite já” → `/pix-azulzinha`, “Visite o portal” → azulzinha pay, “Consulte todas as bandeiras”, “Saiba mais” → `/antecipacao-de-vendas`, and “Confira a novidade” → `/lotericas` are relative again. On the apex host they still gain a trailing slash, and the triggers still need page path `/`.

### CAIXA Tem — `/azulzinha-caixa-tem`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[356]` App Store class | `Click Element` equals `.lp-azulzinha-caixa-tem-app-store` | Class is not in the codebase. Store badge is only an image link |
| `[358]` Google Play class | `Click Element` equals `.lp-azulzinha-caixa-tem-google-play` | Same. Add the class on the badge anchor |
| `[431]` Google Play URL | `https://play.google.com/store/apps/details?id=br.gov.caixa.tem&hl=pt_BR` | Page badge matches. Ajuda CTA adds `&pli=1`, which fails `EQUALS` |

`Saiba como` `[352]` and `Veja como é fácil ter sua azulzinha` `[354]` already match the visible copy. Keep that text on the `<a>` itself. The hero also renders a logo image inside the button; a click on the image does not produce the text `Saiba como`.

### Ajuda — `/ajuda`

| Trigger | GTM `Click URL` | Site today |
| --- | --- | --- |
| `[437]` Converse pelo WhatsApp | `https://wa.me/message/WHX3YUMWZVC3P1` | `HelpCtaSection` uses `https://wa.me/5511941473336` |
| `[439]` Telefone capitais | `tel:+551130035365` | `tel:3003-5365` |
| `[440]` Telefone demais localidades | `tel:08007295365` | `tel:0800-729-5365` |

### Footer Zuli

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[471]` Fale com a Zuli | Click text `(11) 94147-3336` and URL `https://api.whatsapp.com/send/?phone=5511941473336` | Phone text matches. Href is `https://wa.me/5511941473336` |
| `[473]` Dúvidas | Click text `Dúvidas? Fale com a Zuli` and the same `api.whatsapp.com` URL | Button text is `Dúvidas?`. Href is already the API URL |
| `[475]` Zuli image | `https://wa.me/5511941473336` | The footer phone link already uses this URL. The Zuli image itself is not inside that link |

### Bandeiras — `/bandeiras-vouchers`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[444]` QR Code | Click text `Saiba Como` and URL `https://azulzinhadacaixa.com.br/bandeiras-vouchers/qr-code` | Button is `Saiba como` (lowercase c) and points to `#saiba-sobre-bandeiras`. Route `bandeiras-vouchers/qr-code` does not exist |
| `[448]` Ticket | `https://credenciamento.ticket.com.br/#/` | Button href is `https://www.ticket.com.br/portal-estabelecimento/credenciar` |
| `[450]` Pluxee | `https://www.sodexobeneficios.com.br/estabelecimentos/` | Button href is `https://www.pluxee.com.br/credenciamento-aceitar-pluxee/`. The inline link is `.../estabelecimentos/quero-aceitar-sodexo.htm` |
| `[452]` VR | `https://estabelecimentos.vr.com.br/cadastro` | Button href is `https://estabelecimentos.vr.com.br/cadastro#/dados-iniciais` |
| `[454]` Alelo capitais | `tel:40025011` | Number `4002-5011` is a `<span>`, not a link |
| `[455]` Alelo demais | `tel:08005705011` | Number `0800-570 5011` is a `<span>`, not a link |
| `[457]` Ticket phone | `tel:4004 2233` (space) | `tel:40042233` |
| `[459]` Pluxee capitais | `tel:3003 5083` (space) | `tel:30035083` |
| `[460]` Pluxee demais | `tel:0800 728 5083` (spaces) | `tel:08007285083` |
| `[462]` VR capitais | `tel:40044938` | Already `tel:40044938` |
| `[463]` VR demais | `tel:0800 596 3838` (spaces) | `tel:08005963838` |

Alelo site button `https://credenciamento.alelo.com.br/` already matches `[446]`.

### Clover — `/clover`

Click text is already close enough for the URL triggers:

- `[366]` needs the link text to **contain** `Clover Flex`. “Peça a sua Clover Flex” does.
- `[368]` needs the link text to **contain** `Clover Mini`. “Peça a sua Clover Mini” does.
- `[370]` needs click text `Peça a sua Clover`. The bottom CTA already says that.

All three use the relative href `/peca-azulzinha`. On the apex host the resolved URL still has a trailing slash, and they still need page path `/clover`.

### Oferta especial — `/oferta-especial-azulzinha-da-caixa`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[346]` Peça já a sua! | Click text `Peça já a sua!` | No control uses that label. The form title is `Solicite agora a sua azulzinha da CAIXA` |
| `[344]` Saiba mais | Click text `Saiba mais` | Hero button already says `Saiba mais` |
| `[348]` Enviar | Click text `Enviar` | Submit button already says `Enviar` |

### Portal — `/portal`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[442]` Fazer login | Click text `Fazer login` and URL `https://portal.azulzinhadacaixa.com.br/` | No “Fazer login” control. Hero says `Saiba mais` and links to `#dobraportal` |

### App da azulzinha — `/app`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[25]` App Store | URL contains `https://apps.apple.com/br/app/app-da-azulzinha/id1570685624` | `/app` badges use `https://apps.apple.com`. The full URL exists only on `/link-pagamento` |
| `[26]` Google Play | URL contains `https://play.google.com/store/apps/details?id=com.fiserv.gestao.caixa` | `/app` badges use `https://play.google.com`. `/link-pagamento` already contains the id |

### Maquininhas — `/maquininhas`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[433]` Peça a azulzinha | URL `https://azulzinhadacaixa.com.br/peca-azulzinha` on this page | Bottom CTA is the relative `/peca-azulzinha`. Hero “Saiba mais” goes to `#dobra` and will not fire this trigger. Trailing slash and page path `/maquininhas` are still open |
| `[435]` Ir para ajuda | URL `https://azulzinhadacaixa.com.br/ajuda` on this page | `AjudaCtaSection` label is `Ir para ajuda` and the href is the relative `/ajuda`. Text is not checked. Trailing slash and page path `/maquininhas` are still open |

### Peça azulzinha — path contains `/peca-azulzinha`

| Trigger | GTM requires | Site today |
| --- | --- | --- |
| `[350]` Clique aqui e saiba como | Click text `Clique aqui e saiba como!` | That label is not on `/peca-azulzinha` |

### Lead form still pointed at CAIXA

| Trigger | GTM `Click URL` | Site today |
| --- | --- | --- |
| `[30]` On Click - Lead - azulzinha | contains `https://www.caixa.gov.br/caixacomsuaempresa/formulario/Paginas/default.aspx?utm_source=site_caixa&utm_medium=formulario-pagina-comsuaempresa&utm_campaign=com_a_sua_empresa` | No link uses this URL |
| `[17]` Acesse Agora | `https://www.portalcaixapagamentos.com.br/cefMerchantUI/#/` | No link uses this URL |

### LP CSS classes already present

These selectors already exist on `/maquininha-de-cartao-azulzinha-da-caixa`. Keep them on the clicked `<a>`, not on a wrapper:

- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-banner` `[288]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-quero` `[290]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-pro` `[292]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-pro` `[294]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-smart` `[296]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-smart` `[298]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-tef` `[300]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-tef` `[302]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-aproxima` `[304]`
- `.LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-saiba-mais-peca-a-sua-aproxima` `[306]`

The form on that page already prefixes dataLayer events with `LP-maquininha-de-cartao-azulzinha-da-caixa`, which is what triggers `[308]`–`[338]` expect (`LP-maquininha-de-cartao-azulzinha-da-caixaclicou_MEI_SIM`, and the same prefix for CNPJ, CNAE, nome, e-mail, celular, CEP, faturamento, checkbox, mais/menos informações, avisos de privacidade, and Enviar).

## 3. dataLayer event names

Video clicks, plays, and ends are pushed as `clicou-<tag>`, `play-<tag>`, and `fim-<tag>` from `VIDEO_GTM_BY_TITLE` and explicit `gtmTag` props. Change the tag the site pushes so the event string contains the GTM value.

| GTM event fragment | Triggers | Tag the site pushes now |
| --- | --- | --- |
| `Como-acessar-o-Portal-do-Cliente-da-azulzinha` | `[115, 117, 119]` | `Como-acessar-o-Portal-azulzinha` |
| `Como-fazer-uma-antecipação-de-recebíveis-pelo-aplicativo-da-azulzinha` | `[121, 123, 125]` | `Como-fazer-uma-antecipação-de-recebíveis-no-App-da-azulzinha?` |
| `Como-fazer-solicitações-de-bobinas-no-aplicativo-da-azulzinha-` | `[139, 141, 143]` | `Como-solicitar-bobinas-pelo-App-da-azulzinha` (this newer tag already feeds `[258, 260]`; `[262]` is a GTM bug, see below) |
| `Como-ver-o-histórico-de-links-de-pagamento-gerados-no-App-da-azulzinha?` | `[246, 248, 250]` | `gtm-Como-ver-o-histórico-de-links-de-pagamento-gerados-no-App-da-azulzinha?` — the `gtm-` prefix blocks the match |
| `Como-fazer-estorno` | `[91, 93, 95]` | no video tag |
| `Vantagens-do-aplicativo` | `[73, 75, 77]` | no video tag. The file `vantagens-aplicativo.mp4` is titled “Como funciona o App da azulzinha” |
| `vantagens-aplicativo` | `[192, 194, 196]` | no video tag |
| `vendas-parceladas` | `[180, 182, 184]` | `Como-fazer-vendas-parceladas-na-azulzinha`, which does feed the longer trigger `[85]` but not this short one |
| `primeiro-acesso-app` | `[186, 188, 190]` | `Primeiro-acesso-no-App-da-azulzinha` (feeds `[79]`) and `primeiro-acesso-portal` (feeds `[210]`). Neither contains `primeiro-acesso-app` |
| `play-gtm-vantagens` | `[372]` | Clover videos push `como-funciona-automacao-comercial` and `como-aproveitar-o-painel-clover` |

`button-click` with dataLayer field `data = Tenho-interesse` (`[6]`, variable `DL - data`) is not pushed anywhere.

These tags already satisfy their triggers and should stay as they are:

`Chegou-azulzinha,-a-maquininha-da-CAIXA`, `Como-cancelar-uma-venda-no-App-da-azulzinha`, `Como-conectar-sua-azulzinha-no-Wi-fi`, `Como-consultar-o-extrato-no-aplicativo-da-azulzinha`, `Como-consultar-o-histórico-de-recargas-pelo-App-da-azulzinha`, `Como-consultar-taxas-e-tarifas`, `Como-cuidar-da-bateria-da-sua-azulzinha`, `Como-declarar-o-imposto-de-renda-pelo-App-da-azulzinha`, `Como-fazer-vendas-no-débito-e-crédito-na-azulzinha`, `Como-fazer-vendas-parceladas-na-azulzinha`, `Como-funciona-o-App-da-azulzinha`, `Como-solicitar-bobinas-pelo-App-da-azulzinha`, `Como-usar-a-Agenda-Financeira-no-App-da-azulzinha?`, `Dicas-para-usar-a-azulzinha-da-CAIXA-com-segurança`, `Primeiro-acesso-no-App-da-azulzinha`, `Servico-de-Conveniencia`, `azulzinha-app`, `azulzinha-aproxima`, `azulzinha-aproxima-Vr`, `azulzinha-loterica`, `azulzinha-maquininha-caixa`, `azulzinha-smart`, `azulzinha-smart-depoimentos`, `primeiro-acesso-portal`, `como-gerenciar-suas-vendas-na-clover`, `como-acessar-seu-relatorio-de-vendas`, `como-gerenciar-sua-equipe-na-clover`.

Unprefixed form events (`clicou_CNPJ`, `clicou_email`, `Form_Sucesso`, `Form_Erro`, and the rest of `FORM_GTM_EVENTS`) already match the non-LP triggers. Keep pushing them on `/peca-azulzinha` and `/oferta-especial-azulzinha-da-caixa`.

## 4. Do not change the site to match these GTM typos

The site event is already the one the trigger name describes. The filter value is wrong inside GTM.

| Trigger | What GTM actually filters | What the site correctly sends |
| --- | --- | --- |
| `[62]` clicou_menos_informações | `clicou_Nome_de_contato` | `clicou_menos_informações` |
| `[148]` play histórico de recargas | `play-Como-consultar-o-histórico-de-recargas-pelo-App-da-azulzinha'` (trailing `'`) | the same name without `'` (`[149]` already matches) |
| `[153]` play imposto de renda | `play-Como-declarar-o-imposto-de-renda-pelo-App-da-azulzinha'` | the same name without `'` (`[154]` already matches) |
| `[262]` fim solicitar bobinas | `_event` regex is `clicou-Como-solicitar-bobinas-pelo-App-da-azulzinha` | `fim-Como-solicitar-bobinas-pelo-App-da-azulzinha` |
| `[372]` `[374]` Clover play | `_event` regex is `play-gtm-vantagens(clover)` and `play-como-gerenciar-suas-vendas-na-clover(clover)` | `play-gtm-vantagens` is missing (section 3). `play-como-gerenciar-suas-vendas-na-clover` is already pushed; the `(clover)` suffix is only in the GTM regex |
| `[356]` `[358]` CAIXA Tem classes | operator is `EQUALS` on `{{Click Element}}` against a selector string | a CSS class never equals that string. The operator has to be `CSS_SELECTOR`, and the anchors still need the classes from section 2 |

# GTM conditions the site still has to match

Source: `GTM-WR66X47` workspace 59, exported 2026-10-15. Container `azulzinhadacaixa.com.br`.

A trigger fires only when **every** condition is true. Click triggers read the live DOM (`Click Text`, `Click URL`, `Click Element`, `Page Path`). They do not read the `dataLayer` events pushed from `src/lib/analytics.ts`.

## Fixed

### Host and trailing slash

- `SITE_URL` is `https://azulzinhadacaixa.com.br`. `public/.htaccess` redirects `www` to that host.
- The production static export uses `trailingSlash: false`, and `.htaccess` no longer adds a slash. A relative `/ajuda` on the apex host resolves to `https://azulzinhadacaixa.com.br/ajuda`.
- `Page Path` for the routes in the old exact-match list (`/`, `/ajuda`, `/azulzinha-caixa-tem`, `/bandeiras-vouchers`, `/clover`, `/lotericas`, `/maquininhas`, `/oferta-especial-azulzinha-da-caixa`, `/portal`) no longer has a trailing slash on that export.

The Vorttex export still sets `basePath: "/azulzinha"` and `trailingSlash: true`. Those triggers do not match while the site is served from that preview.

### Click URL, labels, and hrefs

- Navbar and footer internal links stay relative, so on the apex host their click URL matches the exact list in the previous revision (`/ajuda`, `/blog`, `/peca-azulzinha`, and the rest of that table).
- Navbar button text is `Peça já a azulzinha` and the href is `/peca-azulzinha` (`[517]`).
- Header items say `Serviço de Conveniência` (`[499]`, `[503]`).
- `PORTAL_URL` is `https://portal.azulzinhadacaixa.com.br/` (`[427]`, `[442]`).
- Home: `Solicite a sua azulzinha` → `/peca-azulzinha` (`[390]`); a card says `Confira a novidade` and links to `/azulzinha-caixa-tem` (`[382]`); portal `Saiba mais` links to `/portal` (`[393]`); the Zuli card says `Me adicione no WhatsApp!` (`[469]`).
- CAIXA Tem store badges use `lp-azulzinha-caixa-tem-google-play` and `lp-azulzinha-caixa-tem-app-store`. The Ajuda Google Play URL no longer adds `&pli=1` (`[431]`).
- Ajuda: WhatsApp `https://wa.me/message/WHX3YUMWZVC3P1`, phones `tel:+551130035365` and `tel:08007295365` (`[437]`, `[439]`, `[440]`).
- Footer: the phone link uses `api.whatsapp.com`, the button says `Dúvidas? Fale com a Zuli`, and the Zuli photo links to `https://wa.me/5511941473336` (`[471]`, `[473]`, `[475]`).
- Bandeiras: button `Saiba Como` → `/bandeiras-vouchers/qr-code`; Ticket, Pluxee, and VR button URLs; Alelo, Ticket, Pluxee, and VR `tel:` values (`[444]`, `[448]`, `[450]`, `[452]`, `[454]`, `[455]`, `[457]`, `[459]`, `[460]`, `[463]`).
- Oferta especial has `Peça já a sua!` (`[346]`). The portal section “Primeiro acesso no Portal da azulzinha?” says `Fazer login` and links to the portal (`[442]`).
- `/app` store badges use the full App Store and Google Play URLs (`[25]`, `[26]`).
- `/peca-azulzinha` hero says `Clique aqui e saiba como!` (`[350]`).

### dataLayer tags updated

- `Como-acessar-o-Portal-do-Cliente-da-azulzinha` (`[115]`, `[117]`, `[119]`)
- `Como-fazer-uma-antecipação-de-recebíveis-pelo-aplicativo-da-azulzinha` (`[121]`, `[123]`, `[125]`)
- `Como-ver-o-histórico-de-links-de-pagamento-gerados-no-App-da-azulzinha?` (`[246]`, `[248]`, `[250]`) — the `gtm-` prefix was removed

## Still open

These were not changed because the site has no control for them, or changing the current tag would stop a trigger that already matches.

| Item | Why it is still open |
| --- | --- |
| `[417]` `Pagamentos por WhatsApp` → `/pagamentos-whatsapp` | The page stays disabled (`page.disabled.tsx`). The navbar item was removed |
| `[30]` CAIXA lead URL, `[17]` Acesse Agora | No link on the site uses those URLs |
| `[6]` `button-click` + `data = Tenho-interesse` | No control pushes that event |
| `[139]` `[141]` `[143]` old bobinas tag | The current tag `Como-solicitar-bobinas-pelo-App-da-azulzinha` already feeds `[258]` and `[260]` |
| `[180]` `[182]` `[184]` short `vendas-parceladas` | The longer tag already feeds `[85]` |
| `[186]` `[188]` `[190]` `primeiro-acesso-app` | Existing tags feed `[79]` and `[210]` and do not contain this fragment |
| `[91]` `[93]` `[95]` `Como-fazer-estorno` | No video uses that tag |
| `[73]` `[75]` `[77]` `Vantagens-do-aplicativo`, `[192]` `[194]` `[196]` `vantagens-aplicativo` | `vantagens-aplicativo.mp4` is titled “Como funciona o App da azulzinha”, which already feeds that trigger |
| `[372]` `play-gtm-vantagens` | Clover videos keep their current tags. The GTM regex also appends `(clover)` — see below |
| Vorttex `basePath` and trailing slash | Preview host only |

## Do not change the site to match these GTM typos

| Trigger | What GTM actually filters | What the site sends |
| --- | --- | --- |
| `[62]` clicou_menos_informações | `clicou_Nome_de_contato` | `clicou_menos_informações` |
| `[148]` play histórico de recargas | event name with a trailing `'` | the same name without `'` (`[149]` already matches) |
| `[153]` play imposto de renda | event name with a trailing `'` | the same name without `'` (`[154]` already matches) |
| `[262]` fim solicitar bobinas | `_event` regex is the `clicou-` name | `fim-Como-solicitar-bobinas-pelo-App-da-azulzinha` |
| `[372]` `[374]` Clover play | `_event` regex includes a literal `(clover)` | `play-como-gerenciar-suas-vendas-na-clover` is already pushed. `play-gtm-vantagens` is not |
| `[356]` `[358]` CAIXA Tem classes | operator is `EQUALS` on `{{Click Element}}` against a selector string | the classes are on the badge anchor and image. A DOM node never equals that string; the operator has to be `CSS_SELECTOR` |

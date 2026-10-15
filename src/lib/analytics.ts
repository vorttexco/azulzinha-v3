export const GTM_ID = "GTM-WR66X47";
export const META_PIXEL_ID = "405492278595747";
export const GTM_TRANSACTION_ID = 332950684;

export interface GtmEvent {
  event: string;
  name?: string;
  id?: number;
  pageName?: string;
  transactionId?: number;
  data?: string;
  location?: string;
  href?: string;
}

export type AnalyticsLocation =
  | "hero"
  | "cta-section"
  | "blue-cta"
  | "possibilities"
  | "feature"
  | "beneficios"
  | "faq"
  | "portal-app"
  | "home-carousel"
  | "home-products"
  | "footer"
  | "footer-duvidas"
  | "ajuda"
  | "portal-faq"
  | "navbar"
  | "video-section";

export type SocialNetwork = "instagram" | "facebook" | "linkedin" | "youtube";

export type ScrollDepthPercent = 25 | 50 | 75 | 90;

declare global {
  interface Window {
    dataLayer?: GtmEvent[];
    fbq?: (...args: unknown[]) => void;
  }
}

interface JourneyFields {
  location: AnalyticsLocation;
  pageName: string;
  href?: string;
}

function withTransaction(
  payload: GtmEvent,
): GtmEvent {
  return { ...payload, transactionId: GTM_TRANSACTION_ID };
}

export function pushGtm(payload: GtmEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer ??= [];
  window.dataLayer.push(payload);
}

export function trackMeta(event: "PageView" | "Lead"): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", event);
}

export function trackFormSuccess(trackForm: () => void): void {
  trackForm();
  trackMeta("Lead");
}

export function buildCtaGtmEvent(input: JourneyFields & { name: string }): GtmEvent {
  return withTransaction({
    event: "cta_click",
    name: input.name,
    location: input.location,
    href: input.href,
    pageName: input.pageName,
  });
}

export function pushCtaGtm(input: JourneyFields & { name: string }): void {
  pushGtm(buildCtaGtmEvent(input));
}

/**
 * Home carousel events. Distinct from the container link triggers
 * TRIGGER_banner_azulzinhapay, TRIGGER_banner_clover(home),
 * TRIGGER_banner_pix-azulzinha(home), TRIGGER_banner_caixa-tem(home),
 * TRIGGER_banner_loterico(home), TRIGGER_banner_antecipacao-de-vendas(home)
 * and TRIGGER_banner_zuli.
 */
export const HOME_BANNER_GTM_EVENTS = {
  premioRa2026: "clicou-home-premio-ra-2026",
  gasDoPovo: "clicou-home-programa-gas-do-povo",
  pixAprovado: "clicou-home-pix-comprovante",
  zuli: "clicou-home-zuli-whatsapp",
  clover: "clicou-home-clover-azulzinha",
  pixAproximacao: "clicou-home-pix-aproximacao",
  ipva: "clicou-home-ipva-licenciamento",
  lotericaPro: "clicou-home-loterica-pro",
  debitoCredito: "clicou-home-debito-credito-lotericas",
  creditoUmDia: "clicou-home-antecipacao-1-dia",
} as const;

export function buildBannerGtmEvent(
  input: JourneyFields & { name: string; eventName?: string },
): GtmEvent {
  return withTransaction({
    event: input.eventName ?? "banner_click",
    name: input.name,
    location: input.location,
    href: input.href,
    pageName: input.pageName,
  });
}

export function pushBannerGtm(
  input: JourneyFields & { name: string; eventName?: string },
): void {
  pushGtm(buildBannerGtmEvent(input));
}

export function buildProductGtmEvent(input: JourneyFields & { name: string }): GtmEvent {
  return withTransaction({
    event: "product_click",
    name: input.name,
    location: input.location,
    href: input.href,
    pageName: input.pageName,
  });
}

export function pushProductGtm(input: JourneyFields & { name: string }): void {
  pushGtm(buildProductGtmEvent(input));
}

export function buildWhatsappGtmEvent(input: JourneyFields): GtmEvent {
  return withTransaction({
    event: "whatsapp_click",
    name: "whatsapp",
    location: input.location,
    href: input.href,
    pageName: input.pageName,
  });
}

export function pushWhatsappGtm(input: JourneyFields): void {
  pushGtm(buildWhatsappGtmEvent(input));
}

export function buildPhoneGtmEvent(input: {
  phone: string;
  location: AnalyticsLocation;
  pageName: string;
}): GtmEvent {
  return withTransaction({
    event: "phone_click",
    name: input.phone,
    location: input.location,
    pageName: input.pageName,
  });
}

export function pushPhoneGtm(input: {
  phone: string;
  location: AnalyticsLocation;
  pageName: string;
}): void {
  pushGtm(buildPhoneGtmEvent(input));
}

export function buildSocialGtmEvent(input: JourneyFields & { network: SocialNetwork }): GtmEvent {
  return withTransaction({
    event: "social_click",
    name: input.network,
    location: input.location,
    href: input.href,
    pageName: input.pageName,
  });
}

export function pushSocialGtm(input: JourneyFields & { network: SocialNetwork }): void {
  pushGtm(buildSocialGtmEvent(input));
}

export function buildPortalGtmEvent(input: JourneyFields): GtmEvent {
  return withTransaction({
    event: "portal_click",
    name: "portal",
    location: input.location,
    href: input.href,
    pageName: input.pageName,
  });
}

export function pushPortalGtm(input: JourneyFields): void {
  pushGtm(buildPortalGtmEvent(input));
}

export function buildScrollDepthGtmEvent(input: {
  percent: ScrollDepthPercent;
  pageName: string;
}): GtmEvent {
  return withTransaction({
    event: "scroll_depth",
    name: String(input.percent),
    pageName: input.pageName,
  });
}

export function pushScrollDepthGtm(input: {
  percent: ScrollDepthPercent;
  pageName: string;
}): void {
  pushGtm(buildScrollDepthGtmEvent(input));
}

export function buildWebVitalGtmEvent(input: {
  metric: string;
  value: number;
  pageName: string;
}): GtmEvent {
  const data =
    input.metric === "CLS" ? input.value.toFixed(4) : String(Math.round(input.value));
  return withTransaction({
    event: "web_vitals",
    name: input.metric,
    data,
    pageName: input.pageName,
  });
}

export function pushWebVitalGtm(input: {
  metric: string;
  value: number;
  pageName: string;
}): void {
  pushGtm(buildWebVitalGtmEvent(input));
}

export function buildCookieGtmEvent(input: {
  action: "view" | "accept";
  pageName: string;
}): GtmEvent {
  if (input.action === "view") {
    return withTransaction({
      event: "cookie_banner_view",
      pageName: input.pageName,
    });
  }
  return withTransaction({
    event: "cookie_consent",
    name: "accept",
    pageName: input.pageName,
  });
}

export function pushCookieGtm(input: {
  action: "view" | "accept";
  pageName: string;
}): void {
  pushGtm(buildCookieGtmEvent(input));
}

export function isWhatsappHref(href: string): boolean {
  return href.includes("wa.me") || href.includes("api.whatsapp.com");
}

export function buildPageViewEvent(pageName: string): GtmEvent {
  return {
    event: "page",
    pageName,
    transactionId: GTM_TRANSACTION_ID,
  };
}

/** Matches Angular header onNavigation label slug (NFD, strip accents, spaces → hyphens). */
export function slugifyNavLabel(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

/** Canonical header labels so GTM triggers stay aligned with Angular event names. */
export const NAV_GTM_LABELS = {
  portal: "Acesse o Portal",
  cta: "Peça já a azulzinha",
} as const;

export function buildNavGtmEvent(label: string): GtmEvent | null {
  if (!label) return null;
  return {
    event: `clicou-em-${slugifyNavLabel(label)}`,
    name: label,
    transactionId: GTM_TRANSACTION_ID,
  };
}

export function pushNavGtm(label: string): void {
  const payload = buildNavGtmEvent(label);
  if (!payload) return;
  pushGtm(payload);
}

export const FORM_GTM_EVENTS = {
  "gtm-mei-s": { event: "clicou_MEI_SIM", name: "MEI" },
  "gtm-mei-n": { event: "clicou_MEI_NAO", name: "MEI" },
  "gtm-cliente-s": { event: "clicou_CLIENTE_SIM", name: "CLIENTE" },
  "gtm-cliente-n": { event: "clicou_CLIENTE_NAO", name: "CLIENTE" },
  "gtm-cnpj": { event: "clicou_CNPJ", name: "CNPJ" },
  "gtm-cnae": { event: "clicou_CNAE", name: "CNAE" },
  "gtm-nome-contato": { event: "clicou_Nome_de_contato", name: "Nome do contato" },
  "gtm-email": { event: "clicou_email", name: "E-mail" },
  "gtm-cel-contato": { event: "clicou_Celular_de_contato", name: "Celular de contato" },
  "gtm-cep": { event: "clicou_CEP", name: "CEP" },
  "gtm-fatu": { event: "clicou_expandir_faturamento", name: "Faturamento mensal" },
  "gtm-maquinas": { event: "clicou_expandir_maquinas", name: "Maquinas" },
  "gtm-check": { event: "clicou_checkbox_autorizo", name: "Checkbox autorizo" },
  "gtm-mais": { event: "clicou_mais_informações", name: "Mais informações" },
  "gtm-menos": { event: "clicou_menos_informações", name: "Menos informações" },
  "gtm-caixa": {
    event: "clicou_Aviso_de_Privacidade_CAIXA",
    name: "Aviso de Privacidade CAIXA",
  },
  "gtm-caixa-cartoes": {
    event: "clicou_Aviso_de_Privacidade_CAIXA_Cartões",
    name: "Aviso de Privacidade CAIXA Cartões",
  },
  "gtm-fiserv": {
    event: "clicou_Aviso_de_Privacidade_Fiserv",
    name: "Política de Privacidade Fiserv",
  },
  "gtm-enviar": { event: "clicou_Enviar_formulario", name: "Enviar" },
  "gtm-success": { event: "Form_Sucesso", name: "Form_Sucesso" },
  "gtm-error": { event: "Form_Erro", name: "Form_Erro" },
} as const;

export type FormGtmTag = keyof typeof FORM_GTM_EVENTS;

export function buildFormGtmEvent(tag: FormGtmTag, sufixo = ""): GtmEvent {
  const { event, name } = FORM_GTM_EVENTS[tag];
  return {
    event: `${sufixo}${event}`,
    name,
    id: GTM_TRANSACTION_ID,
  };
}

export function pushFormGtm(tag: FormGtmTag, sufixo = ""): void {
  pushGtm(buildFormGtmEvent(tag, sufixo));
}

export type VideoGtmAction = "play" | "fim" | "clicou";

export function buildVideoGtmEvent(
  action: VideoGtmAction,
  tag: string,
  title: string
): GtmEvent {
  return {
    event: `${action}-${tag}`,
    name: `${action} ${title}`,
    id: GTM_TRANSACTION_ID,
  };
}

export function pushVideoGtm(
  action: VideoGtmAction,
  tag: string,
  title: string
): void {
  if (!tag) return;
  pushGtm(buildVideoGtmEvent(action, tag, title));
}

export const VIDEO_GTM_BY_TITLE: Record<string, string> = {
  "Como aceitar o Programa Gás do Povo com a azulzinha aproxima":
    "Como-aceitar-o-Programa-Gás-do-Povo-com-a-azulzinha-aproxima",
  "Como aceitar o Programa Gás do Povo com a azulzinha":
    "Como-aceitar-o-Programa-Gás-do-Povo-com-a-azulzinha",
  "Conheça a azulzinha, a maquininha da CAIXA":
    "Chegou-azulzinha,-a-maquininha-da-CAIXA",
  "Como fazer vendas no débito e crédito na azulzinha":
    "Como-fazer-vendas-no-débito-e-crédito-na-azulzinha",
  "Como fazer vendas no débito e crédito":
    "Como-fazer-vendas-no-débito-e-crédito-na-azulzinha",
  "Como fazer vendas parceladas na azulzinha":
    "Como-fazer-vendas-parceladas-na-azulzinha",
  "Como fazer vendas parceladas": "Como-fazer-vendas-parceladas-na-azulzinha",
  "Como conectar sua azulzinha pro no Wi-fi":
    "Como-conectar-sua-azulzinha-no-Wi-fi",
  "Como cuidar da bateria da sua azulzinha":
    "Como-cuidar-da-bateria-da-sua-azulzinha",
  "Como funciona o App da azulzinha": "Como-funciona-o-App-da-azulzinha",
  "Primeiro acesso no App da azulzinha": "Primeiro-acesso-no-App-da-azulzinha",
  "Como usar a Agenda Financeira no App da azulzinha?":
    "Como-usar-a-Agenda-Financeira-no-App-da-azulzinha?",
  "Dicas para usar a azulzinha da CAIXA com segurança":
    "Dicas-para-usar-a-azulzinha-da-CAIXA-com-segurança",
  "Como consultar o extrato no App da azulzinha":
    "Como-consultar-o-extrato-no-aplicativo-da-azulzinha",
  "Como cancelar uma venda no App da azulzinha":
    "Como-cancelar-uma-venda-no-App-da-azulzinha",
  "Como fazer uma antecipação de recebíveis no App da azulzinha?":
    "Como-fazer-uma-antecipação-de-recebíveis-pelo-aplicativo-da-azulzinha",
  "Como solicitar bobinas pelo App da azulzinha":
    "Como-solicitar-bobinas-pelo-App-da-azulzinha",
  "Como consultar o histórico de recargas pelo App da azulzinha":
    "Como-consultar-o-histórico-de-recargas-pelo-App-da-azulzinha",
  "Como consultar as taxas e tarifas da azulzinha pelo App":
    "Como-consultar-taxas-e-tarifas",
  "Como declarar imposto de renda pelo App da azulzinha":
    "Como-declarar-o-imposto-de-renda-pelo-App-da-azulzinha",
  "Cancelamento de Venda App azulzinha":
    "azulzinha_cancelamento_de_venda_app_motion",
  "Agora tem azulzinha no App CAIXA Tem!":
    "Agora-tem-azulzinha-no-App-CAIXA-Tem!",
  "Como gerar um Link de Pagamento no App CAIXA Tem?":
    "Como-gerar-um-Link-de-Pagamento-no-App-CAIXA-Tem?",
  "Como fazer uma venda com QR Code no App CAIXA Tem?":
    "Como-fazer-uma-venda-com-QR-Code-no-App-CAIXA-Tem?",
  "Como fazer uma venda por aproximação no App CAIXA Tem?":
    "Como-fazer-uma-venda-por-aproximação-no-App-CAIXA-Tem?",
  "Como consultar suas vendas no App CAIXA Tem?":
    "Como-consultar-suas-vendas-com-azulzinha-no-App-CAIXA-Tem?",
  "Como consultar suas vendas?":
    "Como-consultar-suas-vendas-com-azulzinha-no-App-CAIXA-Tem?",
  "Como consultar seus recebimentos no App CAIXA Tem?":
    "Como-consultar-seus-recebimentos-com-azulzinha-no-App-CAIXA-Tem?",
  "Como consultar seus recebimentos?":
    "Como-consultar-seus-recebimentos-com-azulzinha-no-App-CAIXA-Tem?",
  "Como consultar as taxas e tarifas da função azulzinha?":
    "Como-consultar-as-taxas-e-tarifas-da-função-azulzinha-no-App-CAIXA-Tem?",
  "Como ver as taxas e tarifas?":
    "Como-consultar-as-taxas-e-tarifas-da-função-azulzinha-no-App-CAIXA-Tem?",
  "Como tirar suas dúvidas no App CAIXA Tem?":
    "Como-tirar-suas-dúvidas-sobre-a-azulzinha-no-App-CAIXA-Tem?",
  "Como usar o atendimento pelo chatbot?":
    "Como-tirar-suas-dúvidas-sobre-a-azulzinha-no-App-CAIXA-Tem?",
  "Como gerar link de pagamento com o App da azulzinha?":
    "gtm-Como-gerar-link-de-pagamento-com-o-App-da-azulzinha?",
  "Como ver o histórico de links de pagamento gerados no App da azulzinha?":
    "Como-ver-o-histórico-de-links-de-pagamento-gerados-no-App-da-azulzinha?",
  "Como acessar o Portal do Cliente da azulzinha":
    "Como-acessar-o-Portal-do-Cliente-da-azulzinha",
  "Serviço de Conveniência": "Servico-de-Conveniencia",
  "Como funciona a automação comercial?": "como-funciona-automacao-comercial",
  "Como aproveitar o Portal Clover?": "como-aproveitar-o-painel-clover",
  "Como gerenciar suas vendas na Clover?": "como-gerenciar-suas-vendas-na-clover",
  "Como acessar seu relatório de vendas?": "como-acessar-seu-relatorio-de-vendas",
  "Como gerenciar sua equipe na Clover?": "como-gerenciar-sua-equipe-na-clover",
  "Como gerenciar seus funcionários?": "como-gerenciar-sua-equipe-na-clover",
};

export function gtmTagForVideoTitle(title: string, explicit?: string): string {
  if (explicit) return explicit;
  return VIDEO_GTM_BY_TITLE[title] ?? title.replace(/\s+/g, "-");
}

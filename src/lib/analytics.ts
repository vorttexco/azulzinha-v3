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
}

export function pushGtm(payload: GtmEvent): void {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer ??= [];
  w.dataLayer.push(payload);
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
    "Como-fazer-uma-antecipação-de-recebíveis-no-App-da-azulzinha?",
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
    "gtm-Como-ver-o-histórico-de-links-de-pagamento-gerados-no-App-da-azulzinha?",
  "Como acessar o Portal do Cliente da azulzinha":
    "Como-acessar-o-Portal-azulzinha",
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

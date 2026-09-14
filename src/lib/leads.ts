/**
 * Leads API client — mirrors the Angular formulario.component.ts submit flow.
 * Credentials stay client-side (static export), same as the legacy site.
 */

const HOMOLOG = {
  apiUrl:
    "https://cat.api.firstdata.com/bwa/leads-management-api/api/v1/leads",
  reqId: "b02c1222-8830-4877-a23d-8a0644c4bd47",
  apiKey: "X0GW3QGOYFn4r7DHcVC8KuatUnNs6MGB",
  apiSecret: "N93nmFmoY0NzSMC5",
} as const;

const PROD = {
  apiUrl:
    "https://prod.api.firstdata.com/bwa/leads-management-api/api/v1/leads",
  reqId: "b02c1222-8830-4877-a23d-8a0644c4bd47",
  apiKey: "73UwabXgrxehC4yVvnClWETAzrCU3r9J",
  apiSecret: "7Wpfw5thHGCX0uQFpfrVTViMBP5oA8JDWUivqGdonte",
} as const;

export interface LeadFormPayload {
  cnpj: string;
  cnae: string;
  nome: string;
  email: string;
  celular: string;
  cep: string;
  faturamento: string;
}

export interface LeadApiError {
  messages: string[];
}

function isProductionHost(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return (
    host === "azulzinhadacaixa.com.br" ||
    host === "www.azulzinhadacaixa.com.br"
  );
}

function getLeadsConfig() {
  return isProductionHost() ? PROD : HOMOLOG;
}

/** Matches Angular CryptoJS HMAC: SHA-256 hex digest, then btoa(hex). */
async function getMessageSignature(
  apiKey: string,
  apiSecret: string,
  reqId: string,
  timestamp: number,
  requestBody: string
): Promise<string> {
  const msg = apiKey + reqId + String(timestamp) + requestBody;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(apiSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(msg)
  );
  const hex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return btoa(hex);
}

function stripCnpj(cnpj: string): string {
  return cnpj.replace(/[./-]/g, "").toUpperCase();
}

function stripDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function buildLeadRequestBody(data: LeadFormPayload) {
  return {
    type: "CAIXA",
    cnae: data.cnae,
    monthlyBillingWithCard: data.faturamento,
    contact: {
      cnpj: stripCnpj(data.cnpj),
      name: data.nome,
      email: data.email,
      phoneNumber: stripDigits(data.celular),
      postalCode: stripDigits(data.cep),
    },
  };
}

/** User-facing messages for known API errors (Angular parseMsg). */
export function parseLeadErrorMessage(msg: string): string {
  switch (msg) {
    case "Identificamos que você já é cliente azulzinha. Contate os nossos canais de atendimento.":
      return 'Você já sabe que <b>com azulzinha você pode muito mais!</b><br>Acesse nossa seção <a href="/ajuda">“Ajuda”</a> e encontre tutoriais, tire suas dúvidas e veja nossos canais de atendimento.';
    case "Ramo de Atividade Indesejado, Infelizmente não podemos seguir com essa solicitação.":
      return "A azulzinha agradece seu interesse!<br>Infelizmente, o ramo do seu negócio não se enquadra nos critérios de aceitação para seguirmos com seu pedido de credenciamento neste momento.";
    default:
      return msg;
  }
}

export async function submitLead(
  data: LeadFormPayload
): Promise<{ ok: true } | { ok: false; messages: string[] }> {
  const { apiUrl, reqId, apiKey, apiSecret } = getLeadsConfig();
  const body = buildLeadRequestBody(data);
  const payload = JSON.stringify(body);
  const timestamp = Date.now();
  const messageSignature = await getMessageSignature(
    apiKey,
    apiSecret,
    reqId,
    timestamp,
    payload
  );

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": apiKey,
        "Client-Request-Id": reqId,
        Timestamp: String(timestamp),
        "Message-Signature": messageSignature,
      },
      body: payload,
    });

    if (res.ok) return { ok: true };

    let messages = [
      "Não foi possível enviar a sua mensagem, tente novamente em alguns instantes.",
    ];
    try {
      const err = (await res.json()) as LeadApiError;
      if (err.messages?.length) messages = err.messages;
    } catch {
      // keep default message
    }
    return { ok: false, messages };
  } catch {
    return {
      ok: false,
      messages: [
        "Não foi possível enviar a sua mensagem, tente novamente em alguns instantes.",
      ],
    };
  }
}

/** Blocked CNAE codes (Angular cnaeNeg). */
export const BLOCKED_CNAES = new Set(["8299706"]);

export function isBlockedCnae(cnae: string): boolean {
  return BLOCKED_CNAES.has(cnae);
}

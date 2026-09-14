/** Alphanumeric CNPJ validation (Receita Federal / Angular formulario). */

const TAMANHO_CNPJ_SEM_DV = 12;
const REGEX_CNPJ_SEM_DV = /^([A-Z\d]){12}$/;
const REGEX_CNPJ = /^([A-Z\d]){12}(\d){2}$/;
const REGEX_MASCARA = /[./-]/g;
const REGEX_NAO_PERMITIDOS = /[^A-Z\d./-]/i;
const VALOR_BASE = "0".charCodeAt(0);
const PESOS_DV = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const CNPJ_ZERADO = "00000000000000";

function removeMascaraCNPJ(cnpj: string): string {
  return cnpj.replace(REGEX_MASCARA, "");
}

function calculaDV(cnpjSemDv: string): string {
  if (REGEX_NAO_PERMITIDOS.test(cnpjSemDv)) {
    throw new Error("CNPJ inválido");
  }

  const limpo = removeMascaraCNPJ(cnpjSemDv.toUpperCase());
  if (
    !REGEX_CNPJ_SEM_DV.test(limpo) ||
    limpo === CNPJ_ZERADO.substring(0, TAMANHO_CNPJ_SEM_DV)
  ) {
    throw new Error("CNPJ inválido");
  }

  let somatorioDV1 = 0;
  let somatorioDV2 = 0;
  for (let i = 0; i < TAMANHO_CNPJ_SEM_DV; i++) {
    const asciiDigito = limpo.charCodeAt(i) - VALOR_BASE;
    somatorioDV1 += asciiDigito * PESOS_DV[i + 1];
    somatorioDV2 += asciiDigito * PESOS_DV[i];
  }

  const dv1 = somatorioDV1 % 11 < 2 ? 0 : 11 - (somatorioDV1 % 11);
  somatorioDV2 += dv1 * PESOS_DV[TAMANHO_CNPJ_SEM_DV];
  const dv2 = somatorioDV2 % 11 < 2 ? 0 : 11 - (somatorioDV2 % 11);

  return `${dv1}${dv2}`;
}

export function isValidCnpj(cnpj: string): boolean {
  if (!cnpj || REGEX_NAO_PERMITIDOS.test(cnpj)) return false;

  const limpo = removeMascaraCNPJ(cnpj.toUpperCase());
  if (!REGEX_CNPJ.test(limpo) || limpo === CNPJ_ZERADO) return false;

  try {
    const dvInformado = limpo.substring(TAMANHO_CNPJ_SEM_DV);
    const dvCalculado = calculaDV(limpo.substring(0, TAMANHO_CNPJ_SEM_DV));
    return dvInformado === dvCalculado;
  } catch {
    return false;
  }
}

/** Mask AA.AAA.AAA/AAAA-AA — first 12 alphanumeric, last 2 digits. */
export function formatCnpj(value: string): string {
  const raw = value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 14);

  const base = raw.slice(0, 12);
  const dv = raw.slice(12).replace(/\D/g, "").slice(0, 2);
  const chars = (base + dv).split("");

  let result = "";
  for (let i = 0; i < chars.length; i++) {
    if (i === 2 || i === 5) result += ".";
    if (i === 8) result += "/";
    if (i === 12) result += "-";
    result += chars[i];
  }
  return result;
}

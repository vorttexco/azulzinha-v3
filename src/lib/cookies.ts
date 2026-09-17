export const COOKIE_CONSENT_STORAGE_KEY = "cookie";
export const COOKIE_CONSENT_STORAGE_VALUE = "accept";

export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) != null;
}

export function acceptCookieConsent(): void {
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, COOKIE_CONSENT_STORAGE_VALUE);
}

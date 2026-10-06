import { describe, expect, it, vi } from "vitest";
import {
  GTM_TRANSACTION_ID,
  buildBannerGtmEvent,
  buildCookieGtmEvent,
  buildCtaGtmEvent,
  buildPhoneGtmEvent,
  buildPortalGtmEvent,
  buildProductGtmEvent,
  buildScrollDepthGtmEvent,
  buildSocialGtmEvent,
  buildWebVitalGtmEvent,
  buildWhatsappGtmEvent,
  pushCtaGtm,
  trackFormSuccess,
  trackMeta,
} from "@/lib/analytics";

const pageName = "/peca-azulzinha";

describe("journey gtm payloads", () => {
  it("builds cta_click with label, location, page and href", () => {
    expect(
      buildCtaGtmEvent({
        name: "Peça já a sua",
        location: "cta-section",
        href: "/peca-azulzinha",
        pageName: "/",
      }),
    ).toEqual({
      event: "cta_click",
      name: "Peça já a sua",
      location: "cta-section",
      href: "/peca-azulzinha",
      pageName: "/",
      transactionId: GTM_TRANSACTION_ID,
    });
  });

  it("builds banner_click and product_click", () => {
    expect(
      buildBannerGtmEvent({
        name: "Clover da azulzinha",
        location: "home-carousel",
        href: "/clover",
        pageName: "/",
      }),
    ).toMatchObject({
      event: "banner_click",
      name: "Clover da azulzinha",
      location: "home-carousel",
      href: "/clover",
      pageName: "/",
    });

    expect(
      buildProductGtmEvent({
        name: "azulzinha pro",
        location: "home-products",
        href: "/maquininhas/pro",
        pageName: "/",
      }),
    ).toMatchObject({
      event: "product_click",
      name: "azulzinha pro",
      location: "home-products",
    });
  });

  it("builds contact events", () => {
    expect(
      buildWhatsappGtmEvent({
        location: "footer",
        href: "https://wa.me/5511941473336",
        pageName,
      }),
    ).toMatchObject({
      event: "whatsapp_click",
      name: "whatsapp",
      location: "footer",
    });

    expect(
      buildPhoneGtmEvent({
        phone: "30035365",
        location: "ajuda",
        pageName,
      }),
    ).toEqual({
      event: "phone_click",
      name: "30035365",
      location: "ajuda",
      pageName,
      transactionId: GTM_TRANSACTION_ID,
    });

    expect(
      buildSocialGtmEvent({
        network: "instagram",
        location: "footer",
        href: "https://www.instagram.com/azulzinhadacaixa/",
        pageName,
      }),
    ).toMatchObject({
      event: "social_click",
      name: "instagram",
      location: "footer",
    });

    expect(
      buildPortalGtmEvent({
        location: "portal-faq",
        href: "https://portal.azulzinhadacaixa.com.br",
        pageName,
      }),
    ).toMatchObject({
      event: "portal_click",
      name: "portal",
      location: "portal-faq",
    });
  });

  it("builds scroll depth with the percent as the event name", () => {
    expect(
      buildScrollDepthGtmEvent({ percent: 75, pageName: "/blog" }),
    ).toEqual({
      event: "scroll_depth",
      name: "75",
      pageName: "/blog",
      transactionId: GTM_TRANSACTION_ID,
    });
  });

  it("rounds CLS to 4 decimals and other vitals to integer milliseconds", () => {
    expect(
      buildWebVitalGtmEvent({
        metric: "CLS",
        value: 0.08421,
        pageName: "/",
      }).data,
    ).toBe("0.0842");

    expect(
      buildWebVitalGtmEvent({
        metric: "LCP",
        value: 2500.4,
        pageName: "/",
      }),
    ).toMatchObject({
      event: "web_vitals",
      name: "LCP",
      data: "2500",
      pageName: "/",
    });
  });

  it("builds cookie view without a choice and accept with name accept", () => {
    expect(
      buildCookieGtmEvent({ action: "view", pageName: "/" }),
    ).toEqual({
      event: "cookie_banner_view",
      pageName: "/",
      transactionId: GTM_TRANSACTION_ID,
    });

    expect(
      buildCookieGtmEvent({ action: "accept", pageName: "/" }),
    ).toEqual({
      event: "cookie_consent",
      name: "accept",
      pageName: "/",
      transactionId: GTM_TRANSACTION_ID,
    });
  });
});

describe("dataLayer and meta helpers", () => {
  it("pushCtaGtm appends the cta payload to dataLayer", () => {
    window.dataLayer = [];
    pushCtaGtm({
      name: "Saiba mais",
      location: "hero",
      href: "/peca-azulzinha",
      pageName: "/",
    });
    expect(window.dataLayer).toEqual([
      buildCtaGtmEvent({
        name: "Saiba mais",
        location: "hero",
        href: "/peca-azulzinha",
        pageName: "/",
      }),
    ]);
  });

  it("trackMeta calls fbq when the pixel is present", () => {
    const fbq = vi.fn();
    window.fbq = fbq;
    trackMeta("Lead");
    expect(fbq).toHaveBeenCalledWith("track", "Lead");
  });

  it("trackMeta does nothing when fbq is missing", () => {
    delete window.fbq;
    expect(() => trackMeta("PageView")).not.toThrow();
  });

  it("trackFormSuccess emits the form success event before the Meta Lead", () => {
    const order: string[] = [];
    window.fbq = () => {
      order.push("Lead");
    };
    trackFormSuccess(() => {
      order.push("gtm-success");
    });
    expect(order).toEqual(["gtm-success", "Lead"]);
  });
});

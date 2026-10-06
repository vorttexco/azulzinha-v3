"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  isWhatsappHref,
  pushBannerGtm,
  pushCtaGtm,
  pushPhoneGtm,
  pushPortalGtm,
  pushProductGtm,
  pushSocialGtm,
  pushWhatsappGtm,
  type AnalyticsLocation,
  type SocialNetwork,
} from "@/lib/analytics";

export type TrackedKind =
  | "cta"
  | "banner"
  | "product"
  | "whatsapp"
  | "phone"
  | "social"
  | "portal";

interface TrackedAnchorProps {
  href: string;
  kind: TrackedKind;
  name: string;
  location: AnalyticsLocation;
  className?: string;
  children: ReactNode;
  newTab?: boolean;
  network?: SocialNetwork;
  phone?: string;
}

function isHttp(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function TrackedAnchor({
  href,
  kind,
  name,
  location,
  className,
  children,
  newTab,
  network,
  phone,
}: TrackedAnchorProps) {
  const pageName = usePathname();

  function track() {
    if (kind === "cta") {
      pushCtaGtm({ name, location, href, pageName });
      return;
    }
    if (kind === "banner") {
      if (isWhatsappHref(href)) {
        pushWhatsappGtm({ location, href, pageName });
        return;
      }
      pushBannerGtm({ name, location, href, pageName });
      return;
    }
    if (kind === "product") {
      pushProductGtm({ name, location, href, pageName });
      return;
    }
    if (kind === "whatsapp") {
      pushWhatsappGtm({ location, href, pageName });
      return;
    }
    if (kind === "phone") {
      pushPhoneGtm({ phone: phone ?? name, location, pageName });
      return;
    }
    if (kind === "social") {
      if (!network) return;
      pushSocialGtm({ network, location, href, pageName });
      return;
    }
    pushPortalGtm({ location, href, pageName });
  }

  const openBlank = Boolean(newTab) || isHttp(href);
  if (openBlank || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={className}
        onClick={track}
        {...(openBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={track}>
      {children}
    </Link>
  );
}

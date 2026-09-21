"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { buildPageViewEvent, pushGtm } from "@/lib/analytics";

export default function GtmPageView() {
  const pathname = usePathname();

  useEffect(() => {
    pushGtm(buildPageViewEvent(pathname));
  }, [pathname]);

  return null;
}

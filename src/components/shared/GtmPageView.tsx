"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { buildPageViewEvent, pushGtm, trackMeta } from "@/lib/analytics";

export default function GtmPageView() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    pushGtm(buildPageViewEvent(pathname));
    if (previousPath.current !== null && previousPath.current !== pathname) {
      trackMeta("PageView");
    }
    previousPath.current = pathname;
  }, [pathname]);

  return null;
}

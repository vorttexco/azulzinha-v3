"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pushScrollDepthGtm, type ScrollDepthPercent } from "@/lib/analytics";

const THRESHOLDS: ScrollDepthPercent[] = [25, 50, 75, 90];

export default function ScrollDepthTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const fired = new Set<ScrollDepthPercent>();

    function onScroll() {
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const scrollable = scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          pushScrollDepthGtm({ percent: threshold, pageName: pathname });
        }
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}

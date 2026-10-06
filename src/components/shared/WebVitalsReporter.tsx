"use client";

import { useReportWebVitals } from "next/web-vitals";
import { useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { pushWebVitalGtm } from "@/lib/analytics";

const REPORTED_VITALS = new Set(["LCP", "CLS", "INP", "FCP", "TTFB"]);

export default function WebVitalsReporter() {
  const pathname = usePathname();
  const pageName = useRef(pathname);
  pageName.current = pathname;

  const report = useCallback<Parameters<typeof useReportWebVitals>[0]>((metric) => {
    if (!REPORTED_VITALS.has(metric.name)) return;
    pushWebVitalGtm({
      metric: metric.name,
      value: metric.value,
      pageName: pageName.current,
    });
  }, []);

  useReportWebVitals(report);

  return null;
}

import type { NextConfig } from "next";

const isVorttex = process.env.STATIC_EXPORT === "true";
const isProd = process.env.STATIC_EXPORT_PROD === "true";

const nextConfig: NextConfig = {
  ...(isVorttex
    ? {
        output: "export" as const,
        basePath: "/azulzinha",
        assetPrefix: "/azulzinha/",
        trailingSlash: true,
        env: {
          NEXT_PUBLIC_BASE_PATH: "/azulzinha",
        },
      }
    : {}),
  ...(isProd
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

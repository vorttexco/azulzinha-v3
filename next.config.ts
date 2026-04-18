import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true"
    ? {
        output: "export" as const,
        basePath: "/azulzinha",
        assetPrefix: "/azulzinha/",
        env: {
          NEXT_PUBLIC_BASE_PATH: "/azulzinha",
        },
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

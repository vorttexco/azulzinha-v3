import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true"
    ? {
        output: "export" as const,
        basePath: "/azulzinha/v2",
        assetPrefix: "/azulzinha/v2/",
        env: {
          NEXT_PUBLIC_BASE_PATH: "/azulzinha/v2",
        },
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

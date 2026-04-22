import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/equilbrio-em-pontos",
  trailingSlash: true,
};

export default nextConfig;

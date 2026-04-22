import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/equil-brio-em-pontos",
  trailingSlash: true,
};

export default nextConfig;

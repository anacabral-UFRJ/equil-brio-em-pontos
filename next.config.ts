import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/site-equilibrio",
  trailingSlash: true,
};

export default nextConfig;

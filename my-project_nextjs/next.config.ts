import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      loaders: false
    }
  }
};

export default nextConfig;

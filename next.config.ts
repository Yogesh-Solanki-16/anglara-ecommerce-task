import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for Next.js 16
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Performance optimizations
  poweredByHeader: false,

  // Enable strict mode
  reactStrictMode: true,
};

export default nextConfig;

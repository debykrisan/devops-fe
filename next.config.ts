import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //   experimental: {
  //   authInterrupts: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "", // URL backend Anda
  //     },
  //   ];
  // },
};

export default nextConfig;

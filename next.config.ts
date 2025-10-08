import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tuboh-medics.sirv.com",
      },
    ],
  },
};

export default nextConfig;

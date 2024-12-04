import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", // Single string here
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // Single string here
      },
      { protocol: "https", hostname: "images-eu.ssl-images-amazon.com" },
    ],
  },
};

export default nextConfig;

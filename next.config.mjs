// This is validation for the environment variables early in the build process.
import "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
  // ...
};

export default nextConfig;

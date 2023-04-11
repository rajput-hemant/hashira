/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s4.anilist.co"],
  },
};

module.exports = nextConfig;

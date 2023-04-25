/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s4.anilist.co", "cdn.myanimelist.net", "artworks.thetvdb.com"],
  },
};

module.exports = nextConfig;

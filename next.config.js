/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.depositphotos.com",
      },
    ],
  },
};

module.exports = nextConfig;

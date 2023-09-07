const withImages = require("next-images");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL,
  },
}
module.exports = withImages({
  // assetPrefix: isProd ? "https://cdn.mydomain.com" : "http://localhost:3000",
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = nextConfig

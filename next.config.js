/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverOptions: {
      port: 3000
    }
  }
}

module.exports = nextConfig 
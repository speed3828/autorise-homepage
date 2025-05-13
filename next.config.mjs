/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['autorise.ai', 'images.unsplash.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  trailingSlash: true
}

export default nextConfig; 
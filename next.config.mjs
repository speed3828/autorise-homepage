/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'export', // Commented out for Vercel deployment
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

export default nextConfig; 
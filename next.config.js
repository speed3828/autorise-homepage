/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
  webpackDevMiddleware: (config) => {
    return {
      ...config,
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 300,
      }
    };
  }
};

module.exports = nextConfig; 
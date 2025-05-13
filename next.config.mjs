/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['autorise.ai', 'images.unsplash.com', 'autorise.kr', 'wordpress.org', 'images.pexels.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
  // 빌드 최적화
  compiler: {
    // 개발 시 제거될 코드 표시
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 성능 최적화 - 호환되는 옵션만 사용
  experimental: {
    // 번들 크기 최적화
    optimizePackageImports: ['react', 'react-dom'],
  },
  // 정적 페이지 생성 설정
  staticPageGenerationTimeout: 120,
  async headers() {
    return [
      {
        // 모든 API 라우트에 CORS 헤더 적용
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
      {
        // 정적 자산에 캐시 헤더 적용
        source: '/:path*.(jpg|jpeg|png|webp|svg|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        // JS와 CSS 파일에 캐시 헤더 적용
        source: '/:path*.(js|css)',
        headers: [
          {
            key: 'Cache-Control', 
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  }
}

export default nextConfig; 
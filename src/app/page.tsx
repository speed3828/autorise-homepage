'use client';

import { useEffect, Suspense } from 'react';
import Script from 'next/script';
import emailService from '../services/emailService';
import Footer from './components/Footer';
import PricingSection from './components/PricingSection';
import HeroSection from './components/HeroSection';
import CompanySection from './components/CompanySection';
import AboutUsSection from './components/AboutUsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import OurRoadmapSection from './components/OurRoadmapSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import SkipToContent from './components/SkipToContent';
// import YouTubeSection from './components/YouTubeSection';
// import BlogSection from './components/BlogSection';

// 로딩 대체 컴포넌트
function SectionLoader() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
}

// 블로그 및 유튜브 섹션 컴포넌트 - 정적 HTML로 구현
function BlogAndYouTubeSections() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="text-cyan-500">블로그</span> 최신글
        </h2>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          인공지능, 콘텐츠 마케팅, 디지털 트렌드에 관한 유용한 정보와 인사이트를 확인하세요.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 블로그 카드 1 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
                alt="프롬프트로 블로그 글 빠르게 작성하기" 
                className="w-full h-full object-cover transform transition-transform hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-cyan-400 mb-2">2025-04-06</p>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                프롬프트로 블로그 글 빠르게 작성하기
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                ChatGPT 프롬프트만으로 콘텐츠 완성하는 방법 (실전 예시). 이제는 글을 쓸 줄 아는가보다 프롬프트를 잘 쓰는가의 시대가 되었습니다.
              </p>
              <a 
                href="https://autorise.kr/prompts-for-blog-posts/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
              >
                더 읽기
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 블로그 카드 2 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a" 
                alt="애드센스 승인 실패 원인 5가지 및 해결법" 
                className="w-full h-full object-cover transform transition-transform hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-cyan-400 mb-2">2025-04-06</p>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                애드센스 승인 실패 원인 5가지 및 해결법
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                애드센스 승인 실패하는 진짜 이유 5가지 (피하는 방법까지). 블로그를 열심히 운영하고, 글도 몇 편 써놨는데 애드센스 승인 결과는 거절...
              </p>
              <a 
                href="https://autorise.kr/adsense-approval-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
              >
                더 읽기
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 블로그 카드 3 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" 
                alt="애드센스 수익 구조 완벽 이해하기" 
                className="w-full h-full object-cover transform transition-transform hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-cyan-400 mb-2">2025-04-06</p>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                애드센스 수익 구조 완벽 이해하기
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                블로그로 돈 벌기, 애드센스 수익 구조는 이렇게 만듭니다. 블로그로 수익을 낸다고 하면, 많은 사람들이 &quot;그거 아직도 돼?&quot;라고 말합니다.
              </p>
              <a 
                href="https://autorise.kr/adsense-income-structure/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
              >
                더 읽기
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://autorise.kr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-colors"
          >
            블로그 방문하기
          </a>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://blog.naver.com/autoriselnsight" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-cyan-400"
            >
              네이버 블로그
            </a>
            <a 
              href="https://autorise3828.tistory.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-cyan-400"
            >
              티스토리
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// 유튜브 섹션 컴포넌트 - 정적 HTML로 구현
function YouTubeSectionStatic() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="text-pink-500">YouTube</span> 채널
        </h2>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Autorise의 최신 YouTube 콘텐츠를 확인하세요. AI 기술과 콘텐츠 전략에 대한 유용한 정보를 제공합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 유튜브 카드 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <a 
              href="https://www.youtube.com/watch?v=demo1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1170&auto=format&fit=crop" 
                alt="ChatGPT로 블로그 글 5분만에 작성하기 (완벽 가이드)" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">ChatGPT로 블로그 글 5분만에 작성하기 (완벽 가이드)</h3>
                <p className="text-sm text-gray-400">2025-04-15</p>
              </div>
            </a>
          </div>
          
          {/* 유튜브 카드 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <a 
              href="https://www.youtube.com/watch?v=demo2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
                alt="2025년 콘텐츠 자동화 트렌드 분석 - AI가 바꾸는 미래" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">2025년 콘텐츠 자동화 트렌드 분석 - AI가 바꾸는 미래</h3>
                <p className="text-sm text-gray-400">2025-03-28</p>
              </div>
            </a>
          </div>
          
          {/* 유튜브 카드 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <a 
              href="https://www.youtube.com/watch?v=demo3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?q=80&w=1169&auto=format&fit=crop" 
                alt="블로그로 월 100만원 수익 만드는 방법 (애드센스 꿀팁)" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">블로그로 월 100만원 수익 만드는 방법 (애드센스 꿀팁)</h3>
                <p className="text-sm text-gray-400">2025-03-15</p>
              </div>
            </a>
          </div>
          
          {/* 유튜브 카드 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <a 
              href="https://www.youtube.com/watch?v=demo4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1074&auto=format&fit=crop" 
                alt="유튜브 자동화하고 수익 2배로 늘리는 비밀" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">유튜브 자동화하고 수익 2배로 늘리는 비밀</h3>
                <p className="text-sm text-gray-400">2025-02-25</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.youtube.com/channel/UCQNSCmaE5cxFfJE28joWsbg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            채널 방문하기
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // EmailJS 초기화
  useEffect(() => {
    emailService.initEmailJS();
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Autorise Insight",
    "url": "https://www.autorise.ai",
    "logo": "https://www.autorise.ai/logo.png",
    "description": "최신 인공지능 기술을 활용한 콘텐츠 자동화, 맞춤형 콘텐츠 솔루션, 콘텐츠 제작 대행 서비스를 제공합니다.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-10-4316-3828",
      "email": "speed382286@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/autorise",
      "https://www.instagram.com/autorise",
      "https://www.youtube.com/autorise"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 3,
      "lowPrice": "99000",
      "highPrice": "499000",
      "priceCurrency": "KRW"
    },
    "serviceType": [
      "AI 콘텐츠 자동화",
      "맞춤형 콘텐츠 솔루션",
      "콘텐츠 제작 대행",
      "홍보 마케팅 대행"
    ]
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <SkipToContent />
      
      {/* 구조화된 데이터 */}
      <Script
        id="schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Google Analytics 스크립트 - 실제 측정 ID로 교체하세요 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      
      {/* 배경 그리드 */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-cyan-500"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-cyan-500"></div>
          ))}
        </div>
      </div>
      
      {/* 네온 장식 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500"></div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
      
      {/* 본문 영역 */}
      <div id="main-content">
        {/* 메인 히어로 섹션 */}
        <HeroSection />
        
        {/* 회사소개 섹션 */}
        <CompanySection />
        
        {/* 우리는 누구인가 섹션 */}
        <AboutUsSection />
        
        {/* 우리는 무엇을 하는가 섹션 */}
        <WhatWeDoSection />
        
        {/* 우리가 하는일 섹션 */}
        <OurRoadmapSection />
        
        {/* 기능 섹션 */}
        <FeaturesSection />
        
        {/* 블로그 섹션 - 정적 HTML로 대체 */}
        <BlogAndYouTubeSections />
        
        {/* 유튜브 섹션은 별도 페이지에서 확인 가능하므로 주석 처리 */}
        {/* <YouTubeSectionStatic /> */}
        
        {/* 요금제 섹션 */}
        <PricingSection />
        
        {/* 문의 섹션 */}
        <ContactSection />
      </div>
      
      {/* 푸터 */}
      <Footer />
    </main>
  );
}

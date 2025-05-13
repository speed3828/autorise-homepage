'use client';

import { useEffect } from 'react';
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
import YouTubeSection from './components/YouTubeSection';
import BlogSection from './components/BlogSection';

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
        
        {/* 블로그 섹션 - 새로 추가됨 */}
        <BlogSection />
        
        {/* 유튜브 섹션 - 새로 추가됨 */}
        <YouTubeSection />
        
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

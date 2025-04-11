'use client';

import React from 'react';
import AICloudBackground from './AICloudBackground';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AICloudBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            AutoRise Insight
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 text-gray-200">
            <p className="text-lg sm:text-xl">
              나는 단지 플랫폼을 만들고 싶었던 게 아닙니다.<br />
              나는 연결을 만들고 싶었습니다.
            </p>
            
            <p className="text-base sm:text-lg">
              가게와 사람, 행정과 일상, 정보와 감정.<br />
              그것들이 서로 떨어져 있는 세상 속에서<br />
              나는 하나씩 다리를 놓기로 했습니다.
            </p>
            
            <p className="text-base sm:text-lg">
              기술이 사람을 밀어내는 게 아닙니다.<br />
              사람을 더 깊이 연결하게 만드는 것
            </p>
            
            <p className="text-base sm:text-lg">
              그걸 직접 만들어보고 싶었고,<br />
              그래서 이 프로젝트가 시작됐습니다.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="#about"
              onClick={handleScroll}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 cursor-pointer"
            >
              자세히 보기
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
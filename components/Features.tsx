'use client';

import React from 'react';
import AICloudBackground from './AICloudBackground';

const Features = () => {
  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20" style={{ scrollMarginTop: '80px' }}>
      <AICloudBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            주요 기능
          </h2>
          <p className="mt-4 text-xl text-gray-200">
            AI 기술을 활용한 혁신적인 서비스
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#automation"
            onClick={(e) => handleClick(e, 'automation')}
            className="group bg-yellow-900/30 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300">
              AI 기반 자동화
            </h3>
            <p className="mt-4 text-gray-200 group-hover:text-gray-100">
              최신 AI 기술을 활용하여 업무 프로세스를 자동화하고 효율성을 높입니다.
            </p>
            <div className="mt-4 flex items-center text-yellow-400 group-hover:text-yellow-300">
              자세히 보기
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <a
            href="#analysis"
            onClick={(e) => handleClick(e, 'analysis')}
            className="group bg-orange-900/30 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-orange-400 group-hover:text-orange-300">
              실시간 분석
            </h3>
            <p className="mt-4 text-gray-200 group-hover:text-gray-100">
              데이터를 실시간으로 분석하여 인사이트를 제공하고 의사결정을 지원합니다.
            </p>
            <div className="mt-4 flex items-center text-orange-400 group-hover:text-orange-300">
              자세히 보기
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <a
            href="#integration"
            onClick={(e) => handleClick(e, 'integration')}
            className="group bg-red-900/30 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-red-400 group-hover:text-red-300">
              스마트 통합
            </h3>
            <p className="mt-4 text-gray-200 group-hover:text-gray-100">
              다양한 시스템과 서비스를 통합하여 원활한 업무 환경을 제공합니다.
            </p>
            <div className="mt-4 flex items-center text-red-400 group-hover:text-red-300">
              자세히 보기
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features; 
'use client';

import React from 'react';
import AICloudBackground from './AICloudBackground';

const Projects = () => {
  const projects = [
    {
      title: '프로젝트 1',
      description: 'AI 기반 자동화 시스템 구축',
      image: '/images/project1.jpg',
      link: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: '프로젝트 2',
      description: '클라우드 기반 데이터 분석 플랫폼',
      image: '/images/project2.jpg',
      link: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: '프로젝트 3',
      description: '실시간 모니터링 시스템',
      image: '/images/project3.jpg',
      link: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="relative py-20" style={{ scrollMarginTop: '80px' }}>
      <AICloudBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            우리가 만든 것들
          </h2>
          <p className="mt-4 text-xl text-gray-200">
            AI 기술을 활용한 다양한 프로젝트
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-yellow-400">프로젝트 1</h3>
            <p className="mt-4 text-gray-200">
              AI 기반 자동화 시스템 구축
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-orange-400">프로젝트 2</h3>
            <p className="mt-4 text-gray-200">
              클라우드 기반 데이터 분석 플랫폼
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-400">프로젝트 3</h3>
            <p className="mt-4 text-gray-200">
              실시간 모니터링 시스템
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 
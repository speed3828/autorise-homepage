'use client';

import React from 'react';
import AICloudBackground from './AICloudBackground';

const About = () => {
  return (
    <section id="about" className="relative py-20" style={{ scrollMarginTop: '80px' }}>
      <AICloudBackground />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center bg-yellow-900/30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              이 프로젝트는 '도구'가 아닙니다
            </h2>
            <p className="mt-4 text-xl text-gray-200">
              이것은 새로운 작동 방식을 설계하는 도전입니다
            </p>
          </div>

          <div className="space-y-8 text-gray-200">
            <div className="bg-orange-900/30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg">
                플랫폼은 많지만,<br />
                진짜 "나를 이해한 채 실행되는 공간"은 드뭅니다.
              </p>
            </div>

            <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg font-semibold">
                그래서 나는
              </p>
            </div>

            <div className="space-y-4 bg-amber-900/30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg">
                내 일상을 자동화하고,
              </p>
              <p className="text-lg">
                지역과 사람을 연결하고,
              </p>
              <p className="text-lg">
                행정과 정보를 편리하게 바꾸는<br />
                실행 중심의 구조를 만들고 있습니다.
              </p>
            </div>

            <div className="bg-rose-900/30 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg">
                AI가 도와주지만,<br />
                진짜 주인공은 '사람'입니다.
              </p>
            </div>

            <div className="text-center pt-8 bg-yellow-900/30 backdrop-blur-sm rounded-lg p-8">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                이건 오토라이즈 인사이트.
              </p>
              <p className="mt-4 text-lg text-gray-200">
                그리고 이것은 단지 시작일 뿐입니다.
              </p>
              <p className="mt-4 text-lg text-gray-200">
                구름 위에 놓인 그 길 위로,<br />
                이제 당신도 함께 걸을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
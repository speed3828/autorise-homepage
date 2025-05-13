import React from 'react';

export default function OurRoadmapSection() {
  return (
    <section className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-2/3 bg-gradient-to-t from-cyan-500 to-transparent opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-cyan-400">우리가</span> 
          <span className="text-white">하는</span>
          <span className="text-pink-500">일</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500"></div>
          
          <div className="space-y-16">
            {[
              { 
                year: '2025', 
                title: '서비스 출시', 
                desc: 'Autorise Insight 플랫폼의 첫 번째 버전을 출시하여 AI 기반 콘텐츠 자동화 서비스 시작'
              },
              { 
                year: '2025', 
                title: '기술 혁신', 
                desc: '자연어 처리 알고리즘 개선 및 맞춤형 콘텐츠 생성 엔진 고도화'
              },
              { 
                year: '2026', 
                title: '전국 확장', 
                desc: '양평구름다리 플랫폼을 전국적으로 확산하여 전국민이 서비스를 이용할 수 있도록 확대'
              },
              { 
                year: '2026', 
                title: '신기술 개발', 
                desc: '멀티모달 콘텐츠 생성 기술 개발 및 음성, 이미지와 텍스트의 통합 솔루션 구축'
              },
              {
                year: '2027',
                title: '글로벌 진출',
                desc: '해외 시장 진출 및 다국어 서비스 지원을 통한 글로벌 AI 콘텐츠 자동화 플랫폼으로 도약'
              },
              {
                year: '2028',
                title: 'AI 생태계 구축',
                desc: '다양한 파트너사와 협력하여 AI 기반 콘텐츠 생태계 구축 및 산업 표준 수립'
              },
            ].map((item, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`inline-block mb-2 px-4 py-1 rounded-full ${idx % 2 === 0 ? 'bg-pink-500 bg-opacity-20 text-pink-400' : 'bg-cyan-500 bg-opacity-20 text-cyan-400'}`}>
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg shadow-pink-500/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
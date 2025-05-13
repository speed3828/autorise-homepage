import React from 'react';

export default function WhatWeDoSection() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4 opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-pink-500"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-pink-500">우리는</span> 
          <span className="text-white">무엇을</span>
          <span className="text-cyan-400">하는가</span>
        </h2>
        
        <div className="space-y-12">
          {[
            { 
              title: 'AI 기반 콘텐츠 자동화', 
              desc: '최신 인공지능 기술을 활용하여 높은 품질의 콘텐츠를 빠르고 효율적으로 생성합니다.',
              items: ['블로그 글 자동 생성', '소셜 미디어 콘텐츠 제작', '마케팅 카피라이팅', '제품 설명서 작성']
            },
            { 
              title: '맞춤형 콘텐츠 솔루션', 
              desc: '각 기업과 브랜드의 특성에 맞는 맞춤형 콘텐츠 생성 솔루션을 제공합니다.',
              items: ['브랜드 톤앤매너 분석', '타겟 고객 맞춤 콘텐츠', '산업별 특화 콘텐츠', '다국어 지원']
            },
            {
              title: '콘텐츠 제작 대행',
              desc: '유튜브 영상, 블로그, 썸네일, SNS 콘텐츠를 사장님 대신 제작해드립니다.',
              items: ['맞춤형 콘텐츠 전략 제공', '사장님 채널에 바로 발행 가능', '유튜브 영상 제작', '블로그 포스팅', 'SNS 콘텐츠 제작', '썸네일 디자인']
            },
            {
              title: '홍보 마케팅 대행',
              desc: '콘텐츠를 활용한 유튜브, 블로그, SNS 통합 마케팅을 진행합니다.',
              items: ['통합 마케팅 패키지', '브랜드 인지도와 유입 향상', '콘텐츠 제작부터 채널 운영까지 통합 서비스', '일관된 브랜드 메시지 전달', '잠재 고객 유입 증대']
            },
            { 
              title: '콘텐츠 성과 분석', 
              desc: '생성된 콘텐츠의 성과를 분석하고 지속적인 개선을 통해 최적의 결과를 도출합니다.',
              items: ['콘텐츠 성과 측정', '데이터 기반 최적화', 'A/B 테스트', '인사이트 리포트']
            },
            {
              title: '멀티모달 통합 솔루션',
              desc: '텍스트, 이미지, 음성을 결합한 통합 콘텐츠 생성 플랫폼을 제공합니다.',
              items: ['음성-텍스트 변환', '이미지 자동 생성', '영상 콘텐츠 제작', '멀티미디어 최적화']
            },
            {
              title: '글로벌 콘텐츠 지원',
              desc: '다양한 언어와 문화에 맞춘 콘텐츠 제작 및 현지화 서비스를 제공합니다.',
              items: ['다국어 번역', '문화 컨텍스트 최적화', '글로벌 트렌드 반영', '현지화 전략 수립']
            },
            {
              title: '신기술 개발',
              desc: '최신 AI 기술을 연구하고 새로운 서비스를 위한 기술을 지속적으로 개발합니다.',
              items: ['대형 언어 모델(LLM) 연구', 'AI 모델 파인튜닝', '멀티모달 기술 개발', '특화 AI 에이전트 개발', '자연어 처리 고도화', '데이터 분석 자동화', '개인화 추천 알고리즘', '생성형 AI 연구', '메타버스 통합 기술', '실시간 3D 렌더링', '가상 아바타 연구', '온톨로지 기반 AI', '기계학습 모델 최적화']
            },
            {
              title: 'AI 자동화 시스템',
              desc: '일상적인 업무부터 복잡한 프로세스까지 AI를 활용한 자동화 시스템을 구축합니다.',
              items: ['업무 자동화 솔루션', '데이터 처리 자동화', '예약/스케줄링 시스템', '고객 응대 자동화']
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-pink-800 hover:border-cyan-500 transition-all shadow-lg shadow-pink-500/10 hover:shadow-cyan-500/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/5">
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
                <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.items.map((subitem, sidx) => (
                    <div key={sidx} className="bg-gray-800 p-4 rounded-md border border-cyan-900 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      <span className="text-gray-300">{subitem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
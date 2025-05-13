import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="relative py-20 bg-gray-900">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-cyan-400">주요</span> 기능
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'AI 콘텐츠 생성', desc: '최신 인공지능 기술로 고품질 콘텐츠를 자동 생성합니다.' },
            { title: '다양한 콘텐츠 형식', desc: '블로그, SNS, 광고문구 등 다양한 형식의 콘텐츠를 지원합니다.' },
            { title: '맞춤형 스타일', desc: '브랜드 톤앤매너에 맞는 일관된 콘텐츠를 제작합니다.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-pink-500 hover:border-cyan-400 transition-colors shadow-lg shadow-pink-500/10 hover:shadow-cyan-400/20">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
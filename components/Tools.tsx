import React from 'react';

const Tools = () => {
  const tools = [
    {
      title: '프롬프트 교실',
      description: 'AI 프롬프트 작성 가이드',
      icon: '🎓',
      examples: [
        '효과적인 프롬프트 작성법',
        '컨텍스트 설정 방법',
        '원하는 결과 얻기',
      ],
    },
    {
      title: '도구 상자',
      description: '유용한 개발 도구 모음',
      icon: '🧰',
      examples: [
        '코드 스니펫',
        '디버깅 가이드',
        '성능 최적화',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-mint-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-sky-400 sm:text-4xl">
            프롬프트 교실 / 도구 상자
          </h2>
          <p className="text-xl text-gray-600">
            개발에 도움이 되는 다양한 도구와 가이드를 제공합니다
          </p>
          <p className="text-lg text-gray-500 italic">
            "좋은 도구는 창의력을 키우는 씨앗이 됩니다."
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-mint-100 flex items-center justify-center text-3xl">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {tool.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-xl bg-mint-50 hover:bg-mint-100 transition-colors cursor-pointer"
                    >
                      <span className="text-mint-600">•</span>
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools; 
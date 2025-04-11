import React from 'react';

const Toolbox = () => {
  const tools = [
    {
      name: 'AI 문서 작성기',
      description: 'AI가 도와주는 문서 작성 도구',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      name: '블로그 요약기',
      description: '블로그 글을 간단히 요약해주는 도구',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      ),
    },
    {
      name: '예약 시스템',
      description: '간단한 예약 관리 프로토타입',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="toolbox" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">도구 상자</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <button
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
          >
            <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
              {tool.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-gray-300 text-sm">{tool.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Toolbox; 
import React from 'react';

const PromptClassroom = () => {
  const tips = [
    '명확하고 구체적인 지시어를 사용하세요',
    '원하는 출력 형식을 명시하세요',
    '맥락과 제약조건을 상세히 설명하세요',
    '예시를 포함하여 원하는 결과를 보여주세요',
    '단계별로 구조화된 프롬프트를 작성하세요',
  ];

  return (
    <section id="prompt-classroom" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">프롬프트 교실</h2>
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">프롬프트 엔지니어링 팁</h3>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
            onClick={() => {
              // Placeholder for download functionality
              alert('프롬프트 가이드 다운로드 준비 중입니다.');
            }}
          >
            프롬프트 가이드 다운로드
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromptClassroom; 
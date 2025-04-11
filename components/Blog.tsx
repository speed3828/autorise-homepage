import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'AI 자동화의 미래',
      date: '2024.03.15',
      excerpt: 'AI 기술이 어떻게 비즈니스 프로세스를 혁신하고 있는지 살펴봅니다.',
    },
    {
      title: '클라우드 네이티브 아키텍처',
      date: '2024.03.10',
      excerpt: '현대적인 클라우드 아키텍처 설계의 핵심 원칙을 알아봅니다.',
    },
    {
      title: '데이터 기반 의사결정',
      date: '2024.03.05',
      excerpt: '데이터 분석을 통한 효과적인 비즈니스 의사결정 방법을 소개합니다.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-beige-400 to-mint-400 sm:text-4xl">
            블로그
          </h2>
          <p className="text-xl text-gray-600">
            최신 기술 트렌드와 인사이트를 공유합니다
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                    <button className="px-4 py-2 rounded-full bg-beige-100 text-beige-600 hover:bg-beige-200 transition-colors">
                      더 보기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 
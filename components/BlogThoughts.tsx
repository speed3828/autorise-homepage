import React from 'react';

const BlogThoughts = () => {
  const posts = [
    {
      title: '클라우드 네이티브 아키텍처의 미래',
      date: '2024-03-20',
      category: '기술',
    },
    {
      title: '디지털 전환과 행정 서비스의 혁신',
      date: '2024-03-18',
      category: '행정',
    },
    {
      title: '법률 서비스의 디지털화와 접근성',
      date: '2024-03-15',
      category: '법률',
    },
    {
      title: '다중 클라우드 환경의 관리 전략',
      date: '2024-03-12',
      category: '기술',
    },
  ];

  return (
    <section id="blog-thoughts" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">생각의 조각들</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-blue-400">{post.category}</span>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-4"
            >
              읽어보기
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogThoughts; 
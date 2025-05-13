'use client';

import { useState, useEffect, useRef } from 'react';

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

interface GoogleBlogEmbedProps {
  blogUrl: string;
  title?: string;
  height?: 600 | 700 | 800;
}

export default function GoogleBlogEmbed({ 
  blogUrl, 
  title = "Autorise Blog", 
  height = 800 
}: GoogleBlogEmbedProps) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // API 라우트를 통해 블로그 데이터 가져오기
        const apiUrl = `/api/blog?url=${encodeURIComponent(blogUrl)}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('블로그 데이터를 가져오는데 실패했습니다');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('블로그 데이터 로딩 오류:', err);
        setError('블로그 데이터를 로드할 수 없습니다. 폴백 데이터를 사용합니다.');
        
        // 폴백 데이터 사용
        setPosts([
          {
            id: 1,
            title: { rendered: '프롬프트로 블로그 글 빠르게 작성하기' },
            excerpt: { rendered: 'ChatGPT 프롬프트만으로 콘텐츠 완성하는 방법 (실전 예시). 이제는 글을 쓸 줄 아는가보다 프롬프트를 잘 쓰는가의 시대가 되었습니다.' },
            date: '2025-04-06T12:00:00',
            link: 'https://autorise.kr/prompts-for-blog-posts/'
          },
          {
            id: 2,
            title: { rendered: '애드센스 승인 실패 원인 5가지 및 해결법' },
            excerpt: { rendered: '애드센스 승인 실패하는 진짜 이유 5가지 (피하는 방법까지). 블로그를 열심히 운영하고, 글도 몇 편 써놨는데 애드센스 승인 결과는 거절...' },
            date: '2025-04-06T11:00:00',
            link: 'https://autorise.kr/adsense-approval-solutions/'
          },
          {
            id: 3,
            title: { rendered: '애드센스 수익 구조 완벽 이해하기' },
            excerpt: { rendered: '블로그로 돈 벌기, 애드센스 수익 구조는 이렇게 만듭니다. 블로그로 수익을 낸다고 하면, 많은 사람들이 "그거 아직도 돼?"라고 말합니다.' },
            date: '2025-04-05T10:00:00',
            link: 'https://autorise.kr/adsense-income-structure/'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, [blogUrl]);
  
  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  // HTML 태그 제거 함수
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };
  
  return (
    <section className="google-blog-section py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* 사이버펑크 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* 수직선 효과 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className={`absolute h-full w-px bg-gradient-to-b from-cyan-500 to-transparent opacity-10 google-blog-vline-${i + 1}`}
          ></div>
        ))}
        
        {/* 네온 글로우 효과 */}
        <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">블로그</span>
            <span className="text-white"> 전체보기</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
          </h2>
        </div>
        
        <div 
          ref={containerRef}
          className="google-blog-embed-container relative"
        >
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-t-2 border-r-2 border-cyan-500 rounded-full animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-cyan-500 animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-pink-400 mb-4">{error}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map(post => (
                  <div 
                    key={post.id}
                    className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-cyan-500/30"
                  >
                    <div className="p-6">
                      <p className="text-sm text-cyan-400 mb-2 font-mono">{formatDate(post.date)}</p>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white hover:text-cyan-300 transition-colors">
                        {post.title.rendered}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <a 
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        <span className="mr-2 relative overflow-hidden group">
                          <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">더 읽기</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map(post => (
                <div 
                  key={post.id}
                  className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-cyan-500/30"
                >
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                  )}
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 rounded-bl-xl"></div>
                    <p className="text-sm text-cyan-400 mb-2 font-mono">{formatDate(post.date)}</p>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white hover:text-cyan-300 transition-colors">
                      {post.title.rendered}
                    </h3>
                    <div className="text-gray-400 mb-4 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </div>
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      <span className="mr-2 relative overflow-hidden group">
                        <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">더 읽기</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-14">
            <a 
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition-colors duration-300 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">블로그 방문하기</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
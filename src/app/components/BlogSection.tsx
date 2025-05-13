'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  url: string;
  imageUrl?: string;
}

// 폴백 데이터
const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: '프롬프트로 블로그 글 빠르게 작성하기',
    excerpt: 'ChatGPT 프롬프트만으로 콘텐츠 완성하는 방법 (실전 예시). 이제는 글을 쓸 줄 아는가보다 프롬프트를 잘 쓰는가의 시대가 되었습니다.',
    publishedAt: '2025-04-06',
    url: 'https://autorise.kr/prompts-for-blog-posts/',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '2',
    title: '애드센스 승인 실패 원인 5가지 및 해결법',
    excerpt: '애드센스 승인 실패하는 진짜 이유 5가지 (피하는 방법까지). 블로그를 열심히 운영하고, 글도 몇 편 써놨는데 애드센스 승인 결과는 거절...',
    publishedAt: '2025-04-06',
    url: 'https://autorise.kr/adsense-approval-solutions/',
    imageUrl: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a'
  },
  {
    id: '3',
    title: '애드센스 수익 구조 완벽 이해하기',
    excerpt: '블로그로 돈 벌기, 애드센스 수익 구조는 이렇게 만듭니다. 블로그로 수익을 낸다고 하면, 많은 사람들이 "그거 아직도 돼?"라고 말합니다.',
    publishedAt: '2025-04-06',
    url: 'https://autorise.kr/adsense-income-structure/',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7'
  }
];

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // 내부 API 라우트 사용
        const response = await axios.get('/api/blog/');
        if (response.data.posts && response.data.posts.length > 0) {
          setPosts(response.data.posts);
        } else {
          // API가 빈 배열을 반환하면 폴백 데이터 사용
          console.log('API가 빈 배열을 반환하여 폴백 데이터 사용');
          setPosts(fallbackPosts);
        }
      } catch (err) {
        console.error('블로그 글을 가져오는 데 실패했습니다:', err);
        setError('블로그 글을 로드하는 데 문제가 발생했습니다');
        // 오류 발생 시 폴백 데이터 사용
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  // 데이터가 없으면 폴백 데이터 사용
  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="text-cyan-500">블로그</span> 최신글
        </h2>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          인공지능, 콘텐츠 마케팅, 디지털 트렌드에 관한 유용한 정보와 인사이트를 확인하세요.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <div key={post.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {post.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform hover:scale-110"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-sm text-cyan-400 mb-2">{post.publishedAt}</p>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
                >
                  더 읽기
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://autorise.kr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-colors"
          >
            블로그 방문하기
          </a>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://blog.naver.com/autoriselnsight" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-cyan-400"
            >
              네이버 블로그
            </a>
            <a 
              href="https://autorise3828.tistory.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-cyan-400"
            >
              티스토리
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
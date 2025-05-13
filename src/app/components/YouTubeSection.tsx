'use client';

import { useState, useEffect } from 'react';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

// 비디오 데이터
const youtubeVideos: VideoItem[] = [
  {
    id: 'demo1',
    title: 'ChatGPT로 블로그 글 5분만에 작성하기 (완벽 가이드)',
    thumbnail: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1170&auto=format&fit=crop',
    publishedAt: '2025-04-15'
  },
  {
    id: 'demo2',
    title: '2025년 콘텐츠 자동화 트렌드 분석 - AI가 바꾸는 미래',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    publishedAt: '2025-03-28'
  },
  {
    id: 'demo3',
    title: '블로그로 월 100만원 수익 만드는 방법 (애드센스 꿀팁)',
    thumbnail: 'https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?q=80&w=1169&auto=format&fit=crop',
    publishedAt: '2025-03-15'
  },
  {
    id: 'demo4',
    title: '유튜브 자동화하고 수익 2배로 늘리는 비밀',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1074&auto=format&fit=crop',
    publishedAt: '2025-02-25'
  }
];

export default function YouTubeSection() {
  // 정적 데이터 사용 - API 요청 제거
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로딩 효과를 위한 짧은 지연
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="text-pink-500">YouTube</span> 채널
        </h2>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Autorise의 최신 YouTube 콘텐츠를 확인하세요. AI 기술과 콘텐츠 전략에 대한 유용한 정보를 제공합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {youtubeVideos.map((video) => (
            <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.publishedAt}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.youtube.com/channel/UCQNSCmaE5cxFfJE28joWsbg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            채널 방문하기
          </a>
        </div>
      </div>
    </section>
  );
} 
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
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    // 로딩 효과를 위한 짧은 지연
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="autorise-youtube-loader flex justify-center items-center py-20">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-40 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-t-2 border-r-2 border-pink-500 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-pink-500 animate-ping opacity-75"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="autorise-youtube-section py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* 사이버펑크 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* 수직선 효과 */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className={`absolute h-full w-px bg-gradient-to-b from-pink-500 to-transparent opacity-10 vline-${i + 1}`}
          ></div>
        ))}
        
        {/* 네온 글로우 효과 */}
        <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-pink-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="autorise-youtube-container container mx-auto px-4 relative z-10">
        <div className="autorise-youtube-header text-center mb-16">
          <h2 className="autorise-youtube-title text-4xl md:text-5xl font-bold mb-6 inline-block relative" id="youtube">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">YouTube</span>
            <span className="text-white"> 채널</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
          </h2>
          
          <p className="autorise-youtube-description text-gray-300 text-center max-w-3xl mx-auto mt-6">
            Autorise의 최신 YouTube 콘텐츠를 확인하세요. AI 기술과 콘텐츠 전략에 대한 유용한 정보를 제공합니다.
          </p>
        </div>
        
        <div className="autorise-youtube-videos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {youtubeVideos.map((video) => (
            <div 
              key={video.id} 
              className="autorise-youtube-card group bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50 relative"
              onMouseEnter={() => setSelectedVideo(video.id)}
              onMouseLeave={() => setSelectedVideo(null)}
            >
              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative"
              >
                <div className="autorise-youtube-thumbnail h-48 overflow-hidden relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className={`w-full h-full object-cover transform transition-transform duration-700 ease-in-out ${selectedVideo === video.id ? 'scale-110' : 'scale-100'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70"></div>
                  
                  {/* 네온 테두리 효과 */}
                  <div className={`absolute inset-0 border-2 border-pink-500 opacity-0 transition-opacity duration-500 ${selectedVideo === video.id ? 'opacity-40' : ''}`}></div>
                  
                  {/* 재생 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-pink-600 bg-opacity-80 flex items-center justify-center transition-transform duration-300 ${selectedVideo === video.id ? 'scale-110' : 'scale-90'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="autorise-youtube-content p-4 relative">
                  {/* 사이버펑크 장식 요소 */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 rounded-bl-xl"></div>
                  
                  <h3 className="autorise-youtube-title text-lg font-bold mb-2 line-clamp-2 group-hover:text-pink-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="autorise-youtube-date text-sm text-gray-400 font-mono">{video.publishedAt}</p>
                </div>
              </a>
              
              {/* 호버 효과 - 빛나는 선 */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left transition-transform duration-300 ${selectedVideo === video.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
          ))}
        </div>
        
        <div className="autorise-youtube-footer text-center mt-14">
          <a 
            href="https://www.youtube.com/channel/UCQNSCmaE5cxFfJE28joWsbg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="autorise-youtube-cta inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 font-medium relative group overflow-hidden"
          >
            <span className="relative z-10">채널 방문하기</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
          </a>
        </div>
      </div>
    </section>
  );
} 
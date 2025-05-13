'use client';

import { useState, useEffect, memo } from 'react';

interface BlogPlatform {
  id: string;
  name: string;
  url: string;
  description: string;
  color: string;
  posts: BlogPost[];
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  url: string;
  thumbnail: string;
}

// 블로그 데이터 - 더 최적화된 이미지
const blogPlatforms: BlogPlatform[] = [
  {
    id: 'naver',
    name: '네이버 블로그',
    url: 'https://blog.naver.com/autoriselnsight',
    description: 'AI와 콘텐츠 마케팅에 관한 깊이 있는 인사이트와 정보를 제공합니다.',
    color: 'from-green-500 to-green-600',
    posts: [
      {
        id: 'naver-1',
        title: 'AI 콘텐츠 자동화로 업무 효율 200% 높이기',
        excerpt: '인공지능 기술을 활용한 콘텐츠 제작 방법과 자동화 전략',
        publishedAt: '2025-04-01',
        url: 'https://blog.naver.com/autoriselnsight',
        thumbnail: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 'naver-2',
        title: '2025년 콘텐츠 마케팅 트렌드 분석',
        excerpt: '최신 트렌드를 통해 살펴보는 콘텐츠 마케팅의 미래',
        publishedAt: '2025-03-15',
        url: 'https://blog.naver.com/autoriselnsight',
        thumbnail: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  },
  {
    id: 'tistory',
    name: '티스토리',
    url: 'https://autorise3828.tistory.com',
    description: '콘텐츠 자동화와 디지털 트렌드에 관한 실용적인 가이드와 팁을 확인하세요.',
    color: 'from-red-500 to-orange-500',
    posts: [
      {
        id: 'tistory-1',
        title: 'ChatGPT로 블로그 글 5분만에 작성하기',
        excerpt: '프롬프트 엔지니어링을 활용한 효율적인 콘텐츠 생성 방법',
        publishedAt: '2025-03-20',
        url: 'https://autorise3828.tistory.com',
        thumbnail: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 'tistory-2',
        title: '블로그 수익화 전략 완벽 가이드',
        excerpt: '애드센스부터 제휴 마케팅까지 수익 창출 방법 총정리',
        publishedAt: '2025-02-28',
        url: 'https://autorise3828.tistory.com',
        thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  }
];

// 메모이제이션된 블로그 포스트 컴포넌트
const BlogPostCard = memo(({ 
  post, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave,
  platformColor 
}: { 
  post: BlogPost, 
  isHovered: boolean, 
  onMouseEnter: () => void, 
  onMouseLeave: () => void,
  platformColor: string 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // 이미지 로드 실패 시 대체 이미지
  const handleImageError = () => {
    setImageError(true);
  };

  // 이미지 로드 완료 시
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // 이미지 URL
  const getImageUrl = () => {
    if (imageError) {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzEwMTgyMCIvPgo8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMzM2JiZmYiPkJsb2cgSW1hZ2U8L3RleHQ+Cjwvc3ZnPg==';
    }
    return post.thumbnail;
  };

  return (
    <div 
      className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-cyan-500/50 relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a 
        href={post.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative"
      >
        <div className="h-48 overflow-hidden relative">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={getImageUrl()} 
            alt={post.title} 
            width={600}
            height={400}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="eager"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70"></div>
          
          {/* 네온 테두리 효과 */}
          <div className={`absolute inset-0 border-2 border-cyan-500 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-40' : ''}`}></div>
          
          {/* 아이콘 버튼 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${platformColor} bg-opacity-80 flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-90'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 10-5.656-5.656l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          {/* 사이버펑크 장식 요소 */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 rounded-bl-xl"></div>
          
          <h3 className="text-lg font-bold mb-2 line-clamp-2 text-white hover:text-cyan-300 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
          <p className="text-sm text-cyan-400 font-mono">{post.publishedAt}</p>
        </div>
      </a>
      
      {/* 호버 효과 - 빛나는 선 */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${platformColor} transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </div>
  );
});

BlogPostCard.displayName = 'BlogPostCard';

// 플랫폼 섹션 컴포넌트
const PlatformSection = memo(({ platform }: { platform: BlogPlatform }) => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  return (
    <div key={platform.id} className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${platform.color}`}>
            {platform.name}
          </h3>
          <p className="text-gray-400 mt-2 max-w-xl">{platform.description}</p>
        </div>
        <a 
          href={platform.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-block px-6 py-3 bg-gradient-to-r ${platform.color} text-white rounded-full hover:opacity-90 transition-all duration-300 font-medium relative overflow-hidden`}
        >
          <span className="relative z-10">채널 방문하기</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platform.posts.map((post) => (
          <BlogPostCard 
            key={post.id}
            post={post}
            isHovered={hoveredPost === post.id}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
            platformColor={platform.color}
          />
        ))}
      </div>
    </div>
  );
});

PlatformSection.displayName = 'PlatformSection';

export default function BlogSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로딩 효과를 위한 최소 지연 (느껴지는 속도 개선)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-cyan-500 opacity-70 blur-md animate-pulse"></div>
          <div className="absolute inset-2 border-2 border-t-transparent border-cyan-300 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="autorise-blog-section py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* 사이버펑크 배경 요소 */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400"></div>
      </div>
      
      <div className="autorise-blog-container container mx-auto px-4 relative z-10">
        <div className="autorise-blog-header text-center mb-16 relative">
          <h2 className="autorise-blog-title text-4xl md:text-5xl font-bold mb-4 inline-block relative" id="blog">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">블로그</span>
            <span className="text-white"> 채널</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
          </h2>
          
          <p className="autorise-blog-description text-gray-300 text-center max-w-3xl mx-auto mt-6">
            인공지능, 콘텐츠 마케팅, 디지털 트렌드에 관한 유용한 정보와 인사이트를 확인하세요.
          </p>
        </div>

        {blogPlatforms.map((platform) => (
          <PlatformSection key={platform.id} platform={platform} />
        ))}
      </div>
    </section>
  );
} 
import { NextResponse } from 'next/server';
import axios from 'axios';

// 더미 데이터
const dummyPosts = [
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

// 블로그 API 요청 처리 함수 - 간소화
export async function GET() {
  try {
    // 배포 환경을 고려하여 항상 더미 데이터 반환
    return NextResponse.json({ posts: dummyPosts }, { status: 200 });
  } catch (error) {
    console.error('블로그 데이터 처리 오류:', error);
    // 오류 발생 시에도 더미 데이터 반환
    return NextResponse.json({ posts: dummyPosts }, { status: 200 });
  }
} 
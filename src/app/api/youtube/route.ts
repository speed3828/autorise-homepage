import { NextResponse } from 'next/server';
import axios from 'axios';

// 더미 데이터
const dummyVideos = [
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

// YouTube API 요청 처리 함수 - 간소화
export async function GET() {
  try {
    // 배포 환경을 고려하여 항상 더미 데이터 반환
    return NextResponse.json({ videos: dummyVideos }, { status: 200 });
  } catch (error) {
    console.error('YouTube 데이터 처리 오류:', error);
    // 오류 발생 시에도 더미 데이터 반환
    return NextResponse.json({ videos: dummyVideos }, { status: 200 });
  }
} 
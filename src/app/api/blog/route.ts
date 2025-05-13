import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }
  
  try {
    // WordPress REST API 엔드포인트로 블로그 글을 가져옴
    const apiUrl = `${url}/wp-json/wp/v2/posts?_embed&per_page=6`;
    const response = await fetch(apiUrl, { 
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog data');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json({ error: 'Failed to fetch blog data' }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SessionManager } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session')?.value;
  const isAdmin = request.cookies.get('isAdmin')?.value;
  const { pathname } = request.nextUrl;

  // 관리자 페이지 접근 시 세션 및 관리자 권한 확인
  if (pathname.startsWith('/admin')) {
    if (!sessionToken || !isAdmin || isAdmin !== 'true') {
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }

    // 세션 토큰 유효성 검사
    const isValidSession = await SessionManager.validateSession(sessionToken);
    if (!isValidSession) {
      await SessionManager.clearSession();
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      url.searchParams.set('expired', 'true');
      return NextResponse.redirect(url);
    }
  }

  // 로그인/가입 페이지 접근 시 이미 로그인된 경우 관리자 페이지로 리다이렉트
  if (pathname === '/login' || pathname === '/register') {
    if (sessionToken && isAdmin === 'true') {
      return NextResponse.redirect(new URL('/admin/write', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/register',
  ],
}; 
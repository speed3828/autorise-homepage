import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { SessionManager } from '@/lib/session';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: '이메일과 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 데이터베이스 연결
    await connectDB();

    // 사용자 찾기
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 비밀번호 확인
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 관리자 권한 확인
    const isAdmin = user.role === 'admin';

    // 세션 설정
    const sessionToken = await SessionManager.setSession(user._id.toString(), isAdmin);

    // 로그인 성공 응답
    return NextResponse.json(
      { 
        message: '로그인이 완료되었습니다.',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          name: user.name,
          isAdmin
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 
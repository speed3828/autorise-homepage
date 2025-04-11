import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const { username, password, email, name, phone, address } = await request.json();

    // 필수 필드 검증
    if (!username || !password || !email || !name || !phone || !address) {
      return NextResponse.json(
        { message: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 데이터베이스 연결
    await connectDB();

    // 중복 사용자 확인
    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (existingUser) {
      return NextResponse.json(
        { message: '이미 사용 중인 아이디나 이메일입니다.' },
        { status: 400 }
      );
    }

    // 비밀번호 해싱
    const hashedPassword = await hash(password, 12);

    // 새 사용자 생성
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
      name,
      phone,
      address
    });

    return NextResponse.json(
      { message: '회원가입이 완료되었습니다.', user: { id: user._id, username: user.username } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 
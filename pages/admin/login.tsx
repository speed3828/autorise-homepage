import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // 인증 로직 구현
    try {
      // Firebase 또는 Supabase 인증 로직
      // 예시: await auth.signInWithEmailAndPassword(email, password);
      // 관리자 이메일 확인
      const adminEmails = ['admin@example.com']; // 관리자 이메일 배열
      if (!adminEmails.includes(email)) {
        throw new Error('관리자 권한이 없습니다.');
      }
      // 인증 성공 시 대시보드로 이동
      router.push('/admin/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">관리자 로그인</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 
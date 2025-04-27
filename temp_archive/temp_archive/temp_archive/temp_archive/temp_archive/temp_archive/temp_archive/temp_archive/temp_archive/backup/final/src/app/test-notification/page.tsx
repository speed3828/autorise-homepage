'use client';

import { useState, FormEvent } from 'react';
import { sendNotification } from '../../services/notificationService';

export default function TestNotification() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{success: boolean, message: string} | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      await sendNotification(contactData);
      setResult({
        success: true,
        message: '발송 성공! 이메일과 SMS가 전송되었습니다.'
      });
    } catch (error) {
      console.error('발송 실패:', error);
      setResult({
        success: false,
        message: '발송 실패: ' + (error instanceof Error ? error.message : '알 수 없는 오류')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          <span className="text-cyan-400">메시지 발송</span> 테스트
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-300">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="테스트 이름"
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-300">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="test@example.com"
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-300">메시지</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="테스트 메시지 내용"
              rows={4}
              className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 bg-cyan-600 rounded hover:bg-cyan-700 transition ${isSubmitting ? 'opacity-70' : ''}`}
          >
            {isSubmitting ? '발송 중...' : '테스트 발송'}
          </button>
        </form>
        
        {result && (
          <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-900' : 'bg-red-900'}`}>
            {result.message}
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-400">
          <p>이 페이지는 EmailJS와 SMS API 연동을 테스트하기 위한 페이지입니다.</p>
          <p className="mt-2">연동이 정상적으로 작동하면 이메일(speed382286@gmail.com)과 문자(010-4316-3828)로 테스트 메시지가 발송됩니다.</p>
        </div>
      </div>
    </main>
  );
} 
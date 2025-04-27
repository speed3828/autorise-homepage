'use client';

import { useState } from 'react';
import { sendNotification, type ContactFormData, type NotificationResult } from '../../services/notificationService';

export default function TestNotification() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [result, setResult] = useState<NotificationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await sendNotification(formData);
      setResult(result);
    } catch (error) {
      console.error('Notification error:', error);
      setResult({
        success: false,
        emailSent: false,
        smsSent: false,
        error: error instanceof Error ? error.message : '알 수 없는 오류'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">알림 서비스 테스트</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1">메시지</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? '전송 중...' : '알림 테스트'}
        </button>
      </form>
      
      {result && (
        <div className={`mt-6 p-4 rounded ${result.success ? 'bg-green-100' : 'bg-red-100'}`}>
          <h2 className="font-bold">{result.success ? '알림 전송 성공' : '알림 전송 실패'}</h2>
          <ul className="mt-2">
            <li>이메일: {result.emailSent ? '성공' : '실패'}</li>
            <li>SMS: {result.smsSent ? '성공' : '실패'}</li>
            {result.error && <li className="text-red-600">오류: {result.error}</li>}
          </ul>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">개발 환경 안내</h2>
        <p>
          실제 API 키가 설정되지 않은 경우, 테스트는 콘솔에 로그만 출력합니다.
          실제 메시지를 보내려면 .env.local 파일에 환경 변수를 설정하세요.
        </p>
      </div>
    </div>
  );
} 
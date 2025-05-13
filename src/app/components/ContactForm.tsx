'use client';

import { useState } from 'react';
import emailService from '../../services/emailService';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // 폼 입력 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '모든 항목을 입력해주세요.'
      });
      return;
    }
    
    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '유효한 이메일 주소를 입력해주세요.'
      });
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: '문의를 전송 중입니다...'
    });
    
    try {
      // EmailJS를 사용하여 이메일 전송
      const result = await emailService.sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      if (result.success) {
        // 이메일 전송 성공 시
        setFormData({ name: '', email: '', message: '' });
        setFormStatus({
          submitted: true,
          success: true,
          message: '문의가 성공적으로 접수되었습니다.'
        });
        
        // 추가 기능: SMS 알림도 보내기 (유지)
        const smsBody = `[Autorise 문의] ${formData.name}님으로부터 새로운 문의가 도착했습니다.`;
        const smsLink = `sms:010-4316-3828?body=${encodeURIComponent(smsBody)}`;
        window.open(smsLink);
      } else {
        // 이메일 전송 실패 시
        setFormStatus({
          submitted: true,
          success: false,
          message: result.message || '문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.'
      });
    }
  };
  
  return (
    <div className={className}>
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-cyan-400">문의</span>하기
      </h2>
      
      {formStatus.submitted && (
        <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-800 bg-opacity-50 border border-green-600' : 'bg-red-800 bg-opacity-50 border border-red-600'}`}>
          <p className={`text-center ${formStatus.success ? 'text-green-300' : 'text-red-300'}`}>
            {formStatus.message}
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-pink-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-300">이름</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="이름을 입력하세요"
              aria-label="이름"
              className="w-full p-3 bg-gray-900 bg-opacity-70 rounded-md border border-pink-800 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">이메일</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일을 입력하세요"
              aria-label="이메일"
              className="w-full p-3 bg-gray-900 bg-opacity-70 rounded-md border border-pink-800 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500" 
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-300">메시지</label>
          <textarea 
            rows={4} 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="메시지를 입력하세요"
            aria-label="메시지"
            className="w-full p-3 bg-gray-900 bg-opacity-70 rounded-md border border-pink-800 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button 
            type="submit" 
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 rounded-md transition shadow-lg shadow-pink-500/20"
          >
            보내기
          </button>
        </div>
      </form>
    </div>
  );
} 
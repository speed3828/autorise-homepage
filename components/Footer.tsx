'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  const handleSMS = () => {
    window.location.href = 'sms:01043163828';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:speed382286@gmail.com';
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AutoRise Insight</h3>
            <p className="text-gray-400">
              사람과 기술의 연결을 통해<br />
              더 나은 미래를 만들어갑니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">관리자 정보</h3>
            <p className="text-gray-400">
              <span className="font-medium">이름:</span> 조재성<br />
              <span className="font-medium">연락처:</span> 010-4316-3828<br />
              <span className="font-medium">이메일:</span> speed382286@gmail.com<br />
              <span className="font-medium">주소:</span><br />
              경기도 양평군 중앙로343번길30-6<br />
              수지프로미스6동302호
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">연락하기</h3>
            <div className="space-y-4">
              <button
                onClick={handleSMS}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                문자 보내기
              </button>
              <button
                onClick={handleEmail}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                이메일 보내기
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoRise Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
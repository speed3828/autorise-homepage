'use client';

import React from 'react';
import AICloudBackground from './AICloudBackground';

const Contact = () => {
  const socialLinks = [
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Blog', icon: '📝', url: '#' },
  ];

  return (
    <section id="contact" className="relative py-20" style={{ scrollMarginTop: '80px' }}>
      <AICloudBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            연락하기
          </h2>
          <p className="mt-4 text-xl text-gray-200">
            AI 기술로 함께 성장해 나가요
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  보내기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
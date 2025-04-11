'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AICloudBackground from '@/components/AICloudBackground';

const AdminWritePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    category: 'blog',
    imageUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Firebase 또는 Supabase에 데이터 저장
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen">
      <AICloudBackground />
      
      <div className="relative max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-8">
            글쓰기
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-200">
                제목
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-200">
                카테고리
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
              >
                <option value="blog">블로그</option>
                <option value="notice">공지사항</option>
                <option value="project">프로젝트</option>
              </select>
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-200">
                요약 설명
              </label>
              <textarea
                id="summary"
                rows={3}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-200">
                본문 내용
              </label>
              <textarea
                id="content"
                rows={10}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-gray-200 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-200">
                대표 이미지
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => {
                  // TODO: 이미지 업로드 처리
                  const file = e.target.files?.[0];
                  if (file) {
                    // 이미지 업로드 로직
                  }
                }}
                className="mt-1 block w-full text-gray-200"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                임시 저장
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                미리보기
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                발행하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminWritePage; 
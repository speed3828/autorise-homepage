import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          AutoRise Insight
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          사람과 기술의 연결을 통해 새로운 가치를 창출하는 클라우드 기반 솔루션
        </p>
        <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          자세히 보기
        </button>
      </section>
    </main>
  );
} 
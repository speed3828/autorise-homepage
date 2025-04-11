import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>AutoRise Insight</title>
        <meta name="description" content="사람과 기술의 연결을 통해 새로운 가치를 창출하는 클라우드 기반 솔루션" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  );
};

export default Home; 
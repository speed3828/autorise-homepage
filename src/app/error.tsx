'use client';

import { useEffect, useCallback } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 오류 로깅 구현 가능
    console.error(error);
  }, [error]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-pink-500">오</span>
          <span className="text-white">류</span>
          <span className="text-cyan-400">발생</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          예상치 못한 오류가 발생했습니다.
        </p>
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
        >
          다시 시도하기
        </button>
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    // 주소 변경 시 로딩 상태 관리
    setIsLoading(true);
    handleComplete();

    return () => {
      setIsLoading(false);
    };
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-70 backdrop-blur-sm">
      <div className="relative">
        <div className="w-20 h-20 border-t-4 border-r-4 border-b-4 border-l-4 border-pink-500 border-l-cyan-400 border-t-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white">AI</span>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useRef } from 'react';

export default function SkipToContent() {
  const mainContentRef = useRef<HTMLAnchorElement>(null);

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      // 포커스가 이동한 후 tabindex 속성 제거
      setTimeout(() => {
        mainContent.removeAttribute('tabindex');
      }, 100);
    }
  };
  
  return (
    <a
      ref={mainContentRef}
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:p-4 focus:bg-pink-500 focus:text-white focus:rounded-md"
      aria-label="본문으로 건너뛰기"
    >
      본문으로 건너뛰기
    </a>
  );
} 
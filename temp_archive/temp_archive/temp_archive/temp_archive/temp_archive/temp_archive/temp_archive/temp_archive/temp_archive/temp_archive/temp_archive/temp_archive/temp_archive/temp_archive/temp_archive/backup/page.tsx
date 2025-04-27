'use client';

import React from 'react';
// const { useState, useEffect, useRef } = React;
import './styles/page.css';

// TypeWriter component
const TypeWriter = () => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [typingComplete, setTypingComplete] = React.useState(false);
  const [glitchEffect, setGlitchEffect] = React.useState(false);
  const finalText = "아우토리제 인사이트";
  const intervalRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const glitchIntervalRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    let index = 0;
    // 글자를 하나씩 추가하는 타이핑 효과
    intervalRef.current = setInterval(() => {
      if (index < finalText.length) {
        setDisplayedText((prevText: string) => prevText + finalText[index]);
        index++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTypingComplete(true);
        
        // 타이핑 완료 후 글리치 효과 시작
        glitchIntervalRef.current = setInterval(() => {
          setGlitchEffect((prev: boolean) => !prev);
        }, 2000);
      }
    }, 150);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
    };
  }, []);

  return (
    <div className={`typewriter ${typingComplete ? 'complete' : ''} ${glitchEffect ? 'glitch' : ''}`}>
      {displayedText}
      {!typingComplete && <span className="cursor">|</span>}
    </div>
  );
};

// Main component
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-8">
          <TypeWriter />
        </h1>
        <p className="mt-6 text-xl">
          AI 기반 콘텐츠 자동화 서비스
        </p>
      </div>
    </main>
  );
}
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const [glitchText, setGlitchText] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // useMemo를 사용하여 textSequence 메모이제이션
  const textSequence = useMemo(() => [
    '사람과 사람',
    '사람과 상점',
    '사람과 행정',
    '사람과 기술'
  ], []);
  
  useEffect(() => {
    // 글리치 효과 간헐적 실행
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  useEffect(() => {
    if (isTypingComplete) return;
    
    const currentFullText = textSequence[currentTextIndex];
    
    if (typingText === currentFullText) {
      // 한 문장 타이핑이 완료되면 잠시 멈춘 후 다음 문장으로 진행
      const timeout = setTimeout(() => {
        if (currentTextIndex < textSequence.length - 1) {
          setCurrentTextIndex(currentTextIndex + 1);
          setTypingText('');
        } else {
          // 모든 문장이 완료되면 전체 텍스트를 표시
          setIsTypingComplete(true);
          setTypingText(textSequence.join(' • '));
        }
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
    
    // 타이핑 효과 구현
    const timeout = setTimeout(() => {
      setTypingText(currentFullText.substring(0, typingText.length + 1));
    }, 150);
    
    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isTypingComplete, textSequence]);
  
  return (
    <section className={`relative flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-950 to-gray-900 ${className}`}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500 filter blur-5xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500 filter blur-5xl"></div>
      </div>
      
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className={`text-6xl font-bold mb-8 ${glitchText ? 'animate-pulse' : ''}`}>
          <span className="text-pink-500">Auto</span>
          <span className="text-white">rise_</span>
          <span className="text-cyan-400">Insight</span>
        </h1>
        <div className="text-cyan-400 text-xl font-medium h-8 min-h-8 flex justify-center items-center">
          <span className={`${isTypingComplete ? '' : 'border-r-2 border-cyan-500 pr-1'}`}>
            {isTypingComplete ? (
              <>
                <span className="text-pink-400">사람과 사람</span>
                <span className="text-gray-400"> • </span>
                <span className="text-cyan-400">사람과 상점</span>
                <span className="text-gray-400"> • </span>
                <span className="text-purple-400">사람과 행정</span>
                <span className="text-gray-400"> • </span>
                <span className="text-green-400">사람과 기술</span>
              </>
            ) : typingText}
          </span>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a 
            href="https://blog-youtube-sections-crr197oiu-auto-rise-insight.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            블로그 & 유튜브 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
} 
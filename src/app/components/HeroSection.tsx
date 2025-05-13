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
  const [glitchClass1, setGlitchClass1] = useState('glitch-margin-1');
  const [glitchClass2, setGlitchClass2] = useState('glitch-margin-2');
  
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
      // 글리치 효과마다 랜덤한 마진 클래스 선택
      const randomClass1 = `glitch-margin-${Math.floor(Math.random() * 5) + 1}`;
      const randomClass2 = `glitch-margin-${Math.floor(Math.random() * 5) + 1}`;
      setGlitchClass1(randomClass1);
      setGlitchClass2(randomClass2);
      
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
    <section className={`relative flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 ${className}`}>
      {/* 사이버펑크 배경 효과 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* 수직선 효과 */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`vline-${i}`} 
            className={`absolute h-full w-px bg-gradient-to-b from-cyan-500 to-transparent opacity-10 vline-${i+1}`}
          ></div>
        ))}
        
        {/* 수평선 효과 */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`hline-${i}`} 
            className={`absolute w-full h-px bg-gradient-to-r from-pink-500 via-transparent to-cyan-500 opacity-10 hline-${i+1}`}
          ></div>
        ))}
        
        {/* 네온 글로우 효과 */}
        <div className="glow-effect-1"></div>
        <div className="glow-effect-2"></div>
      </div>
      
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <div className="relative inline-block mb-8">
          <h1 className={`text-6xl md:text-7xl font-bold relative z-10 ${glitchText ? 'animate-glitch' : ''}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 neon-pink-glow">Auto</span>
            <span className="text-white">rise_</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500 neon-glow">Insight</span>
          </h1>
          
          {/* 글리치 효과 요소 */}
          {glitchText && (
            <>
              <h1 className={`text-6xl md:text-7xl font-bold absolute top-0 left-0 text-pink-500 opacity-70 z-0 ${glitchClass1}`}>
                <span className="text-pink-500">Auto</span>
                <span className="text-white">rise_</span>
                <span className="text-cyan-400">Insight</span>
              </h1>
              <h1 className={`text-6xl md:text-7xl font-bold absolute top-0 left-0 text-cyan-400 opacity-70 z-0 ${glitchClass2}`}>
                <span className="text-pink-500">Auto</span>
                <span className="text-white">rise_</span>
                <span className="text-cyan-400">Insight</span>
              </h1>
            </>
          )}
        </div>
        
        <div className="text-cyan-400 text-xl md:text-2xl font-medium h-8 min-h-8 flex justify-center items-center">
          <span className={`${isTypingComplete ? '' : 'border-r-2 border-cyan-500 pr-1'}`}>
            {isTypingComplete ? (
              <>
                <span className="text-pink-400 neon-pink-glow">사람과 사람</span>
                <span className="text-gray-400"> • </span>
                <span className="text-cyan-400 neon-glow">사람과 상점</span>
                <span className="text-gray-400"> • </span>
                <span className="text-purple-400">사람과 행정</span>
                <span className="text-gray-400"> • </span>
                <span className="text-green-400">사람과 기술</span>
              </>
            ) : typingText}
          </span>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
          <a 
            href="#blog"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/20 group relative overflow-hidden mb-4 md:mb-0"
            onClick={(e) => {
              e.preventDefault();
              const blogSection = document.getElementById('blog');
              const youtubeSection = document.getElementById('youtube');
              if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">블로그 & 유튜브 살펴보기</span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 opacity-30 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-300 cyan-border-glow"></span>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-pink-500/20 group relative overflow-hidden"
          >
            <span className="relative z-10">문의하기</span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-pink-300 to-purple-400 transition-all duration-300 opacity-30 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-300 pink-border-glow"></span>
          </a>
        </div>
      </div>
    </section>
  );
} 
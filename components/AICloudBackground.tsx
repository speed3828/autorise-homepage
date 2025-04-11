'use client';

import React, { useEffect, useState } from 'react';

const AICloudBackground = () => {
  const [mounted, setMounted] = useState(false);
  const aiTools = [
    'ChatGPT', 'DALL·E', 'Midjourney', 'Stable Diffusion', 'Runway ML', 'Cursor', 
    'Claude', 'Bard', 'Gemini', 'Jasper', 'Copy.ai', 'Synthesia', 'Notion AI', 
    'Replit', 'Suno', 'ElevenLabs', 'Kaiber', 'Tome', 'Descript', 'Gamma', 
    'DreamStudio', 'Leonardo AI', 'Adobe Firefly', 'Canva AI', 'Lex.page', 
    'Scite', 'Framer AI', 'Pika', 'TLDR This', 'Diffblue', 'Playground AI', 
    'Adobe Sensei', 'ChatSonic', 'Magic Eraser', 'Mubert', 'Perplexity AI', 
    'Vondy', 'Soundraw', 'Opus Clip', 'Unbounce AI', 'Murf.ai', 'Lumen5', 
    'Type.ai', 'Beautiful.ai', 'FigGPT', 'Sloyd AI', 'Compose AI', 'Podcastle', 
    'Wonder Dynamics', 'Codium', 'GitHub Copilot', 'Krisp.ai', 'Glasp', 'Tactiq', 
    'PromptLayer', 'PromptPerfect', 'PromptHero'
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900 via-orange-900 to-red-900" />
      
      {/* 구름 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-2/3 w-[450px] h-[450px] bg-rose-500/20 rounded-full blur-3xl" />
      </div>

      {/* AI 도구 이름 */}
      <div className="absolute inset-0">
        {aiTools.map((tool, index) => {
          const size = Math.random() * 12 + 8; // 8px ~ 20px
          const opacity = Math.random() * 0.2 + 0.1; // 0.1 ~ 0.3
          const left = Math.random() * 100; // 0% ~ 100%
          const top = Math.random() * 100; // 0% ~ 100%
          const rotation = Math.random() * 360; // 0deg ~ 360deg
          const hue = Math.random() * 60 + 30; // 30 ~ 90 (노란색/주황색 계열)
          const color = `hsl(${hue}, 100%, 80%)`; // 사이버펑크 스타일의 밝은 색상
          const delay = Math.random() * 5; // 0s ~ 5s
          const duration = Math.random() * 10 + 10; // 10s ~ 20s

          return (
            <div
              key={index}
              className="absolute font-mono"
              style={{
                fontSize: `${size}px`,
                opacity,
                left: `${left}%`,
                top: `${top}%`,
                transform: `rotate(${rotation}deg)`,
                animation: `float ${duration}s ${delay}s infinite ease-in-out`,
                color,
                textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
                zIndex: Math.floor(opacity * 10),
              }}
            >
              {tool}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotation));
          }
          50% {
            transform: translateY(-30px) rotate(var(--rotation));
          }
        }
      `}</style>
    </div>
  );
};

export default AICloudBackground; 
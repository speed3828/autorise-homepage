'use client';

import { useState } from 'react';

interface PricingSectionProps {
  className?: string;
}

export default function PricingSection({ className = '' }: PricingSectionProps) {
  const [showPricing, setShowPricing] = useState(false);
  
  return (
    <section id="pricing-section" className={`relative py-20 bg-gray-950 ${className}`}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500 filter blur-5xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-500 filter blur-5xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-pink-500">AI 자동화</span> 서비스 요금 안내
        </h2>
        
        <div className="text-center mb-12">
          <button 
            onClick={() => setShowPricing(!showPricing)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 rounded-md transition shadow-lg shadow-pink-500/20 text-white font-bold"
          >
            {showPricing ? '요금 정보 접기' : '요금 정보 펼쳐보기'}
          </button>
        </div>
        
        {showPricing && (
          <div className="space-y-8 animate-fadeIn">
            {/* 모든 서비스 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1. 콘텐츠 자동화 서비스 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-cyan-800 shadow-lg shadow-cyan-500/10">
                <h3 className="text-xl font-bold mb-3 text-pink-400">1. 콘텐츠 자동화 서비스</h3>
                <p className="text-gray-300 mb-4 text-sm">AI로 블로그, 유튜브, SNS 콘텐츠를 자동으로 제작해드립니다.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">블로그 글 자동화:</span>
                    <span className="text-cyan-400 font-bold">₩20,000 / 건</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">유튜브 영상 자동화 (10분):</span>
                    <span className="text-cyan-400 font-bold">₩50,000 / 건</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">블로그 10건:</span>
                    <span className="text-cyan-400 font-bold">₩150,000 / 월</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">통합 패키지:</span>
                    <span className="text-cyan-400 font-bold">₩650,000 / 월</span>
                  </li>
                </ul>
                <div className="bg-gray-800 bg-opacity-50 p-3 rounded-md border border-pink-900 text-xs">
                  <p className="text-gray-300">
                    반복적인 콘텐츠 제작에 드는 시간과 비용을 절감할 수 있으며, 꾸준하고 전략적인 온라인 노출이 가능합니다.
                  </p>
                </div>
              </div>
              
              {/* 4. 업무 자동화 및 고객 관리 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-pink-800 shadow-lg shadow-pink-500/10">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">4. 업무 자동화 및 고객 관리</h3>
                <p className="text-gray-300 mb-4 text-sm">반복 업무 및 고객 관리(CRM)를 자동화해드립니다.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">기본 자동화 (3개 업무):</span>
                    <span className="text-pink-400 font-bold">₩150,000 / 월</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">중급 자동화 (10개 업무):</span>
                    <span className="text-pink-400 font-bold">₩400,000 / 월</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">CRM 자동화:</span>
                    <span className="text-pink-400 font-bold">₩250,000 / 월</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">고급 맞춤 자동화:</span>
                    <span className="text-pink-400 font-bold">별도 협의</span>
                  </li>
                </ul>
                <div className="bg-gray-800 bg-opacity-50 p-3 rounded-md border border-cyan-900 text-xs">
                  <p className="text-gray-300">
                    수작업으로 하던 데이터 입력, 이메일 발송, 예약 확인 등 다양한 업무를 자동화하여 비용 절감 효과를 누려보세요.
                  </p>
                </div>
              </div>
              
              {/* 10. 콘텐츠 제작 대행 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-cyan-800 shadow-lg shadow-cyan-500/10">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">10. 콘텐츠 제작 대행</h3>
                <p className="text-gray-300 mb-4 text-sm">유튜브 영상, 블로그, 썸네일, SNS 콘텐츠를 사장님 대신 제작해드립니다.</p>
                <div className="flex items-start mb-2">
                  <span className="text-pink-400 mr-2 text-xs">👉</span>
                  <p className="text-gray-300 text-xs">맞춤형 콘텐츠 전략 제공, 사장님 채널에 바로 발행 가능</p>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">유튜브 영상:</span>
                    <span className="text-cyan-400 font-bold">₩50,000~ / 건</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">블로그 포스팅:</span>
                    <span className="text-cyan-400 font-bold">₩20,000~ / 건</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">월 정기 패키지:</span>
                    <span className="text-cyan-400 font-bold">₩300,000~ / 월</span>
                  </li>
                </ul>
                <div className="bg-gray-800 bg-opacity-50 p-3 rounded-md border border-pink-900 text-xs">
                  <p className="text-gray-300">
                    브랜드 정체성을 유지하면서 고품질 콘텐츠를 지속적으로 발행하여 온라인 존재감을 강화하고 목표 고객층의 관심을 끌어냅니다.
                  </p>
                </div>
              </div>
              
              {/* 11. 홍보 마케팅 대행 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-pink-800 shadow-lg shadow-pink-500/10">
                <h3 className="text-xl font-bold mb-3 text-pink-400">11. 홍보 마케팅 대행</h3>
                <p className="text-gray-300 mb-4 text-sm">콘텐츠를 활용한 유튜브, 블로그, SNS 통합 마케팅을 진행합니다.</p>
                <div className="flex items-start mb-2">
                  <span className="text-cyan-400 mr-2 text-xs">👉</span>
                  <p className="text-gray-300 text-xs">통합 마케팅 패키지로 브랜드 인지도와 유입 향상</p>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">유튜브 마케팅:</span>
                    <span className="text-pink-400 font-bold">₩400,000~ / 월</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">블로그 마케팅:</span>
                    <span className="text-pink-400 font-bold">₩300,000~ / 월</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-300">통합 패키지:</span>
                    <span className="text-pink-400 font-bold">₩800,000~ / 월</span>
                  </li>
                </ul>
                <div className="bg-gray-800 bg-opacity-50 p-3 rounded-md border border-cyan-900 text-xs">
                  <p className="text-gray-300">
                    전략적인 다채널 마케팅으로 온라인 인지도를 높이고, 브랜드 스토리를 효과적으로 전달하여 고객 유입과 매출 증대를 실현합니다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 주의사항 */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-pink-800 text-center mt-8">
              <p className="text-gray-300 mb-2">모든 금액은 VAT 별도 기준입니다.</p>
              <p className="text-gray-300">서비스는 맞춤 상담 후 제공되며, 실제 운영에 최적화된 자동화 시스템을 제공합니다.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
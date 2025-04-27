'use client';

import { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('소개');
  const [glitchText, setGlitchText] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
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
  
  // 폼 입력 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '모든 항목을 입력해주세요.'
      });
      return;
    }
    
    try {
      // 이메일로 문의내용 전송
      const emailSubject = `[Autorise] ${formData.name}님의 문의`;
      const emailBody = `
이름: ${formData.name}
이메일: ${formData.email}
메시지: ${formData.message}
      `;
      
      // 이메일 전송 링크 생성 (mailto 프로토콜 사용)
      const mailtoLink = `mailto:speed382286@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink);
      
      // SMS 전송을 위한 링크 (기본 메시지 앱 사용)
      const smsBody = `[Autorise 문의] ${formData.name}님으로부터 새로운 문의가 도착했습니다.`;
      const smsLink = `sms:010-4316-3828?body=${encodeURIComponent(smsBody)}`;
      window.open(smsLink);
      
      // 폼 초기화 및 성공 상태 설정
      setFormData({ name: '', email: '', message: '' });
      setFormStatus({
        submitted: true,
        success: true,
        message: '문의가 성공적으로 접수되었습니다.'
      });
      
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.'
      });
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* 배경 그리드 */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-cyan-500"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-cyan-500"></div>
          ))}
        </div>
      </div>
      
      {/* 네온 장식 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500"></div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
      
      {/* 메인 히어로 섹션 */}
      <section className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-950 to-gray-900">
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
          </div>
        </div>
      </section>
      
      {/* 회사소개 섹션 */}
      <section className="relative py-24 bg-gray-950">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-cyan-500 to-transparent opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-pink-500 to-transparent opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              <span className="text-cyan-400">우리는</span> 
              <span className="text-white">이렇게</span>
              <span className="text-pink-500">일합니다</span>
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. 콘텐츠 자동화 운영팀 */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-cyan-800 hover:border-pink-500 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-pink-500/20 group">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="text-xs font-mono text-cyan-400 mb-2">{/* DEPARTMENT_01 */}</div>
                  <h3 className="text-2xl font-bold text-pink-500 group-hover:text-cyan-400 transition-colors">콘텐츠 자동화 운영팀</h3>
                  <div className="w-16 h-1 bg-pink-500 group-hover:bg-cyan-400 transition-colors mt-2"></div>
                </div>
                <p className="text-gray-300 mb-6">블로그, 유튜브, SNS, 음악 등 다양한 콘텐츠를 자동화하는 핵심 운영 팀입니다. 최신 AI 기술을 활용하여 고품질 콘텐츠를 효율적으로 생성합니다.</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['블로그', '유튜브', 'SNS', '음악 자동화'].map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 border border-pink-700 rounded-full text-xs text-cyan-400">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2. 기획본부 */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-pink-800 hover:border-cyan-500 transition-all shadow-lg shadow-pink-500/10 hover:shadow-cyan-500/20 group">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="text-xs font-mono text-pink-400 mb-2">{/* DEPARTMENT_02 */}</div>
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-pink-500 transition-colors">기획본부</h3>
                  <div className="w-16 h-1 bg-cyan-500 group-hover:bg-pink-400 transition-colors mt-2"></div>
                </div>
                <p className="text-gray-300 mb-6">AI 에이전트 설계부터 시스템 기획, 자동화 기획까지 모든 서비스의 기반이 되는 아이디어와 전략을 수립합니다.</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['에이전트 설계', '시스템 기획', '자동화 기획'].map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 border border-cyan-700 rounded-full text-xs text-pink-400">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3. 관리부서 */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-cyan-800 hover:border-pink-500 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-pink-500/20 group">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="text-xs font-mono text-cyan-400 mb-2">{/* DEPARTMENT_03 */}</div>
                  <h3 className="text-2xl font-bold text-pink-500 group-hover:text-cyan-400 transition-colors">관리부서</h3>
                  <div className="w-16 h-1 bg-pink-500 group-hover:bg-cyan-400 transition-colors mt-2"></div>
                </div>
                <p className="text-gray-300 mb-6">모든 서비스의 안정적인 운영을 위한 서버 관리, 일정 관리, 자동화 시스템 관리를 담당합니다. 24/7 무중단 서비스를 목표로 합니다.</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['서버 관리', '일정 관리', '시스템 관리'].map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 border border-pink-700 rounded-full text-xs text-cyan-400">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 4. 구름다리 플랫폼팀 */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-pink-800 hover:border-cyan-500 transition-all shadow-lg shadow-pink-500/10 hover:shadow-cyan-500/20 group">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="text-xs font-mono text-pink-400 mb-2">{/* DEPARTMENT_04 */}</div>
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-pink-500 transition-colors">구름다리 플랫폼팀</h3>
                  <div className="w-16 h-1 bg-cyan-500 group-hover:bg-pink-400 transition-colors mt-2"></div>
                </div>
                <p className="text-gray-300 mb-6">커뮤니티, 예약, 챗봇, 상점 연동, 행정 복지 서비스 등 다양한 서비스를 하나로 연결하는 통합 플랫폼을 개발합니다.</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['커뮤니티', '예약 시스템', '챗봇', '상점 연동', '행정 복지'].map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 border border-cyan-700 rounded-full text-xs text-pink-400">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block px-5 py-2 bg-gray-800 bg-opacity-50 border border-cyan-700 rounded-md">
              <p className="text-gray-300 text-sm">
                <span className="text-pink-400 font-bold">Autorise Insight</span>의 모든 팀은 <span className="text-cyan-400">AI 기술</span>을 기반으로 협업하며 혁신적인 서비스를 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 우리는 누구인가 섹션 */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-500 to-transparent opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-cyan-500 to-transparent opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">우리는</span> 
            <span className="text-white">누구</span>
            <span className="text-pink-500">인가</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: '혁신가', 
                desc: '인공지능과 자연어 처리 기술을 활용하여 콘텐츠 제작의 새로운 패러다임을 만들어가는 기술 혁신가입니다.',
                icon: '💡'
              },
              { 
                title: '크리에이터', 
                desc: '기술을 넘어 창의성과 예술성을 결합한 새로운 디지털 경험을 만들어내는 크리에이터 집단입니다.',
                icon: '🎨'
              },
              { 
                title: '협력자', 
                desc: '고객의 비즈니스 성공을 위해 함께 고민하고 최적의 솔루션을 제공하는 신뢰할 수 있는 파트너입니다.',
                icon: '🤝'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-cyan-800 hover:border-pink-500 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-pink-500/20 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-950 bg-opacity-70 backdrop-blur-sm p-8 rounded-lg border border-pink-800">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-pink-500">우리의 팀</h3>
                <p className="text-gray-300 mb-4">
                  Autorise Insight의 핵심은 고도로 특화된 AI 에이전트 시스템입니다. 각 업무 영역별로 전문화된 AI 에이전트가 24시간 활동하며 콘텐츠 생성과 운영을 담당합니다.
                </p>
                <p className="text-gray-300">
                  모든 AI 에이전트는 자체 개발한 명령 체계와 프롬프트 시스템을 통해 고품질 결과물을 생성하며, 인간 전문가와 협업하여 최상의 성능을 발휘합니다.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-3 gap-4">
                {['콘텐츠 에이전트', '데이터 분석 에이전트', '마케팅 에이전트', '디자인 에이전트', '프로젝트 관리 에이전트', '고객 응대 에이전트'].map((role, idx) => (
                  <div key={idx} className="bg-gray-900 p-3 rounded-md border border-cyan-900 text-center">
                    <span className="text-cyan-400 text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 회사 부서별 소개 트리 */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-pink-500">회사</span> 
              <span className="text-white">부서별</span>
              <span className="text-cyan-400">소개</span>
            </h3>
            
            {/* 1단계 조직도 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* 총괄본부를 상위에 시각적으로 강조 */}
              <div className="col-span-1 md:col-span-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="px-4 py-3 bg-purple-500 bg-opacity-20 rounded-lg border border-purple-600 mb-4 w-full max-w-md text-center">
                    <div className="font-bold text-xl text-purple-400">총괄본부</div>
                    <div className="text-gray-300 text-sm mt-1">GPT/Claude 기반 AI 명령 체계 관리 및 운영</div>
                  </div>
                  {/* 연결선 */}
                  <div className="h-8 w-px bg-purple-500 mx-auto mb-4"></div>
                  
                  {/* 하위팀 */}
                  <div className="space-y-3 w-full max-w-md">
                    <div className="p-3 bg-gray-900 rounded border border-purple-800 text-gray-300 text-sm w-full flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span className="text-gray-300">GPT 프롬프트 엔지니어링팀</span>
                    </div>
                    <div className="p-3 bg-gray-900 rounded border border-purple-800 text-gray-300 text-sm w-full flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span className="text-gray-300">Claude 명령 최적화팀</span>
                    </div>
                    <div className="p-3 bg-gray-900 rounded border border-purple-800 text-gray-300 text-sm w-full flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span className="text-gray-300">AI 명령 체계 통합 관리팀</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 나머지 부서들 */}
              {[
                { title: '콘텐츠 자동화 운영팀', color: 'pink', children: ['블로그 자동화팀', '유튜브 자동화팀', 'SNS 자동화팀', '음악 자동화팀'] },
                { title: '기획본부', color: 'cyan', children: ['AI 에이전트 설계팀', '시스템 구조 설계팀', '자동화 시스템 기획팀'] },
                { title: '관리부서', color: 'pink', children: ['일정/캘린더 관리팀', '서버 모니터링팀', 'API/도구 연동 관리팀'] },
                { title: 'AI 연구개발팀', color: 'cyan', children: ['LLM 파인튜닝팀', '멀티모달 연구팀', '에이전트 연결 시스템팀'] },
              ].map((dept, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`px-4 py-3 bg-${dept.color}-500 bg-opacity-20 rounded-lg border border-${dept.color}-600 mb-4 w-full text-center`}>
                    <div className={`font-bold text-lg text-${dept.color}-400`}>{dept.title}</div>
                  </div>
                  {/* 연결선 */}
                  <div className={`h-8 w-px bg-${dept.color}-500 mx-auto mb-4`}></div>
                  
                  {/* 하위팀 */}
                  <div className="space-y-3 w-full">
                    {dept.children.map((team, teamIdx) => (
                      <div key={teamIdx} className={`p-3 bg-gray-900 rounded border border-${dept.color}-800 text-gray-300 text-sm w-full`}>
                        {team}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 구름다리 플랫폼 */}
            <div className="mt-16">
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-lg border border-purple-600 mb-2">
                    <div className="font-bold text-xl text-purple-400">양평 구름다리 플랫폼 운영본부</div>
                    <div className="text-gray-300 text-sm mt-1">각 메뉴에 해당하는 캐릭터 챗봇이 안내와 예약 서비스를 제공</div>
                  </div>
                  {/* 연결선 */}
                  <div className="h-8 w-px bg-purple-500 mx-auto"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  {name: '양평 당근', desc: '중고 거래 / 구인 정보', character: '당근이', role: '거래 매칭 챗봇'},
                  {name: '양평 요기요', desc: '상점 / 맛집 정보 제공', character: '맛짱', role: '음식점 추천 챗봇'},
                  {name: '양평 야놀자', desc: '지역 관광 / 체험 / 숙박 / 행사 정보', character: '놀림이', role: '관광 안내 챗봇'},
                  {name: '양평 복지', desc: '복지 정책 / 지원 프로그램 안내', character: '도우미', role: '복지 상담 챗봇'},
                  {name: '양평 행정', desc: '민원 안내 / 문서 자동화', character: '행정봇', role: '민원 처리 챗봇'},
                  {name: '양평 밴드', desc: '동호회 / 소모임 커뮤니티', character: '모이미', role: '모임 연결 챗봇'},
                  {name: '양평 장터', desc: '지역 농산물 / 특산물 마켓', character: '장돌뱅이', role: '특산물 추천 챗봇'},
                  {name: '양평 LIVE', desc: '실시간 현장 소식 스트림', character: '라이브', role: '실시간 정보 챗봇'},
                  {name: '양평 스토리', desc: '사진 / 글 / 에세이 공유 공간', character: '스토리', role: '콘텐츠 큐레이션 챗봇'}
                ].map((service, idx) => (
                  <div key={idx} className="p-3 bg-gray-900 rounded border border-purple-800 text-gray-300 text-sm hover:border-pink-500 transition-all shadow-lg hover:shadow-pink-500/20">
                    <div className="font-medium text-purple-400">{service.name}</div>
                    <div className="text-xs mt-1">{service.desc}</div>
                    <div className="mt-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500 bg-opacity-30 flex items-center justify-center mr-2">
                        <span className="text-xs text-white">🤖</span>
                      </div>
                      <div>
                        <div className="text-pink-400 text-xs font-medium">{service.character}</div>
                        <div className="text-gray-400 text-xs">{service.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-purple-900 text-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-2">
                    <span className="text-pink-400 text-xs">💡</span>
                  </div>
                  <div className="text-pink-400">캐릭터 챗봇 서비스</div>
                </div>
                <p className="text-gray-300 text-xs">
                  각 서비스별 특화된 AI 캐릭터 챗봇이 24시간 안내, 예약, 추천 서비스를 제공합니다. 
                  자연스러운 대화를 통해 필요한 정보를 얻고, 실시간으로 예약과 신청을 처리할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 우리는 무엇을 하는가 섹션 */}
      <section className="relative py-24 bg-gray-950">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4 opacity-30">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-full w-px bg-pink-500"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-pink-500">우리는</span> 
            <span className="text-white">무엇을</span>
            <span className="text-cyan-400">하는가</span>
          </h2>
          
          <div className="space-y-12">
            {[
              { 
                title: 'AI 기반 콘텐츠 자동화', 
                desc: '최신 인공지능 기술을 활용하여 높은 품질의 콘텐츠를 빠르고 효율적으로 생성합니다.',
                items: ['블로그 글 자동 생성', '소셜 미디어 콘텐츠 제작', '마케팅 카피라이팅', '제품 설명서 작성']
              },
              { 
                title: '맞춤형 콘텐츠 솔루션', 
                desc: '각 기업과 브랜드의 특성에 맞는 맞춤형 콘텐츠 생성 솔루션을 제공합니다.',
                items: ['브랜드 톤앤매너 분석', '타겟 고객 맞춤 콘텐츠', '산업별 특화 콘텐츠', '다국어 지원']
              },
              {
                title: '콘텐츠 제작 대행',
                desc: '유튜브 영상, 블로그, 썸네일, SNS 콘텐츠를 사장님 대신 제작해드립니다.',
                items: ['맞춤형 콘텐츠 전략 제공', '사장님 채널에 바로 발행 가능', '유튜브 영상 제작', '블로그 포스팅', 'SNS 콘텐츠 제작', '썸네일 디자인']
              },
              {
                title: '홍보 마케팅 대행',
                desc: '콘텐츠를 활용한 유튜브, 블로그, SNS 통합 마케팅을 진행합니다.',
                items: ['통합 마케팅 패키지', '브랜드 인지도와 유입 향상', '콘텐츠 제작부터 채널 운영까지 통합 서비스', '일관된 브랜드 메시지 전달', '잠재 고객 유입 증대']
              },
              { 
                title: '콘텐츠 성과 분석', 
                desc: '생성된 콘텐츠의 성과를 분석하고 지속적인 개선을 통해 최적의 결과를 도출합니다.',
                items: ['콘텐츠 성과 측정', '데이터 기반 최적화', 'A/B 테스트', '인사이트 리포트']
              },
              {
                title: '멀티모달 통합 솔루션',
                desc: '텍스트, 이미지, 음성을 결합한 통합 콘텐츠 생성 플랫폼을 제공합니다.',
                items: ['음성-텍스트 변환', '이미지 자동 생성', '영상 콘텐츠 제작', '멀티미디어 최적화']
              },
              {
                title: '글로벌 콘텐츠 지원',
                desc: '다양한 언어와 문화에 맞춘 콘텐츠 제작 및 현지화 서비스를 제공합니다.',
                items: ['다국어 번역', '문화 컨텍스트 최적화', '글로벌 트렌드 반영', '현지화 전략 수립']
              },
              {
                title: '신기술 개발',
                desc: '최신 AI 기술을 연구하고 새로운 서비스를 위한 기술을 지속적으로 개발합니다.',
                items: ['대형 언어 모델(LLM) 연구', 'AI 모델 파인튜닝', '멀티모달 기술 개발', '특화 AI 에이전트 개발', '자연어 처리 고도화', '데이터 분석 자동화', '개인화 추천 알고리즘', '생성형 AI 연구', '메타버스 통합 기술', '실시간 3D 렌더링', '가상 아바타 연구', '온톨로지 기반 AI', '기계학습 모델 최적화']
              },
              {
                title: 'AI 자동화 시스템',
                desc: '일상적인 업무부터 복잡한 프로세스까지 AI를 활용한 자동화 시스템을 구축합니다.',
                items: ['업무 자동화 솔루션', '데이터 처리 자동화', '예약/스케줄링 시스템', '고객 응대 자동화']
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-pink-800 hover:border-cyan-500 transition-all shadow-lg shadow-pink-500/10 hover:shadow-cyan-500/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5">
                    <h3 className="text-2xl font-bold mb-4 text-pink-400">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                  <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.items.map((subitem, sidx) => (
                      <div key={sidx} className="bg-gray-800 p-4 rounded-md border border-cyan-900 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span className="text-gray-300">{subitem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 우리가 하는일 섹션 */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-2/3 bg-gradient-to-t from-cyan-500 to-transparent opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">우리가</span> 
            <span className="text-white">하는</span>
            <span className="text-pink-500">일</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500"></div>
            
            <div className="space-y-16">
              {[
                { 
                  year: '2025', 
                  title: '서비스 출시', 
                  desc: 'Autorise Insight 플랫폼의 첫 번째 버전을 출시하여 AI 기반 콘텐츠 자동화 서비스 시작'
                },
                { 
                  year: '2025', 
                  title: '기술 혁신', 
                  desc: '자연어 처리 알고리즘 개선 및 맞춤형 콘텐츠 생성 엔진 고도화'
                },
                { 
                  year: '2026', 
                  title: '전국 확장', 
                  desc: '양평구름다리 플랫폼을 전국적으로 확산하여 전국민이 서비스를 이용할 수 있도록 확대'
                },
                { 
                  year: '2026', 
                  title: '신기술 개발', 
                  desc: '멀티모달 콘텐츠 생성 기술 개발 및 음성, 이미지와 텍스트의 통합 솔루션 구축'
                },
                {
                  year: '2027',
                  title: '글로벌 진출',
                  desc: '해외 시장 진출 및 다국어 서비스 지원을 통한 글로벌 AI 콘텐츠 자동화 플랫폼으로 도약'
                },
                {
                  year: '2028',
                  title: 'AI 생태계 구축',
                  desc: '다양한 파트너사와 협력하여 AI 기반 콘텐츠 생태계 구축 및 산업 표준 수립'
                },
              ].map((item, idx) => (
                <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`inline-block mb-2 px-4 py-1 rounded-full ${idx % 2 === 0 ? 'bg-pink-500 bg-opacity-20 text-pink-400' : 'bg-cyan-500 bg-opacity-20 text-cyan-400'}`}>
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                  <div className="w-1/2 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg shadow-pink-500/30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 기능 섹션 */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-cyan-400">주요</span> 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'AI 콘텐츠 생성', desc: '최신 인공지능 기술로 고품질 콘텐츠를 자동 생성합니다.' },
              { title: '다양한 콘텐츠 형식', desc: '블로그, SNS, 광고문구 등 다양한 형식의 콘텐츠를 지원합니다.' },
              { title: '맞춤형 스타일', desc: '브랜드 톤앤매너에 맞는 일관된 콘텐츠를 제작합니다.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-pink-500 hover:border-cyan-400 transition-colors shadow-lg shadow-pink-500/10 hover:shadow-cyan-400/20">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 요금제 섹션 */}
      <section id="pricing-section" className="relative py-20 bg-gray-950">
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
                
                {/* 2. 서버 구축 및 홈페이지 제작 */}
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-pink-800 shadow-lg shadow-pink-500/10">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">2. 서버 구축 및 홈페이지 제작</h3>
                  <p className="text-gray-300 mb-4 text-sm">AI 자동화 시스템 운영에 필요한 서버와 홈페이지를 안정적으로 구축해드립니다.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">기본 서버 (100명 이하):</span>
                      <span className="text-pink-400 font-bold">₩500,000</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">중급 서버 (500명 이하):</span>
                      <span className="text-pink-400 font-bold">₩1,200,000</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">기본형 홈페이지:</span>
                      <span className="text-pink-400 font-bold">₩300,000</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">유지보수:</span>
                      <span className="text-pink-400 font-bold">₩100,000~ / 월</span>
                    </li>
                  </ul>
                  <div className="bg-gray-800 bg-opacity-50 p-3 rounded-md border border-cyan-900 text-xs">
                    <p className="text-gray-300">
                      신뢰도 높은 브랜드 이미지와 사용자 친화적인 웹사이트는 모든 디지털 사업의 출발점입니다.
                    </p>
                  </div>
                </div>
                
                {/* 3. 챗봇 개발 서비스 */}
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-cyan-800 shadow-lg shadow-cyan-500/10">
                  <h3 className="text-xl font-bold mb-3 text-pink-400">3. 챗봇 개발 서비스</h3>
                  <p className="text-gray-300 mb-4 text-sm">AI 챗봇을 통해 고객 대응, 자동화, 질의응답을 구현합니다.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">기본 챗봇:</span>
                      <span className="text-cyan-400 font-bold">₩400,000</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">중급 챗봇 (API 연동):</span>
                      <span className="text-cyan-400 font-bold">₩800,000</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">고급 챗봇 (AI 기능):</span>
                      <span className="text-cyan-400 font-bold">₩1,500,000</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-gray-300">챗봇 유지보수:</span>
                      <span className="text-pink-400 font-bold">₩150,000~ / 월</span>
                    </li>
                  </ul>
                  <div className="bg-gray-800 bg-opacity-50 p-3 rounded-md border border-pink-900 text-xs">
                    <p className="text-gray-300">
                      24시간 상담 및 안내, 반복 질문 자동화 등으로 업무 효율을 획기적으로 높일 수 있습니다.
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
      
      {/* 문의 섹션 */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-pink-500 to-transparent opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="text-cyan-400">문의</span>하기
          </h2>
          {formStatus.submitted && (
            <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-800 bg-opacity-50 border border-green-600' : 'bg-red-800 bg-opacity-50 border border-red-600'}`}>
              <p className={`text-center ${formStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                {formStatus.message}
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-pink-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">이름</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="이름을 입력하세요"
                  aria-label="이름"
                  className="w-full p-3 bg-gray-900 bg-opacity-70 rounded-md border border-pink-800 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">이메일</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  aria-label="이메일"
                  className="w-full p-3 bg-gray-900 bg-opacity-70 rounded-md border border-pink-800 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-300">메시지</label>
              <textarea 
                rows={4} 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="메시지를 입력하세요"
                aria-label="메시지"
                className="w-full p-3 bg-gray-900 bg-opacity-70 rounded-md border border-pink-800 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 rounded-md transition shadow-lg shadow-pink-500/20"
              >
                보내기
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* 푸터 */}
      <footer className="py-10 bg-gray-950 border-t border-pink-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-pink-500">Auto</span>
                <span className="text-white">rise_</span>
                <span className="text-cyan-400">Insight</span>
              </h2>
              <p className="text-gray-400 mt-2">© 2025 All rights reserved.</p>
              <p className="text-gray-400 mt-1">
                <span className="text-cyan-400">이메일:</span> speed382286@gmail.com
              </p>
              <p className="text-gray-400 mt-1">
                <span className="text-cyan-400">연락처:</span> 010-4316-3828
              </p>
            </div>
            <div className="flex space-x-6">
              {['이용약관', '개인정보처리방침', '문의'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-cyan-400 transition">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

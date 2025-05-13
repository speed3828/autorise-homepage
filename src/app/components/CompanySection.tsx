'use client';

interface CompanySectionProps {
  className?: string;
}

export default function CompanySection({ className = '' }: CompanySectionProps) {
  return (
    <section className={`relative py-24 bg-gray-950 ${className}`}>
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
  );
} 
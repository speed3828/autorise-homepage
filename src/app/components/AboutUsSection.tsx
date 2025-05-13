'use client';

interface AboutUsSectionProps {
  className?: string;
}

export default function AboutUsSection({ className = '' }: AboutUsSectionProps) {
  return (
    <section className={`relative py-24 bg-gray-900 ${className}`}>
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
        </div>
      </div>
    </section>
  );
} 
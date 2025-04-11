import React from 'react';

const CurrentProjects = () => {
  const projects = [
    {
      title: '구름다리',
      description: '클라우드 기반의 협업 플랫폼으로, 팀원들과의 원활한 소통과 프로젝트 관리를 지원합니다.',
      link: '#',
    },
    {
      title: '행정다리',
      description: '행정 업무의 디지털 전환을 위한 통합 플랫폼으로, 복잡한 행정 절차를 단순화합니다.',
      link: '#',
    },
    {
      title: '법률다리',
      description: '법률 서비스의 접근성을 높이는 플랫폼으로, 법률 상담과 문서 작성을 지원합니다.',
      link: '#',
    },
    {
      title: 'MCP',
      description: 'Multi-Cloud Platform으로, 다양한 클라우드 서비스를 통합 관리할 수 있는 솔루션입니다.',
      link: '#',
    },
  ];

  return (
    <section id="current-projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">지금 만드는 것들</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
            >
              자세히 보기
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentProjects; 
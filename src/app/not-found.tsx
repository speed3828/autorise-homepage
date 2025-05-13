import Link from 'next/link';

export const metadata = {
  title: '페이지를 찾을 수 없습니다 - Autorise Insight',
  description: '요청하신 페이지를 찾을 수 없습니다. 홈페이지로 이동하여 다른 정보를 확인해보세요.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-pink-500">4</span>
          <span className="text-white">0</span>
          <span className="text-cyan-400">4</span>
        </h1>
        <p className="text-2xl mb-8">페이지를 찾을 수 없습니다</p>
        <p className="text-gray-300 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
        >
          홈페이지로 돌아가기
        </Link>
      </div>
    </div>
  );
} 
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        {/* 로딩 스피너 */}
        <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-pink-500 border-r-cyan-400 border-transparent rounded-full animate-spin"></div>
      </div>
      <div className="mt-8 text-white text-lg font-medium">
        <span className="text-pink-500">Auto</span>
        <span className="text-white">rise_</span>
        <span className="text-cyan-400">Insight</span>
        <span className="animate-pulse ml-2">로딩 중...</span>
      </div>
    </div>
  );
} 
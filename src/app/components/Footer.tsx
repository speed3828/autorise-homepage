'use client';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`py-10 bg-gray-950 border-t border-pink-800 ${className}`}>
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
  );
} 
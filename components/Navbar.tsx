'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
                AutoRise Insight
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              회사소개
            </a>
            <a href="#services" onClick={(e) => handleClick(e, 'services')} className="text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              서비스
            </a>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              프로젝트
            </a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              문의하기
            </a>
            <li>
              <a href="/login" className="text-white hover:text-gray-300">로그인</a>
            </li>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-sky-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="block text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              회사소개
            </a>
            <a href="#services" onClick={(e) => handleClick(e, 'services')} className="block text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              서비스
            </a>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="block text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              프로젝트
            </a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="block text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">
              문의하기
            </a>
            <li>
              <a href="/login" className="block text-gray-600 hover:text-sky-500 transition-colors cursor-pointer">로그인</a>
            </li>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
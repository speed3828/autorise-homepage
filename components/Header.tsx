import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">Autorise</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#tools" className="text-gray-600 hover:text-gray-900">Tools</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
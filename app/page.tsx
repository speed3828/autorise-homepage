import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
} 
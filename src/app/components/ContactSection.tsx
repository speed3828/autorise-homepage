import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gray-200">문의</span>
          <span className="text-cyan-400">하기</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 
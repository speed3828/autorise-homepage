import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-gray-900">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-pink-500 to-transparent opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <ContactForm />
      </div>
    </section>
  );
} 
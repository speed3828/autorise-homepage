// 'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AutoRise Insight',
  description: '사람과 기술의 연결을 통해 새로운 가치를 창출하는 클라우드 기반 솔루션',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
} 
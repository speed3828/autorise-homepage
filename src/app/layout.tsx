import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Autorise Insight - AI 콘텐츠 자동화 솔루션',
  description: '최첨단 인공지능 기술로 콘텐츠 자동화, 마케팅, 서비스 운영을 지원합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script src="https://cdn.emailjs.com/dist/email.min.js" />
        <Script
          id="emailjs-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                // EmailJS 초기화
                // YOUR_PUBLIC_KEY는 실제 값으로 대체해야 합니다
                emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

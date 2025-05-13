import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autorise Insight - AI 기반 콘텐츠 자동화 솔루션",
  description: "최신 인공지능 기술을 활용한 콘텐츠 자동화, 맞춤형 콘텐츠 솔루션, 콘텐츠 제작 대행 서비스를 제공합니다. 블로그, SNS, 광고문구 등 다양한 콘텐츠 형식을 지원합니다.",
  keywords: [
    "AI 콘텐츠", 
    "콘텐츠 자동화", 
    "맞춤형 콘텐츠", 
    "콘텐츠 제작 대행", 
    "인공지능 콘텐츠", 
    "블로그 작성", 
    "SNS 콘텐츠", 
    "마케팅 자동화", 
    "콘텐츠 마케팅",
    "홍보 마케팅 대행",
    "유튜브 콘텐츠 제작",
    "AI 마케팅",
    "자동화 솔루션"
  ],
  authors: [{ name: "Autorise" }],
  creator: "Autorise",
  publisher: "Autorise",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.autorise.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Autorise Insight - AI 기반 콘텐츠 자동화 솔루션",
    description: "최신 인공지능 기술을 활용한 콘텐츠 자동화, 맞춤형 콘텐츠 솔루션, 콘텐츠 제작 대행 서비스를 제공합니다.",
    url: "https://www.autorise.ai",
    siteName: "Autorise Insight",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/autorise-og-image.png",
        width: 1200,
        height: 630,
        alt: "Autorise Insight"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Autorise Insight - AI 기반 콘텐츠 자동화 솔루션",
    description: "최신 인공지능 기술을 활용한 콘텐츠 자동화, 맞춤형 콘텐츠 솔루션, 콘텐츠 제작 대행 서비스를 제공합니다.",
    creator: "@autorise",
    card: "summary_large_image",
    images: ["/images/autorise-og-image.png"]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png" }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 네이버 서치어드바이저 인증 - 네이버 웹마스터 도구에서 발급받은 코드로 교체하세요 */}
        <meta name="naver-site-verification" content="네이버 사이트 인증 코드" />
        
        {/* 구글 서치 콘솔 인증 - 구글 서치 콘솔에서 발급받은 코드로 교체하세요 */}
        <meta name="google-site-verification" content="구글 사이트 인증 코드" />
        
        {/* 소셜 미디어 공유 이미지 */}
        <meta property="og:image" content="/images/autorise-og-image.png" />
        
        {/* 사이트맵 연결 */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        <PageTransition />
        {children}
      </body>
    </html>
  );
}

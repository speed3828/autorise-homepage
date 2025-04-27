# Autorise Insight

AI 기반 콘텐츠 자동화 및 운영 서비스 홈페이지 프로젝트입니다.

## 프로젝트 설정

### 시스템 요구사항

- Node.js 16.0.0 이상
- npm 7.0.0 이상 또는 yarn 1.22.0 이상

### 설치 방법

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버 실행 (http://localhost:3100)
npm run dev
# 또는
yarn dev
```

### 환경 변수 설정

`.env.local` 파일을 프로젝트 루트 디렉토리에 생성하고 다음 변수를 설정합니다:

```env
# EmailJS 설정
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_autorise
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_inquiry

# NHN Cloud SMS API 설정
NEXT_PUBLIC_SMS_API_KEY=YOUR_SMS_API_KEY
NEXT_PUBLIC_SMS_API_SECRET=YOUR_SMS_API_SECRET
NEXT_PUBLIC_SMS_SENDING_NUMBER=발신번호
NEXT_PUBLIC_SMS_API_URL=https://api-sms.cloud.toast.com/sms/v3.0/appKeys/{appKey}/sender/sms

# 수신자 정보
NEXT_PUBLIC_RECIPIENT_EMAIL=YOUR_EMAIL@example.com
NEXT_PUBLIC_RECIPIENT_PHONE=YOUR_PHONE_NUMBER

# 배포 환경 설정
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## 정적 웹사이트 빌드 및 배포

### 정적 빌드 생성

```bash
# 정적 웹사이트 빌드
npm run build
# 또는
yarn build
```

빌드가 완료되면 `out` 디렉토리에 정적 파일이 생성됩니다.

### 정적 서버 실행

```bash
# 정적 서버 실행 (http://localhost:3100)
npm run static-server
# 또는
yarn static-server
```

### 배포 방법

1. 정적 파일 배포 (호스팅 서비스)

   생성된 `out` 디렉토리의 파일을 Vercel, Netlify, GitHub Pages 등의 정적 호스팅 서비스에 업로드합니다.

2. 서버 배포

   웹 서버(Nginx, Apache)에 배포하는 경우 정적 파일을 웹 서버 디렉토리에 복사합니다.

   ```bash
   # 예: Nginx 서버에 배포
   npm run build
   cp -r out/* /var/www/html/
   ```

## 주요 스크립트

- `npm run dev`: 개발 서버 실행 (3100 포트)
- `npm run build`: 정적 웹사이트 빌드
- `npm run static`: 빌드 후 serve 패키지로 정적 파일 제공
- `npm run static-server`: 커스텀 Node.js 서버로 정적 파일 제공
- `npm run export`: Next.js 정적 내보내기 (이전 버전 호환용)

## 주의사항

1. 환경 변수 관리
   - API 키 등의 민감한 정보는 `.env.local` 파일에 저장하고 Git에 커밋하지 마세요.
   - 배포 시 환경 변수를 올바르게 설정했는지 확인하세요.

2. 정적 서버 설정
   - 운영 환경에서는 Node.js 정적 서버 대신 Nginx 등의 웹 서버 사용을 권장합니다.
   - HTTPS 설정을 통해 보안을 강화하세요.

## 개발자 문의

개발 관련 문의: [speed382286@gmail.com](mailto:speed382286@gmail.com)

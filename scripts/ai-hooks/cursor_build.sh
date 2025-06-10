#!/bin/bash
# Cursor AI Build Script
# AutoRise Homepage - 기본 빌드 및 포트 관리

echo "🔧 [CURSOR] AutoRise Homepage 빌드 시작..."

# 1. 포트 3100 확인
echo "📡 포트 3100 확인 중..."
if lsof -Pi :3100 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  포트 3100이 사용 중입니다. 프로세스를 종료합니다."
    lsof -ti:3100 | xargs kill -9
    sleep 2
fi

# 2. 의존성 설치
echo "📦 의존성 설치 중..."
npm install

# 3. TypeScript 타입 체크
echo "🔍 TypeScript 타입 체크..."
npx tsc --noEmit

# 4. Next.js 빌드 테스트
echo "🏗️  Next.js 빌드 테스트..."
npm run build

# 5. 개발 서버 시작 (백그라운드)
echo "🚀 개발 서버 시작 (포트 3100)..."
npm run dev &

# 서버 시작 대기
sleep 5

# 6. 서버 응답 확인
echo "🏥 서버 상태 확인..."
if curl -s http://localhost:3100 > /dev/null; then
    echo "✅ 서버가 정상적으로 실행 중입니다."
    echo "🌐 http://localhost:3100 에서 확인하세요."
else
    echo "❌ 서버 시작에 실패했습니다."
    exit 1
fi

# 7. GPT 품질 검토 요청
echo "📋 GPT 품질 검토 요청..."
echo "[CURSOR 작업 완료]"
echo "- 작업 내용: Next.js 빌드 및 서버 시작"
echo "- 포트 상태: 3100 확인됨"
echo "- 서버 상태: 정상 실행"
echo "- GPT 검토 요청: 빌드 품질 및 표준 준수 확인"

echo "🎉 Cursor 빌드 스크립트 완료!" 
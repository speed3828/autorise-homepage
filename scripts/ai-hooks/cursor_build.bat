@echo off
REM Cursor AI Build Script for Windows
REM AutoRise Homepage - 기본 빌드 및 포트 관리

echo 🔧 [CURSOR] AutoRise Homepage 빌드 시작...

REM 1. 포트 3100 확인 및 종료
echo 📡 포트 3100 확인 중...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3100') do (
    echo ⚠️  포트 3100이 사용 중입니다. 프로세스를 종료합니다.
    taskkill /f /pid %%a >nul 2>&1
)
timeout /t 2 /nobreak >nul

REM 2. 의존성 설치
echo 📦 의존성 설치 중...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 의존성 설치 실패
    exit /b 1
)

REM 3. TypeScript 타입 체크
echo 🔍 TypeScript 타입 체크...
call npx tsc --noEmit
if %errorlevel% neq 0 (
    echo ⚠️  TypeScript 타입 오류 발견
)

REM 4. Next.js 빌드 테스트
echo 🏗️  Next.js 빌드 테스트...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 빌드 실패
    exit /b 1
)

REM 5. 개발 서버 시작 (백그라운드)
echo 🚀 개발 서버 시작 (포트 3100)...
start /b npm run dev

REM 서버 시작 대기
timeout /t 5 /nobreak >nul

REM 6. 서버 응답 확인
echo 🏥 서버 상태 확인...
curl -s http://localhost:3100 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 서버가 정상적으로 실행 중입니다.
    echo 🌐 http://localhost:3100 에서 확인하세요.
) else (
    echo ❌ 서버 시작에 실패했습니다.
    exit /b 1
)

REM 7. GPT 품질 검토 요청
echo 📋 GPT 품질 검토 요청...
echo [CURSOR 작업 완료]
echo - 작업 내용: Next.js 빌드 및 서버 시작
echo - 포트 상태: 3100 확인됨
echo - 서버 상태: 정상 실행
echo - GPT 검토 요청: 빌드 품질 및 표준 준수 확인

echo 🎉 Cursor 빌드 스크립트 완료!
pause 
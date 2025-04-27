const { execSync, spawn } = require("child_process");

// 1) 실행 중인 프로세스 확인
console.log("🔍 시스템 진단 시작...");
console.log("🧹 포트 3100 정리 중...");

try {
  execSync("powershell -Command \"Get-Process -Id (Get-NetTCPConnection -LocalPort 3100 -ErrorAction SilentlyContinue).OwningProcess -ErrorAction SilentlyContinue | Stop-Process -Force\"");
  console.log("✅ 포트 3100 정리 완료");
} catch (e) {
  console.log("ℹ️ 사용 중인 포트 없음");
}

// 2) 네트워크 인터페이스 확인
console.log("🌐 네트워크 인터페이스 점검 중...");
try {
  const interfaces = execSync("ipconfig", { encoding: "utf-8" });
  console.log("네트워크 정상");
} catch (e) {
  console.error("❌ 네트워크 인터페이스 오류:", e.message);
}

// 3) 파일 시스템 확인
console.log("📂 Next.js 설치 확인 중...");
try {
  execSync("dir node_modules\\next", { encoding: "utf-8" });
  console.log("✅ Next.js 설치 확인됨");
} catch (e) {
  console.error("❌ Next.js 설치 오류:", e.message);
}

// 4) 서버 실행
console.log("🚀 서버 실행 중...");
try {
  execSync("npx next dev -p 3100", { stdio: "inherit" });
} catch (e) {
  console.error("❌ 서버 실행 실패:", e.message);
} 
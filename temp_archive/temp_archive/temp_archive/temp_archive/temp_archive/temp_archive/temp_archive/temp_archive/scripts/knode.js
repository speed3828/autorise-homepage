import { execSync } from "child_process";
try {
  execSync("powershell -Command \"Get-Process | Where-Object {$_.MainWindowTitle -match 'node' -or $_.ProcessName -match 'node'} | ForEach-Object { try { $_.Kill() } catch {} }\"");
  console.log("✅ Node 프로세스 종료 시도");
} catch (e) { 
  console.log("ℹ️ 프로세스 종료 중 오류:", e.message);
} 
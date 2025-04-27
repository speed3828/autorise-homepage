const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 정적 파일을 제공할 디렉토리
const OUT_DIR = path.join(__dirname, '..', 'out');

// MIME 타입 매핑
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

// 서버 포트
const PORT = 3100;

// 서버 생성
const server = http.createServer((req, res) => {
  console.log(`요청: ${req.url}`);
  
  // URL 경로 정규화
  let filePath = path.join(OUT_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // URL이 디렉토리로 끝나면 index.html 추가
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // 파일 확장자 확인
  const extname = path.extname(filePath);
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // 파일 존재 확인 및 제공
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // 파일이 없으면 404.html 제공
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(OUT_DIR, '404.html'), (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end('500 Internal Server Error');
            return;
          }
          
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // 서버 오류
        res.writeHead(500);
        res.end(`서버 오류: ${err.code}`);
      }
      return;
    }
    
    // 정상 파일 응답
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  });
});

// out 디렉토리가 없으면 빌드 실행
if (!fs.existsSync(OUT_DIR)) {
  console.log('정적 파일이 없습니다. 빌드를 실행합니다...');
  try {
    execSync('npx next build', { stdio: 'inherit' });
    console.log('빌드 완료!');
  } catch (error) {
    console.error('빌드 실패:', error);
    process.exit(1);
  }
}

// 서버 시작
server.listen(PORT, () => {
  console.log(`정적 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
  console.log(`정적 파일 위치: ${OUT_DIR}`);
});

// 프로세스 종료 처리
process.on('SIGINT', () => {
  console.log('서버를 종료합니다...');
  server.close(() => {
    console.log('서버가 종료되었습니다');
    process.exit(0);
  });
}); 
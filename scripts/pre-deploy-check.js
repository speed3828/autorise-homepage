/**
 * 배포 전 체크 스크립트
 * 
 * 이 스크립트는 배포 전에 다음 항목을 확인합니다:
 * 1. 컴파일 오류 확인
 * 2. 중요 파일 존재 확인
 * 3. 콘솔 로그 및 주석 체크
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

console.log(`${colors.bold}${colors.blue}===== 배포 전 체크 스크립트 =====\n${colors.reset}`);

// 1. TypeScript 컴파일 확인
try {
  console.log(`${colors.bold}1. TypeScript 컴파일 확인 중...${colors.reset}`);
  execSync('tsc --noEmit', { stdio: 'inherit' });
  console.log(`${colors.green}✓ TypeScript 컴파일 성공${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ TypeScript 컴파일 오류가 있습니다. 위 메시지를 확인해주세요.${colors.reset}\n`);
  process.exit(1);
}

// 2. 중요 파일 존재 확인
const requiredFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'public/favicon.ico',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/images/autorise-og-image.png'
];

console.log(`${colors.bold}2. 중요 파일 존재 확인 중...${colors.reset}`);
const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(ROOT_DIR, file)));

if (missingFiles.length === 0) {
  console.log(`${colors.green}✓ 모든 중요 파일이 존재합니다.${colors.reset}\n`);
} else {
  console.error(`${colors.red}✗ 다음 파일이 누락되었습니다:${colors.reset}`);
  missingFiles.forEach(file => console.error(`  - ${file}`));
  console.log();
  process.exit(1);
}

// 3. 콘솔 로그 및 TODO 주석 확인
console.log(`${colors.bold}3. 콘솔 로그 및 TODO 주석 확인 중...${colors.reset}`);

// 검사할 파일 확장자
const extensions = ['.ts', '.tsx', '.js', '.jsx'];

// 콘솔 로그 및 TODO 주석 패턴
const patterns = [
  { regex: /console\.log\(/g, name: 'console.log', type: 'warning' },
  { regex: /console\.debug\(/g, name: 'console.debug', type: 'warning' },
  { regex: /TODO:/g, name: 'TODO 주석', type: 'warning' },
  { regex: /FIXME:/g, name: 'FIXME 주석', type: 'warning' },
];

const results = {
  warnings: [],
  errors: []
};

// 재귀적으로 디렉토리 순회하여 파일 검사
function traverseDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
      traverseDirectory(fullPath);
    } else if (file.isFile() && extensions.includes(path.extname(file.name))) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      for (const pattern of patterns) {
        const matches = content.match(pattern.regex);
        if (matches) {
          const result = {
            file: path.relative(ROOT_DIR, fullPath),
            pattern: pattern.name,
            count: matches.length
          };
          
          if (pattern.type === 'warning') {
            results.warnings.push(result);
          } else {
            results.errors.push(result);
          }
        }
      }
    }
  }
}

traverseDirectory(SRC_DIR);

// 결과 출력
if (results.warnings.length > 0) {
  console.log(`${colors.yellow}! 다음 항목이 발견되었습니다 (배포 전 확인 필요):${colors.reset}`);
  results.warnings.forEach(({ file, pattern, count }) => {
    console.log(`  - ${file}: ${pattern} (${count}개)`);
  });
  console.log();
} else {
  console.log(`${colors.green}✓ 콘솔 로그 및 TODO 주석이 발견되지 않았습니다.${colors.reset}\n`);
}

if (results.errors.length > 0) {
  console.error(`${colors.red}✗ 다음 오류가 발견되었습니다:${colors.reset}`);
  results.errors.forEach(({ file, pattern, count }) => {
    console.error(`  - ${file}: ${pattern} (${count}개)`);
  });
  console.log();
  process.exit(1);
}

// 모든 검사 통과
console.log(`${colors.bold}${colors.green}✓ 모든 검사를 통과했습니다. 배포를 진행해도 좋습니다!${colors.reset}`); 
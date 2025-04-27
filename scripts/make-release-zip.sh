#!/bin/bash

# 현재 날짜와 시간을 포맷팅
DATE=$(date +%Y%m%d%H%M)
RELEASE_NAME="autorise-release-$DATE"
RELEASE_FILE="./releases/$RELEASE_NAME.zip"

# releases 디렉토리가 없으면 생성
mkdir -p ./releases

# out 디렉토리가 없으면 빌드 실행
if [ ! -d "./out" ]; then
  echo "정적 파일이 없습니다. 빌드를 실행합니다..."
  npm run build
fi

# ZIP 파일 생성
echo "릴리스 파일을 생성합니다: $RELEASE_FILE"
zip -r "$RELEASE_FILE" out/ package.json next.config.mjs vercel.json README.md

# 완료 메시지
echo "릴리스 파일이 생성되었습니다: $RELEASE_FILE"

#!/bin/bash
# GPT AI Code Review Script
# AutoRise Homepage - 품질 검토 및 표준 준수 확인

echo "🔍 [GPT] AutoRise Homepage 품질 검토 시작..."

# 검토 결과 파일
REVIEW_FILE="review_report_$(date +%Y%m%d_%H%M%S).md"

echo "# GPT 품질 검토 결과" > $REVIEW_FILE
echo "생성일시: $(date)" >> $REVIEW_FILE
echo "" >> $REVIEW_FILE

# 1. 포트 설정 검증
echo "📡 포트 설정 검증 중..."
echo "## 1. 포트 설정 검증" >> $REVIEW_FILE

if grep -q "3100" package.json; then
    echo "✅ package.json 포트 3100 확인됨" >> $REVIEW_FILE
    PORT_CHECK="PASS"
else
    echo "❌ package.json 포트 설정 오류" >> $REVIEW_FILE
    PORT_CHECK="FAIL"
fi

# 2. TypeScript 설정 검사
echo "🔍 TypeScript 설정 검사..."
echo "## 2. TypeScript 설정" >> $REVIEW_FILE

if [ -f "tsconfig.json" ]; then
    echo "✅ tsconfig.json 존재함" >> $REVIEW_FILE
    if npx tsc --noEmit; then
        echo "✅ TypeScript 컴파일 성공" >> $REVIEW_FILE
        TS_CHECK="PASS"
    else
        echo "❌ TypeScript 컴파일 오류" >> $REVIEW_FILE
        TS_CHECK="FAIL"
    fi
else
    echo "❌ tsconfig.json 파일 없음" >> $REVIEW_FILE
    TS_CHECK="FAIL"
fi

# 3. Next.js 설정 검사
echo "⚙️  Next.js 설정 검사..."
echo "## 3. Next.js 설정" >> $REVIEW_FILE

if [ -f "next.config.mjs" ]; then
    echo "✅ next.config.mjs 존재함" >> $REVIEW_FILE
    NEXTJS_CHECK="PASS"
else
    echo "❌ next.config.mjs 파일 없음" >> $REVIEW_FILE
    NEXTJS_CHECK="FAIL"
fi

# 4. 핵심 컴포넌트 검사
echo "🧩 핵심 컴포넌트 검사..."
echo "## 4. 핵심 컴포넌트" >> $REVIEW_FILE

CORE_COMPONENTS=("src/app/page.tsx" "src/app/layout.tsx")
for component in "${CORE_COMPONENTS[@]}"; do
    if [ -f "$component" ]; then
        echo "✅ $component 존재함" >> $REVIEW_FILE
    else
        echo "❌ $component 파일 없음" >> $REVIEW_FILE
    fi
done

# 5. 빌드 테스트
echo "🏗️  빌드 테스트..."
echo "## 5. 빌드 테스트" >> $REVIEW_FILE

if npm run build; then
    echo "✅ Next.js 빌드 성공" >> $REVIEW_FILE
    BUILD_CHECK="PASS"
else
    echo "❌ Next.js 빌드 실패" >> $REVIEW_FILE
    BUILD_CHECK="FAIL"
fi

# 6. 종합 평가
echo "📊 종합 평가..."
echo "## 6. 종합 평가" >> $REVIEW_FILE

TOTAL_SCORE=0
MAX_SCORE=4

[ "$PORT_CHECK" = "PASS" ] && ((TOTAL_SCORE++))
[ "$TS_CHECK" = "PASS" ] && ((TOTAL_SCORE++))
[ "$NEXTJS_CHECK" = "PASS" ] && ((TOTAL_SCORE++))  
[ "$BUILD_CHECK" = "PASS" ] && ((TOTAL_SCORE++))

PERCENTAGE=$((TOTAL_SCORE * 100 / MAX_SCORE))

if [ $PERCENTAGE -ge 90 ]; then
    GRADE="A"
    RECOMMENDATION="✅ 즉시 승인 - Claude 리팩토링 권장"
elif [ $PERCENTAGE -ge 70 ]; then
    GRADE="B"
    RECOMMENDATION="⚠️  조건부 승인 - 개선 후 재검토"
elif [ $PERCENTAGE -ge 50 ]; then
    GRADE="C"
    RECOMMENDATION="🔄 수정 후 재검토 필요"
else
    GRADE="F"
    RECOMMENDATION="❌ 전면 재작업 필요"
fi

echo "### 최종 평가" >> $REVIEW_FILE
echo "- 점수: $TOTAL_SCORE/$MAX_SCORE ($PERCENTAGE%)" >> $REVIEW_FILE
echo "- 등급: $GRADE" >> $REVIEW_FILE
echo "- 권장사항: $RECOMMENDATION" >> $REVIEW_FILE

# 7. Claude 리팩토링 요청
if [ "$GRADE" = "A" ] || [ "$GRADE" = "B" ]; then
    echo "" >> $REVIEW_FILE
    echo "## 7. Claude 리팩토링 요청" >> $REVIEW_FILE
    echo "- 성능 최적화 필요" >> $REVIEW_FILE
    echo "- 코드 구조 개선" >> $REVIEW_FILE
    echo "- 컴포넌트 분리 검토" >> $REVIEW_FILE
    echo "- 접근성 향상" >> $REVIEW_FILE
fi

echo "📋 검토 완료! 결과: $REVIEW_FILE"
echo ""
echo "[GPT 품질 검토 결과]"
echo "종합 평가: $GRADE ($PERCENTAGE%)"
echo "권장사항: $RECOMMENDATION"

# Claude에게 전달
if [ "$GRADE" = "A" ] || [ "$GRADE" = "B" ]; then
    echo "🔧 Claude 리팩토링 요청을 전송합니다..."
    # Claude 스크립트 호출 또는 알림
fi 
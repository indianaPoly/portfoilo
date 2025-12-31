# 포트폴리오

Next.js (app router)로 구성된 미니 포트폴리오입니다. Lenis로 부드러운 스크롤을 적용했고, Framer Motion으로 섹션 전환을 살렸습니다. 기본 UI는 Chakra UI로 구성해 토큰과 레이아웃을 일관되게 관리합니다.

## 사용 기술
- Next.js 14 (Next.js 16 대비 구조)
- TypeScript
- Lenis, Framer Motion
- Chakra UI (app router 대응 next-js 패키지 포함)

## 실행
1. 패키지 설치: `npm install`
2. 개발 서버: `npm run dev`
3. 빌드: `npm run build`

두 개의 페이지로 구성되어 있습니다.
- `/`: 포트폴리오 메인 (히어로, 프로젝트, 소개, 연락)
- `/blog`: 블로그 스타일 글 페이지

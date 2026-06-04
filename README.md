# 포트폴리오

Next.js App Router 기반 개인 포트폴리오입니다. 프로젝트, 소개, 블로그, PDF 다운로드 이력서/포트폴리오를 제공합니다.

## 사용 기술

- Next.js 16 / React 19
- TypeScript 6
- Chakra UI 3
- Lenis, Framer Motion
- MDX(`next-mdx-remote`), Shiki
- `@react-pdf/renderer` PDF 생성
- Bun 1.3+

## 실행

```bash
bun install
bun run dev
```

## 검증

```bash
bun run format:check
bun run lint
bun run typecheck
bun run test
bun run build
```

전체 검증은 다음 명령으로 실행합니다.

```bash
bun run check
```

## 주요 라우트

- `/`: 메인 랜딩 페이지
- `/about`: 소개/타임라인
- `/portfolio`: 프로젝트 목록
- `/blog`: 블로그 목록
- `/blog/[slug]`: 블로그 상세
- `/downloads/resume`: 이력서 PDF 다운로드
- `/downloads/portfolio`: 프로젝트 포트폴리오 PDF 다운로드

## 구조

- `app/`: Next.js App Router 라우트
- `components/`: 레이아웃/페이지 컴포넌트
- `content/`: 블로그 MDX 콘텐츠
- `data/`: 사이트/프로필/포트폴리오 데이터
- `lib/`: Markdown, PDF, SEO, 테마 등 도메인 유틸리티
- `eslint-plugin-require-export/`, `eslint-rules/`: 로컬 ESLint 규칙

# Poly Journal Portfolio

Next.js App Router 기반 개인 포트폴리오이자 기술 블로그입니다. 프로젝트 소개, 자기소개/타임라인, MDX 블로그, PDF 이력서/포트폴리오 다운로드, SEO 메타데이터를 한 저장소에서 관리합니다.

## 기술 스택

- **Framework**: Next.js 16, React 19
- **Language**: TypeScript 6
- **Package manager**: Bun 1.3+
- **UI**: Chakra UI 3, Emotion
- **Motion/scroll**: Framer Motion, Lenis
- **Content**: MDX(`next-mdx-remote`), Shiki syntax highlighting
- **PDF**: `@react-pdf/renderer`
- **Quality gate**: ESLint flat config, Prettier, Bun test, TypeScript typecheck

## 요구 환경

- Node.js `>=20.9.0`
- Bun `>=1.3.12`

## 시작하기

```bash
bun install
bun run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 스크립트

| 명령어                 | 설명                                           |
| ---------------------- | ---------------------------------------------- |
| `bun run dev`          | 개발 서버 실행                                 |
| `bun run build`        | 프로덕션 빌드                                  |
| `bun run start`        | 빌드 결과 실행                                 |
| `bun run format`       | Prettier 포맷 적용                             |
| `bun run format:check` | 포맷 검증                                      |
| `bun run lint`         | ESLint flat config 기반 린트                   |
| `bun run typecheck`    | TypeScript 타입 검사                           |
| `bun run test`         | Bun 테스트 실행                                |
| `bun run check`        | format, lint, typecheck, test, build 전체 검증 |

## 주요 라우트

| 라우트                 | 설명                                   |
| ---------------------- | -------------------------------------- |
| `/`                    | 메인 랜딩 페이지                       |
| `/about`               | 소개, 경력/활동 타임라인               |
| `/portfolio`           | 프로젝트 목록과 카테고리 필터          |
| `/blog`                | 블로그 글 목록과 카테고리/페이지네이션 |
| `/blog/[slug]`         | MDX 블로그 상세 페이지                 |
| `/downloads/resume`    | 이력서 PDF 다운로드                    |
| `/downloads/portfolio` | 프로젝트 포트폴리오 PDF 다운로드       |
| `/robots.txt`          | 검색 엔진 크롤링 설정                  |
| `/sitemap.xml`         | 사이트맵                               |

## 디렉터리 구조

```text
app/                         Next.js App Router 라우트
components/                  공통/레이아웃/페이지 컴포넌트
components/pages/portfolio/  포트폴리오 카드와 카테고리 탭
content/blog/                MDX 블로그 콘텐츠
data/                        사이트, 소개, 포트폴리오, 메타데이터
lib/                         Markdown, MDX table, PDF, SEO, theme 유틸리티
eslint-plugin-require-export/ 로컬 ESLint 플러그인
eslint-rules/                로컬 ESLint 규칙
```

## 콘텐츠 관리

### 블로그

블로그 글은 `content/blog/*.mdx`에 작성합니다. 글 목록, 카테고리, 이전/다음 글 탐색은 `lib/posts.ts`에서 처리합니다.

### 포트폴리오

프로젝트 데이터는 `data/portfolioContent.ts`에서 관리합니다. `/portfolio` 페이지는 `components/pages/portfolio/ProjectCard.tsx`와 `ProjectCategoryTabs.tsx`를 사용해 렌더링합니다.

### PDF 다운로드

이력서와 프로젝트 포트폴리오 PDF는 `lib/pdfDocuments.tsx`에서 생성하며, 다운로드 라우트는 Node runtime을 사용합니다.

- `/downloads/resume`
- `/downloads/portfolio`

## SEO와 검색 등록

공통 메타데이터는 `data/siteMetadata.ts`에서 관리합니다.

현재 포함된 항목:

- Open Graph / Twitter card
- canonical URL
- robots / googlebot 설정
- icon metadata
- Naver Search Advisor verification

Naver Search Advisor 인증 메타는 Next.js Metadata API의 `verification.other`로 설정되어 빌드 결과에 다음 형태로 렌더링됩니다.

```html
<meta
  name="naver-site-verification"
  content="84641f3eb4fb0be44c11736cc5a1f1934b20a14d"
/>
```

## 품질 기준

변경 후에는 최소한 다음 명령을 통과해야 합니다.

```bash
bun run check
```

이 명령은 포맷, 린트, 타입 검사, 테스트, 프로덕션 빌드를 모두 실행합니다.

## 마이그레이션 메모

이 프로젝트는 Next.js 16 / React 19 / Chakra UI 3 기준으로 정리되어 있습니다. Next.js 16의 async `params`/`searchParams`, ESLint flat config, Chakra UI 3 provider/theme API를 전제로 합니다.

ESLint 10은 현재 Next/React ESLint 플러그인 호환성 문제로 보류하고 `eslint@9` 라인을 사용합니다. ESLint 10으로 올릴 때는 `bun run check` 전체 통과 여부를 먼저 확인해야 합니다.

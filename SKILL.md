# ESLint 설정 가이드라인

이 문서는 Next.js + TypeScript 프로젝트에서 ESLint를 올바르게 설정하는 방법을 설명합니다.

## 목차

1. [필수 패키지 설치](#필수-패키지-설치)
2. [ESLint 설정 파일 구성](#eslint-설정-파일-구성)
3. [Prettier 통합](#prettier-통합)
4. [VSCode/Cursor 설정](#vscodecursor-설정)
5. [주요 규칙 설명](#주요-규칙-설명)
6. [문제 해결](#문제-해결)

---

## 필수 패키지 설치

### 1. 기본 ESLint 패키지

```bash
# bun 사용 시
bun add -d eslint eslint-config-next

# npm 사용 시
npm install -D eslint eslint-config-next
```

### 2. TypeScript 지원

```bash
bun add -d @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 3. Prettier 통합 (선택사항이지만 권장)

```bash
bun add -d prettier eslint-config-prettier eslint-plugin-prettier
```

**패키지 설명:**

- `eslint-config-prettier`: ESLint와 Prettier 간의 충돌 방지
- `eslint-plugin-prettier`: Prettier 포맷팅 문제를 ESLint 경고로 표시

### 4. Import 관리 (권장)

```bash
bun add -d eslint-plugin-import eslint-import-resolver-typescript
```

**패키지 설명:**

- `eslint-plugin-import`: import 문 검증 및 정렬 규칙 제공
- `eslint-import-resolver-typescript`: TypeScript path alias (`@/*`) 지원

### 5. 사용하지 않는 Import 자동 삭제 (권장)

```bash
bun add -d eslint-plugin-unused-imports
```

**패키지 설명:**

- `eslint-plugin-unused-imports`: 사용하지 않는 import를 자동으로 감지하고 삭제
- 저장 시 자동으로 정리되어 코드 품질 향상

### 6. Export 이름과 파일명 일치 강제 (권장)

```bash
bun add -d eslint-plugin-filename-export
```

**패키지 설명:**

- `eslint-plugin-filename-export`: export 이름이 파일명과 일치하도록 강제
- `page.tsx`, `layout.tsx`를 제외한 모든 `.tsx` 파일에 적용
- 코드 일관성 및 가독성 향상

---

## ESLint 설정 파일 구성

### `.eslintrc.json` 기본 구조

```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["./tsconfig.json"]
  },
  "plugins": ["import", "unused-imports"],
  "rules": {
    "no-console": "warn",
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "next/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react", "next"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/no-duplicates": "warn",
    "import/no-unresolved": "error",
    "import/no-relative-packages": "warn",
    "import/no-relative-parent-imports": "warn"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./tsconfig.json"
      }
    }
  }
}
```

### 설정 항목 설명

#### 1. `extends`

확장할 설정 목록을 지정합니다.

- **`next/core-web-vitals`**: Next.js의 권장 ESLint 설정
  - React Hooks 규칙
  - Next.js 특화 규칙
  - Core Web Vitals 관련 규칙
  - ⚠️ **주의**: `no-console` 규칙은 기본적으로 포함되지 않음

- **`plugin:prettier/recommended`**: Prettier 통합 설정
  - `eslint-config-prettier` 포함 (충돌 방지)
  - `eslint-plugin-prettier` 활성화

#### 2. `parser`

TypeScript 파일을 파싱하기 위한 파서를 지정합니다.

```json
"parser": "@typescript-eslint/parser"
```

#### 3. `parserOptions`

TypeScript 프로젝트 설정 파일을 지정합니다.

```json
"parserOptions": {
  "project": ["./tsconfig.json"]
}
```

#### 4. `rules`

추가 규칙을 정의합니다.

**자주 사용하는 규칙:**

```json
{
  "rules": {
    // console 사용 시 경고
    "no-console": "warn",

    // Prettier 포맷팅 문제를 에러로 표시 (탭 사이즈, 줄 길이 등 강제)
    "prettier/prettier": "error",

    // 사용하지 않는 변수 경고
    "@typescript-eslint/no-unused-vars": "warn",

    // any 타입 사용 경고
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

**규칙 레벨:**

- `"off"` 또는 `0`: 규칙 비활성화
- `"warn"` 또는 `1`: 경고 (빌드 실패하지 않음)
- `"error"` 또는 `2`: 에러 (빌드 실패)

#### 5. `settings`

ESLint 플러그인 설정을 지정합니다.

```json
{
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

---

## Prettier 통합

### 1. Prettier 설정 파일 (`.prettierrc.json`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### 2. Prettier 무시 파일 (`.prettierignore`)

```
node_modules
.next
out
build
dist
*.lock
.env*
```

### 3. package.json 스크립트 추가

```json
{
  "scripts": {
    "lint": "next lint",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## VSCode/Cursor 설정

### 1. 확장 프로그램 설치

필수 확장 프로그램:

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **Error Lens** (`usernamehw.errorlens`) - 선택사항이지만 강력히 권장

### 2. `.vscode/settings.json` 설정

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.packageManager": "bun",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.formatDocument": "always"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 3. `.vscode/extensions.json` (팀 공유용)

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "usernamehw.errorlens",
    "esbenp.prettier-vscode"
  ]
}
```

### 설정 항목 설명

- **`eslint.enable`**: ESLint 확장 프로그램 활성화
- **`eslint.validate`**: ESLint가 검사할 파일 타입
- **`eslint.packageManager`**: 사용하는 패키지 매니저 지정 (`bun`, `npm`, `yarn`, `pnpm`)
- **`editor.formatOnSave`**: 저장 시 자동 포맷팅
- **`editor.codeActionsOnSave`**: 저장 시 자동 수정 활성화
- **`editor.defaultFormatter`**: 기본 포맷터 지정
- **`editor.tabSize`**: 탭 사이즈 설정 (2로 설정하여 Prettier와 일치)
- **`editor.insertSpaces`**: 스페이스 사용 (탭 대신)
- **`editor.detectIndentation`**: 자동 들여쓰기 감지 비활성화 (Prettier 설정 강제)

---

## 주요 규칙 설명

### 1. `no-console`

프로덕션 코드에서 `console` 사용을 방지합니다.

```json
{
  "rules": {
    "no-console": "warn"
  }
}
```

**특정 console 메서드만 허용:**

```json
{
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
}
```

### 2. `prettier/prettier`

Prettier 포맷팅 규칙 위반을 ESLint 에러로 표시합니다. 탭 사이즈, 줄 길이, 따옴표 등 모든 포맷팅 규칙을 강제합니다.

```json
{
  "rules": {
    "prettier/prettier": "error"
  }
}
```

**설정 설명:**

- `"error"`로 설정하면 Prettier 규칙 위반 시 빌드가 실패합니다
- 저장 시 `source.fixAll.eslint`가 활성화되어 있으면 자동으로 수정됩니다
- `.prettierrc.json`에서 `tabWidth: 2`, `printWidth: 80` 등의 규칙을 설정할 수 있습니다

**주요 Prettier 설정:**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

**설정 항목:**

- `tabWidth: 2`: 탭 사이즈를 2칸으로 설정 (2가 아니면 에러 발생)
- `printWidth: 80`: 한 줄 최대 길이를 80자로 설정 (초과 시 자동 줄바꿈)
- `singleQuote: true`: 작은따옴표 사용
- `semi: true`: 세미콜론 사용
- `useTabs: false`: 스페이스 사용 (탭 사용 안 함)

### 3. `@typescript-eslint/no-unused-vars`

사용하지 않는 변수를 감지합니다.

```json
{
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

### 4. `@typescript-eslint/no-explicit-any`

`any` 타입 사용을 제한합니다.

```json
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### 5. Import 관련 규칙

#### 5.1. `import/order`

import 문의 순서와 그룹화를 강제합니다. 가독성을 높이고 일관된 코드 스타일을 유지합니다.

```json
{
  "rules": {
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin", // Node.js 내장 모듈 (fs, path 등)
          "external", // node_modules 패키지
          "internal", // 내부 모듈 (alias 사용)
          "parent", // 상위 디렉토리
          "sibling", // 같은 디렉토리
          "index" // index 파일
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "next/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  }
}
```

**설정 설명:**

- `groups`: import 그룹의 순서 정의
- `pathGroups`: 특정 패턴의 import를 특정 그룹으로 분류
- `newlines-between`: 그룹 간 빈 줄 강제
- `alphabetize`: 그룹 내 알파벳 순 정렬

**올바른 import 순서 예시:**

```typescript
// 1. Node.js 내장 모듈 (없으면 생략)
import fs from 'fs';

// 2. 외부 패키지 (알파벳 순)
import { Box, Container } from '@chakra-ui/react';
import { Metadata } from 'next';
import React from 'react';

// 3. 내부 모듈 (alias 사용, 알파벳 순)
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import { rootMetadata } from '@/data/siteMetadata';
import theme from '@/lib/theme';

// 4. 상대 경로 (가능한 한 피해야 함)
import Providers from './providers';
```

#### 5.2. `import/no-duplicates`

같은 모듈에서 여러 import 문을 하나로 합치도록 강제합니다.

```json
{
  "rules": {
    "import/no-duplicates": "warn"
  }
}
```

**잘못된 예:**

```typescript
import { Box } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
```

**올바른 예:**

```typescript
import { Box, Container } from '@chakra-ui/react';
```

#### 5.3. `import/no-unresolved`

해결할 수 없는 import를 에러로 표시합니다. TypeScript path alias가 올바르게 설정되었는지 확인합니다.

```json
{
  "rules": {
    "import/no-unresolved": "error"
  }
}
```

#### 5.4. `import/no-relative-packages`

상대 경로로 node_modules 패키지를 import하는 것을 방지합니다.

```json
{
  "rules": {
    "import/no-relative-packages": "warn"
  }
}
```

**잘못된 예:**

```typescript
import React from '../../../node_modules/react';
```

**올바른 예:**

```typescript
import React from 'react';
```

#### 5.5. `import/no-relative-parent-imports`

상대 경로(`../`) 사용을 제한하여 alias 사용을 강제합니다. alias를 사용한 import는 허용하도록 설정합니다.

```json
{
  "rules": {
    "import/no-relative-parent-imports": [
      "warn",
      {
        "ignore": ["^@/"]
      }
    ]
  }
}
```

**잘못된 예:**

```typescript
import { links } from '../../data/portfolioContent';
```

**올바른 예:**

```typescript
import { links } from '@/data/portfolioContent';
```

**주의:**

- 같은 디렉토리 내의 파일(`./`)은 허용됩니다.
- `ignore` 옵션으로 alias 패턴(`^@/`)을 지정하면 alias를 사용한 import는 경고하지 않습니다.

### 6. 사용하지 않는 Import 자동 삭제

#### 6.1. `unused-imports/no-unused-imports`

사용하지 않는 import 문을 자동으로 감지하고 삭제합니다. 저장 시 자동으로 정리됩니다.

```json
{
  "plugins": ["unused-imports"],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error"
  }
}
```

**설정 설명:**

- `no-unused-vars`와 `@typescript-eslint/no-unused-vars`를 `off`로 설정하여 기본 규칙 비활성화
- `unused-imports/no-unused-imports`를 `error`로 설정하여 사용하지 않는 import를 에러로 표시
- 저장 시 `source.fixAll.eslint`가 활성화되어 있으면 자동으로 삭제됨

**예시:**

```typescript
// 사용하지 않는 import가 있는 경우
import { Box, Container, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Component() {
  return <Box>Hello</Box>; // Container와 Text는 사용하지 않음
}
```

**자동 수정 후:**

```typescript
import { Box } from '@chakra-ui/react';

export default function Component() {
  return <Box>Hello</Box>;
}
```

#### 6.2. `unused-imports/no-unused-vars`

사용하지 않는 변수를 감지합니다. `_`로 시작하는 변수는 무시됩니다.

```json
{
  "rules": {
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
```

**설정 설명:**

- `vars: "all"`: 모든 변수 검사
- `varsIgnorePattern: "^_"`: `_`로 시작하는 변수는 무시 (예: `_unused`)
- `args: "after-used"`: 사용된 매개변수 이후의 매개변수만 검사
- `argsIgnorePattern: "^_"`: `_`로 시작하는 매개변수는 무시

**예시:**

```typescript
// _로 시작하는 변수는 경고하지 않음
const _unused = 'ignored';
const used = 'ok';

// 함수 매개변수도 동일
function handler(_event, data) {
  console.log(data);
}
```

### 7. Export 이름과 파일명 일치 강제

#### 7.1. `filename-export/match-named-export` 및 `filename-export/match-default-export`

`page.tsx`와 `layout.tsx`를 제외한 모든 `.tsx` 파일에서 export하는 이름 중 하나가 반드시 파일명과 일치하도록 강제합니다.

```json
{
  "plugins": ["filename-export"],
  "rules": {
    "filename-export/match-named-export": "off",
    "filename-export/match-default-export": "off"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "excludedFiles": ["**/page.tsx", "**/layout.tsx"],
      "rules": {
        "filename-export/match-named-export": [
          "error",
          {
            "casing": "loose"
          }
        ],
        "filename-export/match-default-export": [
          "error",
          {
            "casing": "loose"
          }
        ]
      }
    }
  ]
}
```

**설정 설명:**

- `files: ["**/*.tsx"]`: 모든 `.tsx` 파일에 적용
- `excludedFiles: ["**/page.tsx", "**/layout.tsx"]`: `page.tsx`와 `layout.tsx`는 제외
- `casing: "loose"`: 대소문자 구분 없이 비교 (예: `Footer`와 `footer`는 일치로 간주)
- `match-named-export`: named export 중 하나가 파일명과 일치해야 함
- `match-default-export`: default export가 파일명과 일치해야 함

**올바른 예:**

```typescript
// Footer.tsx
export default function Footer() {
  return <footer>Footer</footer>;
}

// 또는
export const Footer = () => {
  return <footer>Footer</footer>;
};

// 또는 둘 다
export default function Footer() {
  return <footer>Footer</footer>;
}
export { Footer };
```

**잘못된 예:**

```typescript
// Footer.tsx
export default function FooterComponent() {  // ❌ 파일명과 일치하지 않음
  return <footer>Footer</footer>;
}

// Footer.tsx
export const FooterWrapper = () => {  // ❌ 파일명과 일치하지 않음
  return <footer>Footer</footer>;
}
```

**특수 케이스:**

```typescript
// MotionPrimitives.tsx - 여러 개의 primitive를 export하는 경우
export const MotionBox = chakra(motion.div, motionProps);

// 파일명과 일치하는 export 추가 필요
export const MotionPrimitives = {
  MotionBox,
};
```

**주의:**

- `page.tsx`와 `layout.tsx`는 Next.js의 특수 파일이므로 제외됩니다.
- `.ts` 파일에는 적용되지 않습니다 (`.tsx` 파일만 적용).

---

## 문제 해결

### 1. ESLint가 에러를 감지하지 못하는 경우

**문제**: `console.log`를 사용해도 경고가 표시되지 않음

**원인**: `next/core-web-vitals`는 `no-console` 규칙을 기본 포함하지 않음

**해결**: `.eslintrc.json`에 명시적으로 추가

```json
{
  "rules": {
    "no-console": "warn"
  }
}
```

### 2. 들여쓰기 문제가 감지되지 않는 경우

**문제**: 들여쓰기가 잘못되어도 ESLint가 경고하지 않음

**원인**: `eslint-config-prettier`가 indent 규칙을 비활성화함 (의도된 동작)

**해결**: `eslint-plugin-prettier`를 사용하여 Prettier 포맷팅 문제를 ESLint 경고로 표시

```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### 3. 저장 시 자동 포맷팅이 작동하지 않는 경우

**확인 사항:**

1. Prettier 확장 프로그램이 설치되어 있는지 확인
2. `.vscode/settings.json`에 `"editor.formatOnSave": true` 설정 확인
3. 파일 타입별로 기본 포맷터가 설정되어 있는지 확인

### 4. bun 사용 시 ESLint가 작동하지 않는 경우

**확인 사항:**

1. `.vscode/settings.json`에 `"eslint.packageManager": "bun"` 설정 확인
2. `bun run lint` 명령어로 직접 실행하여 작동 여부 확인

### 5. Prettier와 ESLint 충돌

**원인**: Prettier와 ESLint의 포맷팅 규칙이 충돌

**해결**: `eslint-config-prettier`를 `extends` 배열의 마지막에 배치

```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"]
}
```

`plugin:prettier/recommended`는 내부적으로 `eslint-config-prettier`를 포함합니다.

### 6. Import 관련 오류 해결

#### 6.1. `import/no-unresolved` 오류 발생

**문제**: TypeScript path alias (`@/*`)를 사용한 import가 해결되지 않음

**원인**: `eslint-import-resolver-typescript`가 제대로 설정되지 않음

**해결**: `.eslintrc.json`의 `settings`에 TypeScript resolver 설정 확인

```json
{
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./tsconfig.json"
      }
    }
  }
}
```

**확인 사항:**

1. `tsconfig.json`에 `paths` 설정이 올바른지 확인
2. `eslint-import-resolver-typescript` 패키지가 설치되어 있는지 확인
3. ESLint 서버 재시작 (VSCode/Cursor에서 `Cmd+Shift+P` → "ESLint: Restart ESLint Server")

#### 6.2. Import 순서가 자동으로 정렬되지 않는 경우

**문제**: `import/order` 규칙이 설정되어 있지만 자동 정렬이 작동하지 않음

**해결**: 저장 시 자동 수정 활성화 확인

`.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```

또는 수동으로 정렬:

```bash
bun run lint --fix
```

#### 6.3. 상대 경로 import가 경고되지 않는 경우

**문제**: `import/no-relative-parent-imports` 규칙이 작동하지 않음

**확인 사항:**

1. `.eslintrc.json`에 `"plugins": ["import"]`가 추가되어 있는지 확인
2. `import/no-relative-parent-imports` 규칙이 활성화되어 있는지 확인
3. 같은 디렉토리 내 import (`./`)는 허용되므로 경고가 표시되지 않을 수 있음

#### 6.4. Export 이름이 파일명과 일치하지 않는다는 오류 발생

**문제**: `filename-export/match-named-export` 또는 `filename-export/match-default-export` 오류 발생

**해결 방법:**

1. **Default export 사용 시:**

```typescript
// Footer.tsx
export default function Footer() {  // ✅ 파일명과 일치
  return <footer>Footer</footer>;
}
```

2. **Named export 사용 시:**

```typescript
// Footer.tsx
export const Footer = () => {  // ✅ 파일명과 일치
  return <footer>Footer</footer>;
};
```

3. **여러 개 export하는 경우:**

```typescript
// MotionPrimitives.tsx
export const MotionBox = chakra(motion.div, motionProps);

// 파일명과 일치하는 export 추가
export const MotionPrimitives = {
  MotionBox,
};
```

**확인 사항:**

1. `.eslintrc.json`에 `"plugins": ["filename-export"]`가 추가되어 있는지 확인
2. `overrides` 설정에서 `page.tsx`와 `layout.tsx`가 제외되어 있는지 확인
3. 파일명과 export 이름이 대소문자까지 정확히 일치하는지 확인 (또는 `casing: "loose"` 설정 확인)

**주의:**

- `page.tsx`와 `layout.tsx`는 Next.js 특수 파일이므로 자동으로 제외됩니다.
- `.ts` 파일에는 이 규칙이 적용되지 않습니다 (`.tsx` 파일만 적용).

#### 6.6. 탭 사이즈나 줄 길이가 맞지 않아 에러 발생

**문제**: `prettier/prettier` 에러가 발생하여 탭 사이즈나 줄 길이가 맞지 않음

**원인**: Prettier 설정과 실제 코드 포맷이 일치하지 않음

**해결**: 저장 시 자동 포맷팅 활성화 확인

`.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.formatDocument": "always"
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false
}
```

**설정 설명:**

- `editor.tabSize: 2`: 탭 사이즈를 2칸으로 설정 (Prettier `tabWidth: 2`와 일치)
- `editor.insertSpaces: true`: 탭 대신 스페이스 사용 (Prettier `useTabs: false`와 일치)
- `editor.detectIndentation: false`: 파일의 들여쓰기를 자동 감지하지 않고 설정값 사용
- `editor.formatOnSave: true`: 저장 시 자동 포맷팅
- `source.fixAll.eslint: "always"`: 저장 시 ESLint 자동 수정 (Prettier 에러 포함)

**Prettier 설정 확인:**
`.prettierrc.json`:

```json
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false
}
```

**수동으로 수정:**

```bash
bun run lint --fix
# 또는
bun run format
```

**주의:**

- `prettier/prettier`를 `"error"`로 설정하면 탭 사이즈가 2가 아니거나 줄 길이가 80자를 초과하면 빌드가 실패합니다.
- 저장 시 자동으로 수정되므로 개발 중에는 문제가 없습니다.

---

## 체크리스트

새 프로젝트에서 ESLint를 설정할 때 다음을 확인하세요:

- [ ] 필수 패키지 설치 (`eslint`, `eslint-config-next`)
- [ ] TypeScript 지원 패키지 설치 (`@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`)
- [ ] Prettier 통합 패키지 설치 (`prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`)
- [ ] Import 관리 패키지 설치 (`eslint-plugin-import`, `eslint-import-resolver-typescript`)
- [ ] 사용하지 않는 Import 패키지 설치 (`eslint-plugin-unused-imports`)
- [ ] Export 이름 일치 패키지 설치 (`eslint-plugin-filename-export`)
- [ ] `.eslintrc.json` 파일 생성 및 설정
- [ ] `.eslintrc.json`에 `import`, `unused-imports`, `filename-export` 플러그인 추가
- [ ] `.eslintrc.json`에 사용하지 않는 import 규칙 추가
- [ ] `.eslintrc.json`에 export 이름 일치 규칙 추가 (page.tsx, layout.tsx 제외)
- [ ] `tsconfig.json`에 path alias 설정 (`@/*`)
- [ ] `.prettierrc.json` 파일 생성 및 설정
- [ ] `.prettierignore` 파일 생성
- [ ] `package.json`에 lint/format 스크립트 추가
- [ ] `.vscode/settings.json` 설정
- [ ] `.vscode/extensions.json`에 추천 확장 프로그램 추가
- [ ] `bun run lint` 실행하여 정상 작동 확인
- [ ] `bun run format` 실행하여 포맷팅 확인
- [ ] Import 순서 및 alias 사용 확인

---

## 참고 자료

- [ESLint 공식 문서](https://eslint.org/)
- [Next.js ESLint 설정](https://nextjs.org/docs/basic-features/eslint)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier 공식 문서](https://prettier.io/)
- [ESLint Prettier 통합](https://github.com/prettier/eslint-plugin-prettier)

---

## 업데이트 이력

- 2024: 초기 버전 작성
  - Next.js + TypeScript + Prettier + bun 환경 설정 가이드
  - 주요 규칙 및 문제 해결 방법 추가
- 2026-01: Import 관리 규칙 추가
  - `eslint-plugin-import` 및 `eslint-import-resolver-typescript` 설정
  - Import 순서, 중복, 상대 경로 제한 규칙 추가
  - TypeScript path alias 지원 설정
- 2026-01: 사용하지 않는 Import 자동 삭제 추가
  - `eslint-plugin-unused-imports` 설정
  - 저장 시 자동으로 사용하지 않는 import 삭제 기능 추가
  - 사용하지 않는 변수 감지 규칙 추가
- 2026-01: Export 이름과 파일명 일치 강제 추가
  - `eslint-plugin-filename-export` 설정
  - `page.tsx`, `layout.tsx`를 제외한 모든 `.tsx` 파일에 적용
  - 코드 일관성 및 가독성 향상

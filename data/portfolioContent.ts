export const projectCategories = [
  '전체',
  'Frontend',
  'Full-stack',
  'DevOps',
  'AI / AX',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const domainCategories = [
  '전체',
  'Frontend',
  'Full-stack',
  'DevOps',
  'AI / AX',
] as const;

export type DomainCategory = (typeof domainCategories)[number];

export const domainSlugMap: Record<Exclude<DomainCategory, '전체'>, string> = {
  Frontend: 'frontend',
  'Full-stack': 'fullstack',
  DevOps: 'devops',
  'AI / AX': 'ai-ax',
};

export const domainSlugToCategory: Record<string, DomainCategory> = {
  frontend: 'Frontend',
  fullstack: 'Full-stack',
  devops: 'DevOps',
  'ai-ax': 'AI / AX',
  all: '전체',
};

export interface DomainMetadata {
  name: Exclude<DomainCategory, '전체'>;
  slug: string;
  subtitle: string;
  competency: string;
  representativeProjects: string[];
}

export const domainMetadata: Record<
  Exclude<DomainCategory, '전체'>,
  DomainMetadata
> = {
  Frontend: {
    name: 'Frontend',
    slug: 'frontend',
    subtitle: '프론트엔드 전문 역량',
    competency:
      '사용자의 화면에서 발생하는 상태와 데이터 흐름을 이해하고, 실시간 통신과 성능, 사용자 경험까지 고려해 구현할 수 있는 개발자',
    representativeProjects: [
      '도메인 주도 프론트엔드 구조와 AI Agent 개발 효율 실험',
      '실시간 협업형 지식 공유 플랫폼 — Weekly Threads Study',
      'NH 올원뱅크 캐시백 쿠폰몰',
      '온글 (쉬운 글 작성) landing 페이지',
      'sLM을 활용한 분석 투자 솔루션',
    ],
  },
  'Full-stack': {
    name: 'Full-stack',
    slug: 'fullstack',
    subtitle: '풀스택 전문 역량',
    competency:
      '사용자의 요구사항을 단순한 화면 구현에서 끝내지 않고, API와 데이터 구조, 비즈니스 로직까지 연결해 실제 시스템으로 구현할 수 있는 개발자',
    representativeProjects: [
      '사내 포털 서비스',
      '동아·동서 글로컬 연합대학 홈페이지',
      '제주국제관악제 홈페이지',
      '사내 콘솔 웹페이지',
      'MYCMS',
    ],
  },
  DevOps: {
    name: 'DevOps',
    slug: 'devops',
    subtitle: '데브옵스 전문 역량',
    competency:
      '코드를 작성하는 것에서 끝나지 않고, 네트워크와 컨테이너, 배포, 모니터링까지 실제 서비스가 사용자에게 전달되는 전체 흐름을 이해하는 개발자',
    representativeProjects: [
      '바시 필라테스',
      'MYCMS',
      '사내 콘솔 웹페이지',
      '동아·동서 글로컬 연합대학 홈페이지',
    ],
  },
  'AI / AX': {
    name: 'AI / AX',
    slug: 'ai-ax',
    subtitle: 'AI / AX 전문 역량',
    competency:
      'AI 모델과 파이프라인, UX, Enterprise 시스템 및 알고리즘 구현을 결합해 단순한 AI 도입을 넘어 실제 서비스와 업무 혁신(AX)으로 연결할 수 있는 개발자',
    representativeProjects: [
      '도메인 주도 프론트엔드 구조와 AI Agent 개발 효율 실험',
      'AI 기반 HWP 문서 자동 작성 서비스 — 또박또박',
      'KB_NEWS_AI',
      '숭실대학교 인공지능 프로젝트 — TSP 최적화',
    ],
  },
};

export interface ProjectItem {
  name: string;
  category: string;
  domainCategories: Array<Exclude<DomainCategory, '전체'>>;
  organization: string;
  period: string;
  role: string;
  contribution: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  relatedPosts?: Array<{ label: string; slug: string }>;
  links?: Array<{ label: string; url: string }>;
}

export const projects: ProjectItem[] = [
  {
    name: '바시 필라테스',
    category: '실무 및 인턴',
    domainCategories: ['DevOps'],
    organization: '(주)데브파이브',
    period: '진행 중',
    role: '클라우드 인프라 구축 및 배포 자동화',
    contribution:
      'OpenTofu로 AWS 인프라를 표준화하고 Docker 기반 CI/CD를 구성해, 제약이 있는 Free Tier 환경에서도 실제 서비스 배포와 장애 진단 과정을 완성했습니다.',
    summary:
      '바시 필라테스 서비스의 AWS 인프라를 OpenTofu로 표준화하고 보안 취약점을 개선한 뒤, Docker 기반 CI/CD 파이프라인의 첫 배포까지 장애를 진단·해결한 프로젝트입니다.',
    techStack: [
      'OpenTofu',
      'AWS',
      'Elastic Beanstalk',
      'Docker',
      'GitHub Actions',
    ],
    highlights: [
      'Dockerfile, docker-compose.yml, nginx.conf, PM2 설정을 infra 디렉터리로 통합하고 OpenTofu 기반 AWS 인프라 생성부터 Elastic Beanstalk 배포까지의 흐름을 정리했습니다.',
      'Free Tier 제약에 맞춘 NO-DOMAIN 모드와 free_tier_mode를 도입해 RDS 백업, Multi-AZ, 삭제 보호, Performance Insights 등 연관 옵션을 안전하게 제어했습니다.',
      'Elastic Beanstalk Launching 지연과 컨테이너 unhealthy 문제를 CloudFormation, State, 컨테이너 로그, 실행 파일까지 단계적으로 추적해 해결했습니다.',
      'nginx SSL 설정과 Rust 빌드 산출물 문제를 수정해 첫 배포를 완료하고, 남은 운영 위험과 복구 절차를 문서화했습니다.',
    ],
  },
  {
    name: '사내 콘솔 웹페이지',
    category: '실무 및 인턴',
    domainCategories: ['DevOps', 'Full-stack'],
    organization: '(주)데브파이브',
    period: '진행 중',
    role: '풀스택 개발',
    contribution:
      '공공조달 공고를 탐색·검토하는 운영 콘솔의 서비스 기능을 외부 솔루션에서도 쓸 수 있도록 개방하고, 발급된 서비스 키와 요청 시각·본문 해시 기반 HMAC-SHA256 서명 검증 구조를 정리했습니다.',
    summary:
      'DevFive 경영진과 실무자가 공공조달 공고를 빠르게 탐색하고 상세 정보와 첨부문서를 안정적으로 확인할 수 있도록 구축한 사내 콘솔 웹페이지로, Docker 배포 중 서비스 중단을 줄이기 위해 Loki·Prometheus·Grafana 모니터링과 Blue-Green 배포를 적용했습니다.',
    techStack: [
      'Next.js',
      'Rust',
      'PostgreSQL',
      'S3',
      'Docker',
      'Loki',
      'Prometheus',
      'Grafana',
      'cAdvisor',
      'HMAC-SHA256',
    ],
    highlights: [
      '나라장터 목록은 Cron 기반으로 주기 수집하되 상세 정보는 사용자가 공고를 열 때 조회하는 on-demand 방식으로 분리해, 불필요한 외부 API 호출과 초기 적재 비용을 줄였습니다.',
      'Loki는 애플리케이션 로그를 수집·검색하고 Prometheus는 서버·컨테이너 메트릭을 수집하며, Grafana에서 로그와 메트릭을 같은 타임라인으로 함께 확인하도록 구성했습니다.',
      'Docker 배포에서는 기존 환경을 유지한 상태에서 새 환경을 먼저 검증한 뒤 트래픽을 전환하는 Blue-Green 방식으로 배포 중 서비스 중단 시간을 최소화했습니다.',
      '원본 나라장터 첨부파일 URL은 만료되거나 접근 제약이 생길 수 있어, 서버가 문서를 수집해 S3에 재호스팅하고 공고 메타데이터와 저장 객체를 연결해 원본 URL 상태와 무관하게 운영 화면에서 안정적으로 열람하도록 했습니다.',
      '발급된 서비스 키와 요청 시각·본문 해시 기반 HMAC-SHA256 서명 검증으로 서비스 기능을 외부 솔루션에서도 활용할 수 있게 해, 동일 기능을 여러 솔루션에서 재사용할 수 있도록 맞췄습니다.',
      '검색 결과→공고 상세→첨부문서 확인이 한 화면 흐름에서 이어지도록 관리 UI를 구성해 경영진의 반복적인 사이트 이동과 문서 탐색 단계를 줄였습니다.',
    ],
  },
  {
    name: '사내 포털 서비스',
    category: '실무 및 인턴',
    domainCategories: ['Full-stack'],
    organization: '(주)데브파이브',
    period: '진행 중',
    role: '풀스택 개발',
    contribution:
      '정기구독 로직을 4개 상태와 8개 이벤트의 상태 머신으로 정리하고, 판정 로직은 순수 함수로 분리했습니다.',
    summary:
      '자체 소프트웨어 판매와 교육 운영을 위한 사내 포털 서비스로, 강의 관리부터 이수증 발급, 구독 및 결제까지 통합 관리할 수 있도록 개발했습니다.',
    techStack: ['Next.js', 'Rust', 'PostgreSQL', 'State Machine'],
    highlights: [
      '구독 결제 로직을 4개 상태와 8개 이벤트의 상태 머신으로 정리하고, 상태 전이와 환불 판정을 순수 함수로 분리해 복잡한 결제 규칙을 단순화했습니다.',
      '테스트를 47개에서 156개로 확장하고 Property-Based Testing으로 상태 전이의 불변식과 결제 정책의 경계값을 검증했습니다.',
      '테스트 과정에서 좌석 증설 환불 오류와 스케줄러 복구 후 이중 청구 위험을 발견해 수정하고, 불확실한 PG 응답을 재청구가 아닌 재조회로 처리하도록 개선했습니다.',
    ],
    relatedPosts: [
      {
        label: '결제 시스템에서 상태 기반 테스트를 설계하는 방법',
        slug: 'payment-state-based-testing',
      },
    ],
  },
  {
    name: 'MYCMS',
    category: '사이드 프로젝트',
    domainCategories: ['Full-stack', 'DevOps'],
    organization: '개인 프로젝트',
    period: '진행 중',
    role: '풀스택 및 홈서버 인프라 개발',
    contribution:
      '커리어 활동·프로젝트·문서·학습 기록을 근거 단위로 관리하고, 지원 과정에서 재조합할 수 있도록 정보 구조와 Evidence Graph를 설계했습니다.',
    summary:
      '커리어 활동과 프로젝트·문서·학습 기록을 근거 중심으로 관리하고, Next.js + Spring Boot + PostgreSQL 전체 API/데이터 흐름 및 Proxmox 홈서버 인프라를 설계한 Career Evidence OS입니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Spring Boot',
      'PostgreSQL',
      'Proxmox',
      'Docker',
      'GitHub Actions',
      'Tailscale',
      'WireGuard',
      'Cloudflare Tunnel',
    ],
    highlights: [
      '지원서·프로젝트·수상·자격증·학습 노트를 각각 독립된 Evidence로 저장하고, 동일 경험을 복사하지 않고 여러 지원서와 포트폴리오에서 참조하도록 데이터 관계를 재구성했습니다.',
      'Evidence Graph에서 프로젝트 구현, 문서, 수상과 학습 기록을 노드로 연결하고 AI 생성 결과가 참조한 근거를 저장해 결과 문장에서 원본 기록까지 역추적하도록 구현했습니다.',
      'Spring Boot 서비스는 Proxmox 홈서버 기반 온프레미스 VM/CT 환경에 배포해 직접 관리 가능한 실행 환경으로 운영했습니다.',
      'Tailscale, WireGuard, Cloudflare Tunnel, Reverse Proxy를 통해 홈서버 보안 네트워크 터널링을 구축했습니다.',
      'GitHub Actions 자가 호스팅 러너(Self-hosted Runner)를 구성하고 Docker 이미지 빌드·전송·적재를 거치는 배포 워크플로를 만들어 홈서버 배포를 자동화했습니다.',
      '로그인을 미루고 서비스와 UI의 가치를 먼저 보여주도록 진입 흐름을 바꾸며, 초기 진입 장벽을 낮추고 첫 사용자 UX를 개선하는 방법을 배웠습니다.',
    ],
  },
  {
    name: 'KB_NEWS_AI',
    category: '외부 활동',
    domainCategories: ['AI / AX'],
    organization: '대회 프로젝트',
    period: '2025.08',
    role: '데이터 파이프라인 및 AI 분석 개발',
    contribution:
      '금융 뉴스 수집부터 종목별 검색, RAG 기반 요약·감성 분석, 품질 평가와 실행 오케스트레이션까지 이어지는 Python 기반 파이프라인을 구현했습니다.',
    summary:
      'RAG 기반 주식 뉴스 파이프라인을 활용해 종목별 뉴스 분석과 주식 추천 정보를 제공하는 AI RAG 파이프라인 대표 프로젝트입니다.',
    techStack: [
      'Python',
      'ChromaDB',
      'LangChain',
      'Ollama',
      'Selenium',
      'BeautifulSoup',
      'RAG',
      'sLM',
      'LLM-as-Judge',
    ],
    highlights: [
      'Investing.com의 동적 검색 페이지는 Selenium으로 탐색하고 기사 본문은 requests와 BeautifulSoup으로 파싱했으며, Alpha Vantage API 결과까지 LangChain Document 형식으로 정규화했습니다.',
      '뉴스를 700자·100자 overlap 청크로 분할해 Ollama 임베딩으로 벡터화하고, 단일 ChromaDB 컬렉션에서 symbol metadata filter와 top-k 5 검색으로 종목별 문맥을 격리했습니다.',
      'RunnableParallel과 RunnablePassthrough를 조합해 retrieve → context format → prompt → generate → parse 단계가 명시적으로 드러나는 RAG 요약 체인을 구성했습니다.',
      '로컬 sLM의 출력 흔들림을 줄이기 위해 낮은 temperature, think 블록 제거, 유효 라벨 검증, 재시도와 neutral fallback을 적용하고 Financial PhraseBank 50개 샘플로 모델별 정확도를 비교했습니다.',
      '10개 종목에 대해 서로 다른 모델의 요약을 정확성·완성도·간결성 기준으로 평가하는 LLM-as-Judge를 구성하고, 점수·승자·판단 근거를 JSON으로 저장했습니다.',
      '수집부터 요약까지의 실행을 순차 오케스트레이션하고, created_at·symbol metadata를 재사용해 오래된 벡터 삭제와 DB 상태 점검이 가능한 수명 관리 유틸리티를 구현했습니다.',
    ],
  },
  {
    name: '실시간 협업형 지식 공유 플랫폼 — Weekly Threads Study',
    category: '사이드 프로젝트',
    domainCategories: ['Frontend'],
    organization: '개인 프로젝트',
    period: '2026.05',
    role: '프론트엔드 및 서버리스 풀스택 개발',
    contribution:
      '실시간 협업 경험의 흐름을 설계하고, 타입 안전한 서버 함수와 SSE 기반 동기화, 데스크톱 실행 환경, E2E 검증까지 서비스 전반을 구현했습니다.',
    summary:
      '팀 내 아이디어, 회의 주제, 회고 내용을 하나의 흐름으로 모으고 논의할 수 있는 실시간 협업 플랫폼을 개발했습니다.',
    techStack: [
      'TanStack Start',
      'TanStack Router',
      'Server-Sent Events',
      'Tauri',
      'Playwright',
    ],
    highlights: [
      '주제 작성 > 댓글 참여 > 실시간 세션 > 결과 아카이브로 이어지는 협업 흐름을 설계해 지속적인 지식 공유 경험을 구현했습니다.',
      'TanStack Start 기반 서버 함수 구조를 활용해 인증, 주제 작성, 세션 제어, 댓글·인사이트 저장 등 주요 동작을 타입 안정성이 있는 API 흐름으로 구성했습니다.',
      'Polling 방식에서 6명 참여 기준 세션당 1만 건 이상의 요청이 발생하는 문제를 확인하고, Server-Sent Events(SSE) 기반 실시간 통신 구조로 전환했습니다. 이를 통해 불필요한 반복 요청을 줄이고, 여러 사용자가 동시에 참여하는 세션에서도 상태 변경, 댓글, 인사이트가 실시간으로 동기화되도록 구현했습니다.',
      '팀원들의 사용 의견을 수렴한 결과, 웹사이트에 직접 접속해야 하는 과정에서 세션 참여와 알림 인지가 늦어진다는 문제를 확인했습니다. 이를 해결하기 위해 Tauri 기반 데스크톱 실행 환경과 알림 기능을 도입하여 기존 웹 서비스를 데스크톱 사용 흐름으로 확장하고, 새로운 세션과 주요 이벤트를 즉시 인지할 수 있도록 개선했습니다.',
      'Playwright E2E 테스트로 주제 작성, 권한별 세션 참여, 실시간 동기화, 결과 확인, 삭제 흐름까지 주요 사용자 시나리오를 검증했습니다.',
    ],
    relatedPosts: [
      {
        label: '작은 스터디 도구를 만들면서 다시 생각한 것들',
        slug: 'study-tool-culture',
      },
    ],
  },
  {
    name: 'AI 기반 HWP 문서 자동 작성 서비스 — 또박또박',
    category: '외부 활동',
    domainCategories: ['AI / AX'],
    organization: 'AI Hack Camp 2026',
    period: '2026.05',
    role: '프론트엔드 및 WebAssembly 개발',
    contribution:
      'HWP Schema 기반 대화형 입력 UX와 Rust/WebAssembly 음성 전처리 파이프라인을 구현하고, OCR·모바일 입력까지 접근성 범위를 확장했습니다.',
    summary:
      '공공기관 HWP 문서 작성 과정의 접근성 문제를 해결하기 위해, AI 대화형 입력 및 Rust WebAssembly 기반 브라우저 음성 전처리를 적용한 문서 자동 작성 서비스입니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Rust',
      'WebAssembly',
      'Web Audio API',
      'AudioWorklet',
      'Tesseract.js',
      'STT',
      'OCR',
    ],
    highlights: [
      'HWP Schema를 기반으로 질문 흐름이 동적으로 변하는 채팅형 입력 인터페이스를 설계해 문서 작성 과정을 단계형 UX로 단순화했습니다.',
      'Rust 기반 WebAssembly 모듈을 구현해 브라우저에서 음성 데이터를 직접 전처리하도록 구성하고, 무음 기반 발화 분리(VAD), WAV 인코딩, RMS 계산을 클라이언트에서 처리했습니다.',
      'AudioWorklet과 Web Audio API를 활용해 실시간 PCM 스트림 처리 및 음성 레벨 시각화를 구현하고, 분리된 음성 청크를 STT 서버와 연동했습니다.',
      'STT 원본 음성을 그대로 전송하지 않고 음절 단위로 분리해 전달하는 방식을 선택했으며, 민감한 음성 처리 일부를 브라우저의 WebAssembly 모듈로 옮겨 개인정보 보호와 처리 효율을 함께 고려했습니다.',
      '손글씨 입력 기능과 OCR 전처리 파이프라인을 구현해 키보드 입력이 어려운 사용자도 문서를 작성할 수 있도록 접근성을 확장했습니다.',
      '모바일 환경에서 발생한 file input·touch event·animation 충돌 문제를 해결하며 실제 시연 가능한 수준으로 UX를 안정화했습니다.',
    ],
    relatedPosts: [
      {
        label: '2026년 AI HACK CAMP 회고',
        slug: '2026-ai-hack-camp',
      },
    ],
    links: [
      {
        label: '뉴스 기사',
        url: 'https://n.news.naver.com/mnews/article/016/0002645434?sid=105',
      },
    ],
  },
  {
    name: '도메인 주도 프론트엔드 구조와 AI Agent 개발 효율 실험',
    category: '사이드 프로젝트',
    domainCategories: ['AI / AX', 'Frontend'],
    organization: '(주)데브파이브',
    period: '2026.07',
    role: 'AI Agent 실험 및 프론트엔드 아키텍처 연구',
    contribution:
      '925개 파일, 65,004 LOC 규모의 프론트엔드 코드베이스에서 기술 레이어 vs 도메인 구조 및 AGENTS.md 배치가 AI Agent의 토큰·비용·품질에 미치는 영향을 실험하고 분석했습니다.',
    summary:
      '동일한 프론트엔드 코드베이스를 대상으로 폴더 구조와 AGENTS.md 배치 방식을 독립적으로 다르게 적용하며 AI Agent의 탐색 비용, 토큰 소비량, 작업 품질을 벤치마킹한 연구 프로젝트입니다.',
    techStack: ['AI Agent', 'AGENTS.md', 'Next.js'],
    highlights: [
      '925개 파일, 65,004 LOC 규모의 프론트엔드 코드베이스를 대상으로 코드는 동일하게 유지하고 기술 레이어 구조 vs 도메인 구조 및 지침 배치를 변경하며 벤치마킹했습니다.',
      '초기 단일 측정에서 도메인 구조 비용이 56% 감소했으나 5회 반복 측정 후 평균 +1.8%(비용 +11.3%, 토큰 +13.6%)로 수렴하는 것을 관찰하여 단일 결과가 아닌 반복 측정의 필요성을 입증했습니다.',
      '전역 루트 AGENTS.md 단일 배치(비용 -3.4%)보다 작업 위치와 가까운 17개 로컬 AGENTS.md 지역화 배치(비용 -9.8%)가 AI Agent의 비용과 토큰을 더 효과적으로 절감함을 입증했습니다.',
      'AI가 직관적 폴더 트리보다 심볼 앵커 맵, 책임 경계, 금지 패턴과 대안, 코드 밖의 함정을 중심으로 맥락을 파악한다는 점을 정립하고 AGENTS.md 작성 원칙을 제시했습니다.',
    ],
    relatedPosts: [
      {
        label: '도메인 주도 프론트엔드 구조는 AI 개발 효율을 높일 수 있을까',
        slug: 'domain-driven-frontend-agents-mdx',
      },
    ],
  },
  {
    name: 'Moazip',
    category: '실무 및 인턴',
    domainCategories: [],
    organization: '(주)데브파이브',
    period: '2026.03 - 2026.04',
    role: 'macOS 앱 개발',
    contribution:
      '파일명 정규화 문제를 해결하는 macOS 앱의 사용자 흐름과 병렬 처리 구조를 구현하고, 스토어 배포와 QA까지 제품 출시 과정을 담당했습니다.',
    summary:
      'macOS에서 생성된 한글 파일명이 Windows에서 자모 단위로 깨지는 문제를 해결하기 위해 만든 macOS 데스크톱 애플리케이션입니다.',
    techStack: ['Tauri 2', 'Rust', 'Next.js', 'rayon', 'crossbeam'],
    highlights: [
      'ZIP, RAR, 7z, tar 등 주요 압축 포맷을 지원했습니다.',
      '드래그앤드롭 업로드, 출력 경로 선택, 진행률 표시, 변환 전후 트리 비교 기능을 구현했습니다.',
      'rayon과 crossbeam을 활용해 병렬 처리를 적용했고, ZIP 기준 최대 32배까지 처리 속도를 개선했습니다.',
      'AI Agent를 활용해 테스트 케이스와 예외 상황을 확장하면서 QA 범위를 넓혔고, QA 기간과 출시 일정을 단축했습니다.',
      'App Store 배포 과정에서 심사 지연을 직접 겪으며 기능 완성도뿐 아니라 일정 관리의 중요성을 체감했습니다.',
    ],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kr/app/moazip/id6761522304?mt=12',
      },
      {
        label: 'Microsoft Store',
        url: 'https://apps.microsoft.com/detail/9nmvr8fchrvc?hl=ko-KR&gl=KR',
      },
    ],
  },
  {
    name: '동아·동서 글로컬 연합대학 홈페이지',
    category: '실무 및 인턴',
    domainCategories: ['Full-stack', 'DevOps'],
    organization: '(주)데브파이브',
    period: '2026.01 - 2026.04',
    role: '웹 풀스택 개발자',
    contribution:
      '공개 홈페이지와 관리자 시스템을 개발하면서 검색·좌표 모델링을 설계하고, 기존 컨테이너 배포 자동화 흐름에 맞춰 Kubernetes manifest를 수정했습니다.',
    summary:
      '동아·동서 글로컬 연합대학의 교육 과정과 콘텐츠를 소개하고 운영할 수 있는 홈페이지와 관리자 시스템을 개발했습니다.',
    techStack: [
      'Rust',
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Bi-gram',
      'Inverted Index',
      'Bitset',
      'Kubernetes',
      'GitHub Actions',
      'Argo CD',
      'PostgreSQL',
    ],
    highlights: [
      '통합 검색 기능을 문자열 비교에서 정보 검색 문제로 재정의하고, bi-gram과 bitset 역색인을 직접 구현해 불필요한 비교 연산을 줄였습니다.',
      '위치 변동 가능성을 고려해 캠퍼스 좌표를 상대 좌표로 모델링하고, 관리자 수정만으로 반영되도록 설계했습니다.',
      'Kubernetes에서 사용자·관리자 프론트엔드는 하나의 앱 워크로드로 구성하고 API는 별도 Pod, PostgreSQL은 상태 보존 영역으로 분리해 책임과 장애 범위를 명확히 했습니다.',
      'GitHub Actions와 Argo CD로 구성된 기존 GitOps 흐름에 맞춰 Kubernetes manifest의 이미지 태그와 배포 선언을 수정해 변경사항이 배포에 반영되도록 했습니다.',
      '인프라팀과 협업하면서 Kubernetes와 Argo CD를 직접 공부했고, 이후 필요한 내용을 정리해서 질문하며 배포 흐름을 명확하게 만들었습니다.',
      '클라이언트가 요청한 스크롤 기반 애니메이션이 사용자 경험을 저하시킨다는 점을 근거로 설득하며 더 나은 홈페이지 방향을 제안했습니다.',
    ],
    relatedPosts: [
      {
        label: '프론트엔드 개발자 관점에서 인프라를 뜯어보고 이해하기',
        slug: 'ci-cd-deploy',
      },
    ],
  },
  {
    name: '제주국제관악제 홈페이지',
    category: '실무 및 인턴',
    domainCategories: ['Full-stack'],
    organization: '(주)데브파이브',
    period: '2026.01 - 2026.05',
    role: '웹 풀스택 개발자',
    contribution:
      '신청·결제·관리자 흐름에서 데이터 병합과 파일 정리를 안정적으로 처리하도록 백엔드와 프론트엔드의 상태·삭제 정책을 함께 구현했습니다.',
    summary:
      '제주국제관악제 및 콩쿠르 운영을 위한 홈페이지와 관리자 시스템으로, 멀티스텝 Form 상태 병합, Bulk API 1회 통합, DB-S3 삭제 정책을 적용했습니다.',
    techStack: [
      'Rust',
      'Next.js 16',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'S3',
      'Bulk API',
      'Transaction',
    ],
    highlights: [
      '기존 데이터를 마이그레이션하며 불필요한 컬럼과 중복 데이터를 정리했습니다.',
      '멀티스텝 신청 폼에서 step 간 의존 데이터가 서로 덮어써지는 문제를 해결하기 위해 자동 동기화 필드와 사용자 입력 보존 필드를 분리한 상태 병합 로직을 만들었습니다.',
      '경연곡 저장 과정의 개별 API 호출 20회를 bulk-save API 한 번으로 통합하고, 트랜잭션으로 전체 성공·실패를 묶어 데이터 유실 가능성과 대기 시간을 줄였습니다.',
      '저장 중 버튼과 입력을 잠가 중복 요청과 사용자 조작을 방지하고, 프론트엔드는 요청 조립보다 저장 상태 표현에 집중하도록 단순화했습니다.',
      'DB 정보와 S3 첨부 파일을 함께 정리해야 하는 삭제 흐름에서, 더 중요한 데이터인 DB를 먼저 안정적으로 삭제하고 파일은 후속 정리하는 방식으로 오류 가능성을 줄였습니다.',
      '도메인이 낯선 상태에서는 구현보다 어떤 페이지와 데이터가 실제로 필요한지 먼저 정의하는 게 더 중요하다는 걸 배웠습니다.',
      'DB를 과하게 정규화하면 구조는 깔끔해지지만 복잡도가 올라갈 수 있어, 일부 중복을 허용하더라도 운영 안정성을 유지하는 방향이 더 현실적인 선택일 수 있음을 경험했습니다.',
    ],
    relatedPosts: [
      {
        label: '신청서 시스템을 만들면서 겪은 시행착오',
        slug: 'application-system-retrospective',
      },
      {
        label: '프론트엔드에서 API 20번 호출을 1번으로 최적화한 이야기',
        slug: 'api-call-optimization',
      },
    ],
    links: [
      {
        label: '사이트',
        url: 'https://jiwef.org',
      },
    ],
  },
  {
    name: '온글 (쉬운 글 작성) landing 페이지',
    category: '실무 및 인턴',
    domainCategories: ['Frontend'],
    organization: '(주)데브파이브',
    period: '2025.09 - 2025.11',
    role: '웹 프론트엔드 개발',
    contribution:
      '어려운 문서를 쉽게 이해시키는 랜딩 경험을 구현하고, 체험형 비교 UI·다크 모드·튜토리얼을 통해 서비스 진입과 사용 흐름을 설계했습니다.',
    summary:
      '공공기관 안내문, 전문 문서처럼 이해하기 어려운 정보를 쉽게 변환해 정보 접근성을 높이기 위한 서비스의 랜딩 페이지입니다.',
    techStack: ['Next.js', 'react-joyride', 'Vitest'],
    highlights: [
      '쉬운 글 변환 효과를 정확하게 전달하기 위해, 사용자가 원문을 입력하고 변환 결과를 같은 화면에서 비교하는 체험형 인터페이스를 핵심 진입점으로 구현했습니다.',
      'react-joyride의 단계별 target을 인터랙션 요소와 연결하여, 첫 방문자가 별도 설명 없이 체험 흐름을 따라가도록 구현했습니다.',
      '입력, 변환 결과, 테마 전환과 튜토리얼 동작을 Vitest로 검증하고 테스트 커버리지 100%를 유지하였습니다.',
    ],
  },
  {
    name: 'NH 올원뱅크 캐시백 쿠폰몰',
    category: '실무 및 인턴',
    domainCategories: ['Frontend'],
    organization: '(주)데브파이브',
    period: '2025.09 - 2025.11',
    role: '웹 프론트엔드 개발',
    contribution:
      '모바일 결제 제약을 고려해 프로모션과 결제 화면을 구현하고, 입력 단계가 긴 사용 흐름의 포커스 처리와 인터랙션 일관성을 개선했습니다.',
    summary:
      'NH올원뱅크 캐시백 쿠폰몰의 결제 구현 및 프로모션 페이지를 개발했습니다.',
    techStack: ['Next.js', 'iframe'],
    highlights: [
      'Safari iOS 환경에서 PG 결제가 앱 정책과 충돌하는 문제를 마주했고, 정책을 변경하기보다 가능한 구현 범위를 중심으로 결제 플로우를 구성했습니다.',
      '외부 PG 페이지로 이동하면서 서비스 Header와 화면 제어 흐름이 끊기는 문제를 해결하기 위해 결제창을 iframe으로 구성했습니다. 결제 완료 페이지가 iframe 내부에 마운트되면 postMessage로 완료 이벤트를 부모 페이지에 전달하고, 부모가 이를 수신해 iframe을 종료한 뒤 결제 완료 화면으로 전환하도록 설계하여 외부 결제 UI의 생명주기를 서비스 내부에서 일관되게 제어했습니다.',
    ],
    relatedPosts: [
      {
        label: 'iframe 결제창 구현',
        slug: 'iframe-payment',
      },
    ],
  },
  {
    name: '탈중앙화 거래소 차익거래 모니터링 시스템',
    category: '실무 및 인턴',
    domainCategories: [],
    organization: 'BlockwaveLabs',
    period: '2024.06 - 2024.08',
    role: 'Node.js 개발자',
    contribution:
      '여러 네트워크의 DEX 데이터를 탐색하는 모니터링 서비스에서 병렬 처리와 차익거래 사이클링 알고리즘을 구현하고, 네트워크별 확장 구조를 정리했습니다.',
    summary:
      '여러 네트워크의 탈중앙화 거래소 데이터를 기반으로 차익거래 기회를 탐색하는 모니터링 시스템을 개발했습니다.',
    techStack: ['Node.js', 'TypeScript'],
    highlights: [
      '네트워크와 DEX별 시세 조회를 순차 처리할 때 탐색 시간이 누적되는 문제를 해결하기 위해 작업 단위를 분리하고 병렬 프로세스 수에 따른 처리 시간과 무료 계층 자원 사용량을 비교했습니다.',
      '토큰을 정점, 교환 경로를 간선으로 모델링하고 시작 자산으로 되돌아오는 교환 사이클의 예상 수익을 계산해 후보 경로만 남기는 차익거래 사이클링 알고리즘을 구현했습니다.',
      '경로 탐색 과정에서 이미 손실이 확정된 분기와 중복 경로를 조기에 제외해 전체 조합을 모두 계산하지 않도록 최적화하고 결과 생성 시간을 600ms 이내로 줄였습니다.',
      'RPC 연결, 풀 데이터 정규화와 수수료 계산을 네트워크 어댑터로 분리해 핵심 탐색 로직을 변경하지 않고 신규 체인과 DEX를 추가하도록 모듈화했습니다.',
    ],
  },
  {
    name: 'sLM을 활용한 분석 투자 솔루션',
    category: '학교',
    domainCategories: ['Frontend'],
    organization: '교내 캡스톤 프로젝트',
    period: '2025년 1학기',
    role: '프론트엔드 개발',
    contribution:
      '실시간 주가·뉴스·AI 분석 결과를 전달하는 화면의 데이터 갱신과 차트 표현을 담당하며, 사용자에게 의미 있는 변화만 보여 주도록 렌더링 비용을 제어했습니다.',
    summary:
      '나스닥 상위 10개 종목의 실시간 주가와 뉴스 데이터를 기반으로 투자 판단에 필요한 정보를 제공하는 분석 서비스를 개발했습니다.',
    techStack: ['React', 'SWR'],
    highlights: [
      '실시간 주가 데이터의 미세한 가격 변동을 효과적으로 표현하기 위해 현재 가격 기준 ±0.1% 범위로 Y축을 동적으로 구성하고, 새로운 데이터가 유입될 때 차트가 연속적으로 갱신되도록 구현했습니다.',
      '실시간 주가 데이터를 지속적으로 조회하면서 발생할 수 있는 불필요한 요청을 줄이기 위해, 종목과 화면 활성화 여부를 기준으로 SWR 요청을 조건부로 실행하고 3초 주기의 재검증과 key 기반 캐싱으로 데이터 갱신 흐름을 구성했습니다.',
      'AI 분석 데이터 조회 실패가 전체 투자 화면의 오류로 이어지지 않도록 예외를 분리하고, 분석 데이터를 불러오지 못한 경우에도 주가 그래프와 뉴스 정보를 이용할 수 있도록 구성했습니다.',
    ],
    links: [
      {
        label: '소스 코드',
        url: 'https://github.com/stock-condition-analysis/stock-condition-analysis-client',
      },
      {
        label: '작동 영상',
        url: 'https://youtu.be/o7xFYajnHMU',
      },
    ],
  },
  {
    name: '블록체인 기반 데이터 저장 구조 설계',
    category: '학교',
    domainCategories: [],
    organization: '교내 캡스톤 프로젝트',
    period: '2024년 2학기',
    role: '프론트엔드 및 스마트컨트랙트 개발',
    contribution:
      '사용자 서명과 온체인 실행을 분리하는 메타 트랜잭션 구조를 설계하고, 의료 데이터의 보안·비용·사용성을 함께 고려한 저장 모델을 구현했습니다.',
    summary:
      '사용자 진입 장벽을 낮추기 위해 비용 부담과 보안 리스크를 함께 고려한 데이터 저장 구조를 설계했습니다.',
    techStack: ['Solidity', 'EIP-712', 'React', 'TypeScript'],
    highlights: [
      '데이터 등록 시 발생하는 가스비가 사용자 진입 장벽이 될 수 있다고 판단해 사용자는 EIP-712 구조화 데이터에만 서명하고, 릴레이어가 서명을 검증한 뒤 트랜잭션을 실행하는 메타 트랜잭션 흐름을 구현했습니다.',
      '서명 메시지에 사용자 주소, 요청 데이터와 nonce를 포함하고 스마트컨트랙트에서 서명자와 nonce를 검증해 다른 사용자의 요청 위조와 동일 서명의 재전송을 방지했습니다.',
      '의료 원문을 블록체인에 직접 기록하지 않고 암호화된 데이터와 검증에 필요한 정보만 온체인에 저장하도록 역할을 분리해 공개 원장의 프라이버시 노출과 저장 비용을 줄였습니다.',
      '프론트엔드에서 지갑 연결→구조화 데이터 서명→릴레이 요청→트랜잭션 결과 확인 단계를 상태로 관리해 사용자가 가스비를 직접 준비하지 않아도 등록 과정을 완료하도록 구현했습니다.',
    ],
    links: [
      {
        label: '프론트엔드',
        url: 'https://github.com/PawPaw-proj/PawPaw-FE',
      },
      {
        label: '스마트컨트랙트',
        url: 'https://github.com/indianaPoly/blockchain-vaccination_medicalHistory',
      },
      {
        label: '작동 영상',
        url: 'https://youtu.be/Xl2nIOAJ4r0',
      },
    ],
  },
  {
    name: '숭실대학교 인공지능 프로젝트 — TSP 최적화',
    category: '학교',
    domainCategories: ['AI / AX'],
    organization: '숭실대학교',
    period: '2024년 1학기',
    role: '팀원',
    contribution:
      '유전 알고리즘과 강화학습 기반 TSP 해법을 직접 구현하고, 선택·돌연변이·학습 방식별 실험을 통해 성능과 한계를 비교·분석했습니다.',
    summary:
      'TSP 문제를 대상으로 유전 알고리즘과 강화학습(Q-Learning, DQN) 기반 접근을 직접 구현하고, 선택 연산·돌연변이율·학습 방식에 따른 최적화 성능을 실험·분석한 AI 알고리즘 프로젝트입니다.',
    techStack: [
      'Python',
      'Genetic Algorithm',
      'Reinforcement Learning',
      'Q-Learning',
      'DQN',
    ],
    highlights: [
      '유전 알고리즘 기반 TSP 최적화에서 초기 집단 생성 방식을 랜덤, Greedy, A* 순으로 개선하며 초기 집단 품질을 높였습니다.',
      '토너먼트, 룰렛 휠, 순위 기반, 공유 기반 선택 연산을 각각 구현하고 비교 실험하여 토너먼트 선택을 채택했습니다.',
      '돌연변이율 실험(0.01~0.5)을 통해 0.1일 때 약 47% 개선으로 가장 좋은 성능을 보이는 것을 확인했습니다.',
      '세대가 진행될수록 돌연변이율을 높이는 동적 설계를 적용해 로컬 옵티멈 탈출을 개선했습니다.',
      '강화학습 기반 TSP 최적화에서 Value Iteration을 구현해 약 40회 반복 후 거리 27.178로 수렴시켰습니다.',
      'TD Q-Learning과 Monte Carlo Q-Learning을 비교 실험하여 TD 방식이 더 안정적으로 수렴함을 확인했습니다.',
      'DQN을 직접 구현했으나 상태·행동 공간의 기하급수적 팽창으로 최적화에 실패했고, 샘플 효율성 부족과 단기 보상 설계의 한계를 분석했습니다.',
    ],
  },
  {
    name: '숭실대학교 운영체제 과제 — xv6 커널 수정',
    category: '학교',
    domainCategories: [],
    organization: '숭실대학교',
    period: '2023년 2학기',
    role: '개인',
    contribution:
      'xv6의 시스템 콜·스케줄러·메모리 관리 영역을 직접 수정하며 프로세스 실행과 Copy-on-Write의 동작을 구현하고 검증했습니다.',
    summary:
      'xv6 커널을 직접 수정하며 시스템 콜 등록, 프로세스 스케줄링, Copy-on-Write까지 운영체제 내부 동작을 구현했습니다.',
    techStack: ['C', 'xv6', 'Operating System', 'Kernel'],
    highlights: [
      'forknexec 시스템 콜 번호와 사용자 스텁, 커널 디스패치 테이블을 연결하고 proc.c에서 자식 프로세스 생성과 프로그램 적재가 한 호출로 이어지도록 구현했습니다.',
      '프로세스 구조체에 우선순위와 실행 횟수 정보를 추가하고 스케줄러가 runnable 프로세스를 순회하면서 우선순위가 높고 실행 횟수가 적은 대상을 선택하도록 수정했습니다.',
      '동일 우선순위 프로세스에는 실행 횟수를 함께 비교하는 규칙을 적용해 특정 프로세스가 계속 선택되거나 장기간 대기하는 starvation을 완화했습니다.',
      'fork 시 물리 페이지를 즉시 복제하지 않고 부모·자식 페이지 테이블이 읽기 전용 페이지를 공유하도록 변경했으며, 참조 수를 관리해 페이지 해제 시점을 제어했습니다.',
      '쓰기 page fault가 발생하면 원본 내용을 새 페이지로 복사하고 해당 프로세스의 PTE를 쓰기 가능하게 교체하는 Copy-on-Write 처리 경로를 구현했습니다.',
    ],
  },
];

export const links = {
  github: 'https://github.com/indianaPoly',
  'hyeonlimgo5@gmail.com': 'mailto:hyeonlimgo5@gmail.com',
};

export type Project = (typeof projects)[number];

export const resumeProjectNames = [
  '바시 필라테스',
  '사내 콘솔 웹페이지',
  '사내 포털 서비스',
  'MYCMS',
  'AI 기반 HWP 문서 자동 작성 서비스 — 또박또박',
  '실시간 협업형 지식 공유 플랫폼 — Weekly Threads Study',
  '제주국제관악제 홈페이지',
  'Moazip',
  '동아·동서 글로컬 연합대학 홈페이지',
  'sLM을 활용한 분석 투자 솔루션',
  '블록체인 기반 데이터 저장 구조 설계',
] satisfies readonly Project['name'][];

export const portfolioProjectNames = projects.map(
  (project) => project.name
) satisfies readonly Project['name'][];

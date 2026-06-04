export const projectCategories = [
  '전체',
  '실무 및 인턴',
  '학교',
  '사이드 프로젝트',
  '외부 활동',
] as const;

export const projects = [
  {
    name: '실시간 협업형 지식 공유 플랫폼 — Weekly Threads Study',
    category: '사이드 프로젝트',
    organization: '개인 프로젝트',
    period: '2026.05',
    role: '프론트엔드 및 서버리스 풀스택 개발',
    summary:
      '팀 내 아이디어, 회의 주제, 회고 내용을 하나의 흐름으로 모으고 논의할 수 있는 실시간 협업 플랫폼을 개발했습니다.',
    techStack: [
      'React',
      'TypeScript',
      'TanStack Start',
      'TanStack Router',
      'Server-Sent Events',
      'Tauri',
      'Playwright',
      'SCSS Module',
    ],
    highlights: [
      '주제 작성, 댓글 참여, 실시간 세션, 결과 아카이브로 이어지는 협업 흐름을 설계해 단순 게시판이 아닌 지속적인 지식 공유 경험을 구현했습니다.',
      'TanStack Start 기반 서버 함수 구조를 활용해 인증, 주제 작성, 세션 제어, 댓글·인사이트 저장 등 주요 동작을 타입 안정성이 있는 API 흐름으로 구성했습니다.',
      'Server-Sent Events를 도입해 여러 사용자가 동시에 참여하는 세션에서 상태, 댓글, 인사이트가 실시간에 가깝게 반영되도록 구현했습니다.',
      '프로젝트 단위로 관련 주제와 결과를 묶어 볼 수 있는 작업공간을 구현해 논의가 일회성으로 끝나지 않고 이후 참고 가능한 지식 자산으로 남도록 구성했습니다.',
      'Tauri 기반 데스크탑 실행 환경과 알림 기능을 연동해 웹 기반 서비스를 데스크탑 사용 흐름까지 확장했습니다.',
      'Playwright E2E 테스트로 주제 작성, 권한별 세션 참여, 실시간 동기화, 결과 확인, 삭제 흐름까지 주요 사용자 시나리오를 검증했습니다.',
    ],
  },
  {
    name: 'AI 기반 HWP 문서 자동 작성 서비스 — 또박또박',
    category: '외부 활동',
    organization: 'AI Hack Camp 2026',
    period: '2026.05',
    role: '프론트엔드 및 WebAssembly 개발',
    summary:
      '공공기관 HWP 문서 작성 과정의 접근성 문제를 해결하기 위해, AI 대화형 입력 기반 문서 자동 작성 서비스를 구현했습니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Rust',
      'WebAssembly',
      'Web Audio API',
      'Tesseract.js',
    ],
    highlights: [
      'HWP Schema를 기반으로 질문 흐름이 동적으로 변하는 채팅형 입력 인터페이스를 설계해 문서 작성 과정을 단계형 UX로 단순화했습니다.',
      'Rust 기반 WebAssembly 모듈을 구현해 브라우저에서 음성 데이터를 직접 전처리하도록 구성하고, 무음 기반 발화 분리(VAD), WAV 인코딩, RMS 계산을 클라이언트에서 처리했습니다.',
      'AudioWorklet과 Web Audio API를 활용해 실시간 PCM 스트림 처리 및 음성 레벨 시각화를 구현하고, 분리된 음성 청크를 STT 서버와 연동했습니다.',
      '손글씨 입력 기능과 OCR 전처리 파이프라인을 구현해 키보드 입력이 어려운 사용자도 문서를 작성할 수 있도록 접근성을 확장했습니다.',
      '모바일 환경에서 발생한 file input·touch event·animation 충돌 문제를 해결하며 실제 시연 가능한 수준으로 UX를 안정화했습니다.',
    ],
    links: [
      {
        label: '뉴스 기사',
        url: 'https://n.news.naver.com/mnews/article/016/0002645434?sid=105',
      },
    ],
  },
  {
    name: 'Moazip',
    category: '실무 및 인턴',
    organization: '(주)데브파이브',
    period: '2026.03 - 2026.04',
    role: 'macOS 앱 개발',
    summary:
      'macOS에서 생성된 한글 파일명이 Windows에서 자모 단위로 깨지는 문제를 해결하기 위해 만든 macOS 앱입니다.',
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
    organization: '(주)데브파이브',
    period: '2026.01 - 2026.04',
    role: '웹 풀스택 개발자',
    summary:
      '동아·동서 글로컬 연합대학을 소개하는 홈페이지와 관리자 시스템을 만들었습니다.',
    techStack: [
      'Rust',
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Kubernetes',
      'GitHub Actions',
      'Argo CD',
      'PostgreSQL',
    ],
    highlights: [
      '통합 검색 기능을 문자열 비교에서 정보 검색 문제로 재정의하고, bi-gram과 bitset 역색인을 직접 구현해 불필요한 비교 연산을 줄였습니다.',
      '위치 변동 가능성을 고려해 캠퍼스 좌표를 상대 좌표로 모델링하고, 관리자 수정만으로 반영되도록 설계했습니다.',
      'Kubernetes 환경에서 frontend, admin, API, postgres를 분리해 구성하고, GitHub Actions 기반 CI와 Argo CD를 연결해 배포 자동화 흐름을 구축했습니다.',
      '인프라팀과 협업하면서 Kubernetes와 Argo CD를 직접 공부했고, 이후 필요한 내용을 정리해서 질문하며 배포 흐름을 명확하게 만들었습니다.',
      '클라이언트가 요청한 스크롤 기반 애니메이션이 사용자 경험을 저하시킨다는 점을 근거로 설득하며 더 나은 홈페이지 방향을 제안했습니다.',
    ],
  },
  {
    name: '제주국제관악제 홈페이지',
    category: '실무 및 인턴',
    organization: '(주)데브파이브',
    period: '2026.01 - 2026.05',
    role: '웹 풀스택 개발자',
    summary:
      '제주국제관악제 및 콩쿠르 운영을 위한 홈페이지와 관리자 시스템을 만들었습니다.',
    techStack: ['Rust', 'Next.js 16', 'React 19', 'TypeScript', 'S3'],
    highlights: [
      '기존 데이터를 마이그레이션하며 불필요한 컬럼과 중복 데이터를 정리했습니다.',
      '멀티스텝 신청 폼에서 step 간 의존 데이터가 서로 덮어써지는 문제를 해결하기 위해 자동 동기화 필드와 사용자 입력 보존 필드를 분리한 상태 병합 로직을 만들었습니다.',
      'DB 정보와 S3 첨부 파일을 함께 정리해야 하는 삭제 흐름에서, 더 중요한 데이터인 DB를 먼저 안정적으로 삭제하고 파일은 후속 정리하는 방식으로 오류 가능성을 줄였습니다.',
      '도메인이 낯선 상태에서는 구현보다 어떤 페이지와 데이터가 실제로 필요한지 먼저 정의하는 게 더 중요하다는 걸 배웠습니다.',
      'DB를 과하게 정규화하면 구조는 깔끔해지지만 복잡도가 올라갈 수 있어, 일부 중복을 허용하더라도 운영 안정성을 유지하는 방향이 더 현실적인 선택일 수 있음을 경험했습니다.',
    ],
    links: [
      {
        label: '사이트',
        url: 'https://jiwef.org',
      },
    ],
  },
  {
    name: '쉬운 글 작성 - 온글 landing 페이지',
    category: '실무 및 인턴',
    organization: '(주)데브파이브',
    period: '2025.09 - 2025.11',
    role: '웹 프론트엔드 개발',
    summary:
      '공공기관 안내문, 전문 문서처럼 이해하기 어려운 정보를 쉽게 변환해 정보 접근성을 높이기 위한 서비스의 랜딩 페이지를 개발했습니다.',
    techStack: ['Next.js 16', 'React', 'TypeScript', 'react-joyride', 'Vitest'],
    highlights: [
      '체험 페이지에서 원문과 변환 결과를 비교할 수 있는 인터페이스를 구현했습니다.',
      '다크 모드와 react-joyride 기반 튜토리얼 기능을 추가했습니다.',
      'Vitest coverage 100%를 유지했습니다.',
    ],
  },
  {
    name: 'NH 올원뱅크 캐시백 쿠폰몰 결제 및 프로모션 페이지',
    category: '실무 및 인턴',
    organization: '(주)데브파이브',
    period: '2025.09 - 2025.11',
    role: '웹 프론트엔드 개발',
    summary:
      'NH 올원뱅크 캐시백 쿠폰몰의 결제 및 프로모션 페이지를 개발했습니다.',
    techStack: ['Next.js', 'React', 'TypeScript'],
    highlights: [
      'Safari iOS 환경에서 PG 결제가 앱 정책과 충돌하는 문제를 마주했고, 정책을 변경하기보다 가능한 구현 범위를 중심으로 결제 플로우를 구성했습니다.',
      '입력 단계가 많은 화면에서 사용자 입력 흐름이 끊기는 문제를 인지하고, input focus 로직을 컴포넌트화하여 결제 경험의 일관성을 개선했습니다.',
    ],
  },
  {
    name: '탈중앙화 거래소 차익거래 모니터링 시스템',
    category: '실무 및 인턴',
    organization: 'BlockwaveLabs',
    period: '2024.06 - 2024.08',
    role: 'Node.js 개발자',
    summary:
      '여러 네트워크의 탈중앙화 거래소 데이터를 기반으로 차익거래 기회를 탐색하는 모니터링 시스템을 개발했습니다.',
    techStack: ['Node.js'],
    highlights: [
      '병렬 프로세스 테스트를 진행하고 무료 계층에서 사용할 수 있는 최적화 값을 도출했습니다.',
      '차익거래 사이클링 알고리즘을 개발해 600ms 내 결과값이 만들어지도록 최적화했습니다.',
      '다양한 네트워크에서 작동할 수 있도록 코드를 모듈화했습니다.',
    ],
  },
  {
    name: 'sLM(small language model)을 활용한 분석 투자 솔루션',
    category: '학교',
    organization: '교내 캡스톤 프로젝트',
    period: '2025년 1학기',
    role: '프론트엔드 개발',
    summary:
      '실시간 데이터 시각화에서 발생하는 불필요한 연산을 최소화하고, 사용자에게 필요한 정보만 안정적으로 전달했습니다.',
    techStack: ['React', 'SWR', 'TypeScript'],
    highlights: [
      '불필요한 리렌더링을 줄이기 위해 Y축 범위를 현재 가격 기준 ±0.1%로 제한하고, useMemo를 활용해 의미 있는 변화에만 차트가 갱신되도록 개선했습니다.',
      '실시간 데이터 갱신 과정에서 의미 없는 요청과 상태 변경이 반복되는 문제를 해결하기 위해, SWR의 조건부 패칭과 캐싱을 활용해 데이터 갱신 시점을 정리했습니다.',
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
    organization: '교내 캡스톤 프로젝트',
    period: '2024년 2학기',
    role: '프론트엔드 및 스마트컨트랙트 개발',
    summary:
      '사용자 진입 장벽을 낮추기 위해 비용 부담과 보안 리스크를 함께 고려한 데이터 저장 구조를 설계했습니다.',
    techStack: ['Solidity', 'EIP-712', 'React', 'TypeScript'],
    highlights: [
      '데이터 등록 시 발생하는 가스비가 사용자 진입 장벽이 될 수 있다고 판단해, 사용자는 서명만 수행하고 트랜잭션은 대리 실행되도록 구조를 설계했습니다.',
      '의료 데이터의 프라이버시 침해와 연산 비용 문제를 함께 고려해, 온체인에는 암호화된 데이터만 저장하도록 역할을 분리했습니다.',
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
    organization: '숭실대학교',
    period: '2024년 1학기',
    role: '팀원',
    summary:
      'TSP 문제를 대상으로 유전 알고리즘과 강화학습 기반 접근을 직접 구현하고, 선택 연산·돌연변이율·학습 방식에 따른 최적화 성능을 비교했습니다.',
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
    organization: '숭실대학교',
    period: '2023년 2학기',
    role: '개인',
    summary:
      'xv6 커널을 직접 수정하며 시스템 콜 등록, 프로세스 스케줄링, Copy-on-Write까지 운영체제 내부 동작을 구현했습니다.',
    techStack: ['C', 'xv6', 'Operating System', 'Kernel'],
    highlights: [
      'forknexec 시스템 콜을 syscall 등록부터 proc.c 구현까지 xv6 커널에 직접 구현했습니다.',
      '우선순위 기반 스케줄러를 구현하고, 동일 우선순위에서는 실행 횟수가 적은 프로세스를 먼저 실행해 starvation을 방지했습니다.',
      'Copy-on-Write를 구현해 fork 시 페이지를 공유하고, write 시점의 page fault를 통해 새 페이지를 할당하도록 커널을 수정했습니다.',
    ],
  },
];

export const links = {
  github: 'https://github.com/indianaPoly',
  'hyeonlimgo5@gmail.com': 'mailto:hyeonlimgo5@gmail.com',
};

export type Project = (typeof projects)[number];
export type ProjectCategory = (typeof projectCategories)[number];

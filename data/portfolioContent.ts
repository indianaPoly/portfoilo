export const profileIntro = [
  '개발 이야기를 나누며 문제를 함께 고민하는 과정을 중요하게 생각합니다.',
  '학부 시절 교내 동아리와 프로젝트를 통해 많은 사람들과 소통하는 방법을 길러왔고, 현재 조직에서도 더 나은 의사결정을 위해 의견을 적극적으로 나누고 있습니다.',
  '일상의 흐름을 구조화하고 루틴으로 만드는 것을 좋아하며, 반복되는 일을 파이프라인으로 정리하고 관리하는 데 집중합니다.',
  'JIRA와 같은 도구를 활용해 루틴을 습관으로 만들고, 팀이 공통된 흐름을 유지하도록 돕고 있습니다.',
];

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Solidity',
  'Hardhat',
  'Docker',
  'Framer Motion',
  'Lenis',
];

export const experiences = [
  {
    company: 'DEVFIVE (프리랜서)',
    period: '경력 신입',
    projects: [
      {
        name: 'NH 올원뱅크 캐시백 쿠폰몰',
        summary:
          '결제 정책을 지키면서 안정적인 흐름을 만드는 데 집중한 프로젝트',
        highlights: [
          'PG 결제 요청부터 승인·실패 처리까지 전체 흐름을 정리하고 화면 구조를 설계했습니다.',
          'Safari iOS 환경에서 앱 정책과 충돌하는 문제를 정책 변경 없이 해결 가능한 흐름으로 재구성했습니다.',
          'AI를 활용해 다양한 오류 케이스를 도출하고 예외 처리 로직을 강화했습니다.',
          '입력 단계가 많은 화면에서 focus 흐름을 컴포넌트화하여 결제 경험의 일관성을 높였습니다.',
        ],
      },
      {
        name: '온글 - 쉬운 글 작성 랜딩 페이지',
        summary: '서비스 이해를 높이는 인터랙션과 재사용 가능한 구조 설계',
        highlights: [
          '첫 진입 경험을 위해 Framer Motion 기반 인터랙션을 디자인 팀과 협업해 설계했습니다.',
          'tour 라이브러리로 단계별 가이드를 제공하여 초기 사용자 온보딩을 개선했습니다.',
          'Vitest 기반 테스트 커버리지를 100% 확보해 랜딩 품질을 보증했습니다.',
          '스크롤이 포함된 Box 제어 한계를 해결하기 위한 컴포넌트를 설계해 사내에 공유했습니다.',
        ],
      },
      {
        name: '사내 디자인 시스템 솔루션',
        summary: '공통 UI 컴포넌트 제작과 Figma Plugin 기반 생산성 향상',
        highlights: [
          '디자인 시스템에서 사용하는 공통 컴포넌트를 개발하고 문서화했습니다.',
          'Figma Plugin 활용 경험을 바탕으로 발견된 문제를 개선하며 협업 효율을 높였습니다.',
        ],
      },
    ],
  },
  {
    company: '교내 캡스톤 프로젝트 2',
    period: '졸업작품',
    projects: [
      {
        name: 'sLM(small language model)을 활용한 분석 투자 솔루션',
        summary: '실시간 데이터 시각화 성능 최적화',
        highlights: [
          '차트의 Y축 범위를 현재 가격 기준 ±0.1%로 제한하고 useMemo로 의미 있는 변화만 렌더링하도록 개선했습니다.',
          'SWR 조건부 패칭과 캐싱으로 불필요한 요청과 상태 변경을 줄여 데이터 갱신 시점을 정리했습니다.',
        ],
        links: [
          {
            label: '소스 코드',
            url: 'https://github.com/stock-condition-analysis/stock-condition-analysis-client',
          },
          { label: '작동 영상', url: 'https://youtu.be/oyxFYajnHMU' },
        ],
      },
    ],
  },
  {
    company: '교내 캡스톤 프로젝트 1',
    period: '졸업작품',
    projects: [
      {
        name: '블록체인 기반 데이터 저장 구조 설계',
        summary: '비용 부담과 보안 리스크를 낮추는 데이터 저장 구조',
        highlights: [
          '사용자는 서명만 수행하고 트랜잭션은 대리 실행되도록 설계해 가스비 부담을 줄였습니다.',
          '의료 데이터 프라이버시와 비용을 고려해 온체인에는 암호화된 데이터만 저장하도록 역할을 분리했습니다.',
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
          { label: '작동 영상', url: 'https://youtu.be/Xl-nIOAJ-r0' },
        ],
      },
    ],
  },
  {
    company: 'BlockwaveLabs (현장실습)',
    period: '실습',
    projects: [
      {
        name: '차익거래 자동 탐지 시스템',
        summary: '최소 비용으로 수익 기회를 탐색하는 자동화',
        highlights: [
          'child_process 기반 병렬 구조로 API 요청 한도 내 처리량을 최대화했습니다.',
          '깊이 제한 DFS와 우선순위 기준을 적용해 수익 가능 후보를 600ms 이내에 도출하도록 최적화했습니다.',
        ],
      },
    ],
  },
];

export const education = {
  school: '숭실대학교 소프트웨어학부 졸업',
  activities: [
    'Google Developer Group In Soongsil에서 블록체인 스터디 기획 및 운영',
    'Cycling 차익거래 탐지 로직 세미나 진행',
    'Yourssu 동아리 홈페이지를 Gatsby 기반 정적 페이지로 전환하여 유지 비용 최적화',
  ],
};

export const awards = [
  '정보처리기사',
  '2024년도 창의적공학설계 전시회 장려상 (아두이노 기반 스마트 우회전 횡단보도)',
];

export const links = {
  github: 'https://github.com/indianaPoly',
  emamil: 'mailto:hyeonlimgo5@gmail.com',
};

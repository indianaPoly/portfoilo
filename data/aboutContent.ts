export interface ProfileTimelineItem {
  date: string;
  title: string;
  category: string;
  meta?: string;
  items: string[];
}

export const profile = {
  name: '고현림',
  headline: '프론트엔드와 제품 문제 해결을 함께 다루는 개발자',
  summary:
    '더 좋은 팀이 어떻게 만들어지는지 고민하고 있습니다.\n열린 커뮤니케이션과 협업을 추구하며 함께 성장하고자 합니다.',
  email: 'hyeonlimgo5@gmail.com',
  github: 'https://github.com/indianaPoly',
  website: 'https://www.poly-journal.xyz',
  skills: ['React', 'TypeScript', 'Next.js', 'Rust'],
};

export const timelineItems: ProfileTimelineItem[] = [
  {
    date: '2019.03 - 2022.06',
    title: '숭실대학교 기계공학부',
    category: 'Education',
    meta: '입학',
    items: ['성적 장학금(25%)을 1회 수상했습니다.'],
  },
  {
    date: '2022.10',
    title: '2022 슈퍼스타 창업경진대회',
    category: 'Award',
    meta: '최우수상(숭실대학교 총장)',
    items: [
      '중소기업 대상 온실가스 측정 솔루션 개발 프로젝트에서 열·기체 기반 연료 사용 데이터를 활용한 탄소 배출량 산정 알고리즘을 설계·구현했습니다.',
      '탄소 배출량을 시각화하는 대시보드 UI를 개발하여 데이터 기반 환경 지표 관리 시스템 구축에 기여했습니다.',
    ],
  },
  {
    date: '2023 - 2024',
    title: 'Yourssu',
    category: 'Activity',
    items: [
      '동아리 홈페이지를 Gatsby를 활용해 정적 페이지로 개발하고 운영했습니다.',
      'Effective TypeScript 등의 스터디를 진행하며 타입 안정성과 코드 품질 기준을 함께 학습했습니다.',
    ],
  },
  {
    date: '2024 - 2025',
    title: 'GDG in Soongsil',
    category: 'Activity',
    items: [
      'Mastering Ethereum 기반 스터디를 기획·운영하며 비트코인 백서와 비잔틴 장군 문제를 중심으로 블록체인 핵심 개념을 정리했습니다.',
      'Cycling 차익거래 탐지 로직을 주제로 세미나를 진행하며 알고리즘 구조와 최적화 관점을 공유했습니다.',
      'Google Solution Challenge에서 청각장애 부모의 자녀(CODA) 학습앱 Flutter MVP 제작에 참여했습니다.',
    ],
  },
  {
    date: '2024.12',
    title: '2024년도 창의적공학설계 전시회',
    category: 'Award',
    meta: '장려상(숭실대학교 소프트웨어학부 학부장)',
    items: [
      '아두이노 기반 우회전 스마트 횡단보도 시스템 개발 프로젝트에서 프로젝트 리딩을 맡았습니다.',
      '실시간 차량 감지 알고리즘을 설계·검증하고, WebRTC 기반 CCTV 스트리밍 기능을 구현하여 교차로 안전 관리 시스템 구축에 기여했습니다.',
    ],
  },
  {
    date: '2023.01 - 2025.08',
    title: '숭실대학교 소프트웨어학부',
    category: 'Education',
    meta: '졸업 · 총 학점 3.81',
    items: [
      '성적 장학금(50%)을 1회 수상했습니다.',
      '캡스톤종합프로젝트1, 캡스톤종합프로젝트2 외 6개 팀 프로젝트에서 팀장을 맡아 협업 방식과 일정 관리 경험을 쌓았습니다.',
    ],
  },
  {
    date: '2025.12',
    title: '정보처리기사',
    category: 'Certificate',
    items: ['정보처리기사 자격을 취득했습니다.'],
  },
  {
    date: '2026.05',
    title: '2026 AI HACK CAMP',
    category: 'Award',
    meta: '부총리 및 과학기술정보통신부장관상(대상)',
    items: [
      "프로젝트 '또박또박'에서 프론트엔드 및 WebAssembly 개발을 담당했습니다.",
      'Rust 기반 음성 전처리 모듈과 HWP Schema 기반 동적 입력 시스템을 설계·구현했습니다.',
      'Next.js 기반으로 HWP 업로드부터 AI 대화형 입력, 문서 생성·다운로드까지 이어지는 전체 사용자 플로우를 구축했습니다.',
    ],
  },
];

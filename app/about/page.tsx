import NextLink from 'next/link';

import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import type { Metadata } from 'next';

import {
  AboutTimeline,
  type AboutTimelineItem,
} from '../../components/pages/about/AboutTimeline';
import { aboutMetadata } from '../../data/static/meta-data/about.meta-data';

export const metadata: Metadata = aboutMetadata;

const skills = ['React', 'TypeScript', 'Next.js', 'Rust'];

const timelineItems: AboutTimelineItem[] = [
  {
    date: '2019.03 - 2022.06',
    title: '숭실대학교 기계공학부',
    category: 'Education',
    meta: '입학',
    items: ['성적 장학금을 1회 수상했습니다.'],
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
      '동아리 홈페이지를 Gatsby를 활용해 정적 페이지로 개발했습니다.',
      'Effective TypeScript 등의 스터디를 진행했습니다.',
    ],
  },
  {
    date: '2024 - 2025',
    title: 'GDG in Soongsil',
    category: 'Activity',
    items: [
      'Mastering Ethereum 기반 스터디를 기획·운영하며, 비트코인 백서와 비잔틴 장군 문제를 중심으로 블록체인을 학습했습니다.',
      'Cycling 차익거래 탐지 로직을 주제로 세미나를 진행하며 학습 내용을 공유했습니다.',
      'Google Solution Challenge에 참여하여 청각장애 부모의 자녀(CODA) 학습앱 Flutter MVP 작업을 진행했습니다.',
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
      '성적 장학금(25%)을 2회 수상했습니다.',
      '성적 장학금(50%)을 1회 수상했습니다.',
      '캡스톤종합프로젝트1, 캡스톤종합프로젝트2 외 6개 팀 프로젝트에서 팀장을 맡아 협업하는 방식을 배웠습니다.',
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

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      px="14px"
      py="7px"
      borderRadius="999px"
      bg="brand.50"
      color="brand.700"
      fontSize="15px"
      fontWeight="600"
      letterSpacing="-0.03em"
      lineHeight="1"
    >
      {children}
    </Box>
  );
}

export default function AboutPage() {
  return (
    <VStack align="stretch" gap={{ base: 12, md: 16 }}>
      <VStack align="stretch" gap={5} maxW="920px" pt={{ base: 4, md: 5 }}>
        <Text
          fontSize="13px"
          fontWeight="600"
          color="brand.700"
          letterSpacing="-0.02em"
        >
          About
        </Text>

        <VStack align="stretch" gap={3}>
          <Heading
            as="h1"
            fontSize={{ base: '34px', md: '46px' }}
            fontWeight="700"
            color="ink.900"
            letterSpacing="-0.06em"
            lineHeight="1.12"
          >
            고현림
          </Heading>
          <Text
            maxW="780px"
            fontSize={{ base: '16px', md: '20px' }}
            color="ink.700"
            lineHeight="1.82"
            letterSpacing="-0.04em"
          >
            React, TypeScript, Next.js, Rust를 중심으로 제품을 만들고, 팀
            프로젝트와 실무 경험을 통해 문제를 정의하고 함께 해결하는 방식을
            배워왔습니다.
          </Text>
        </VStack>

        <HStack gap={4} flexWrap="wrap">
          <Link
            as={NextLink}
            href="mailto:hyeonlimgo5@gmail.com"
            display="inline-block"
            color="brand.700"
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight="600"
            letterSpacing="-0.03em"
            transition="color 180ms ease, transform 180ms ease"
            _hover={{ color: 'brand.800', textDecoration: 'none' }}
            _active={{ transform: 'scale(0.95)' }}
          >
            hyeonlimgo5@gmail.com
          </Link>
        </HStack>

        <Wrap spacing={2} pt={1}>
          {skills.map((skill) => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </Wrap>
      </VStack>

      <VStack align="stretch" gap={5}>
        <VStack align="stretch" gap={1}>
          <Heading
            as="h2"
            fontSize={{ base: '24px', md: '30px' }}
            fontWeight="700"
            color="ink.900"
            letterSpacing="-0.05em"
          >
            쌓아온 과정
          </Heading>
        </VStack>

        <AboutTimeline items={timelineItems} />
      </VStack>
    </VStack>
  );
}

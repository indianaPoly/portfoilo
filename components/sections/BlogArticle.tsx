'use client';

import { Badge, Heading, Stack, Text, UnorderedList, ListItem, VStack, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const MotionStack = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const paragraphs = [
  '새로운 프로젝트를 시작하기 전에 사용자가 어떤 맥락에서 들어와 무엇을 기대하는지 먼저 그립니다. 흐름이 명확해지면 기능 우선순위가 자연스럽게 드러납니다.',
  '이번 포트폴리오에서는 Chakra UI로 토큰과 레이아웃을 정리하고, Framer Motion으로 리프트·페이드를 더해 섹션 전환을 매끄럽게 만들었습니다.',
  'Lenis로 스크롤 속도를 일정하게 가져가면 모션이 의도한 속도로 이어져 프레이밍을 전달하기 쉽습니다. 작은 인터랙션 하나도 사용성을 깨지 않도록 조정했습니다.',
  '결국 좋은 포트폴리오는 스스로에 대한 스토리텔링입니다. 무엇을 해결했는지, 왜 그렇게 만들었는지, 그리고 앞으로 어떤 경험을 만들고 싶은지를 담백하게 적어보려 합니다.',
];

export default function BlogArticle() {
  return (
    <Stack spacing={4} pt={{ base: 6, md: 10 }}>
      <Badge colorScheme="brand" alignSelf="flex-start" borderRadius="full" px={3} py={1}>
        Blog
      </Badge>
      <MotionStack
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading as="h1" size="xl" letterSpacing="-0.02em" mb={4}>
          디자인 시스템과 모션이 만났을 때
        </Heading>
        <VStack align="start" spacing={4} color="whiteAlpha.800" lineHeight={1.8} fontSize="lg">
          {paragraphs.map((text) => (
            <Text key={text}>{text}</Text>
          ))}
        </VStack>
        <Heading as="h2" size="md" letterSpacing="-0.01em" mt={8} mb={3}>
          다음 단계
        </Heading>
        <UnorderedList spacing={3} color="whiteAlpha.800">
          <ListItem>프로토타입 접근성 테스트 루틴 추가</ListItem>
          <ListItem>모션 프리셋을 토큰화해 Chakra 테마로 확장</ListItem>
          <ListItem>콘텐츠 퍼포먼스를 측정해 스크롤 패턴 최적화</ListItem>
        </UnorderedList>
      </MotionStack>
    </Stack>
  );
}

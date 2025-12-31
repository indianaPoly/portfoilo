"use client";

import { chakra, Flex, Heading, Stack, Text, Button, Badge, SimpleGrid, Box, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {
  return (
    <Stack spacing={{ base: 10, md: 12 }} mt={{ base: 4, md: 6 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 10 }} alignItems="center">
        <Stack spacing={5}>
          <Badge colorScheme="brand" alignSelf={{ base: 'flex-start', md: 'flex-start' }} borderRadius="full" px={3} py={1}>
            Next.js 16 준비 완료 · Chakra UI
          </Badge>
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Heading as="h1" size="2xl" letterSpacing="-0.03em" lineHeight={1.1}>
              담백하지만 모션이 살아있는 포트폴리오
            </Heading>
          </MotionBox>
          <Text color="whiteAlpha.800" fontSize="lg" lineHeight={1.7}>
            Chakra UI와 Lenis, Framer Motion을 결합해 부드러운 흐름을 가진 두 페이지 포트폴리오를 만들었습니다.
            협업과 루틴을 중시하는 개발자의 이야기를 명료하게 전합니다.
          </Text>
          <Flex gap={3} wrap="wrap">
            <Button as="a" href="#projects" colorScheme="brand" size="md" borderRadius="full">
              프로젝트 보기
            </Button>
            <Button as="a" href="#about" variant="outline" colorScheme="brand" size="md" borderRadius="full">
              소개 읽기
            </Button>
          </Flex>
        </Stack>
        <MotionBox
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            aspectRatio="1 / 1"
            bgGradient="conic-gradient(from 120deg at 50% 50%, rgba(124,108,255,0.22), rgba(74,210,203,0.35), rgba(124,108,255,0.22))"
            display="grid"
            placeItems="center"
            boxShadow="0 20px 60px rgba(0,0,0,0.4)"
            maxW={{ base: '320px', md: '360px' }}
            mx={{ base: 'auto', md: 'unset' }}
          >
            <Stack spacing={2} textAlign="center">
              <Badge colorScheme="brand" variant="subtle" alignSelf="center" px={3} py={1}>
                Motion & Routine
              </Badge>
              <Heading as="h3" size="md">UX Frontend Developer</Heading>
              <Text color="whiteAlpha.800">프론트엔드 · 인터랙션</Text>
            </Stack>
          </Box>
        </MotionBox>
      </SimpleGrid>
    </Stack>
  );
}

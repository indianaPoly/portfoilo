"use client";

import { Badge, Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { MotionBox } from '../motion/MotionPrimitives';
import { cardRise, headingReveal } from '../motion/variants';

export default function Contact() {
  return (
    <Box id="contact" textAlign="center" mt={{ base: 12, md: 16 }}>
      <MotionBox
        variants={cardRise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        mx="auto"
        maxW="480px"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="xl"
        p={8}
        bg="whiteAlpha.50"
        backdropFilter="blur(8px)"
        boxShadow="lg"
        style={{ transformPerspective: 900 }}
      >
        <MotionBox variants={headingReveal}>
          <Badge colorScheme="brand" borderRadius="full" px={3} py={1} mb={2}>
            함께 만들 이야기
          </Badge>
          <Heading as="h3" size="md" letterSpacing="-0.01em" mb={3}>
            새로운 프로젝트가 있으신가요?
          </Heading>
        </MotionBox>
        <MotionBox variants={headingReveal}>
          <Text color="whiteAlpha.800" mb={6} lineHeight={1.6}>
            사용자 경험을 함께 설계하고 싶습니다. 가벼운 아이디어라도 편하게 알려주세요.
          </Text>
        </MotionBox>
        <MotionBox variants={headingReveal}>
          <Stack direction={{ base: 'column', sm: 'row' }} justify="center" spacing={3}>
            <Button as="a" href="mailto:hello@example.com" colorScheme="brand" borderRadius="full">
              메일 보내기
            </Button>
            <Button as="a" href="https://github.com/indianaPoly" target="_blank" rel="noreferrer" variant="outline" colorScheme="brand" borderRadius="full">
              GitHub 살펴보기
            </Button>
          </Stack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

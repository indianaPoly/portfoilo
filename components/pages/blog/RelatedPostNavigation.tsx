import NextLink from 'next/link';

import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import type { PostListItem } from '../../../lib/posts';

export interface RelatedPostNavigationProps {
  category?: string;
  previous: PostListItem | null;
  next: PostListItem | null;
}

function RelatedPostCard({
  label,
  post,
  align = 'start',
}: {
  label: string;
  post: PostListItem | null;
  align?: 'start' | 'end';
}) {
  if (!post) {
    return (
      <VStack
        align={align}
        justify="center"
        minH="124px"
        p={{ base: 5, md: 6 }}
        border="1px solid"
        borderColor="line.100"
        borderRadius="20px"
        bg="paper.50"
      >
        <Text
          fontSize="13px"
          fontWeight="500"
          color="ink.400"
          letterSpacing="-0.02em"
        >
          {label}
        </Text>
        <Text
          fontSize={{ base: '15px', md: '16px' }}
          fontWeight="500"
          color="ink.400"
          letterSpacing="-0.03em"
        >
          이어지는 글이 없습니다
        </Text>
      </VStack>
    );
  }

  return (
    <NextLink href={`/blog/${post.slug}`}>
      <VStack
        align={align}
        justify="space-between"
        minH="124px"
        p={{ base: 5, md: 6 }}
        border="1px solid"
        borderColor="line.100"
        borderRadius="20px"
        bg="paper.50"
        transition="background-color 180ms ease, border-color 180ms ease, transform 180ms ease"
        _hover={{
          bg: 'paper.200',
          borderColor: 'paper.300',
          textDecoration: 'none',
        }}
        _active={{ transform: 'scale(0.95)' }}
        _focusVisible={{
          outline: '2px solid',
          outlineColor: 'brand.500',
          outlineOffset: '3px',
        }}
      >
        <Text
          fontSize="13px"
          fontWeight="500"
          color="ink.500"
          letterSpacing="-0.02em"
        >
          {label}
        </Text>

        <Text
          fontSize={{ base: '17px', md: '19px' }}
          fontWeight="650"
          color="ink.900"
          lineHeight="1.45"
          letterSpacing="-0.04em"
          textAlign={align === 'end' ? 'right' : 'left'}
          lineClamp={2}
        >
          {post.title}
        </Text>

        <HStack
          gap={2}
          color="ink.500"
          alignSelf={align === 'end' ? 'end' : 'start'}
        >
          <Text as="span" fontSize="13px" fontWeight="500">
            {post.date}
          </Text>
          <Text as="span" color="ink.300">
            ·
          </Text>
          <Text as="span" fontSize="13px" fontWeight="500">
            약 {post.readingMinutes}분 읽기
          </Text>
        </HStack>
      </VStack>
    </NextLink>
  );
}

export function RelatedPostNavigation({
  category,
  previous,
  next,
}: RelatedPostNavigationProps) {
  if (!previous && !next) return null;

  return (
    <Box
      as="section"
      pt={{ base: 8, md: 10 }}
      borderTop="1px solid"
      borderColor="line.100"
    >
      <VStack align="stretch" gap={4}>
        <VStack align="stretch" gap={1}>
          <Text
            fontSize="13px"
            fontWeight="600"
            color="brand.700"
            letterSpacing="-0.02em"
          >
            같은 카테고리의 글
          </Text>
          <Text
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight="700"
            color="ink.900"
            letterSpacing="-0.04em"
          >
            {category ? `${category} 글 더 읽기` : '이어지는 글 더 읽기'}
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          <RelatedPostCard label="이전 글" post={previous} />
          <RelatedPostCard label="다음 글" post={next} align="end" />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

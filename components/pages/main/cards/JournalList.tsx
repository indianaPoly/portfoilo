import NextLink from 'next/link';

import { Box, HStack, Text, VStack } from '@chakra-ui/react';

export interface JournalListProps {
  title: string;
  summary?: string;
  date: string;
  category: string;
  readingMinutes: number;
  href: string;
}

function formatKoreanDate(date: string): string {
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return date;

  return `${year}년 ${month.padStart(2, '0')}월 ${day.padStart(2, '0')}일`;
}

export function JournalList({
  title,
  summary,
  date,
  category,
  readingMinutes,
  href,
}: JournalListProps) {
  return (
    <NextLink href={href}>
      <VStack
        align="stretch"
        gap={{ base: 4, md: 5 }}
        w="full"
        py={{ base: 1, md: 2 }}
        transition="transform 180ms ease, opacity 180ms ease"
        _hover={{
          textDecoration: 'none',
          transform: 'translateX(3px)',
        }}
        _active={{ opacity: 0.72, transform: 'scale(0.95)' }}
      >
        <Text
          as="h2"
          fontSize={{ base: '23px', md: '30px' }}
          fontWeight="700"
          lineHeight="1.28"
          letterSpacing="-0.055em"
          color="ink.900"
        >
          {title}
        </Text>

        {summary ? (
          <Text
            fontSize={{ base: '16px', md: '22px' }}
            lineHeight="1.48"
            letterSpacing="-0.04em"
            color="ink.600"
            lineClamp={{ base: 3, md: 2 }}
          >
            {summary}
          </Text>
        ) : null}

        <HStack gap={{ base: 3, md: 4 }} flexWrap="wrap">
          <Box
            as="span"
            px="14px"
            py="5px"
            borderRadius="999px"
            bg="brand.50"
            color="brand.500"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight="650"
            letterSpacing="-0.03em"
            lineHeight="1"
          >
            {category}
          </Box>
          <Text
            as="span"
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight="500"
            color="ink.500"
            letterSpacing="-0.03em"
          >
            Poly
          </Text>
          <Text as="span" color="ink.300" fontSize="18px">
            ·
          </Text>
          <Text
            as="span"
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight="500"
            color="ink.500"
            letterSpacing="-0.03em"
          >
            {formatKoreanDate(date)}
          </Text>
          <Text as="span" color="ink.300" fontSize="18px">
            ·
          </Text>
          <Text
            as="span"
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight="500"
            color="ink.500"
            letterSpacing="-0.03em"
          >
            약 {readingMinutes}분 읽기
          </Text>
        </HStack>
      </VStack>
    </NextLink>
  );
}

import NextLink from 'next/link';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <VStack
      align="center"
      justify="center"
      gap={6}
      minH="60vh"
      textAlign="center"
    >
      <Text
        fontSize={{ base: '72px', md: '96px' }}
        fontWeight="900"
        color="brand.500"
        lineHeight="1"
        letterSpacing="-0.06em"
      >
        404
      </Text>

      <VStack gap={2}>
        <Heading
          as="h1"
          fontSize={{ base: '24px', md: '32px' }}
          fontWeight="700"
          color="ink.900"
          letterSpacing="-0.04em"
        >
          페이지를 찾을 수 없습니다
        </Heading>

        <Text
          fontSize={{ base: '16px', md: '18px' }}
          color="ink.600"
          lineHeight="1.7"
          letterSpacing="-0.03em"
          maxW="480px"
        >
          요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </Text>
      </VStack>

      <NextLink href="/">
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          px="24px"
          py="12px"
          borderRadius="14px"
          bg="brand.700"
          color="white"
          fontSize="16px"
          fontWeight="600"
          letterSpacing="-0.03em"
          transition="background-color 180ms ease, transform 180ms ease"
          _hover={{ bg: 'brand.800', textDecoration: 'none' }}
          _active={{ transform: 'scale(0.95)' }}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: 'brand.500',
            outlineOffset: '3px',
          }}
        >
          홈으로 돌아가기
        </Box>
      </NextLink>
    </VStack>
  );
}

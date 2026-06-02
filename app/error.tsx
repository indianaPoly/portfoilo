'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
        color="ink.400"
        lineHeight="1"
        letterSpacing="-0.06em"
      >
        오류
      </Text>

      <VStack gap={2}>
        <Heading
          as="h1"
          fontSize={{ base: '24px', md: '32px' }}
          fontWeight="700"
          color="ink.900"
          letterSpacing="-0.04em"
        >
          문제가 발생했습니다
        </Heading>

        <Text
          fontSize={{ base: '16px', md: '18px' }}
          color="ink.600"
          lineHeight="1.7"
          letterSpacing="-0.03em"
          maxW="480px"
        >
          일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
        </Text>
      </VStack>

      <Box
        as="button"
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
        border="none"
        cursor="pointer"
        transition="background-color 180ms ease, transform 180ms ease"
        _hover={{ bg: 'brand.800' }}
        _active={{ transform: 'scale(0.95)' }}
        _focusVisible={{
          outline: '2px solid',
          outlineColor: 'brand.500',
          outlineOffset: '3px',
        }}
        onClick={reset}
      >
        다시 시도
      </Box>
    </VStack>
  );
}

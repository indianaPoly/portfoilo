'use client';

import { Box } from '@chakra-ui/react';

export function SkipNavigation() {
  return (
    <Box
      as="a"
      href="#main-content"
      position="fixed"
      top="-100px"
      left="16px"
      zIndex={9999}
      px={4}
      py={3}
      bg="brand.700"
      color="white"
      fontSize="14px"
      fontWeight="600"
      borderRadius="0 0 12px 12px"
      transition="top 200ms ease"
      _focus={{
        top: '0',
        outline: '2px solid',
        outlineColor: 'brand.500',
        outlineOffset: '2px',
      }}
    >
      본문 바로가기
    </Box>
  );
}

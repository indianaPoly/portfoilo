'use client';

import { ChakraProvider } from '@chakra-ui/react';

import system from '@/lib/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}

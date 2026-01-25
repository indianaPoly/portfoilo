'use client';

import { useMemo } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button, HStack, Text, VStack } from '@chakra-ui/react';

export interface TabProps {
  categories: string[];
  selectedCategory: string;
  variant: 'mobile' | 'desktop';
}

export function Tab({ categories, selectedCategory, variant }: TabProps) {
  const router = useRouter();
  const pathname = usePathname();

  const normalizedCategories = useMemo(() => {
    return Array.from(new Set(categories.filter(Boolean)));
  }, [categories]);

  const push = (params: URLSearchParams) => {
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const onSelectCategory = (category: string) => {
    const params = new URLSearchParams();
    if (category && category !== '전체') params.set('category', category);
    push(params);
  };

  if (variant === 'mobile') {
    return (
      <HStack
        overflowX="auto"
        gap="8px"
        py="2px"
        sx={{
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {normalizedCategories.map((category) => {
          const isActive = category === selectedCategory;

          return (
            <Button
              key={category}
              onClick={() => onSelectCategory(category)}
              flex="0 0 auto"
              h="32px"
              px="12px"
              borderRadius="999px"
              bg={isActive ? 'paper.200' : 'paper.100'}
              borderWidth="1px"
              borderStyle="solid"
              borderColor={isActive ? 'ink.900' : 'ink.700'}
              color={isActive ? 'ink.900' : 'ink.800'}
              _hover={{
                bg: 'paper.200',
                borderColor: 'ink.800',
                color: 'ink.900',
              }}
              _active={{ bg: 'paper.200', borderColor: 'ink.900' }}
              _focusVisible={{
                outline: '2px solid',
                outlineColor: 'ink.900',
                outlineOffset: '2px',
              }}
            >
              <Text fontSize="sm" color="inherit" whiteSpace="nowrap">
                {category}
              </Text>
            </Button>
          );
        })}
      </HStack>
    );
  }

  return (
    <VStack align="stretch" gap="10px" w={{ md: '180px' }}>
      <Text
        fontSize="xs"
        color="ink.700"
        textTransform="uppercase"
        letterSpacing="0.1em"
      >
        Category
      </Text>

      <VStack
        align="stretch"
        gap="6px"
        p="10px"
        bg="paper.100"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="ink.700"
        borderRadius="0px"
      >
        {normalizedCategories.map((category) => {
          const isActive = category === selectedCategory;

          return (
            <Button
              key={category}
              onClick={() => onSelectCategory(category)}
              justifyContent="flex-start"
              h="36px"
              px="10px"
              borderRadius="0px"
              variant="ghost"
              bg={isActive ? 'paper.200' : 'transparent'}
              color={isActive ? 'ink.900' : 'ink.800'}
              _hover={{ bg: 'paper.200', color: 'ink.900' }}
              _active={{ bg: 'paper.200' }}
            >
              <Text fontSize="sm" color="inherit">
                {category}
              </Text>
            </Button>
          );
        })}
      </VStack>
    </VStack>
  );
}

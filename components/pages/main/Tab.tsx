import NextLink from 'next/link';

import { Box, HStack } from '@chakra-ui/react';

export interface TabProps {
  categories: string[];
  selectedCategory: string;
  variant: 'mobile' | 'desktop';
}

function getCategoryHref(category: string): string {
  if (!category || category === '전체') return '/';

  return `/?category=${encodeURIComponent(category)}`;
}

export function Tab({ categories, selectedCategory }: TabProps) {
  const normalizedCategories = Array.from(new Set(categories.filter(Boolean)));

  return (
    <HStack
      as="nav"
      aria-label="Blog categories"
      gap={{ base: 8, md: 16 }}
      overflowX="auto"
      borderBottom="1px solid"
      borderColor="line.100"
      sx={{
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      {normalizedCategories.map((category) => {
        const isActive = category === selectedCategory;

        return (
          <Box
            key={category}
            as={NextLink}
            href={getCategoryHref(category)}
            flex="0 0 auto"
            h={{ base: '50px', md: '64px' }}
            display="inline-flex"
            alignItems="center"
            borderBottom="3px solid"
            borderColor={isActive ? 'ink.900' : 'transparent'}
            color={isActive ? 'ink.900' : 'ink.400'}
            fontSize={{ base: '18px', md: '22px' }}
            fontWeight={isActive ? '650' : '500'}
            letterSpacing="-0.045em"
            transition="border-color 180ms ease, color 180ms ease, transform 180ms ease"
            aria-current={isActive ? 'page' : undefined}
            _hover={{ color: 'ink.900', textDecoration: 'none' }}
            _active={{ transform: 'scale(0.95)' }}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'brand.500',
              outlineOffset: '-2px',
            }}
          >
            {category}
          </Box>
        );
      })}
    </HStack>
  );
}

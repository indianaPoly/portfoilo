'use client';

import NextLink from 'next/link';

import { Box, HStack } from '@chakra-ui/react';
import { LayoutGroup, motion } from 'framer-motion';

export interface AnimatedTabNavItem {
  label: string;
  href: string;
}

export interface AnimatedTabNavProps {
  ariaLabel: string;
  items: AnimatedTabNavItem[];
  layoutId: string;
  selectedLabel: string;
}

export function AnimatedTabNav({
  ariaLabel,
  items,
  layoutId,
  selectedLabel,
}: AnimatedTabNavProps) {
  return (
    <LayoutGroup id={layoutId}>
      <HStack
        as="nav"
        aria-label={ariaLabel}
        gap={{ base: 8, md: 16 }}
        overflowX="auto"
        borderBottom="1px solid"
        borderColor="line.100"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {items.map((item) => {
          const isActive = item.label === selectedLabel;

          return (
            <NextLink
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
            >
              <Box
                as="span"
                flex="0 0 auto"
                position="relative"
                h={{ base: '50px', md: '64px' }}
                display="inline-flex"
                alignItems="center"
                color={isActive ? 'brand.700' : 'ink.400'}
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight={isActive ? '650' : '500'}
                letterSpacing="-0.045em"
                transition="color 180ms ease, transform 180ms ease"
                _hover={{ color: 'brand.700', textDecoration: 'none' }}
                _active={{ transform: 'scale(0.95)' }}
                _focusVisible={{
                  outline: '2px solid',
                  outlineColor: 'brand.500',
                  outlineOffset: '-2px',
                }}
              >
                {item.label}

                {isActive ? (
                  <motion.div
                    layoutId={`${layoutId}-indicator`}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: '-1px',
                      height: '3px',
                      borderRadius: '999px',
                      background: 'var(--chakra-colors-brand-700)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                ) : null}
              </Box>
            </NextLink>
          );
        })}
      </HStack>
    </LayoutGroup>
  );
}

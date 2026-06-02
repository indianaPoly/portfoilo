'use client';

import type { MouseEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { Box, Link, Text, VStack } from '@chakra-ui/react';

import type { MarkdownHeading } from '../../../lib/markdownHeadings';

export interface BlogTableOfContentsProps {
  headings: MarkdownHeading[];
}

export function BlogTableOfContents({ headings }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = useCallback(
    (headingId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const target = document.getElementById(headingId);
      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      window.history.replaceState(
        window.history.state,
        '',
        `${window.location.pathname}${window.location.search}#${headingId}`
      );
    },
    []
  );

  if (headings.length === 0) return null;

  return (
    <Box
      as="aside"
      display={{ base: 'none', xl: 'block' }}
      position="sticky"
      top="112px"
      maxH="calc(100vh - 136px)"
      overflowY="auto"
      py={1}
      aria-label="Post table of contents"
    >
      <VStack
        align="stretch"
        gap={3}
        borderLeft="1px solid"
        borderColor="line.100"
        pl={5}
      >
        <Text
          fontSize="13px"
          fontWeight="600"
          color="ink.500"
          letterSpacing="-0.02em"
        >
          목차
        </Text>

        <VStack as="nav" align="stretch" gap={2}>
          {headings.map((heading) => {
            const isActive = activeId === heading.id;

            return (
              <Link
                key={heading.id}
                href={`#${heading.id}`}
                onClick={handleClick(heading.id)}
                display="block"
                pl={heading.depth > 1 ? 3 : 0}
                color={isActive ? 'brand.700' : 'ink.500'}
                fontSize="14px"
                fontWeight={isActive ? '700' : '500'}
                lineHeight="1.45"
                letterSpacing="-0.03em"
                transition="color 180ms ease, font-weight 180ms ease, transform 180ms ease"
                _hover={{ color: 'brand.700', textDecoration: 'none' }}
                _active={{ transform: 'scale(0.95)' }}
                _focusVisible={{
                  outline: '2px solid',
                  outlineColor: 'brand.500',
                  outlineOffset: '3px',
                }}
              >
                {heading.text}
              </Link>
            );
          })}
        </VStack>
      </VStack>
    </Box>
  );
}

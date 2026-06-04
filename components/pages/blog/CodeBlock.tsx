'use client';

import { useCallback, useState } from 'react';

import { Box, IconButton, Tooltip } from '@chakra-ui/react';

interface CodeBlockProps {
  html: string;
  code: string;
  lang: string;
}

export function CodeBlock({ html, code, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }, [code]);

  return (
    <Box
      position="relative"
      my={5}
      borderRadius="16px"
      border="1px solid"
      borderColor="line.100"
      overflow="hidden"
      role="group"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={2}
        bg="paper.200"
        borderBottom="1px solid"
        borderColor="line.100"
        fontSize="13px"
        fontWeight="600"
        color="ink.500"
        letterSpacing="-0.02em"
      >
        <Box as="span">{lang}</Box>
        <Tooltip.Root positioning={{ placement: 'top' }}>
          <Tooltip.Trigger asChild>
            <IconButton
              aria-label="코드 복사"
              size="xs"
              variant="ghost"
              color="ink.400"
              opacity={0}
              _groupHover={{ opacity: 1 }}
              transition="opacity 200ms ease, color 180ms ease"
              _hover={{ color: 'brand.700', bg: 'paper.300' }}
              onClick={handleCopy}
            >
              {copied ? (
                <CheckIcon boxSize="14px" />
              ) : (
                <CopyIcon boxSize="14px" />
              )}
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Positioner>
            <Tooltip.Content fontSize="xs">
              {copied ? '복사됨!' : '코드 복사'}
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Tooltip.Root>
      </Box>

      <Box
        overflowX="auto"
        p={4}
        bg="white"
        css={{
          '& pre': {
            margin: '0 !important',
            padding: '0 !important',
            bg: 'transparent !important',
            border: 'none !important',
            borderRadius: '0 !important',
            fontSize: '14px',
            lineHeight: '1.7',
            fontFamily:
              "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace",
          },
          '& code': {
            display: 'block',
            px: '0 !important',
            py: '0 !important',
            bg: 'transparent !important',
            borderRadius: '0 !important',
            fontSize: 'inherit',
            fontFamily: 'inherit',
          },
          '& .line': {
            display: 'inline',
          },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  );
}

function CopyIcon({ boxSize }: { boxSize: string }) {
  return (
    <svg
      width={boxSize}
      height={boxSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ boxSize }: { boxSize: string }) {
  return (
    <svg
      width={boxSize}
      height={boxSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

import { isValidElement } from 'react';
import type { ReactNode } from 'react';

import { Box, Heading, Link, Table, Text } from '@chakra-ui/react';

import { slugifyHeading } from '../../../lib/markdownHeadings';

import { ServerCodeBlock } from './ServerCodeBlock';

function getTextFromNode(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextFromNode).join('');
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getTextFromNode(node.props.children);
  }

  return '';
}

function getHeadingId(children: ReactNode): string | undefined {
  const text = getTextFromNode(children).trim();
  return text ? slugifyHeading(text) : undefined;
}

function MdxTable({ children }: { children?: ReactNode }) {
  return (
    <Table.ScrollArea
      w="full"
      my={6}
      border="1px solid"
      borderColor="line.100"
      borderRadius="16px"
      overflowX="auto"
      bg="white"
    >
      <Table.Root minW="720px" size="md">
        {children}
      </Table.Root>
    </Table.ScrollArea>
  );
}

function MdxThead({ children }: { children?: ReactNode }) {
  return <Table.Header bg="paper.200">{children}</Table.Header>;
}

function MdxTbody({ children }: { children?: ReactNode }) {
  return <Table.Body>{children}</Table.Body>;
}

function MdxTr({ children }: { children?: ReactNode }) {
  return <Table.Row>{children}</Table.Row>;
}

function MdxTh({ children }: { children?: ReactNode }) {
  return (
    <Table.ColumnHeader
      px={5}
      py={4}
      color="ink.900"
      fontSize="14px"
      fontWeight="700"
      letterSpacing="-0.03em"
      textTransform="none"
      whiteSpace="nowrap"
      borderColor="line.100"
    >
      {children}
    </Table.ColumnHeader>
  );
}

function MdxTd({ children }: { children?: ReactNode }) {
  return (
    <Table.Cell
      px={5}
      py={4}
      color="ink.700"
      fontSize="15px"
      lineHeight="1.65"
      letterSpacing="-0.03em"
      borderColor="line.100"
      verticalAlign="top"
    >
      {children}
    </Table.Cell>
  );
}

export const mdxComponents = {
  h1: (props: React.ComponentProps<typeof Heading>) => (
    <Heading
      as="h1"
      id={getHeadingId(props.children)}
      size="lg"
      fontWeight="700"
      letterSpacing="-0.02em"
      scrollMarginTop="32px"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<typeof Heading>) => (
    <Heading
      as="h2"
      id={getHeadingId(props.children)}
      size="md"
      mt={8}
      mb={3}
      fontWeight="700"
      letterSpacing="-0.02em"
      scrollMarginTop="32px"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<typeof Heading>) => (
    <Heading
      as="h3"
      id={getHeadingId(props.children)}
      size="sm"
      mt={6}
      mb={3}
      fontWeight="650"
      letterSpacing="-0.02em"
      scrollMarginTop="32px"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<typeof Text>) => (
    <Text fontSize="md" color="ink.800" lineHeight="1.85" mb={4} {...props} />
  ),
  a: (props: React.ComponentProps<typeof Link>) => (
    <Link
      display="inline-block"
      color="brand.700"
      textDecoration="underline"
      transition="color 180ms ease, transform 180ms ease"
      _hover={{ color: 'brand.800' }}
      _active={{ transform: 'scale(0.95)' }}
      {...props}
    />
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <Box as="ul" pl={5} mb={4}>
      {children}
    </Box>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <Box as="ol" pl={5} mb={4}>
      {children}
    </Box>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <Box as="li" mb={1}>
      {children}
    </Box>
  ),
  hr: (props: React.ComponentProps<typeof Box>) => (
    <Box
      as="hr"
      my={{ base: 8, md: 10 }}
      border="0"
      borderTop="1px solid"
      borderColor="line.100"
      {...props}
    />
  ),
  table: MdxTable,
  thead: MdxThead,
  tbody: MdxTbody,
  tr: MdxTr,
  th: MdxTh,
  td: MdxTd,
  MdxTable,
  MdxThead,
  MdxTbody,
  MdxTr,
  MdxTh,
  MdxTd,
  code: (props: React.ComponentProps<typeof Box>) => (
    <Box
      as="code"
      px="1"
      py="0.5"
      borderRadius="6px"
      bg="paper.200"
      color="ink.900"
      fontSize="0.95em"
      {...props}
    />
  ),
  pre: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLPreElement>,
      HTMLPreElement
    >
  ) => {
    const child = props?.children;
    const isCodeChild =
      isValidElement<{ className?: string; children?: ReactNode }>(child) &&
      (child as { type?: { displayName?: string } })?.type ===
        mdxComponents.code;

    if (!isCodeChild) {
      return (
        <Box
          as="pre"
          w="full"
          overflowX="auto"
          p={4}
          mb={4}
          bg="paper.200"
          color="ink.900"
          borderWidth="1px"
          borderColor="line.100"
          borderRadius="16px"
        >
          {props.children}
        </Box>
      );
    }

    const codeElement = child as React.ReactElement<{
      className?: string;
      children?: ReactNode;
    }>;
    const className = codeElement.props?.className ?? '';
    const lang = className.replace(/^language-/, '') || 'text';
    const codeText = getTextFromNode(codeElement.props?.children).trim();

    return <ServerCodeBlock code={codeText} lang={lang} />;
  },
};

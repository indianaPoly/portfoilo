import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';

function MdxTable(props: React.ComponentProps<typeof Table>) {
  return (
    <TableContainer
      w="full"
      my={6}
      border="1px solid"
      borderColor="line.100"
      borderRadius="16px"
      overflowX="auto"
      bg="white"
    >
      <Table minW="720px" size="md" variant="simple" {...props} />
    </TableContainer>
  );
}

function MdxThead(props: React.ComponentProps<typeof Thead>) {
  return <Thead bg="paper.200" {...props} />;
}

function MdxTbody(props: React.ComponentProps<typeof Tbody>) {
  return <Tbody {...props} />;
}

function MdxTr(props: React.ComponentProps<typeof Tr>) {
  return <Tr {...props} />;
}

function MdxTh(props: React.ComponentProps<typeof Th>) {
  return (
    <Th
      px={5}
      py={4}
      color="ink.900"
      fontSize="14px"
      fontWeight="800"
      letterSpacing="-0.03em"
      textTransform="none"
      whiteSpace="nowrap"
      borderColor="line.100"
      {...props}
    />
  );
}

function MdxTd(props: React.ComponentProps<typeof Td>) {
  return (
    <Td
      px={5}
      py={4}
      color="ink.700"
      fontSize="15px"
      lineHeight="1.65"
      letterSpacing="-0.03em"
      borderColor="line.100"
      verticalAlign="top"
      {...props}
    />
  );
}

export const mdxComponents = {
  h1: (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h1" size="lg" letterSpacing="-0.02em" {...props} />
  ),
  h2: (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h2" size="md" mt={8} mb={3} {...props} />
  ),
  p: (props: React.ComponentProps<typeof Text>) => (
    <Text fontSize="md" color="ink.800" lineHeight="1.85" mb={4} {...props} />
  ),
  a: (props: React.ComponentProps<typeof Link>) => (
    <Link color="brand.700" textDecoration="underline" {...props} />
  ),
  ul: (props: React.ComponentProps<typeof UnorderedList>) => (
    <UnorderedList pl={5} mb={4} {...props} />
  ),
  ol: (props: React.ComponentProps<typeof OrderedList>) => (
    <OrderedList pl={5} mb={4} {...props} />
  ),
  li: (props: React.ComponentProps<typeof ListItem>) => (
    <ListItem mb={1} {...props} />
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
  pre: (props: React.ComponentProps<typeof Box>) => (
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
      sx={{
        '& > code': {
          display: 'block',
          px: '0 !important',
          py: '0 !important',
          borderRadius: '0 !important',
          bg: 'transparent !important',
          color: 'inherit',
          whiteSpace: 'pre',
        },
      }}
      {...props}
    />
  ),
};

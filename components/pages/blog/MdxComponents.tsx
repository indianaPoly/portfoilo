import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

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
    <Link color="blue.600" textDecoration="underline" {...props} />
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
  code: (props: React.ComponentProps<typeof Box>) => (
    <Box
      as="code"
      px="1"
      py="0.5"
      borderRadius="0px"
      bg="rgba(26, 23, 18, 0.08)"
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
      bg="paper.100"
      color="ink.900"
      borderWidth="1px"
      borderColor="ink.700"
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

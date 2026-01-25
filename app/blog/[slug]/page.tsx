import { notFound } from 'next/navigation';

import {
  Box,
  Code,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { compileMDX } from 'next-mdx-remote/rsc';

import { getAllPosts, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

const mdxComponents = {
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
  code: (props: React.ComponentProps<typeof Code>) => (
    <Code px="1" py="0.5" borderRadius="0px" {...props} />
  ),
  pre: (props: React.ComponentProps<typeof Box>) => (
    <Box
      as="pre"
      w="full"
      overflowX="auto"
      p={4}
      mb={4}
      bg="paper.100"
      borderWidth="1px"
      borderColor="ink.700"
      {...props}
    />
  ),
};

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <VStack align="stretch" gap={8}>
      <VStack align="stretch" gap={2}>
        <Heading as="h1" size="lg" letterSpacing="-0.02em">
          {post.frontmatter.title}
        </Heading>

        <Text fontSize="sm" color="ink.700">
          {post.frontmatter.date}
          {post.frontmatter.category ? ` · ${post.frontmatter.category}` : ''}
        </Text>

        {post.frontmatter.summary ? (
          <Text fontSize="md" color="ink.800" pt={2}>
            {post.frontmatter.summary}
          </Text>
        ) : null}
      </VStack>

      <Box>{content}</Box>
    </VStack>
  );
}

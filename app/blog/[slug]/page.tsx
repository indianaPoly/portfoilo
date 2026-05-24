import { notFound } from 'next/navigation';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';

import { mdxComponents } from '../../../components/pages/blog/MdxComponents';
import { defaultOgImage, siteName } from '../../../data/siteMetadata';
import { transformMarkdownTablesToJsx } from '../../../lib/mdxTable';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

type BlogDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: '요청한 블로그 글을 찾을 수 없습니다.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.frontmatter.title;
  const description =
    post.frontmatter.summary ??
    `${post.frontmatter.category ?? 'Blog'} 카테고리의 글입니다.`;
  const url = `/blog/${post.slug}`;
  const tags = post.frontmatter.category ? [post.frontmatter.category] : [];

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: `${title} | ${siteName}`,
      description,
      url,
      publishedTime: post.frontmatter.date,
      authors: ['Poly'],
      tags,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: transformMarkdownTablesToJsx(post.content),
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

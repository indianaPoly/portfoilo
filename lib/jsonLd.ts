import type { Article, Blog, WithContext } from 'schema-dts';

import { siteAuthor, siteUrl } from '../data/siteMetadata';

import type { PostDetail } from './posts';

export function generateBlogPostJsonLd(post: PostDetail): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description:
      post.frontmatter.summary ??
      `${post.frontmatter.category ?? 'Blog'} 카테고리의 글입니다.`,
    datePublished: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: siteAuthor,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: siteAuthor,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    ...(post.frontmatter.category
      ? { articleSection: post.frontmatter.category }
      : {}),
  };
}

export function generateBlogListJsonLd(): WithContext<Blog> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Poly Journal',
    description:
      '개발 과정에서 얻은 기술과 문화를 기록하고 공유하는 개인 기술 블로그입니다.',
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: siteAuthor,
      url: siteUrl,
    },
  };
}

import type { MetadataRoute } from 'next';

import { siteUrl } from '../data/siteMetadata';
import { getAllPosts } from '../lib/posts';

const staticRoutes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.6 },
  { path: '/portfolio', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...postEntries];
}

import { describe, expect, test } from 'bun:test';

import {
  getAdjacentPostsByCategory,
  getAllCategories,
  getAllPosts,
  getPostBySlug,
} from './posts';

describe('blog post repository', () => {
  test('loads all MDX posts sorted by descending date with reading minutes', () => {
    const posts = getAllPosts();

    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.slug && post.title)).toBe(true);
    expect(posts.every((post) => post.readingMinutes >= 1)).toBe(true);

    const sorted = [...posts].sort((a, b) =>
      a.date < b.date ? 1 : a.date > b.date ? -1 : 0
    );
    expect(posts.map((post) => post.slug)).toEqual(
      sorted.map((post) => post.slug)
    );
  });

  test('returns unique non-empty categories', () => {
    const categories = getAllCategories(getAllPosts());

    expect(categories.length).toBeGreaterThan(0);
    expect(categories).toEqual(Array.from(new Set(categories)));
    expect(categories.every((category) => category.trim().length > 0)).toBe(
      true
    );
  });

  test('loads a post by slug and resolves adjacent posts in the same category', () => {
    const [firstPost] = getAllPosts();
    const detail = getPostBySlug(firstPost.slug);

    expect(detail?.slug).toBe(firstPost.slug);
    expect(detail?.content.length).toBeGreaterThan(0);

    const adjacent = getAdjacentPostsByCategory(firstPost.slug);
    expect(adjacent.previous?.category ?? firstPost.category).toBe(
      firstPost.category
    );
    expect(adjacent.next?.category ?? firstPost.category).toBe(
      firstPost.category
    );
  });
});

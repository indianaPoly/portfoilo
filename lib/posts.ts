import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');
const KOREAN_CHARS_PER_MINUTE = 500;

export interface PostFrontmatter {
  title: string;
  date: string;
  category?: string;
  summary?: string;
}

export interface PostListItem extends PostFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface PostDetail {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingMinutes: number;
}

export interface AdjacentPostsByCategory {
  previous: PostListItem | null;
  next: PostListItem | null;
}

function isMdxFile(fileName: string): boolean {
  return fileName.endsWith('.mdx');
}

function toSlug(fileName: string): string {
  return fileName.replace(/\.mdx$/, '');
}

function getPostFilePath(slug: string): string {
  return path.join(POSTS_DIR, `${slug}.mdx`);
}

function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~|\-[\]{}()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function calculateReadingMinutes(markdown: string): number {
  const plainText = toPlainText(markdown);
  if (!plainText) return 1;

  return Math.max(1, Math.ceil(plainText.length / KOREAN_CHARS_PER_MINUTE));
}

function readPostBySlug(slug: string): PostDetail | null {
  const safeSlug = slug.replace(/\//g, '');
  const filePath = getPostFilePath(safeSlug);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const data = parsed.data as Partial<PostFrontmatter>;

  return {
    slug: safeSlug,
    frontmatter: {
      title: String(data.title ?? safeSlug),
      date: String(data.date ?? ''),
      category: data.category ? String(data.category) : undefined,
      summary: data.summary ? String(data.summary) : undefined,
    },
    content: String(parsed.content ?? ''),
    readingMinutes: calculateReadingMinutes(String(parsed.content ?? '')),
  };
}

function toPostListItem(post: PostDetail): PostListItem {
  return {
    slug: post.slug,
    ...post.frontmatter,
    readingMinutes: post.readingMinutes,
  };
}

export function getAllPosts(): PostListItem[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter(isMdxFile)
    .map(toSlug)
    .map(readPostBySlug)
    .filter((post): post is PostDetail => Boolean(post))
    .map(toPostListItem)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return posts;
}

export function getPostBySlug(slug: string): PostDetail | null {
  return readPostBySlug(slug);
}

export function getAdjacentPostsByCategory(
  slug: string
): AdjacentPostsByCategory {
  const currentPost = getPostBySlug(slug);
  if (!currentPost?.frontmatter.category) {
    return { previous: null, next: null };
  }

  const categoryPosts = getAllPosts().filter(
    (post) => post.category === currentPost.frontmatter.category
  );
  const currentIndex = categoryPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) return { previous: null, next: null };

  return {
    previous: categoryPosts[currentIndex + 1] ?? null,
    next: categoryPosts[currentIndex - 1] ?? null,
  };
}

export function getAllCategories(posts: PostListItem[]): string[] {
  const categories = posts
    .map((p) => p.category)
    .filter((c): c is string => Boolean(c && c.trim()));

  return Array.from(new Set(categories));
}

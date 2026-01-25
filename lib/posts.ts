import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostFrontmatter {
  title: string;
  date: string;
  category?: string;
  summary?: string;
}

export interface PostListItem extends PostFrontmatter {
  slug: string;
}

export interface PostDetail {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

function isMdxFile(fileName: string): boolean {
  return fileName.endsWith('.mdx');
}

function toSlug(fileName: string): string {
  return fileName.replace(/\.mdx$/, '');
}

export function getAllPosts(): PostListItem[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const slugs = fs.readdirSync(POSTS_DIR).filter(isMdxFile).map(toSlug);

  const posts = slugs
    .map((slug) => {
      const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
      const raw = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(raw);

      const data = parsed.data as Partial<PostFrontmatter>;

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ''),
        category: data.category ? String(data.category) : undefined,
        summary: data.summary ? String(data.summary) : undefined,
      } satisfies PostListItem;
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return posts;
}

export function getPostBySlug(slug: string): PostDetail | null {
  const safeSlug = slug.replace(/\//g, '');
  const filePath = path.join(POSTS_DIR, `${safeSlug}.mdx`);

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
    content: parsed.content,
  };
}

export function getAllCategories(posts: PostListItem[]): string[] {
  const categories = posts
    .map((p) => p.category)
    .filter((c): c is string => Boolean(c && c.trim()));

  return Array.from(new Set(categories));
}

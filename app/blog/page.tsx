import { redirect } from 'next/navigation';

import type { Metadata } from 'next';

import { blogMetadata } from '../../data/static/meta-data/blog.meta-data';

type SearchParams = Record<string, string | string[] | undefined>;

export const metadata: Metadata = blogMetadata;

export default function BlogRedirectPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = new URLSearchParams();

  Object.entries(searchParams ?? {}).forEach(([key, value]) => {
    if (value === undefined) return;
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v));
      return;
    }
    params.set(key, value);
  });

  const query = params.toString();
  redirect(query ? `/?${query}` : '/');
}

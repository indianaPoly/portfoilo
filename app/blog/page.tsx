import { redirect } from 'next/navigation';

import type { Metadata } from 'next';

import { blogMetadata } from '../../data/static/meta-data/blog.meta-data';
import { resolveSearchParams } from '../../lib/searchParams';

export const metadata: Metadata = blogMetadata;

export default async function BlogRedirectPage({
  searchParams,
}: {
  searchParams?: Parameters<typeof resolveSearchParams>[0];
}) {
  const params = new URLSearchParams();
  const resolvedSearchParams = await resolveSearchParams(searchParams);

  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
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

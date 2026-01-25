import { redirect } from 'next/navigation';

type SearchParams = Record<string, string | string[] | undefined>;

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

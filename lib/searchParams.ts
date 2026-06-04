export type AppSearchParams = Record<string, string | string[] | undefined>;

export async function resolveSearchParams(
  searchParams?: Promise<AppSearchParams>
): Promise<AppSearchParams> {
  return (await searchParams) ?? {};
}

export function getSearchParamValue(
  value: string | string[] | undefined
): string | undefined {
  if (!value) return undefined;

  return Array.isArray(value) ? value[0] : value;
}

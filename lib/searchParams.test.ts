import { describe, expect, test } from 'bun:test';

import { getSearchParamValue, resolveSearchParams } from './searchParams';

describe('searchParams utilities', () => {
  test('resolves missing async search params to an empty object', async () => {
    await expect(resolveSearchParams()).resolves.toEqual({});
  });

  test('returns the first value for array params', () => {
    expect(getSearchParamValue(['DEV', 'INFRA'])).toBe('DEV');
    expect(getSearchParamValue('CULTURE')).toBe('CULTURE');
    expect(getSearchParamValue(undefined)).toBeUndefined();
  });
});

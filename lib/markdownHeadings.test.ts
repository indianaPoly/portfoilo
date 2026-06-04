import { describe, expect, test } from 'bun:test';

import { extractMarkdownHeadings, slugifyHeading } from './markdownHeadings';

describe('slugifyHeading', () => {
  test('normalizes Korean and English heading text into stable anchors', () => {
    expect(slugifyHeading(' Next.js 16 업그레이드! ')).toBe(
      'nextjs-16-업그레이드'
    );
  });

  test('falls back when punctuation-only headings produce an empty slug', () => {
    expect(slugifyHeading('!!!')).toBe('section');
  });
});

describe('extractMarkdownHeadings', () => {
  test('extracts headings up to the requested depth and ignores fenced code', () => {
    const source = [
      '# 제목',
      '## 중복',
      '```',
      '## 코드 안 제목',
      '```',
      '## 중복',
      '### 제외',
    ].join('\n');

    expect(extractMarkdownHeadings(source, 2)).toEqual([
      { depth: 1, id: '제목', text: '제목' },
      { depth: 2, id: '중복', text: '중복' },
      { depth: 2, id: '중복-2', text: '중복' },
    ]);
  });
});

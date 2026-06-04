import { describe, expect, test } from 'bun:test';

import { transformMarkdownTablesToJsx } from './mdxTable';

describe('transformMarkdownTablesToJsx', () => {
  test('converts pipe tables into MDX table components', () => {
    const source = ['| 이름 | 값 |', '| --- | --- |', '| A | 1 |'].join('\n');

    expect(transformMarkdownTablesToJsx(source)).toBe(
      [
        '<MdxTable>',
        '<MdxThead><MdxTr><MdxTh>이름</MdxTh><MdxTh>값</MdxTh></MdxTr></MdxThead>',
        '<MdxTbody>',
        '<MdxTr><MdxTd>A</MdxTd><MdxTd>1</MdxTd></MdxTr>',
        '</MdxTbody>',
        '</MdxTable>',
      ].join('\n')
    );
  });

  test('does not transform table-looking text inside fenced code blocks', () => {
    const source = ['```', '| 이름 | 값 |', '| --- | --- |', '```'].join('\n');

    expect(transformMarkdownTablesToJsx(source)).toBe(source);
  });

  test('escapes JSX-sensitive characters in cells', () => {
    const source = ['| A |', '| --- |', '| <tag>{value}</tag> |'].join('\n');

    expect(transformMarkdownTablesToJsx(source)).toContain(
      '&lt;tag&gt;&#123;value&#125;&lt;/tag&gt;'
    );
  });
});

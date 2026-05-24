function isTableSeparator(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('|')) return false;

  const cells = trimmed
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isTableRow(line: string): boolean {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.includes('|')
  );
}

function splitTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function escapeJsxText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');
}

function tableRowsToJsx(rows: string[]): string {
  const [headerLine, , ...bodyLines] = rows;
  const headers = splitTableRow(headerLine);
  const bodyRows = bodyLines.map(splitTableRow);

  const headerJsx = headers
    .map((header) => `<MdxTh>${escapeJsxText(header)}</MdxTh>`)
    .join('');

  const bodyJsx = bodyRows
    .map((row) => {
      const cells = headers.map((_, index) => row[index] ?? '');
      return `<MdxTr>${cells
        .map((cell) => `<MdxTd>${escapeJsxText(cell)}</MdxTd>`)
        .join('')}</MdxTr>`;
    })
    .join('\n');

  return `<MdxTable>\n<MdxThead><MdxTr>${headerJsx}</MdxTr></MdxThead>\n<MdxTbody>\n${bodyJsx}\n</MdxTbody>\n</MdxTable>`;
}

export function transformMarkdownTablesToJsx(source: string): string {
  const lines = source.split('\n');
  const output: string[] = [];
  let index = 0;
  let isInFence = false;

  while (index < lines.length) {
    const line = lines[index];

    if (line.trim().startsWith('```')) {
      isInFence = !isInFence;
      output.push(line);
      index += 1;
      continue;
    }

    const nextLine = lines[index + 1] ?? '';
    const startsTable =
      !isInFence && isTableRow(line) && isTableSeparator(nextLine);

    if (!startsTable) {
      output.push(line);
      index += 1;
      continue;
    }

    const tableRows = [line, nextLine];
    index += 2;

    while (index < lines.length && isTableRow(lines[index])) {
      tableRows.push(lines[index]);
      index += 1;
    }

    output.push(tableRowsToJsx(tableRows));
  }

  return output.join('\n');
}

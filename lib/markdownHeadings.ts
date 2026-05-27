export interface MarkdownHeading {
  depth: number;
  id: string;
  text: string;
}

function stripMarkdownInlineSyntax(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+#+\s*$/g, '')
    .trim();
}

export function slugifyHeading(value: string): string {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return slug || 'section';
}

export function extractMarkdownHeadings(
  source: string,
  maxDepth = 2
): MarkdownHeading[] {
  const headings: MarkdownHeading[] = [];
  const seen = new Map<string, number>();
  let isInFence = false;

  source.split('\n').forEach((line) => {
    if (line.trim().startsWith('```')) {
      isInFence = !isInFence;
      return;
    }

    if (isInFence) return;

    const match = /^(#{1,6})\s+(.+)$/.exec(line.trim());
    if (!match) return;

    const depth = match[1].length;
    if (depth > maxDepth) return;

    const text = stripMarkdownInlineSyntax(match[2]);
    if (!text) return;

    const baseId = slugifyHeading(text);
    const count = seen.get(baseId) ?? 0;
    seen.set(baseId, count + 1);

    headings.push({
      depth,
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
      text,
    });
  });

  return headings;
}

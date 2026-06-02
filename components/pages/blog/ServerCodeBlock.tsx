import { highlightCode } from '../../../lib/shiki';

import { CodeBlock } from './CodeBlock';

interface ServerCodeBlockProps {
  code: string;
  lang: string;
}

export async function ServerCodeBlock({ code, lang }: ServerCodeBlockProps) {
  const html = await highlightCode(code, lang);

  return <CodeBlock html={html} code={code} lang={lang} />;
}

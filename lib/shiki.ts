import type { BundledLanguage, BundledTheme } from 'shiki';
import { codeToHtml } from 'shiki';

const THEME: BundledTheme = 'github-light';

const SUPPORTED_LANGUAGES: BundledLanguage[] = [
  'typescript',
  'javascript',
  'tsx',
  'jsx',
  'rust',
  'python',
  'html',
  'css',
  'json',
  'yaml',
  'bash',
  'shell',
  'markdown',
  'sql',
  'solidity',
  'c',
  'diff',
];

function detectLanguage(raw: string): BundledLanguage {
  const normalized = raw.trim().toLowerCase();
  const aliases: Record<string, BundledLanguage> = {
    ts: 'typescript',
    js: 'javascript',
    sh: 'bash',
    zsh: 'bash',
    yml: 'yaml',
    md: 'markdown',
    sol: 'solidity',
    rs: 'rust',
    py: 'python',
  };

  const resolved = aliases[normalized] ?? (normalized as BundledLanguage);

  if (SUPPORTED_LANGUAGES.includes(resolved)) {
    return resolved;
  }

  return 'typescript';
}

export async function highlightCode(
  code: string,
  lang: string
): Promise<string> {
  const language = detectLanguage(lang);

  const html = await codeToHtml(code, {
    lang: language,
    theme: THEME,
  });

  return html;
}

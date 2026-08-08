export interface ExternalLink {
  label: string;
  href: string;
  icon?: 'github' | 'email' | 'external';
  showInHeader?: boolean;
  showInFooter?: boolean;
}

export const externalLinks: ExternalLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/indianaPoly',
    icon: 'github',
    showInHeader: false,
    showInFooter: true,
  },
  {
    label: 'Email',
    href: 'mailto:hyeonlimgo5@gmail.com',
    icon: 'email',
    showInHeader: false,
    showInFooter: true,
  },
  {
    label: 'AX 학습',
    href: 'https://lush-fireman-992.notion.site/AX-3b1e3758101a80ce8d01f81c21bd6f66',
    icon: 'external',
    showInHeader: false,
    showInFooter: true,
  },
  {
    label: '블록체인 아티클',
    href: 'https://lush-fireman-992.notion.site/3aae3758101a80458a98c40168abacf9',
    icon: 'external',
    showInHeader: false,
    showInFooter: true,
  },
];

export const navContent = {
  brand: 'Poly Journal',
  links: [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
  ],
  downloads: {
    label: 'Download',
    resumeLabel: '이력서 PDF',
    domainDownloads: [
      { slug: 'frontend', label: 'Frontend 포트폴리오 PDF' },
      { slug: 'fullstack', label: 'Full-stack 포트폴리오 PDF' },
      { slug: 'devops', label: 'DevOps 포트폴리오 PDF' },
      { slug: 'ai-ax', label: 'AI / AX 포트폴리오 PDF' },
    ],
  },
};

import type { Metadata } from 'next';

export const siteUrl = 'https://www.poly-journal.xyz';
export const siteName = 'Poly Journal';
export const siteAuthor = 'Poly';
export const siteLocale = 'ko_KR';
export const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Poly Journal Tech Blog',
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    '개발 과정에서 얻은 기술과 문화를 기록하고 공유하는 개인 기술 블로그입니다.',
  applicationName: siteName,
  authors: [{ name: siteAuthor, url: siteUrl }],
  creator: siteAuthor,
  publisher: siteAuthor,
  keywords: [
    'Poly Journal',
    'Tech Blog',
    '개발 블로그',
    '프론트엔드',
    'Next.js',
    'React',
    'TypeScript',
    '인프라',
    '개발 문화',
  ],
  alternates: {
    canonical: '/',
  },
  verification: {
    other: {
      'naver-site-verification': '84641f3eb4fb0be44c11736cc5a1f1934b20a14d',
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: siteLocale,
    url: '/',
    siteName,
    title: siteName,
    description:
      '개발 과정에서 얻은 기술과 문화를 기록하고 공유하는 개인 기술 블로그입니다.',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description:
      '개발 과정에서 얻은 기술과 문화를 기록하고 공유하는 개인 기술 블로그입니다.',
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

import type { Metadata } from 'next';

import { defaultOgImage, siteName } from '../../siteMetadata';

const title = 'Blog';
const description =
  '개발 중 마주한 문제 해결 과정과 회고, 그리고 기술적 기록을 모아둔 블로그 목록입니다.';

export const blogMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: `${title} | ${siteName}`,
    description,
    url: '/',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteName}`,
    description,
    images: [defaultOgImage.url],
  },
};

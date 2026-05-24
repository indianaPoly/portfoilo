import type { Metadata } from 'next';

import { defaultOgImage, siteName } from '../../siteMetadata';

const title = 'Home';
const description =
  '개발 과정에서 얻은 기술과 문화를 공유하는 Poly Journal의 최신 글 목록입니다.';

export const mainMetadata: Metadata = {
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

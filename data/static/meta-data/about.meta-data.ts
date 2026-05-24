import type { Metadata } from 'next';

import { defaultOgImage, siteName } from '../../siteMetadata';

const title = 'About';
const description =
  '개발자로서의 관심사, 협업 방식, 그리고 문제를 바라보는 관점을 소개합니다.';

export const aboutMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'profile',
    title: `${title} | ${siteName}`,
    description,
    url: '/about',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteName}`,
    description,
    images: [defaultOgImage.url],
  },
};

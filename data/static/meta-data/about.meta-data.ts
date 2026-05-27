import type { Metadata } from 'next';

import { defaultOgImage, siteName } from '../../siteMetadata';

const title = 'About';
const description =
  '고현림의 학력, 스킬, 동아리 활동, 수상과 자격증을 정리한 소개 페이지입니다.';

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

import type { Metadata } from 'next';

import { defaultOgImage, siteName } from '../../siteMetadata';

const title = 'Portfolio';
const description =
  'Moazip, 글로컬 연합대학, 제주국제관악제, 온글 등 진행했던 프로젝트와 구현 내용을 정리한 포트폴리오입니다.';

export const portfolioMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    type: 'website',
    title: `${title} | ${siteName}`,
    description,
    url: '/portfolio',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteName}`,
    description,
    images: [defaultOgImage.url],
  },
};

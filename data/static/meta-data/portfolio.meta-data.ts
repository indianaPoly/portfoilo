import type { Metadata } from 'next';

import { defaultOgImage, siteName } from '../../siteMetadata';

const title = 'Portfolio';
const description =
  '참여한 프로젝트와 작업 경험, 그리고 기술적으로 고민한 결과물을 정리한 포트폴리오입니다.';

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

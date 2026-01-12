import { Metadata } from 'next';
import BlogArticle from '../../components/sections/BlogArticle';

export const metadata: Metadata = {
  title: 'Blog | 디자인된 글',
  description: 'Chakra UI 기반 포트폴리오와 함께하는 블로그 스타일 포스트',
};

export default function BlogPage() {
  return <BlogArticle />;
}

import { Metadata } from 'next';
import BlogArticle from '../../components/sections/BlogArticle';
import { blogMetadata } from '../../data/blogContent';

export const metadata: Metadata = {
  title: blogMetadata.title,
  description: blogMetadata.description,
};

export default function BlogPage() {
  return <BlogArticle />;
}

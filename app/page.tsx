import { Box, Text, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';

import { Pagination } from '../components/pages/blog/Pagination';
import { JournalList } from '../components/pages/main/cards/JournalList';
import { Tab } from '../components/pages/main/Tab';
import { mainMetadata } from '../data/static/meta-data/main.meta-data';
import { getAllCategories, getAllPosts } from '../lib/posts';

const PAGE_SIZE = 5;
const ALL_CATEGORY_LABEL = '전체';

type SearchParams = Record<string, string | string[] | undefined>;

export const metadata: Metadata = mainMetadata;

function asString(value: string | string[] | undefined): string | undefined {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

export default function HomePage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const rawCategory = asString(searchParams?.category);
  const selectedCategory = rawCategory?.trim()
    ? rawCategory
    : ALL_CATEGORY_LABEL;

  const rawPage = asString(searchParams?.page);
  const pageNumber = Math.max(1, Number(rawPage ?? '1') || 1);

  const allPosts = getAllPosts();
  const categories = [
    ALL_CATEGORY_LABEL,
    ...getAllCategories(allPosts).filter((c) => c !== ALL_CATEGORY_LABEL),
  ];

  const filtered =
    selectedCategory === ALL_CATEGORY_LABEL
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(pageNumber, totalPages);

  const startIndex = (safePage - 1) * PAGE_SIZE;
  const items = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <VStack align="stretch" gap={{ base: 10, md: 14 }}>
      <Box pt={{ base: 4, md: 5 }}>
        <Text
          as="h1"
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="500"
          color="ink.600"
          letterSpacing="-0.03em"
        >
          개발 과정에서 얻은 기술과 문화를 공유합니다
        </Text>
      </Box>

      <Tab
        categories={categories}
        selectedCategory={selectedCategory}
        variant="desktop"
      />

      <VStack align="stretch" gap={{ base: 12, md: 16 }}>
        {items.map((item) => (
          <JournalList
            key={item.slug}
            title={item.title}
            summary={item.summary}
            date={item.date}
            category={item.category ?? 'Uncategorized'}
            readingMinutes={item.readingMinutes}
            href={`/blog/${item.slug}`}
          />
        ))}
      </VStack>

      <Pagination
        selectedCategory={selectedCategory}
        page={safePage}
        totalPages={totalPages}
      />
    </VStack>
  );
}

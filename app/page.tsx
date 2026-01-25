import { HStack, VStack } from '@chakra-ui/react';

import { Pagination } from '@/components/pages/blog/Pagination';
import { JournalList } from '@/components/pages/main/cards/JournalList';
import { Tab } from '@/components/pages/main/Tab';
import { getAllCategories, getAllPosts } from '@/lib/posts';

const PAGE_SIZE = 5;
const ALL_CATEGORY_LABEL = '전체';

type SearchParams = Record<string, string | string[] | undefined>;

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
    <VStack align="stretch" gap={{ base: 6, md: 10 }}>
      <VStack align="stretch" display={{ base: 'flex', md: 'none' }}>
        <Tab
          categories={categories}
          selectedCategory={selectedCategory}
          variant="mobile"
        />
      </VStack>

      <HStack align="flex-start" gap={{ base: 0, md: 10 }}>
        <VStack align="stretch" gap="10px" w="full">
          {items.map((item, index) => (
            <JournalList
              key={item.slug}
              jno={startIndex + index + 1}
              title={item.title}
              date={item.date}
              category={item.category ?? 'Uncategorized'}
              href={`/blog/${item.slug}`}
            />
          ))}

          <Pagination
            selectedCategory={selectedCategory}
            page={safePage}
            totalPages={totalPages}
          />
        </VStack>

        <VStack
          display={{ base: 'none', md: 'flex' }}
          flex="0 0 auto"
          align="stretch"
        >
          <Tab
            categories={categories}
            selectedCategory={selectedCategory}
            variant="desktop"
          />
        </VStack>
      </HStack>
    </VStack>
  );
}

import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';

import { ProjectCard } from '@/components/pages/portfolio/ProjectCard';
import { ProjectCategoryTabs } from '@/components/pages/portfolio/ProjectCategoryTabs';
import {
  domainCategories,
  domainMetadata,
  projects,
} from '@/data/portfolioContent';
import type { DomainCategory } from '@/data/portfolioContent';
import { portfolioMetadata } from '@/data/static/meta-data/portfolio.meta-data';
import { getSearchParamValue, resolveSearchParams } from '@/lib/searchParams';

export const metadata: Metadata = portfolioMetadata;

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams?: Parameters<typeof resolveSearchParams>[0];
}) {
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const rawCategory = getSearchParamValue(resolvedSearchParams.category);

  const selectedCategory: DomainCategory = domainCategories.includes(
    rawCategory as DomainCategory
  )
    ? (rawCategory as DomainCategory)
    : '전체';

  const domainMeta =
    selectedCategory !== '전체'
      ? domainMetadata[selectedCategory as Exclude<DomainCategory, '전체'>]
      : null;

  const filteredProjects =
    selectedCategory === '전체'
      ? projects
      : domainMeta
        ? [
            ...domainMeta.representativeProjects.flatMap((name) => {
              const match = projects.find((p) => p.name === name);
              return match ? [match] : [];
            }),
            ...projects.filter(
              (p) =>
                p.domainCategories?.includes(
                  selectedCategory as Exclude<DomainCategory, '전체'>
                ) && !domainMeta.representativeProjects.includes(p.name)
            ),
          ]
        : [];

  return (
    <VStack align="stretch" gap={{ base: 8, md: 10 }}>
      <ProjectCategoryTabs selectedCategory={selectedCategory} />

      <SimpleGrid columns={1} gap={{ base: 5, md: 6 }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))
        ) : (
          <Box
            p={{ base: 6, md: 8 }}
            border="1px solid"
            borderColor="line.100"
            borderRadius="24px"
            bg="paper.50"
          >
            <Text
              fontSize={{ base: '16px', md: '18px' }}
              color="ink.600"
              lineHeight="1.8"
              letterSpacing="-0.03em"
            >
              아직 이 카테고리에 정리된 프로젝트가 없습니다.
            </Text>
          </Box>
        )}
      </SimpleGrid>
    </VStack>
  );
}

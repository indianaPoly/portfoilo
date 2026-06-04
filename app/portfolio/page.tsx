import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';

import { ProjectCard } from '@/components/pages/portfolio/ProjectCard';
import { ProjectCategoryTabs } from '@/components/pages/portfolio/ProjectCategoryTabs';
import { projectCategories, projects } from '@/data/portfolioContent';
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
  const selectedCategory = projectCategories.includes(
    rawCategory as (typeof projectCategories)[number]
  )
    ? String(rawCategory)
    : '전체';

  const filteredProjects =
    selectedCategory === '전체'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
          진행했던 프로젝트를 문제와 구현 중심으로 정리합니다
        </Text>
      </Box>

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

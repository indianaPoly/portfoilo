import { AnimatedTabNav } from '@/components/common/AnimatedTabNav';
import { projectCategories } from '@/data/portfolioContent';

function getCategoryHref(category: string): string {
  if (category === '전체') return '/portfolio';

  return `/portfolio?category=${encodeURIComponent(category)}`;
}

export function ProjectCategoryTabs({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <AnimatedTabNav
      ariaLabel="Project categories"
      items={projectCategories.map((category) => ({
        label: category,
        href: getCategoryHref(category),
      }))}
      layoutId="project-category-tabs"
      selectedLabel={selectedCategory}
    />
  );
}

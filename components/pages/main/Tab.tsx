import { AnimatedTabNav } from '../../common/AnimatedTabNav';

export interface TabProps {
  categories: string[];
  selectedCategory: string;
  variant: 'mobile' | 'desktop';
}

function getCategoryHref(category: string): string {
  if (!category || category === '전체') return '/';

  return `/?category=${encodeURIComponent(category)}`;
}

export function Tab({ categories, selectedCategory }: TabProps) {
  const normalizedCategories = Array.from(new Set(categories.filter(Boolean)));

  return (
    <AnimatedTabNav
      ariaLabel="Blog categories"
      items={normalizedCategories.map((category) => ({
        label: category,
        href: getCategoryHref(category),
      }))}
      layoutId="blog-category-tabs"
      selectedLabel={selectedCategory}
    />
  );
}

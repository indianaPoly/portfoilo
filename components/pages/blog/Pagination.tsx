import NextLink from 'next/link';

import { Box, HStack, Text } from '@chakra-ui/react';

export interface PaginationProps {
  selectedCategory: string;
  page: number;
  totalPages: number;
}

function getVisiblePages(
  page: number,
  totalPages: number
): Array<number | 'ellipsis'> {
  if (totalPages <= 5)
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  if (page <= 3) return [1, 2, 3, 'ellipsis', totalPages];
  if (page >= totalPages - 2) {
    return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, 'ellipsis', page, 'ellipsis', totalPages];
}

function getPageHref(selectedCategory: string, nextPage: number): string {
  const params = new URLSearchParams();
  if (selectedCategory && selectedCategory !== '전체') {
    params.set('category', selectedCategory);
  }
  if (nextPage > 1) params.set('page', String(nextPage));

  const query = params.toString();
  return query ? `/?${query}` : '/';
}

function PageLink({
  href,
  children,
  isActive = false,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  ariaLabel?: string;
}) {
  return (
    <Box
      as={NextLink}
      href={href}
      minW={{ base: '42px', md: '54px' }}
      h={{ base: '42px', md: '54px' }}
      px={2}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="16px"
      bg={isActive ? 'paper.200' : 'transparent'}
      color="ink.900"
      fontSize={{ base: '18px', md: '22px' }}
      fontWeight={isActive ? '650' : '500'}
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel}
      transition="background-color 180ms ease, color 180ms ease, transform 180ms ease"
      _hover={{ bg: 'paper.200', textDecoration: 'none' }}
      _active={{ transform: 'scale(0.8)' }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'brand.500',
        outlineOffset: '2px',
      }}
    >
      {children}
    </Box>
  );
}

function DisabledArrow({ children }: { children: React.ReactNode }) {
  return (
    <Box
      minW={{ base: '36px', md: '44px' }}
      h={{ base: '36px', md: '44px' }}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="14px"
      color="ink.300"
      fontSize="24px"
      opacity={0.45}
      aria-disabled="true"
    >
      {children}
    </Box>
  );
}

export function Pagination({
  selectedCategory,
  page,
  totalPages,
}: PaginationProps) {
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <HStack
      w="full"
      justify="center"
      align="center"
      gap={{ base: 2, md: 4 }}
      pt={{ base: 4, md: 8 }}
    >
      {canPrev ? (
        <PageLink
          href={getPageHref(selectedCategory, page - 1)}
          ariaLabel="Previous page"
        >
          ‹
        </PageLink>
      ) : (
        <DisabledArrow>‹</DisabledArrow>
      )}

      {getVisiblePages(page, totalPages).map((item, index) => {
        if (item === 'ellipsis') {
          return (
            <Text
              key={`ellipsis-${index}`}
              color="ink.400"
              px={{ base: 1, md: 2 }}
            >
              ...
            </Text>
          );
        }

        return (
          <PageLink
            key={item}
            href={getPageHref(selectedCategory, item)}
            isActive={item === page}
            ariaLabel={`${item} page`}
          >
            {item}
          </PageLink>
        );
      })}

      {canNext ? (
        <PageLink
          href={getPageHref(selectedCategory, page + 1)}
          ariaLabel="Next page"
        >
          ›
        </PageLink>
      ) : (
        <DisabledArrow>›</DisabledArrow>
      )}
    </HStack>
  );
}

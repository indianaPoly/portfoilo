'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Button, ButtonGroup, HStack, Text } from '@chakra-ui/react';

export interface PaginationProps {
  selectedCategory: string;
  page: number;
  totalPages: number;
}

export function Pagination({
  selectedCategory,
  page,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  const push = (params: URLSearchParams) => {
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const onPrev = () => {
    if (page <= 1) return;

    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== '전체') {
      params.set('category', selectedCategory);
    }

    if (page - 1 > 1) params.set('page', String(page - 1));
    push(params);
  };

  const onNext = () => {
    if (page >= totalPages) return;

    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== '전체') {
      params.set('category', selectedCategory);
    }

    params.set('page', String(page + 1));
    push(params);
  };

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <HStack w="full" justify="space-between" align="center">
      <Text fontSize="sm" color="ink.700">
        Page {page} / {totalPages}
      </Text>

      <ButtonGroup isAttached variant="outline">
        <Button
          onClick={onPrev}
          isDisabled={!canPrev}
          borderRadius="0px"
          borderColor="ink.700"
          bg="paper.100"
          color="ink.800"
          _hover={{ bg: 'paper.200', borderColor: 'ink.800' }}
          _active={{ bg: 'paper.200', borderColor: 'ink.900' }}
          aria-label="Previous page"
        >
          Prev
        </Button>
        <Button
          onClick={onNext}
          isDisabled={!canNext}
          borderRadius="0px"
          borderColor="ink.700"
          bg="paper.100"
          color="ink.800"
          _hover={{ bg: 'paper.200', borderColor: 'ink.800' }}
          _active={{ bg: 'paper.200', borderColor: 'ink.900' }}
          aria-label="Next page"
        >
          Next
        </Button>
      </ButtonGroup>
    </HStack>
  );
}

import NextLink from 'next/link';

import { HStack, Text, VStack } from '@chakra-ui/react';

export interface JournalListProps {
  jno: number;
  title: string;
  date: string;
  category: string;
  href: string;
}

export function JournalList({
  jno,
  title,
  date,
  category,
  href,
}: JournalListProps) {
  return (
    <HStack
      as={NextLink}
      href={href}
      key={jno}
      w="full"
      align="flex-start"
      justify="space-between"
      gap="16px"
      px="18px"
      py="14px"
      bg="paper.100"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="ink.700"
      borderRadius="0px"
      transition="background-color 140ms ease, border-color 140ms ease"
      _hover={{
        bg: 'paper.200',
        borderColor: 'ink.800',
      }}
      _active={{
        bg: 'paper.200',
        borderColor: 'ink.900',
      }}
      cursor="pointer"
    >
      <VStack align="flex-start" gap="6px" flex="1" minW="0">
        <Text
          fontSize="xs"
          color="ink.700"
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          {category}
        </Text>
        <Text fontSize="lg" fontWeight="600" color="ink.900" lineHeight="1.25">
          {title}
        </Text>
      </VStack>

      <Text fontSize="sm" color="ink.600" whiteSpace="nowrap" pt="2px">
        {date}
      </Text>
    </HStack>
  );
}

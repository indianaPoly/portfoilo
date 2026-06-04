import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';

import type { Project } from '@/data/portfolioContent';

function StackPill({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      px="13px"
      py="6px"
      borderRadius="999px"
      bg="brand.50"
      color="brand.700"
      fontSize="14px"
      fontWeight="600"
      letterSpacing="-0.03em"
      lineHeight="1"
    >
      {children}
    </Box>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <VStack
      align="stretch"
      gap={5}
      p={{ base: 5, md: 7 }}
      border="1px solid"
      borderColor="line.100"
      borderRadius="24px"
      bg="white"
    >
      <VStack align="stretch" gap={2}>
        <HStack justify="space-between" align="start" gap={4} flexWrap="wrap">
          <Heading
            as="h2"
            fontSize={{ base: '22px', md: '27px' }}
            fontWeight="700"
            color="ink.900"
            letterSpacing="-0.05em"
            lineHeight="1.3"
          >
            {project.name}
          </Heading>

          <Text
            flex="0 0 auto"
            fontSize="14px"
            fontWeight="500"
            color="ink.500"
            letterSpacing="-0.03em"
          >
            {project.period}
          </Text>
        </HStack>

        <Text
          fontSize="14px"
          fontWeight="600"
          color="brand.700"
          letterSpacing="-0.03em"
        >
          {project.organization} · {project.role}
        </Text>

        <Text
          fontSize={{ base: '15px', md: '17px' }}
          color="ink.700"
          lineHeight="1.75"
          letterSpacing="-0.03em"
        >
          {project.summary}
        </Text>
      </VStack>

      <Wrap gap={2}>
        {project.techStack.map((stack) => (
          <StackPill key={stack}>{stack}</StackPill>
        ))}
      </Wrap>

      <VStack as="ul" align="stretch" gap={3} pl={0}>
        {project.highlights.map((highlight) => (
          <HStack key={highlight} as="li" align="start" gap={3}>
            <Box
              as="span"
              w="6px"
              h="6px"
              mt="10px"
              borderRadius="999px"
              bg="brand.500"
              flex="0 0 auto"
            />
            <Text
              fontSize={{ base: '15px', md: '16px' }}
              color="ink.800"
              lineHeight="1.8"
              letterSpacing="-0.03em"
            >
              {highlight}
            </Text>
          </HStack>
        ))}
      </VStack>

      {project.links?.length ? (
        <HStack gap={3} flexWrap="wrap">
          {project.links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              px="14px"
              py="8px"
              borderRadius="999px"
              bg="paper.200"
              color="ink.900"
              fontSize="14px"
              fontWeight="600"
              letterSpacing="-0.03em"
              transition="background-color 180ms ease, color 180ms ease, transform 180ms ease"
              _hover={{ bg: 'paper.300', textDecoration: 'none' }}
              _active={{ transform: 'scale(0.95)' }}
              _focusVisible={{
                outline: '2px solid',
                outlineColor: 'brand.500',
                outlineOffset: '3px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      ) : null}
    </VStack>
  );
}

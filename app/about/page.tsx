import NextLink from 'next/link';

import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import type { Metadata } from 'next';

import { AboutTimeline } from '../../components/pages/about/AboutTimeline';
import { profile, timelineItems } from '../../data/aboutContent';
import { aboutMetadata } from '../../data/static/meta-data/about.meta-data';

export const metadata: Metadata = aboutMetadata;

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      px="14px"
      py="7px"
      borderRadius="999px"
      bg="brand.50"
      color="brand.700"
      fontSize="15px"
      fontWeight="600"
      letterSpacing="-0.03em"
      lineHeight="1"
    >
      {children}
    </Box>
  );
}

export default function AboutPage() {
  return (
    <VStack align="stretch" gap={{ base: 12, md: 16 }}>
      <VStack align="stretch" gap={5} maxW="920px" pt={{ base: 4, md: 5 }}>
        <Text
          fontSize="13px"
          fontWeight="600"
          color="brand.700"
          letterSpacing="-0.02em"
        >
          About
        </Text>

        <VStack align="stretch" gap={3}>
          <Heading
            as="h1"
            fontSize={{ base: '34px', md: '46px' }}
            fontWeight="700"
            color="ink.900"
            letterSpacing="-0.06em"
            lineHeight="1.12"
          >
            {profile.name}
          </Heading>
          <Text
            maxW="780px"
            fontSize={{ base: '16px', md: '20px' }}
            color="ink.700"
            lineHeight="1.82"
            letterSpacing="-0.04em"
            whiteSpace="pre-line"
          >
            {profile.summary}
          </Text>
        </VStack>

        <HStack gap={4} flexWrap="wrap">
          <Link
            as={NextLink}
            href={`mailto:${profile.email}`}
            display="inline-block"
            color="brand.700"
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight="600"
            letterSpacing="-0.03em"
            transition="color 180ms ease, transform 180ms ease"
            _hover={{ color: 'brand.800', textDecoration: 'none' }}
            _active={{ transform: 'scale(0.95)' }}
          >
            {profile.email}
          </Link>
        </HStack>

        <Wrap spacing={2} pt={1}>
          {profile.skills.map((skill) => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </Wrap>
      </VStack>

      <VStack align="stretch" gap={5}>
        <VStack align="stretch" gap={1}>
          <Heading
            as="h2"
            fontSize={{ base: '24px', md: '30px' }}
            fontWeight="700"
            color="ink.900"
            letterSpacing="-0.05em"
          >
            쌓아온 과정
          </Heading>
        </VStack>

        <AboutTimeline items={timelineItems} />
      </VStack>
    </VStack>
  );
}

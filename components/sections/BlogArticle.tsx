'use client';

import { Badge, Heading, Stack, Text, UnorderedList, ListItem, VStack, chakra, shouldForwardProp } from '@chakra-ui/react';
import type { Variants } from 'framer-motion';
import { motion, isValidMotionProp } from 'framer-motion';
import { blogContent } from '../../data/blogContent';

const MotionStack = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const articleReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function BlogArticle() {
  return (
    <Stack spacing={4} pt={{ base: 6, md: 10 }}>
      <Badge bg="brand.50" color="brand.600" alignSelf="flex-start" borderRadius="full" px={3} py={1}>
        {blogContent.badge}
      </Badge>
      <MotionStack variants={articleReveal} initial="hidden" animate="show">
        <Heading as="h1" size="xl" letterSpacing="-0.02em" mb={4}>
          {blogContent.title}
        </Heading>
        <VStack align="start" spacing={4} color="ink.600" lineHeight={1.8} fontSize="lg">
          {blogContent.paragraphs.map((text) => (
            <Text key={text}>{text}</Text>
          ))}
        </VStack>
        <Heading as="h2" size="md" letterSpacing="-0.01em" mt={8} mb={3}>
          {blogContent.nextTitle}
        </Heading>
        <UnorderedList spacing={3} color="ink.600">
          {blogContent.nextSteps.map((step) => (
            <ListItem key={step}>{step}</ListItem>
          ))}
        </UnorderedList>
      </MotionStack>
    </Stack>
  );
}

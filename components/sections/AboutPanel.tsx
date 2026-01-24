'use client';

import { Box, Heading } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { MotionBox } from '../motion/MotionPrimitives';
import { cardRise } from '../motion/variants';

type AboutPanelProps = {
  title: string;
  children: ReactNode;
};

export default function AboutPanel({ title, children }: AboutPanelProps) {
  return (
    <MotionBox
      variants={cardRise}
      borderRadius="xl"
      p={6}
      bg="white"
      border="1px solid"
      borderColor="ink.200"
      boxShadow="soft"
      style={{ transformPerspective: 900 }}
    >
      <Heading as="h3" size="md" mb={3} letterSpacing="-0.01em">
        {title}
      </Heading>
      <Box>{children}</Box>
    </MotionBox>
  );
}

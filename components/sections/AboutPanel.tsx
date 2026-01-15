"use client";

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
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="xl"
      p={6}
      bg="whiteAlpha.50"
      backdropFilter="blur(6px)"
      style={{ transformPerspective: 900 }}
    >
      <Heading as="h3" size="md" mb={3} letterSpacing="-0.01em">
        {title}
      </Heading>
      <Box>{children}</Box>
    </MotionBox>
  );
}

"use client";

import { Heading, Stack, Tag, VStack } from '@chakra-ui/react';
import { MotionBox } from '../motion/MotionPrimitives';
import { cardRise, staggerContainer } from '../motion/variants';
import ProjectEntry from './ProjectEntry';

type ExperienceProject = {
  name: string;
  summary: string;
  highlights: string[];
  links?: { label: string; url: string }[];
};

type Experience = {
  company: string;
  period: string;
  projects: ExperienceProject[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <MotionBox
      variants={cardRise}
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="xl"
      p={6}
      bg="whiteAlpha.50"
      backdropFilter="blur(6px)"
      display="grid"
      gap={4}
      style={{ transformPerspective: 900 }}
    >
      <Stack direction="row" justify="space-between" align="center">
        <Heading as="h3" size="md" letterSpacing="-0.01em">
          {experience.company}
        </Heading>
        <Tag colorScheme="brand" variant="outline" borderRadius="full">
          {experience.period}
        </Tag>
      </Stack>
      <MotionBox variants={staggerContainer(0.1, 0.05)}>
        <VStack align="start" spacing={5}>
          {experience.projects.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </VStack>
      </MotionBox>
    </MotionBox>
  );
}

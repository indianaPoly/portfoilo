'use client';

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
      borderRadius="xl"
      p={6}
      bg="white"
      border="1px solid"
      borderColor="ink.200"
      boxShadow="soft"
      display="grid"
      gap={4}
      style={{ transformPerspective: 900 }}
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        gap={4}
        flexWrap="wrap"
      >
        <Heading as="h3" size="md" letterSpacing="-0.01em">
          {experience.company}
        </Heading>
        <Tag borderRadius="full" bg="ink.50" color="ink.700" px={3}>
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

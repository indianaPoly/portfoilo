"use client";

import { Divider, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { MotionBox } from '../motion/MotionPrimitives';
import { fadeRise } from '../motion/variants';

type ProjectLink = {
  label: string;
  url: string;
};

type Project = {
  name: string;
  summary: string;
  highlights: string[];
  links?: ProjectLink[];
};

type ProjectEntryProps = {
  project: Project;
};

const ProjectEntry = memo(function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <MotionBox variants={fadeRise} w="full">
      <Text fontWeight="semibold" mb={1}>
        {project.name}
      </Text>
      <Text color="ink.600" mb={2}>
        {project.summary}
      </Text>
      <VStack align="start" spacing={2} color="ink.600" fontSize="sm">
        {project.highlights.map((item) => (
          <Text key={item}>• {item}</Text>
        ))}
      </VStack>
      {project.links && project.links.length > 0 && (
        <Stack direction="row" spacing={3} mt={3} wrap="wrap">
          {project.links.map((link) => (
            <Link key={link.url} href={link.url} isExternal color="brand.500" fontWeight="semibold">
              {link.label}
            </Link>
          ))}
        </Stack>
      )}
      <Divider my={4} borderColor="ink.200" />
    </MotionBox>
  );
});

export default ProjectEntry;

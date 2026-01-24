'use client';

import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { experiences } from '../../data/portfolioContent';
import ExperienceCard from './ExperienceCard';
import { MotionBox } from '../motion/MotionPrimitives';
import { headingReveal, staggerContainer } from '../motion/variants';
import { projectsContent } from '../../data/siteContent';

export default function Projects() {
  return (
    <Stack id="projects" spacing={8} mt={{ base: 10, md: 16 }}>
      <MotionBox
        variants={headingReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <Heading as="h2" size="lg" letterSpacing="-0.02em">
          {projectsContent.sectionTitle}
        </Heading>
      </MotionBox>
      <MotionBox
        variants={staggerContainer(0.18, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </SimpleGrid>
      </MotionBox>
    </Stack>
  );
}

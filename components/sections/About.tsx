"use client";

import { Heading, SimpleGrid, Stack, Text, Tag, VStack } from '@chakra-ui/react';
import { profileIntro, techStack, education, awards } from '../../data/portfolioContent';
import AboutPanel from './AboutPanel';
import { MotionBox } from '../motion/MotionPrimitives';
import { fadeRise, headingReveal, staggerContainer } from '../motion/variants';

export default function About() {
  return (
    <Stack id="about" spacing={8} mt={{ base: 10, md: 16 }}>
      <MotionBox variants={headingReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
        <Heading as="h2" size="lg" letterSpacing="-0.02em">
          About
        </Heading>
      </MotionBox>
      <MotionBox
        variants={staggerContainer(0.18, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <AboutPanel title="함께 고민하는 개발자">
            <VStack align="start" spacing={3} color="whiteAlpha.800">
              {profileIntro.map((text) => (
                <MotionBox key={text} variants={fadeRise}>
                  <Text>{text}</Text>
                </MotionBox>
              ))}
            </VStack>
          </AboutPanel>
          <AboutPanel title="Tech & 학습">
            <Stack direction="row" wrap="wrap" gap={2} mb={4}>
              {techStack.map((stack) => (
                <MotionBox key={stack} variants={fadeRise}>
                  <Tag colorScheme="brand" variant="subtle" borderRadius="full">
                    {stack}
                  </Tag>
                </MotionBox>
              ))}
            </Stack>
            <Heading as="h4" size="sm" mb={2} color="whiteAlpha.800">
              교육 & 활동
            </Heading>
            <VStack align="start" spacing={2} color="whiteAlpha.800">
              <Text fontWeight="semibold">{education.school}</Text>
              {education.activities.map((activity) => (
                <Text key={activity}>• {activity}</Text>
              ))}
            </VStack>
            <Heading as="h4" size="sm" mt={4} mb={2} color="whiteAlpha.800">
              수상/자격
            </Heading>
            <VStack align="start" spacing={2} color="whiteAlpha.800">
              {awards.map((award) => (
                <Text key={award}>• {award}</Text>
              ))}
            </VStack>
          </AboutPanel>
        </SimpleGrid>
      </MotionBox>
    </Stack>
  );
}

"use client";

import { Flex, Heading, Stack, Text, Button, Badge, SimpleGrid, Box } from '@chakra-ui/react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MotionBox } from '../motion/MotionPrimitives';
import { fadeRise, headingReveal, orbReveal, staggerContainer } from '../motion/variants';
import { heroContent } from '../../data/siteContent';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start end', 'end start'],
  });
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.08, 0.98]);
  const bodyScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.04, 0.99]);
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.75, 1, 0.85]);

  return (
    <Stack spacing={{ base: 10, md: 12 }} mt={{ base: 4, md: 6 }} ref={contentRef}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 10 }} alignItems="center">
        <MotionBox variants={staggerContainer(0.18, 0.12)} initial="hidden" animate="show">
          <Stack spacing={5}>
            <MotionBox variants={fadeRise}>
              <Badge colorScheme="brand" alignSelf={{ base: 'flex-start', md: 'flex-start' }} borderRadius="full" px={3} py={1}>
                {heroContent.badge}
              </Badge>
            </MotionBox>
            <MotionBox
              variants={shouldReduceMotion ? fadeRise : headingReveal}
              style={shouldReduceMotion ? undefined : { scale: titleScale }}
            >
              <Heading as="h1" size="2xl" letterSpacing="-0.03em" lineHeight={1.1}>
                {heroContent.title}
              </Heading>
            </MotionBox>
            <MotionBox
              variants={fadeRise}
              style={shouldReduceMotion ? undefined : { scale: bodyScale, opacity: bodyOpacity }}
            >
              <Text color="whiteAlpha.800" fontSize="lg" lineHeight={1.7}>
                {heroContent.description}
              </Text>
            </MotionBox>
            <MotionBox variants={fadeRise}>
              <Flex gap={3} wrap="wrap">
                {heroContent.ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    as="a"
                    href={cta.href}
                    colorScheme="brand"
                    size="md"
                    borderRadius="full"
                    variant={cta.variant}
                  >
                    {cta.label}
                  </Button>
                ))}
              </Flex>
            </MotionBox>
          </Stack>
        </MotionBox>
        <MotionBox
          variants={shouldReduceMotion ? fadeRise : orbReveal}
          initial="hidden"
          animate={shouldReduceMotion ? 'show' : ['show', 'float']}
        >
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            aspectRatio="1 / 1"
            bgGradient="conic-gradient(from 120deg at 50% 50%, rgba(124,108,255,0.22), rgba(74,210,203,0.35), rgba(124,108,255,0.22))"
            display="grid"
            placeItems="center"
            boxShadow="0 20px 60px rgba(0,0,0,0.4)"
            maxW={{ base: '320px', md: '360px' }}
            mx={{ base: 'auto', md: 'unset' }}
          >
            <Stack spacing={2} textAlign="center">
              <Badge colorScheme="brand" variant="subtle" alignSelf="center" px={3} py={1}>
                {heroContent.orb.badge}
              </Badge>
              <Heading as="h3" size="md">{heroContent.orb.title}</Heading>
              <Text color="whiteAlpha.800">{heroContent.orb.subtitle}</Text>
            </Stack>
          </Box>
        </MotionBox>
      </SimpleGrid>
    </Stack>
  );
}

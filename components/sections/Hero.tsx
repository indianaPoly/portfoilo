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
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.99]);
  const bodyScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.99, 1.01, 0.99]);
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.92, 1, 0.95]);

  return (
    <Stack spacing={{ base: 10, md: 12 }} mt={{ base: 2, md: 4 }} ref={contentRef}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 12 }} alignItems="center">
        <MotionBox variants={staggerContainer(0.18, 0.12)} initial="hidden" animate="show">
          <Stack spacing={5}>
            <MotionBox variants={fadeRise}>
              <Badge
                alignSelf={{ base: 'flex-start', md: 'flex-start' }}
                borderRadius="full"
                px={3}
                py={1}
                bg="brand.50"
                color="brand.600"
              >
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
              <Text color="ink.600" fontSize="lg" lineHeight={1.7}>
                {heroContent.description}
              </Text>
            </MotionBox>
            <MotionBox variants={fadeRise}>
              <Flex gap={3} wrap="wrap">
                {heroContent.ctas.map((cta) => {
                  const isSolid = cta.variant === 'solid';
                  return (
                    <Button
                      key={cta.href}
                      as="a"
                      href={cta.href}
                      size="md"
                      borderRadius="full"
                      bg={isSolid ? 'brand.500' : 'white'}
                      color={isSolid ? 'white' : 'ink.700'}
                      border="1px solid"
                      borderColor={isSolid ? 'brand.500' : 'ink.200'}
                      _hover={{
                        bg: isSolid ? 'brand.600' : 'ink.50',
                        borderColor: isSolid ? 'brand.600' : 'ink.300',
                      }}
                    >
                      {cta.label}
                    </Button>
                  );
                })}
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
            borderRadius="2xl"
            bg="ink.50"
            border="1px solid"
            borderColor="ink.200"
            px={{ base: 6, md: 8 }}
            py={{ base: 6, md: 8 }}
            display="grid"
            placeItems="center"
          >
            <Stack spacing={2} textAlign="center">
              <Badge bg="white" color="brand.600" borderRadius="full" alignSelf="center" px={3} py={1}>
                {heroContent.orb.badge}
              </Badge>
              <Heading as="h3" size="md">
                {heroContent.orb.title}
              </Heading>
              <Text color="ink.600">{heroContent.orb.subtitle}</Text>
            </Stack>
          </Box>
        </MotionBox>
      </SimpleGrid>
    </Stack>
  );
}

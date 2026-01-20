"use client";

import { Badge, Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { MotionBox } from '../motion/MotionPrimitives';
import { cardRise, headingReveal } from '../motion/variants';
import { contactContent } from '../../data/siteContent';

export default function Contact() {
  return (
    <Box id="contact" textAlign="center" mt={{ base: 12, md: 16 }}>
      <MotionBox
        variants={cardRise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        mx="auto"
        maxW="480px"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="xl"
        p={8}
        bg="whiteAlpha.50"
        backdropFilter="blur(8px)"
        boxShadow="lg"
        style={{ transformPerspective: 900 }}
      >
        <MotionBox variants={headingReveal}>
          <Badge colorScheme="brand" borderRadius="full" px={3} py={1} mb={2}>
            {contactContent.badge}
          </Badge>
          <Heading as="h3" size="md" letterSpacing="-0.01em" mb={3}>
            {contactContent.title}
          </Heading>
        </MotionBox>
        <MotionBox variants={headingReveal}>
          <Text color="whiteAlpha.800" mb={6} lineHeight={1.6}>
            {contactContent.description}
          </Text>
        </MotionBox>
        <MotionBox variants={headingReveal}>
          <Stack direction={{ base: 'column', sm: 'row' }} justify="center" spacing={3}>
            {contactContent.ctas.map((cta) => (
              <Button
                key={cta.href}
                as="a"
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noreferrer' : undefined}
                variant={cta.variant}
                colorScheme="brand"
                borderRadius="full"
              >
                {cta.label}
              </Button>
            ))}
          </Stack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

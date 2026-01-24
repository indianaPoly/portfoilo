'use client';

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
        maxW="520px"
        borderRadius="xl"
        p={8}
        bg="white"
        border="1px solid"
        borderColor="ink.200"
        boxShadow="soft"
        style={{ transformPerspective: 900 }}
      >
        <MotionBox variants={headingReveal}>
          <Badge
            bg="brand.50"
            color="brand.600"
            borderRadius="full"
            px={3}
            py={1}
            mb={2}
          >
            {contactContent.badge}
          </Badge>
          <Heading as="h3" size="md" letterSpacing="-0.01em" mb={3}>
            {contactContent.title}
          </Heading>
        </MotionBox>
        <MotionBox variants={headingReveal}>
          <Text color="ink.600" mb={6} lineHeight={1.6}>
            {contactContent.description}
          </Text>
        </MotionBox>
        <MotionBox variants={headingReveal}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justify="center"
            spacing={3}
          >
            {contactContent.ctas.map((cta) => {
              const isSolid = cta.variant === 'solid';
              return (
                <Button
                  key={cta.href}
                  as="a"
                  href={cta.href}
                  target={cta.href.startsWith('http') ? '_blank' : undefined}
                  rel={cta.href.startsWith('http') ? 'noreferrer' : undefined}
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
          </Stack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

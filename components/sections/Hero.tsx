'use client';

import { Box, Center, Flex, Grid, Text, VStack } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box as="section" id="hero" pt={{ base: 10, md: 12 }}>
      <Box borderTop="2px solid" borderColor="rgba(23, 22, 20, 0.55)" mb={6} />

      <Grid
        templateColumns={{ base: '1fr', md: '1.15fr 0.85fr' }}
        gap={{ base: 8, md: 10 }}
      >
        <VStack align="start" spacing={{ base: 4, md: 5 }}>
          <Flex gap={3} align="baseline" wrap="wrap">
            <Text
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="ink.700"
            >
              Front Page
            </Text>
            <Text
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="ink.700"
            >
              Feature Story
            </Text>
          </Flex>

          <Text
            as="h1"
            fontSize={{ base: '46px', sm: '56px', md: '78px' }}
            fontWeight={900}
            lineHeight={0.92}
            letterSpacing="-0.04em"
            color="ink.900"
          >
            A Portfolio
            <Box as="br" />
            Printed Like News
          </Text>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={1.7}
            color="ink.800"
            maxW="60ch"
          >
            A calm, paper-first layout with ink-heavy type, rule lines, and a
            front-page rhythm.
          </Text>

          <Flex gap={3} wrap="wrap" align="baseline">
            <Text fontSize="sm" color="ink.700" letterSpacing="0.06em">
              By YeonGyu Kim
            </Text>
            <Text fontSize="sm" color="ink.600">
              ·
            </Text>
            <Text fontSize="sm" color="ink.700" letterSpacing="0.06em">
              Design & Engineering
            </Text>
          </Flex>

          <Box
            borderTop="1px solid"
            borderColor="rgba(23, 22, 20, 0.25)"
            w="full"
            pt={4}
          >
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={6}
            >
              <VStack align="start" spacing={2}>
                <Text
                  fontSize="sm"
                  fontWeight={800}
                  letterSpacing="0.04em"
                  color="ink.900"
                >
                  In This Issue
                </Text>
                <Text fontSize="sm" lineHeight={1.75} color="ink.800">
                  Minimal components, strong hierarchy, and editorial spacing —
                  a layout that reads.
                </Text>
              </VStack>

              <VStack align="start" spacing={2}>
                <Text
                  fontSize="sm"
                  fontWeight={800}
                  letterSpacing="0.04em"
                  color="ink.900"
                >
                  Notes
                </Text>
                <Text fontSize="sm" lineHeight={1.75} color="ink.800">
                  Built with Next.js + Chakra UI, tuned for clarity, and styled
                  like paper.
                </Text>
              </VStack>
            </Grid>
          </Box>
        </VStack>

        <VStack align="stretch" spacing={4}>
          <Box
            border="1px solid"
            borderColor="rgba(23, 22, 20, 0.25)"
            bg="rgba(255,255,255,0.35)"
            p={3}
          >
            <Center>
              <Box
                w="full"
                h={{ base: '220px', md: '320px' }}
                bg="rgba(23, 22, 20, 0.07)"
                border="1px solid"
                borderColor="rgba(23, 22, 20, 0.18)"
                display="grid"
                placeItems="center"
              >
                <Text
                  fontSize="xs"
                  letterSpacing="0.24em"
                  textTransform="uppercase"
                  color="ink.700"
                >
                  Photo
                </Text>
              </Box>
            </Center>
            <Text
              mt={3}
              fontSize="xs"
              color="ink.600"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Photo · Archive
            </Text>
          </Box>

          <Box borderTop="2px solid" borderColor="rgba(23, 22, 20, 0.55)" />

          <VStack align="start" spacing={2}>
            <Text
              fontSize="sm"
              fontWeight={800}
              letterSpacing="0.04em"
              color="ink.900"
            >
              Column
            </Text>
            <Text fontSize="sm" lineHeight={1.75} color="ink.800">
              Good design feels inevitable. Paper makes the hierarchy obvious —
              and every word earns its place.
            </Text>
          </VStack>
        </VStack>
      </Grid>
    </Box>
  );
}

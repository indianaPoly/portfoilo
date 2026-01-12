import { Box, Heading, SimpleGrid, Stack, Text, Tag, VStack } from '@chakra-ui/react';
import { profileIntro, techStack, education, awards } from '../../data/portfolioContent';

export default function About() {
  return (
    <Stack id="about" spacing={8} mt={{ base: 10, md: 16 }}>
      <Heading as="h2" size="lg" letterSpacing="-0.02em">
        About
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box
          border="1px solid"
          borderColor="whiteAlpha.200"
          borderRadius="xl"
          p={6}
          bg="whiteAlpha.50"
          backdropFilter="blur(6px)"
        >
          <Heading as="h3" size="md" mb={3} letterSpacing="-0.01em">
            함께 고민하는 개발자
          </Heading>
          <VStack align="start" spacing={3} color="whiteAlpha.800">
            {profileIntro.map((text) => (
              <Text key={text}>{text}</Text>
            ))}
          </VStack>
        </Box>
        <Box
          border="1px solid"
          borderColor="whiteAlpha.200"
          borderRadius="xl"
          p={6}
          bg="whiteAlpha.50"
          backdropFilter="blur(6px)"
        >
          <Heading as="h3" size="md" mb={3} letterSpacing="-0.01em">
            Tech & 학습
          </Heading>
          <Stack direction="row" wrap="wrap" gap={2} mb={4}>
            {techStack.map((stack) => (
              <Tag key={stack} colorScheme="brand" variant="subtle" borderRadius="full">
                {stack}
              </Tag>
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
        </Box>
      </SimpleGrid>
    </Stack>
  );
}

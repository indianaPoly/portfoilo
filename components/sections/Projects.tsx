import { Box, Heading, SimpleGrid, Stack, Text, Tag, VStack, Link, Divider } from '@chakra-ui/react';
import { experiences } from '../../data/portfolioContent';

export default function Projects() {
  return (
    <Stack id="projects" spacing={8} mt={{ base: 10, md: 16 }}>
      <Heading as="h2" size="lg" letterSpacing="-0.02em">
        Projects & Experience
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {experiences.map((experience) => (
          <Box
            key={experience.company}
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="xl"
            p={6}
            bg="whiteAlpha.50"
            backdropFilter="blur(6px)"
            display="grid"
            gap={4}
          >
            <Stack direction="row" justify="space-between" align="center">
              <Heading as="h3" size="md" letterSpacing="-0.01em">
                {experience.company}
              </Heading>
              <Tag colorScheme="brand" variant="outline" borderRadius="full">
                {experience.period}
              </Tag>
            </Stack>
            <VStack align="start" spacing={5}>
              {experience.projects.map((project) => (
                <Box key={project.name} w="full">
                  <Text fontWeight="semibold" mb={1}>
                    {project.name}
                  </Text>
                  <Text color="whiteAlpha.800" mb={2}>
                    {project.summary}
                  </Text>
                  <VStack align="start" spacing={2} color="whiteAlpha.800" fontSize="sm">
                    {project.highlights.map((item) => (
                      <Text key={item}>• {item}</Text>
                    ))}
                  </VStack>
                  {project.links && project.links.length > 0 && (
                    <Stack direction="row" spacing={3} mt={3} wrap="wrap">
                      {project.links.map((link) => (
                        <Link key={link.url} href={link.url} isExternal color="brand.200" fontWeight="semibold">
                          {link.label}
                        </Link>
                      ))}
                    </Stack>
                  )}
                  <Divider my={4} borderColor="whiteAlpha.200" />
                </Box>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

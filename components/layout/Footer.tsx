import NextLink from 'next/link';
import { Box, Container, HStack, Link, Text } from '@chakra-ui/react';
import { links } from '../../data/portfolioContent';
import { footerContent } from '../../data/siteContent';

export default function Footer() {
  return (
    <Box as="footer" mt={12} py={10} color="ink.600">
      <Container maxW="960px" px={{ base: 4, md: 8 }}>
        <HStack justify="space-between" align="center" spacing={6} flexWrap="wrap">
          <Text fontSize="sm">{footerContent.description}</Text>
          <HStack spacing={3}>
            <Link
              as={NextLink}
              href={links.github}
              isExternal
              fontWeight="semibold"
              color="brand.500"
              _hover={{ textDecoration: 'underline' }}
            >
              {footerContent.githubLabel}
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

import NextLink from 'next/link';
import { Box, Container, HStack, Link, Text } from '@chakra-ui/react';
import { links } from '../../data/portfolioContent';
import { footerContent } from '../../data/siteContent';

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px solid" borderColor="whiteAlpha.200" mt={12} py={8} color="whiteAlpha.800">
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <HStack justify="space-between" align="center" spacing={6} flexWrap="wrap">
          <Text fontSize="sm">{footerContent.description}</Text>
          <HStack spacing={3}>
            <Link as={NextLink} href={links.github} isExternal fontWeight="semibold" color="brand.200">
              {footerContent.githubLabel}
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

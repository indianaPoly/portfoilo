import NextLink from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import { links } from '../../data/portfolioContent';
import { footerContent } from '../../data/siteContent';

export default function Footer() {
  return (
    <Box as="footer" mt={12} borderTop="1px solid" borderColor="rgba(23, 22, 20, 0.25)">
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} py={8}>
        <Flex justify="space-between" align="baseline" gap={4} flexWrap="wrap">
          <Text fontSize="sm" color="ink.700">
            {footerContent.description}
          </Text>
          <Text
            as={NextLink}
            href={links.github}
            target="_blank"
            rel="noreferrer"
            fontSize="sm"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="ink.800"
            _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            {footerContent.githubLabel}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

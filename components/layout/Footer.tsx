import NextLink from 'next/link';

import { Box, Flex, Text } from '@chakra-ui/react';

import { links } from '../../data/portfolioContent';

export default function Footer() {
  return (
    <Box
      as="footer"
      mt={12}
      borderTop="1px solid"
      borderColor="rgba(23, 22, 20, 0.25)"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} py={8}>
        <Flex justify="space-between" align="baseline" gap={4} flexWrap="wrap">
          <Text fontSize="sm" color="ink.700">
            ⓒ 2026. Poly All rights reserved.
          </Text>
          <Flex gap="10px">
            {Object.entries(links).map((link) => (
              <Text
                key={link[0]}
                as={NextLink}
                href={link[1]}
                target="_blank"
                rel="noreferrer"
                fontSize="xs"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="ink.800"
                _hover={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
                _active={{
                  scale: 0.95,
                }}
                transition="all 0.3s ease"
              >
                {link[0]}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

'use client';

import NextLink from 'next/link';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { navContent } from '../../data/siteContent';

export default function NavBar() {
  return (
    <Box
      as="header"
      borderBottom="1px solid"
      borderColor="rgba(23, 22, 20, 0.25)"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} pt={6} pb={3}>
        <Grid gap={3}>
          <Flex justify="center">
            <Text
              as={NextLink}
              href="/"
              fontSize={{ base: '28px', md: '34px' }}
              fontWeight={800}
              letterSpacing="-0.02em"
              lineHeight={1}
              _hover={{ textDecoration: 'none' }}
            >
              {navContent.brand}
            </Text>
          </Flex>

          <Box borderTop="1px solid" borderColor="rgba(23, 22, 20, 0.25)" />

          <Flex
            justify="center"
            gap={{ base: 4, md: 6 }}
            flexWrap="wrap"
            pb={1}
          >
            {navContent.links.map((link) => (
              <Text
                key={link.href}
                as={NextLink}
                href={link.href}
                fontSize="sm"
                letterSpacing="0.16em"
                textTransform="uppercase"
                color="ink.800"
                _hover={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                {link.label}
              </Text>
            ))}
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}

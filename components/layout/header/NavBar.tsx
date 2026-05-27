import NextLink from 'next/link';

import { Box, Flex, HStack, Text } from '@chakra-ui/react';

import { navContent } from '../../../data/siteContent';

export default function NavBar() {
  return (
    <Box as="header" bg="white" borderBottom="1px solid" borderColor="line.100">
      <Flex
        maxW="1460px"
        mx="auto"
        px={{ base: 6, md: 10, xl: 12 }}
        h={{ base: '74px', md: '92px' }}
        align="center"
        justify="space-between"
        gap={6}
      >
        <HStack
          as={NextLink}
          href="/"
          gap={{ base: 3, md: 5 }}
          transition="transform 180ms ease, color 180ms ease"
          _hover={{ textDecoration: 'none' }}
          _active={{ transform: 'scale(0.8)' }}
        >
          <Text
            as="span"
            fontFamily="'Brush Script MT', 'Segoe Script', cursive"
            fontSize={{ base: '35px', md: '48px' }}
            fontWeight="600"
            lineHeight="1"
            color="brand.700"
            letterSpacing="-0.05em"
          >
            Poly
          </Text>
          <Text
            as="span"
            fontSize={{ base: '22px', md: '28px' }}
            fontWeight="650"
            lineHeight="1"
            color="ink.900"
            letterSpacing="-0.04em"
            whiteSpace="nowrap"
          >
            Tech Blog
          </Text>
        </HStack>

        <HStack gap={3} display={{ base: 'none', sm: 'flex' }}>
          {navContent.links.map((link) => (
            <Box
              key={link.href}
              as={NextLink}
              href={link.href}
              h={{ base: '40px', md: '52px' }}
              px={{ base: 4, md: 6 }}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="14px"
              bg="paper.200"
              color="ink.900"
              fontSize={{ base: '15px', md: '18px' }}
              fontWeight="600"
              letterSpacing="-0.04em"
              transition="background-color 180ms ease, color 180ms ease, transform 180ms ease"
              _hover={{ bg: 'paper.300', textDecoration: 'none' }}
              _active={{ bg: 'paper.300', transform: 'scale(0.8)' }}
              _focusVisible={{
                outline: '2px solid',
                outlineColor: 'brand.500',
                outlineOffset: '2px',
              }}
            >
              {link.label}
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

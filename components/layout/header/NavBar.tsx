import NextLink from 'next/link';

import { Box, Flex, HStack, Text } from '@chakra-ui/react';

import { navContent } from '../../../data/siteContent';

export default function NavBar() {
  return (
    <Box as="header" bg="white" borderBottom="1px solid" borderColor="line.100">
      <Flex
        maxW="1460px"
        mx="auto"
        px={{ base: 5, sm: 6, md: 10, xl: 12 }}
        py={{ base: 4, sm: 0 }}
        h={{ base: 'auto', sm: '74px', md: '92px' }}
        align={{ base: 'stretch', sm: 'center' }}
        justify="space-between"
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 4, sm: 6 }}
      >
        <HStack
          as={NextLink}
          href="/"
          gap={{ base: 3, md: 5 }}
          alignSelf={{ base: 'center', sm: 'auto' }}
          transition="transform 180ms ease, color 180ms ease"
          _hover={{ textDecoration: 'none' }}
          _active={{ transform: 'scale(0.95)' }}
        >
          <Text
            as="span"
            fontFamily="'Brush Script MT', 'Segoe Script', cursive"
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight="600"
            lineHeight="1"
            color="brand.700"
            letterSpacing="-0.05em"
          >
            Poly
          </Text>
          <Text
            as="span"
            fontSize={{ base: '20px', md: '28px' }}
            fontWeight="650"
            lineHeight="1"
            color="ink.900"
            letterSpacing="-0.04em"
            whiteSpace="nowrap"
          >
            Tech Blog
          </Text>
        </HStack>

        <HStack
          gap={{ base: 2, sm: 3 }}
          display="flex"
          w={{ base: 'full', sm: 'auto' }}
          justify={{ base: 'center', sm: 'flex-start' }}
        >
          {navContent.links.map((link) => (
            <Box
              key={link.href}
              as={NextLink}
              href={link.href}
              h={{ base: '38px', md: '52px' }}
              px={{ base: 3, md: 6 }}
              flex={{ base: '1 1 0', sm: '0 0 auto' }}
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
              _active={{ bg: 'paper.300', transform: 'scale(0.95)' }}
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

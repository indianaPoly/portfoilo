import { Box, HStack, Link, Text } from '@chakra-ui/react';

import { links } from '../../../data/portfolioContent';

export default function Footer() {
  return (
    <Box as="footer" mt={{ base: 12, md: 16 }} bg="paper.200">
      <HStack
        maxW="1460px"
        mx="auto"
        px={{ base: 6, md: 10, xl: 12 }}
        h={{ base: '76px', md: '92px' }}
        justify="center"
        gap={{ base: 4, md: 7 }}
        flexWrap="wrap"
      >
        {Object.entries(links).map(([label, href], index) => (
          <HStack key={label} gap={{ base: 4, md: 7 }}>
            {index > 0 ? <Text color="ink.300">|</Text> : null}
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              display="inline-block"
              fontSize={{ base: '14px', md: '17px' }}
              fontWeight="500"
              color="ink.400"
              letterSpacing="-0.03em"
              transition="color 180ms ease, transform 180ms ease"
              _hover={{ color: 'ink.700', textDecoration: 'none' }}
              _active={{ transform: 'scale(0.95)' }}
            >
              {label}
            </Link>
          </HStack>
        ))}
        <Text color="ink.300">|</Text>
        <Text
          fontSize={{ base: '14px', md: '17px' }}
          fontWeight="500"
          color="ink.400"
          letterSpacing="-0.03em"
        >
          © POLY. ALL RIGHTS RESERVED
        </Text>
      </HStack>
    </Box>
  );
}

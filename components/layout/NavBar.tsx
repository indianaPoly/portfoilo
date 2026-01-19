'use client';

import NextLink from 'next/link';
import { motion, isValidMotionProp } from 'framer-motion';
import { Button, chakra, Container, Flex, HStack, Link, Text, shouldForwardProp } from '@chakra-ui/react';
import { navContent } from '../../data/siteContent';

const MotionHeader = chakra(motion.header, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function NavBar() {
  return (
    <MotionHeader
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter="blur(12px)"
      bg="rgba(12,14,20,0.85)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }} py={4}>
        <Flex align="center" justify="space-between" gap={4}>
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Text fontWeight={800} letterSpacing="-0.03em" fontSize="lg">
              {navContent.brand}
            </Text>
          </Link>
          <HStack spacing={3}>
            {navContent.links.map((link) => (
              <Button
                key={link.href}
                as={NextLink}
                href={link.href}
                size="sm"
                colorScheme="brand"
                variant="solid"
                borderRadius="full"
              >
                {link.label}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Container>
    </MotionHeader>
  );
}

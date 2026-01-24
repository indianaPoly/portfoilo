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
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      position="sticky"
      top={0}
      zIndex={10}
      bg="rgba(242, 244, 246, 0.9)"
      borderBottom="1px solid"
      borderColor="ink.200"
      backdropFilter="blur(10px)"
    >
      <Container maxW="960px" px={{ base: 4, md: 8 }} py={4}>
        <Flex align="center" justify="space-between" gap={4}>
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Text fontWeight={700} letterSpacing="-0.02em" fontSize="lg">
              {navContent.brand}
            </Text>
          </Link>
          <HStack spacing={2}>
            {navContent.links.map((link) => (
              <Button
                key={link.href}
                as={NextLink}
                href={link.href}
                size="sm"
                variant="ghost"
                borderRadius="full"
                color="ink.700"
                _hover={{ bg: 'white', boxShadow: 'soft' }}
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

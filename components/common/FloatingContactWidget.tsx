'use client';

import { useCallback, useState } from 'react';

import { Box, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { externalLinks } from '@/data/siteContent';

const MotionBox = motion.create(Box);

function SparklesIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CopyCheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleCopyEmail = useCallback((email: string) => {
    const cleanEmail = email.replace('mailto:', '');
    void navigator.clipboard.writeText(cleanEmail);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  }, []);

  return (
    <Box position="relative" id="floating-contact-widget">
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed"
            bottom={{ base: '74px', md: '86px' }}
            right={{ base: '20px', md: '28px' }}
            zIndex={999}
            w={{ base: 'calc(100vw - 40px)', sm: '350px' }}
            bg="white"
            borderRadius="24px"
            border="1px solid"
            borderColor="line.100"
            boxShadow="0 24px 54px rgba(32, 33, 36, 0.18)"
            p={3}
            overflow="hidden"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {/* External Links List */}
            <VStack align="stretch" gap={2}>
              {externalLinks.map((item) => {
                const isEmail = item.href.startsWith('mailto:');
                const displayHref = isEmail
                  ? item.href.replace('mailto:', '')
                  : item.href.replace('https://', '');

                return (
                  <Flex
                    key={item.href}
                    align="center"
                    justify="space-between"
                    p={3}
                    borderRadius="16px"
                    bg="paper.200"
                    transition="background-color 180ms ease, transform 180ms ease"
                    _hover={{ bg: 'paper.300' }}
                  >
                    <HStack gap={3} overflow="hidden">
                      <Flex
                        align="center"
                        justify="center"
                        w="38px"
                        h="38px"
                        borderRadius="12px"
                        bg="white"
                        color="brand.700"
                        boxShadow="0 2px 8px rgba(0, 0, 0, 0.05)"
                        flexShrink={0}
                      >
                        {item.icon === 'github' ? (
                          <GitHubIcon />
                        ) : item.icon === 'email' ? (
                          <MailIcon />
                        ) : (
                          <ExternalIcon />
                        )}
                      </Flex>
                      <VStack align="flex-start" gap={0} overflow="hidden">
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="ink.900"
                          letterSpacing="-0.02em"
                        >
                          {item.label}
                        </Text>
                        <Text
                          fontSize="12px"
                          color="ink.500"
                          truncate
                          maxW="180px"
                        >
                          {displayHref}
                        </Text>
                      </VStack>
                    </HStack>

                    <HStack gap={1.5} flexShrink={0}>
                      {isEmail ? (
                        <Box
                          as="button"
                          onClick={() => handleCopyEmail(item.href)}
                          aria-label="Copy Email"
                          display="inline-flex"
                          alignItems="center"
                          gap={1}
                          px={2.5}
                          py={1.5}
                          borderRadius="10px"
                          bg="white"
                          color={copiedEmail ? 'green.600' : 'ink.800'}
                          fontSize="12px"
                          fontWeight="600"
                          boxShadow="0 1px 4px rgba(0,0,0,0.06)"
                          transition="all 180ms ease"
                          _hover={{ bg: 'brand.700', color: 'white' }}
                        >
                          {copiedEmail ? (
                            <>
                              <CopyCheckIcon />
                              <Text as="span">복사됨</Text>
                            </>
                          ) : (
                            <Text as="span">복사</Text>
                          )}
                        </Box>
                      ) : null}

                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.label}`}
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                        borderRadius="10px"
                        bg="brand.700"
                        color="white"
                        transition="all 180ms ease"
                        _hover={{
                          bg: 'brand.800',
                          transform: 'translateY(-1px)',
                          textDecoration: 'none',
                        }}
                        _active={{ transform: 'scale(0.95)' }}
                      >
                        <ExternalIcon />
                      </Link>
                    </HStack>
                  </Flex>
                );
              })}
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Trigger FAB Button */}
      <Box
        as="button"
        onClick={toggleOpen}
        aria-label={isOpen ? '닫기' : '외부 사이트 및 연락처 열기'}
        aria-expanded={isOpen}
        position="fixed"
        bottom={{ base: '20px', md: '28px' }}
        right={{ base: '20px', md: '28px' }}
        zIndex={1000}
        w={{ base: '44px', md: '48px' }}
        h={{ base: '44px', md: '48px' }}
        borderRadius="full"
        bg="brand.700"
        color="white"
        boxShadow="0 10px 28px rgba(21, 115, 71, 0.45)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        transition="background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease"
        _hover={{
          bg: 'brand.800',
          transform: 'scale(1.08)',
          boxShadow: '0 14px 34px rgba(21, 115, 71, 0.55)',
        }}
        _active={{
          transform: 'scale(0.92)',
        }}
      >
        <MotionBox
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isOpen ? <CloseIcon /> : <SparklesIcon />}
        </MotionBox>
      </Box>
    </Box>
  );
}

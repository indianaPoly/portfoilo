'use client';

import NextLink from 'next/link';

import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import { navContent } from '../../../data/siteContent';
import {
  getPortfolioDownloadHref,
  getResumeDownloadHref,
} from '../../../lib/downloadLinks';

const navPillStyles = {
  h: { base: '38px', md: '52px' },
  px: { base: 3, md: 6 },
  flex: { base: '1 1 0', sm: '0 0 auto' },
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '14px',
  bg: 'paper.200',
  color: 'ink.900',
  fontSize: { base: '15px', md: '18px' },
  fontWeight: '600',
  letterSpacing: '-0.04em',
  transition:
    'background-color 180ms ease, color 180ms ease, transform 180ms ease',
  _hover: { bg: 'paper.300', textDecoration: 'none' },
  _active: { bg: 'paper.300', transform: 'scale(0.95)' },
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'brand.500',
    outlineOffset: '2px',
  },
} as const;

function DownloadMenu() {
  return (
    <Menu placement="bottom-end" gutter={10} strategy="fixed">
      <MenuButton
        as={Button}
        {...navPillStyles}
        border="0"
        boxShadow="none"
        cursor="pointer"
        _hover={{ bg: 'paper.300', textDecoration: 'none' }}
        _active={{ bg: 'paper.300', transform: 'scale(0.95)' }}
      >
        <HStack as="span" gap={1.5} justify="center">
          <Text as="span">{navContent.downloads.label}</Text>
          <Text
            as="span"
            color="ink.600"
            fontSize="0.9em"
            fontWeight="700"
            aria-hidden="true"
          >
            ▾
          </Text>
        </HStack>
      </MenuButton>

      <MenuList
        minW={{ base: 'min(88vw, 320px)', md: '360px' }}
        maxH="min(72vh, 560px)"
        overflowY="auto"
        p={2}
        border="1px solid"
        borderColor="line.100"
        borderRadius="20px"
        bg="white"
        boxShadow="0 18px 48px rgba(32, 33, 36, 0.1)"
      >
        <MenuItem
          as="a"
          href={getResumeDownloadHref()}
          download
          borderRadius="14px"
          color="ink.900"
          fontSize="14px"
          fontWeight="600"
          letterSpacing="-0.035em"
          bg="white"
          _hover={{ bg: 'paper.200', color: 'brand.700' }}
          _focus={{ bg: 'paper.200', color: 'brand.700' }}
        >
          {navContent.downloads.resumeLabel} · A4 PDF
        </MenuItem>

        <MenuDivider borderColor="line.100" />

        <MenuItem
          as="a"
          href={getPortfolioDownloadHref()}
          download
          borderRadius="14px"
          color="ink.900"
          fontSize="14px"
          fontWeight="600"
          letterSpacing="-0.035em"
          lineHeight="1.45"
          whiteSpace="normal"
          bg="white"
          _hover={{ bg: 'paper.200', color: 'brand.700' }}
          _focus={{ bg: 'paper.200', color: 'brand.700' }}
        >
          {navContent.downloads.portfolioLabel} · 전체 프로젝트 PDF
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

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
              {...navPillStyles}
            >
              {link.label}
            </Box>
          ))}
          <DownloadMenu />
        </HStack>
      </Flex>
    </Box>
  );
}

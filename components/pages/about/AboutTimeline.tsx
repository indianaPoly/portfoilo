'use client';

import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import type { Variants } from 'framer-motion';

import { MotionBox } from '../../motion/MotionPrimitives';

export interface AboutTimelineItem {
  date: string;
  title: string;
  category: string;
  meta?: string;
  items: string[];
}

export interface AboutTimelineProps {
  items: AboutTimelineItem[];
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TimelineContent({
  item,
  placement,
}: {
  item: AboutTimelineItem;
  placement: 'left' | 'right';
}) {
  const isLeft = placement === 'left';

  return (
    <VStack
      align="stretch"
      gap={3}
      py={{ base: 0, md: 1 }}
      pl={{ base: 0, md: isLeft ? 0 : 2 }}
      pr={{ base: 0, md: isLeft ? 2 : 0 }}
      textAlign="left"
    >
      <HStack gap={2} flexWrap="wrap" justify="flex-start">
        <Box
          as="span"
          px="11px"
          py="5px"
          borderRadius="999px"
          bg="brand.50"
          color="brand.700"
          fontSize="12px"
          fontWeight="600"
          letterSpacing="-0.02em"
          lineHeight="1"
        >
          {item.category}
        </Box>
        <Text
          as="span"
          fontSize="13px"
          fontWeight="500"
          color="ink.500"
          letterSpacing="-0.03em"
        >
          {item.date}
        </Text>
      </HStack>

      <VStack align="stretch" gap={1}>
        <Heading
          as="h3"
          fontSize={{ base: '20px', md: '24px' }}
          fontWeight="700"
          color="ink.900"
          letterSpacing="-0.05em"
          lineHeight="1.35"
        >
          {item.title}
        </Heading>
        {item.meta ? (
          <Text
            fontSize="14px"
            fontWeight="600"
            color="brand.700"
            letterSpacing="-0.03em"
          >
            {item.meta}
          </Text>
        ) : null}
      </VStack>

      <VStack as="ul" align="stretch" gap={2} pl={0} pt={1}>
        {item.items.map((content) => (
          <HStack
            key={content}
            as="li"
            align="start"
            gap={3}
            flexDirection="row"
          >
            <Box
              as="span"
              w="5px"
              h="5px"
              mt="10px"
              borderRadius="999px"
              bg="brand.500"
              flex="0 0 auto"
            />
            <Text
              fontSize={{ base: '14px', md: '15px' }}
              color="ink.700"
              lineHeight="1.75"
              letterSpacing="-0.03em"
              textAlign="left"
            >
              {content}
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}

export function AboutTimeline({ items }: AboutTimelineProps) {
  return (
    <Box position="relative" py={{ base: 1, md: 3 }}>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={{ base: '10px', md: '50%' }}
        w="1px"
        bg="line.100"
        transform={{ md: 'translateX(-50%)' }}
        aria-hidden="true"
      />

      <VStack align="stretch" gap={{ base: 7, md: 9 }}>
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <MotionBox
              key={`${item.date}-${item.title}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              variants={itemVariants}
              display={{ base: 'grid', md: 'grid' }}
              gridTemplateColumns={{
                base: '22px minmax(0, 1fr)',
                md: 'minmax(0, 1fr) 44px minmax(0, 1fr)',
              }}
              columnGap={{ base: 4, md: 6 }}
              alignItems="start"
            >
              <Box display={{ base: 'none', md: 'block' }}>
                {isLeft ? (
                  <TimelineContent item={item} placement="left" />
                ) : null}
              </Box>

              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                pt={{ base: 6, md: 7 }}
              >
                <Box
                  w="13px"
                  h="13px"
                  borderRadius="999px"
                  bg="brand.700"
                  border="3px solid"
                  borderColor="white"
                  boxShadow="0 0 0 1px var(--chakra-colors-brand-100)"
                  zIndex={1}
                />
              </Box>

              <Box display={{ base: 'block', md: isLeft ? 'none' : 'block' }}>
                <TimelineContent item={item} placement="right" />
              </Box>
            </MotionBox>
          );
        })}
      </VStack>
    </Box>
  );
}

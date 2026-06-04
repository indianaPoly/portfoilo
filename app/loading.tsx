import { Box, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';

export default function Loading() {
  return (
    <VStack align="stretch" gap={{ base: 10, md: 14 }}>
      <Box pt={{ base: 4, md: 5 }}>
        <Skeleton h={{ base: '22px', md: '28px' }} w="60%" borderRadius="8px" />
      </Box>

      <VStack align="stretch" gap={{ base: 12, md: 16 }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <VStack key={i} align="stretch" gap={4}>
            <Skeleton
              h={{ base: '24px', md: '30px' }}
              w="80%"
              borderRadius="8px"
            />
            <SkeletonText noOfLines={3} rootProps={{ gap: '3' }} />
            <Skeleton h="14px" w="30%" borderRadius="8px" />
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}

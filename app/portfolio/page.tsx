import { Heading, Text, VStack } from '@chakra-ui/react';

export default function PortfolioPage() {
  return (
    <VStack align="stretch" gap={4}>
      <Heading as="h1" size="lg" letterSpacing="-0.02em">
        Portfolio
      </Heading>
      <Text fontSize="md" color="ink.800" lineHeight="1.85">
        이 페이지는 추후 프로젝트/작업물을 정리하는 용도로 사용할 수 있습니다.
      </Text>
    </VStack>
  );
}

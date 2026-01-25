import { Heading, Text, VStack } from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <VStack align="stretch" gap={4}>
      <Heading as="h1" size="lg" letterSpacing="-0.02em">
        About
      </Heading>
      <Text fontSize="md" color="ink.800" lineHeight="1.85">
        이 페이지는 추후 내용을 채워 넣을 수 있도록 비워두었습니다.
      </Text>
    </VStack>
  );
}

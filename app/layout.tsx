import { Container, Flex } from '@chakra-ui/react';
import type { Metadata, Viewport } from 'next';

import Footer from '@/components/layout/footer/Footer';
import NavBar from '@/components/layout/header/NavBar';
import RootProvider from '@/components/layout/provider/RootProvider';

import { rootMetadata } from '../data/siteMetadata';

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <RootProvider>
          <Flex minH="100dvh" direction="column">
            <NavBar />
            <Container
              as="main"
              flex="1"
              maxW="1460px"
              px={{ base: 6, md: 10, xl: 12 }}
              py={{ base: 9, md: 12 }}
            >
              {children}
            </Container>
            <Footer />
          </Flex>
        </RootProvider>
      </body>
    </html>
  );
}

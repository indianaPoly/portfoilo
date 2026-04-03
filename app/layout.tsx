import { Container } from '@chakra-ui/react';
import type { Metadata } from 'next';

import Footer from '@/components/layout/footer/Footer';
import NavBar from '@/components/layout/header/NavBar';
import RootProvider from '@/components/layout/provider/RootProvider';

import { rootMetadata } from '../data/siteMetadata';

export const metadata: Metadata = {
  title: rootMetadata.title,
  description: rootMetadata.description,
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
          <NavBar />
          <Container
            as="main"
            maxW="960px"
            px={{ base: 4, md: 8 }}
            py={{ base: 8, md: 12 }}
          >
            {children}
          </Container>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}

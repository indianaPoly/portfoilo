import { Container } from '@chakra-ui/react';
import type { Metadata } from 'next';

import Footer from '../components/layout/Footer';
import LenisProvider from '../components/layout/LenisProvider';
import NavBar from '../components/layout/NavBar';
import { rootMetadata } from '../data/siteMetadata';

import { Providers } from './Providers';

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
        <Providers>
          <LenisProvider>
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
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import LenisProvider from '../components/layout/LenisProvider';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Providers from './providers';
import { Box, Container } from '@chakra-ui/react';
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
        <Providers>
          <LenisProvider>
            <NavBar />
            <Container
              as="main"
              maxW="960px"
              px={{ base: 4, md: 8 }}
              py={{ base: 8, md: 12 }}
            >
              <Box
                bg="white"
                borderRadius={{ base: 'xl', md: '2xl' }}
                boxShadow="soft"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                {children}
              </Box>
            </Container>
            <Footer />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}

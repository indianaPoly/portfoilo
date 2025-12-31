import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LenisProvider from '../components/layout/LenisProvider';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Providers from './providers';
import { Container } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Next.js 16 ready',
  description: 'Minimal yet polished portfolio with motion and smooth scrolling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <Providers>
          <LenisProvider>
            <NavBar />
            <Container as="main" maxW="1200px" px={{ base: 5, md: 8 }} py={{ base: 8, md: 14 }}>
              {children}
            </Container>
            <Footer />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}

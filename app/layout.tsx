import Script from 'next/script';

import { Container, Flex } from '@chakra-ui/react';
import type { Metadata, Viewport } from 'next';

import Footer from '@/components/layout/footer/Footer';
import NavBar from '@/components/layout/header/NavBar';
import { SkipNavigation } from '@/components/layout/header/SkipNavigation';
import RootProvider from '@/components/layout/provider/RootProvider';

import { rootMetadata } from '../data/siteMetadata';

const GTM_ID = 'GTM-PN239DZH';

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
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <RootProvider>
          <SkipNavigation />
          <Flex minH="100dvh" direction="column">
            <NavBar />
            <Container
              id="main-content"
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

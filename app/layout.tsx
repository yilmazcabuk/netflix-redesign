import type { ChildrenProps } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import '@/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../mocks');
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

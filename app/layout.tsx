import type { ChildrenProps } from 'react';

import { Footer, Header } from '@/components';
import { AuthProvider } from '@/hooks/useAuth';

import '@/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../mocks');
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

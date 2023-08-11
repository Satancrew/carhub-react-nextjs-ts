import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes='any' />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

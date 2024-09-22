import type { Metadata } from 'next';

import Header from './components/Header';
import Footer from './components/Footer';

import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Macaron shop',
  description: 'Tasty macarons for you'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

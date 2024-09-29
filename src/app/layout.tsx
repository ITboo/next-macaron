import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

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
      <head>
        <link rel='icon' href='/favicon.png' type='image/png' sizes='<generated>' />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

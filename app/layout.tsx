import type { Metadata } from 'next';
import '@/app/ui/global.css';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer/footer';
import { raleway, roboto } from '@/app/ui/fonts';
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'One Step Models',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(raleway.className, roboto.variable)}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

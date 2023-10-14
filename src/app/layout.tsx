import Header from '@/components/Header/Header';

import { Inter } from 'next/font/google';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'], weight: ['600', '400'] });

export const metadata = {
  title: 'Pizza',
  description: 'Pizza - fullstack project with: NEXT, TypeScript, Zustand',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
};

export default RootLayout;

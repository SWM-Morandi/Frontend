import './globals.css';
import { Inter } from 'next/font/google';
import QueryCientLayout from './queryClient';
import SEO from '@/app/seo';
import GA4 from '@/app/ga4';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '모두의 랜덤 디펜스',
  description: '코딩테스트를 준비하는 사람들을 위한 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA4 />
      <SEO />
      <body className={inter.className}>
        <QueryCientLayout>{children}</QueryCientLayout>
      </body>
    </html>
  );
}

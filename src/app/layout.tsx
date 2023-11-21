import './globals.css';
import { Inter } from 'next/font/google';
import QueryCientLayout from './queryClient';
import SEO from '@/app/seo';
import GA4 from '@/app/ga4';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <GA4 />
      <SEO />
      <body className={inter.className}>
        <QueryCientLayout>{children}</QueryCientLayout>
      </body>
    </html>
  );
}

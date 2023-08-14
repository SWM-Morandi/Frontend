import './globals.css';
import { Inter } from 'next/font/google';
import QueryCientLayout from './queryClient';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '모랜디',
  description: '코딩테스트를 준비하는 사람들을 위한 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryCientLayout>{children}</QueryCientLayout>
        <script
          async
          src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"
        ></script>
      </body>
    </html>
  );
}

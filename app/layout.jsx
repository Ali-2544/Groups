import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GENROAR - Leading Technology & Innovation Company',
  description: 'GENROAR is a leading company with expertise in Fashion, Academy, IT Services, and innovative social media solutions with OnePost application.',
  keywords: 'GENROAR, Fashion, Academy, IT Services, OnePost, Social Media Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
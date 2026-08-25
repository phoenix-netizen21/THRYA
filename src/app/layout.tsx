import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-family-poppins',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-family-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'THRYA — Tradition • Talent • Triumph',
  description:
    'THRYA is a college traditional arts club providing students a platform to discover, develop, and express their talent through traditional arts, music, and cultural expression.',
  keywords: [
    'THRYA',
    'traditional arts',
    'college club',
    'cultural club',
    'music',
    'dance',
    'talent',
  ],
  openGraph: {
    title: 'THRYA — Tradition • Talent • Triumph',
    description:
      'A celebration of tradition, talent and artistic expression.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}

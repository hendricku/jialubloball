import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Asul } from 'next/font/google';

const asul = Asul({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "JIA San Fernando",
  description: "Jesus Is Alive San Fernando Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${asul.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

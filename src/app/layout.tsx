import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include the weights you use
  variable: '--font-inter', // Optional: for CSS variable usage
});

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// app/layout.tsx

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

// Metadata for SEO and accessibility
export const metadata: Metadata = {
  title: {
    default: "Kendil – E-Learning Platform",
    template: "%s | Learnify",
  },
  description: "Join thousands of students on Learnify — the modern E-Learning platform built for growth.",
  metadataBase: new URL("https://www.kendil-elearning.com"), // Change to your real domain
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${poppins.className} ${inter.className} ${geistMono.variable} font-sans antialiased bg-white text-gray-900 min-h-screen`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

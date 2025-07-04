import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import ClientLayout from "@/components/layout/client-layout"; // ⬅️ new wrapper

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Kendil – E-Learning Platform",
    template: "%s | Learnify",
  },
  description:
    "Join thousands of students on Learnify — the modern E-Learning platform built for growth.",
  metadataBase: new URL("https://www.kendil-elearning.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${poppins.className} ${inter.className} ${geistMono.variable} font-sans antialiased bg-white text-gray-900 min-h-screen`}
      >
        <ClientLayout>
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}

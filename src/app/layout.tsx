import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "LearnDesk LMS Dashboard",
  description:
    "A modern LMS dashboard UI built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.",
  keywords: [
    "LMS dashboard",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "dashboard UI",
  ],
  authors: [{ name: "Nazmun Nahar Moon" }],
  openGraph: {
    title: "LearnDesk LMS Dashboard",
    description:
      "A modern LMS dashboard UI with course management, student tracking, analytics, dialogs, sheets, and responsive interactions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearnDesk LMS Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnDesk LMS Dashboard",
    description:
      "A modern LMS dashboard UI built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

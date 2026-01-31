import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ahmed Dev - Full-Stack Developer | Web Applications & Modern Solutions",
  description: "Professional full-stack developer specializing in React, Node.js, and scalable web applications. 4th-year engineering student from ENSA Tetouan.",
  keywords: "web development, full-stack developer, React, Next.js, Node.js, web apps, freelancer",
  authors: [{ name: "Ahmed Dev" }],
  openGraph: {
    title: "Ahmed Dev - Full-Stack Developer",
    description: "Building elegant, scalable web applications with modern technologies.",
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Dev - Full-Stack Developer",
    description: "Building elegant, scalable web applications with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Saurav Saurav - Full Stack Developer & AI Enthusiast",
  description: "Coffee-powered full-stack developer at TCS, turning bugs into features and teaching AI to be funnier than me. Expert in React, Node.js, and panic-driven development.",
  keywords: ["saurav", "full stack developer", "TCS", "AI learning", "react", "node.js", "javascript", "portfolio", "funny developer"],
  authors: [{ name: "Saurav Saurav" }],
  openGraph: {
    title: "Saurav Saurav - Full Stack Developer & AI Enthusiast",
    description: "Coffee-powered full-stack developer at TCS, turning bugs into features and teaching AI to be funnier than me.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

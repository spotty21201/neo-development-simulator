import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neo Development Simulator - Urban Planning SaaS",
  description: "Next-generation urban design platform that empowers planners and developers to simulate master plans with regulatory compliance.",
  keywords: ["Urban Planning", "Development Simulator", "Master Planning", "Zoning", "GFA Calculator", "Compliance Checker"],
  authors: [{ name: "Neo Development Team" }],
  openGraph: {
    title: "Neo Development Simulator",
    description: "Simulate master plans like a zoning consultant, design like an architect, and iterate like an AI.",
    url: "https://neo-dev-simulator.com",
    siteName: "Neo Development Simulator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Development Simulator",
    description: "Simulate master plans like a zoning consultant, design like an architect, and iterate like an AI.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

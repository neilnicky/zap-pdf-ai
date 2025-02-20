import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZapPDFAI - AI PDF Summarizer",
  description: "AI-powered PDF summarization tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Navbar />
        <main className="min-h-screen p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}

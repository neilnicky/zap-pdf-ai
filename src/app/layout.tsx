import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZapPDF - AI PDF Summarizer",
  description: "Modern AI-powered PDF summarizer that extracts key insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-white min-h-screen`}
      >
        <Navbar />
        <main className="pt-20 px-4">{children}</main>
      </body>
    </html>
  );
}

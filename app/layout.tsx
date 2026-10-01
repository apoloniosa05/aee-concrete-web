import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AEE Concrete and Excavation LLC | North California",
  description:
    "Concrete and excavation services for commercial and residential projects in North California. 16+ years of experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-ink antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AEE Concrete & Excavation LLC | Sacramento & Northern California",
  description:
    "Commercial and residential structural concrete, precision earthwork, grading, and foundation drilling in Sacramento and Northern California. Backed by 16+ years of experience.",
  keywords: [
    "Concrete Contractor Sacramento",
    "Excavation Services Northern California",
    "Foundation Pier Drilling",
    "Commercial Concrete Slabs",
    "AEE Concrete and Excavation LLC",
  ],
  openGraph: {
    title: "AEE Concrete & Excavation LLC | Northern California",
    description:
      "Expert structural concrete, excavation, and drilling services backing commercial and residential projects for 16+ years.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-ink antialiased selection:bg-brand selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

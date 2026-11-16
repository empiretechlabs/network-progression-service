import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const brandFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "MTN – The Progression",
  description: "The Suffering Network...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={brandFont.variable}>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import { universalSans, geistMono } from "./fonts";

export const metadata: Metadata = {
  title: "xAI - Understand The Universe",
  description: "xAI is the AI research company behind Grok, building intelligence that aims to understand the universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${universalSans.variable} ${geistMono.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}

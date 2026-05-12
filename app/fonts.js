import { Geist_Mono } from "next/font/google";

// Using Inter as Universal Sans fallback (closest open-source geometric sans)
import { Inter } from "next/font/google";

export const universalSans = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-universal-sans",
});

// Geist Mono for interface chrome
export const geistMono = Geist_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

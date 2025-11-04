import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

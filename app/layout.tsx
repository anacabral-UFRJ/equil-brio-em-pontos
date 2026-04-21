import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Equilíbrio em Pontos — Autocuidado Digital para Ansiedade",
  description:
    "Plataforma digital de autocuidado para ansiedade baseada na Medicina Tradicional Chinesa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <EmergencyButton />
      </body>
    </html>
  );
}

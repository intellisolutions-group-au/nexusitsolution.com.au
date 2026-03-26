import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import MeshBackground from "@/components/MeshBackground";
import { Suspense } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus IT Solutions | Futuristic Web & App Development",
  description: "Global IT corporate website offering innovative web, mobile, and custom software solutions.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${dmMono.variable} antialiased font-sans`}>
        <Suspense fallback={null}>
          <Preloader>
            <CustomCursor />
            <MeshBackground />
            <Navbar />
            {children}
            <Footer />
          </Preloader>
        </Suspense>
      </body>
    </html>
  );
}

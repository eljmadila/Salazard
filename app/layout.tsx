import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salazard | Premium Dining Experience",
  description: "Experience the perfect ambiance and best quality food at Salazard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased bg-black text-white`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <header>
          <Navbar />
        </header>
        {children}
        <BackToTop />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

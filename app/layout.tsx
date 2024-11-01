import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Sora as FontSans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qoobiss",
  description: "Qoobiss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}

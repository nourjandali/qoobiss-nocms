import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Sora as FontSans } from "next/font/google";
import "./globals.css";
import Spline from "@splinetool/react-spline";

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
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

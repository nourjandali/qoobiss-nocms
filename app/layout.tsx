import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Sora as FontSans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Script from "next/script";
import client from "@/tina/__generated__/client";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qoobiss",
  description: "Digital transformation accessible to everyone",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch navigation data
  const navigationData = await client.queries.navigation({
    relativePath: "navbar.json",
  });

  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          strategy="afterInteractive"
          data-pid="11TQFqXWgKbk0tsqF"
          data-version="062024"
        />
        <main>
          <Navbar
            data={navigationData.data}
            query={navigationData.query}
            variables={navigationData.variables}
          />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}

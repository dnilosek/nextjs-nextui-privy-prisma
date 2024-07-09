import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";

import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Nextjs-NextUI-Privy-Prisma",
  description: "A simple template for nextjs/privy/prisma/nextui usage.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./font";

export const metadata: Metadata = {
  title: "Rangoli UI - Multilangual Supported Component Library",
  description: "Rangoli UI is a modern component library that supports multiple languages and is built with accessibility and customization in mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

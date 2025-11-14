import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./font";
import { ThemeProvider } from "@/providers/theme-provider";


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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { helveticaNeue } from "@/lib/helvetica";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

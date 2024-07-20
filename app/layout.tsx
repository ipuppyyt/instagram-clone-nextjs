import type { Metadata } from "next";
import { metadata as Meta } from "@metadata";
import "./globals.css";

export const metadata: Metadata = Meta; 

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

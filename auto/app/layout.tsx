import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Automoville",
  description: "One stop Solution for Car services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

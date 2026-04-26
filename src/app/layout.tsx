import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umrah Travel — Admin",
  description: "Manage pilgrimage experiences with excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

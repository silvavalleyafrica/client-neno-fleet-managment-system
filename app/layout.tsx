import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neno Fleet | Operations",
  description:
    "The operations platform for Neno Fleet coaches, matatus, and travelers.",
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

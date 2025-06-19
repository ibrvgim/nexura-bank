import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexura | Secure Online Banking",
  description:
    "Nexura - online banking. Create an account in minutes and use seamless transfers, payments, and savings. Our platform supports multiple currencies and enables fast, secure transactions across a wide range of countries — all in one intuitive interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}

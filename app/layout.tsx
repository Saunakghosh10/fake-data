import type { Metadata } from "next";
import { spaceGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FakeData - Generate Realistic Test Data",
  description: "Generate realistic, customizable fake data for your applications, testing, and development needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

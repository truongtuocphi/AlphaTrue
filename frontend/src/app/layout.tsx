import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

import "./globals.css";

const Mark_Pro = localFont({
  src: [
    { path: "./Mark Pro.ttf", weight: "400" },
    { path: "./MarkPro_bold.ttf", weight: "500" },
  ],
  variable: "--font-mark-pro",
});

export const metadata: Metadata = {
  title: "AlphaTrue",
  description: "Generated by AlphaTrue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Mark_Pro.className} `}>
        <NextTopLoader showSpinner={false} color="#00B6DD" />
        <main>
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

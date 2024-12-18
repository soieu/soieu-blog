import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "SOIEU",
  description: "박소영의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 bg-white ">
      <body
        className={`${pretendard.variable} ${pretendard.variable} antialiased mx-6`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}

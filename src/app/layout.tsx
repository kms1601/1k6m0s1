import type {Metadata} from "next";
import "./globals.css";
import Providers from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import {DESCRIPTION, SITE_NAME} from "@/config/const";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: DESCRIPTION,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
    <body className="bg-primary dark:bg-primary-dark transition-colors">
    <Providers>
      <Navbar/>
      {children}
    </Providers>
    </body>
    </html>
  );
}

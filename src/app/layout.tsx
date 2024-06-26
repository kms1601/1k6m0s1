import type {Metadata} from "next";
import "./globals.css";
import Providers from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import {DESCRIPTION, SITE_NAME} from "@/config/const";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: DESCRIPTION,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
    <body className="bg-primary dark:bg-primary-dark">
    <Providers>
      <div
        className="transition-colors duration-100 bg-primary dark:bg-primary-dark flex flex-col min-h-screen text-text dark:text-text-dark">
        <Navbar/>
        <div className="mt-28">
          {children}
        </div>
        <Footer/>
      </div>
    </Providers>
    </body>
    </html>
  );
}
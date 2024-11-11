import type {Metadata} from "next";
import "./globals.css";
import Providers from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import {DESCRIPTION, SITE_NAME} from "@/config/const";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
    <body className="bg-primary dark:bg-primary-dark">
    <Providers>
      <div
        className="flex min-h-screen flex-col transition-colors duration-100 bg-primary text-text dark:bg-primary-dark dark:text-text-dark">
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
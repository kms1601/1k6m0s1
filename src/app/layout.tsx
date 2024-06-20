import type { Metadata } from "next";
import "../config/globals.css";

export const metadata: Metadata = {
  title: "1k6m0s1",
  description: "Blog",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

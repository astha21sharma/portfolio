import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Astha  ❤️",
  description: "Created by Astha sharma ",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <link rel="icon" type="image/svg+xml" href="/logo-color.svg"></link>
        <body className={inter.className}>
          <Analytics />
          {children}
        </body>
      </html>
    </>
  );
}

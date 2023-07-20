import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Disvocer the best Car in the World",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <div className="mt-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}

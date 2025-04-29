'use client';

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import FooterDL from "@/components/FooterDL";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className="bg-black text-white min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <FooterDL />
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </ClerkProvider>
  );
}

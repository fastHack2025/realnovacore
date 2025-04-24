// ✅ layout.tsx – finalisé, propre et sans erreur avec ClerkProvider

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import FloatingChat from "@/components/FloatingChat";
import FooterDL from "@/components/FooterDL";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NovaCore – Plateforme IA CRM SaaS",
  description: "Plateforme intelligente tout-en-un pour la gestion client, les rendez-vous, l’IA, et bien plus."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white`}>
          <Header />
          {children}
          <FloatingChat />
        </body>
      </html>
    </ClerkProvider>
  );
}

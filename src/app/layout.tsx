import "../styles/globals.css"; // ✅ Chemin corrigé
import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterDL from "@/components/FooterDL";

export const metadata: Metadata = {
  title: "DL Solutions | Plateforme NovaCore",
  description: "Améliorez votre communication digitale avec l'IA de DL Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Header />
        <main>{children}</main>
        <FooterDL />
      </body>
    </html>
  );
}

// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'DL Solutions - Agence IT & Cloud',
  description: 'DL Solutions : La puissance du numérique au service de votre entreprise.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
        </body>
      </html>
    </ClerkProvider>
  );
}

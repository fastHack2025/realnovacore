import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import HeaderMegaMenu from '@/components/HeaderMegaMenu';
import Footer from '@/components/Footer';
import BreakingNews from '@/components/BreakingNews';
import CookieConsent from '@/components/CookieConsent';
import NewsletterPopup from '@/components/NewsletterPopup';
import PageLoader from '@/components/PageLoader';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FloatingContactButton from '@/components/FloatingContactButton';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import GsapProvider from '@/components/GsapProvider';
import LogoutButton from '@/components/LogoutButton'; // ✅ Ajouté !

export const metadata = {
  title: 'DL Solutions - Agence CX, Digitalisation & IA',
  description: 'DL Solutions et NovaCore : propulsez votre expérience client et votre transformation digitale.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className="bg-[#0f172a] text-white overflow-x-hidden selection:bg-primary selection:text-white">
          <ScrollProgressBar /> {/* 🚀 Barre de progression */}
          <PageLoader />
          <CookieConsent />
          <BreakingNews />
          <NewsletterPopup />
          <ScrollToTopButton />
          
          <HeaderMegaMenu />

          {/* 🛡️ Bouton Logout Global */}
          <div className="absolute top-4 right-4 z-50">
            <LogoutButton />
          </div>

          <GsapProvider>
            <main>{children}</main>
          </GsapProvider>

          <FloatingContactButton /> {/* 🛎️ Floating Contact */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

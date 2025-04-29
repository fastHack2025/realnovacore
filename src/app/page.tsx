'use client';

import { motion } from 'framer-motion';
import NewsletterPopup from '@/components/NewsletterPopup';
import ServicesCarousel from '@/components/ServicesCarousel';
import PricingDL from '@/components/PricingDL';
import ReviewsSection from '@/components/ReviewsSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import FAQSection from '@/components/FAQSection';
import ActualitesSection from '@/components/ActualitesSection';

export default function HomePage() {
  return (
    <>
      <NewsletterPopup />

      {/* 🎥 Background vidéo DL Solutions */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1745413001/13510815_3840_2160_30fps_ilwhfm.mp4"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            DL Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl"
          >
            Communication Digitale, CRM, IA pour l'Afrique de demain
          </motion.p>
        </div>
      </div>

      {/* 🚀 Services */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesCarousel />
        </div>
      </section>

      {/* 🛍️ Tarifs DL Solutions */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-pink-500">
        <div className="max-w-7xl mx-auto px-6">
          <PricingDL />
        </div>
      </section>

      {/* 📰 Actualités */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ActualitesSection />
        </div>
      </section>

      {/* 🏆 Avis clients */}
      <section className="py-24 bg-gradient-to-r from-purple-700 to-indigo-500">
        <div className="max-w-7xl mx-auto px-6">
          <ReviewsSection />
        </div>
      </section>

      {/* 🖼️ Portfolio réalisations */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-pink-500">
        <div className="max-w-7xl mx-auto px-6">
          <FAQSection />
        </div>
      </section>
    </>
  );
}

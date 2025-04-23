"use client";

import HeroDL from "@/components/HeroDL";
import ModulesDL from "@/components/ModulesDL";
import FAQ from "@/components/FAQ";
import TestimonialsDL from "@/components/TestimonialsDL";
import PricingGrid from "@/components/PricingGrid";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopupRDV from "@/components/PopupRDV";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatbotDavy from "@/components/ChatbotDavy";
import ActualitesSection from "@/components/home/ActualitesSection";
import EquipeSection from "@/components/home/EquipeSection";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#f0f4ff] to-white text-gray-800 scroll-smooth">
      {/* Hero avec vidéo + effet vitrine */}
      <div className="relative z-10 backdrop-blur-xl bg-white/60 border-b border-white/30 shadow-2xl shadow-indigo-100">
        <HeroDL />
      </div>

      {/* Modules IA section ultra clean avec reflets */}
      <section
        id="modules"
        className="bg-indigo-50 scroll-mt-24 backdrop-blur-md border-t border-indigo-100 shadow-inner"
      >
        <ModulesDL />
      </section>

      {/* CTA violet profond avec glow */}
      <section className="relative z-10 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-xl shadow-indigo-200 py-16">
        <CTASection />
      </section>

      {/* Tarifs avec ombres élégantes */}
      <section
        id="pricing"
        className="scroll-mt-24 bg-white shadow-inner backdrop-blur-lg border-y border-gray-100"
      >
        <PricingGrid />
      </section>

      {/* Pourquoi nous choisir avec glow doux */}
      <section className="bg-blue-50 scroll-mt-24 shadow-md shadow-blue-100">
        <WhyChooseUs />
      </section>

      {/* Témoignages sur fond texturé doux */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 scroll-mt-24 shadow-inner">
        <TestimonialsDL />
      </section>

      {/* FAQ avec fond vitré */}
      <section
        id="faq"
        className="bg-white/70 backdrop-blur-xl scroll-mt-24 border-t border-gray-200"
      >
        <FAQ />
      </section>

      {/* Bloc Actualités avec vidéo de fond */}
      <section className="scroll-mt-24">
        <ActualitesSection />
      </section>

      {/* Bloc Équipe dirigeante */}
      <section className="scroll-mt-24">
        <EquipeSection />
      </section>

      {/* Lien portfolio avec glow cristal */}
      <div className="text-center mt-16 mb-10">
        <a
          href="/portfolio"
          aria-label="Voir le portfolio des projets NovaCore"
          className="inline-block px-6 py-3 bg-white/60 backdrop-blur-md text-indigo-800 font-semibold text-sm md:text-base rounded-full shadow-xl hover:bg-white/80 transition border border-indigo-200"
        >
          🎨 Parcourir le Portfolio
        </a>
      </div>

      {/* Flottants interactifs */}
      <PopupRDV />
      <WhatsAppFloat />
      <ChatbotDavy />
    </main>
  );
}

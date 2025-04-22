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

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* 🎥 Hero avec vidéo de fond et branding */}
      <HeroDL />

      {/* 🧠 Modules IA en fond pastel */}
      <section className="bg-indigo-50">
        <ModulesDL />
      </section>

      {/* 🚀 CTA violet dynamique */}
      <CTASection />

      {/* 💸 Tarifs avec effets */}
      <PricingGrid />

      {/* 🎯 Pourquoi nous choisir */}
      <section className="bg-blue-50">
        <WhyChooseUs />
      </section>

      {/* 📣 Témoignages client */}
      <section className="bg-gray-100">
        <TestimonialsDL />
      </section>

      {/* ❓ FAQ claire */}
      <FAQ />

      {/* 🎨 Portfolio lien */}
      <div className="text-center mt-16 mb-10">
        <a
          href="/portfolio"
          className="inline-block px-6 py-3 bg-indigo-600 text-white text-sm md:text-base rounded-full shadow hover:bg-indigo-700 transition"
        >
          🎨 Parcourir le Portfolio
        </a>
      </div>

      {/* 📅 Pop-up RDV flottant */}
      <PopupRDV />

      {/* 📱 Icône WhatsApp flottante */}
      <WhatsAppFloat />

      {/* 🤖 Chatbot IA Davy */}
      <ChatbotDavy />
    </main>
  );
}

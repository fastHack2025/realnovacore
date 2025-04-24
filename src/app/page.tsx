"use client";

// ✅ page.tsx — 100% clean, composants intégrés, sans erreur

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import HeroDL from "@/components/HeroDL";
import ModulesFAQFadeIn from "@/components/ModulesFAQFadeIn";
import CTASection from "@/components/CTASection";
import PricingGrid from "@/components/PricingGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsDL from "@/components/TestimonialsDL";
import PopupRDV from "@/components/PopupRDV";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RDVFloat from "@/components/RDVFloat";
import ChatbotDavy from "@/components/ChatbotDavy";
import FooterDL from "@/components/FooterDL";

export default function Page() {
  const [stats, setStats] = useState({ users: 0, messages: 0, rdv: 0, conversion: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [users, messages, rdv] = await Promise.all([
        supabase.from("users").select("id", { count: "exact", head: true }),
        supabase.from("chat_messages").select("id", { count: "exact", head: true }),
        supabase.from("rdv").select("id", { count: "exact", head: true })
      ]);
      const taux = Math.round(((rdv.count || 0) / (users.count || 1)) * 100);
      setStats({ users: users.count || 0, messages: messages.count || 0, rdv: rdv.count || 0, conversion: taux });
    };
    fetchStats();
  }, []);

  return (
    <main className="min-h-screen scroll-smooth">
      <HeroDL />

      {/* Bloc Statistiques */}
      <section className="py-16 px-6 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">📊 Vue rapide : Stats Admin & IA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl shadow border bg-white/80 dark:bg-white/10">
              <h3 className="text-sm font-medium mb-2">Utilisateurs</h3>
              <p className="text-3xl font-bold text-indigo-600">{stats.users}</p>
            </div>
            <div className="p-6 rounded-xl shadow border bg-white/80 dark:bg-white/10">
              <h3 className="text-sm font-medium mb-2">Messages IA</h3>
              <p className="text-3xl font-bold text-indigo-600">{stats.messages}</p>
            </div>
            <div className="p-6 rounded-xl shadow border bg-white/80 dark:bg-white/10">
              <h3 className="text-sm font-medium mb-2">Rendez-vous</h3>
              <p className="text-3xl font-bold text-indigo-600">{stats.rdv}</p>
            </div>
            <div className="p-6 rounded-xl shadow border bg-white/80 dark:bg-white/10">
              <h3 className="text-sm font-medium mb-2">Taux de conversion</h3>
              <p className="text-3xl font-bold text-indigo-600">{stats.conversion}%</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/admin/dashboard" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm font-medium transition">
              🧑‍💼 Aller au panel admin
            </a>
          </div>
        </div>
      </section>

      <ModulesFAQFadeIn type="modules" />
      <CTASection />
      <PricingGrid />
      <WhyChooseUs />
      <TestimonialsDL />
      <ModulesFAQFadeIn type="faq" />
      <PopupRDV />
      <WhatsAppFloat />
      <RDVFloat />
      <ChatbotDavy />
      <FooterDL />
    </main>
  );
}

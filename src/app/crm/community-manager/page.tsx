"use client";

import Link from "next/link";
import Image from "next/image";
import { Bot, Calendar, FileText, LayoutDashboard, Zap } from "lucide-react";

export default function CommunityManagerCRM() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      {/* 🎥 Fond IA */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1745413001/13510815_3840_2160_30fps_ilwhfm.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3 drop-shadow-xl">
          <Bot className="w-8 h-8 text-pink-400" />
          NovaCore CM — IA Autonome pour Réseaux Sociaux
        </h1>
        <p className="text-lg text-gray-200 mb-12">
          Ce CRM est 100% automatisé par l’IA : création de contenu, publication intelligente, et analyse proactive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Calendar className="w-6 h-6" />, label: "Planification IA", href: "/crm/community-manager/calendar" },
            { icon: <FileText className="w-6 h-6" />, label: "Générateur de contenu", href: "/crm/community-manager/generator" },
            { icon: <LayoutDashboard className="w-6 h-6" />, label: "Analytics automatiques", href: "/crm/community-manager/analytics" },
            { icon: <Zap className="w-6 h-6" />, label: "Assistant IA DM & Réponses", href: "/crm/community-manager/assistant" },
          ].map(({ icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 hover:scale-105 transition shadow-md text-left"
            >
              <div className="text-white mb-3">{icon}</div>
              <h2 className="text-lg font-semibold">{label}</h2>
              <p className="text-sm text-gray-300">Géré automatiquement par NovaCore IA</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer DL Solutions */}
      <footer className="relative z-20 mt-20 max-w-4xl mx-auto text-center text-sm text-white opacity-80">
        <div className="flex flex-col items-center gap-3">
          <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png" alt="Logo DL Solutions" width={70} height={70} className="rounded-full" />
          <p>© Dave & Luce Solutions — <strong>Samuel OBAM made this</strong></p>
          <p>📞 +237 694 34 15 86 — +237 620 21 62 17</p>
          <p>📧 samuelobaml@dlsolutions.com</p>
        </div>
      </footer>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function CRMHomePage() {
  return (
    <main className="relative min-h-screen text-white px-6 py-20 flex flex-col items-center justify-center">
      {/* 🎥 Vidéo de fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1744416232/background_abzanh.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 drop-shadow-xl">
          Portail CRM NovaCore
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-lg">
          Choisissez votre environnement CRM ou explorez les modules de gestion intelligente.
        </p>

        {/* Bloc principal : Choix CRM */}
        <div className="mb-16">
          <Link
            href="/crm/choose"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-200 transition shadow-lg"
          >
            🎯 Choisir un CRM
          </Link>
        </div>

        {/* Modules CRM NovaCore */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            { title: "Dashboard CRM", href: "/crm/dashboard", desc: "Suivi global de votre activité client", emoji: "📊" },
            { title: "Scoring IA Client", href: "/crm/scoring", desc: "Classement intelligent des clients", emoji: "🤖" },
            { title: "Historique & Messages", href: "/crm/messages", desc: "Suivi des échanges et contacts", emoji: "💬" },
            { title: "Agenda & Rendez-vous", href: "/crm/agenda", desc: "Gérez les RDV et rappels clients", emoji: "📅" },
            { title: "Rapports & Exports", href: "/crm/reports", desc: "Export PDF, Excel, mails automatisés", emoji: "📄" },
            { title: "Automatisations IA", href: "/crm/automation", desc: "Automatisez les relances et tâches", emoji: "🔄" },
            { title: "Paramètres entreprise", href: "/crm/settings", desc: "Configuration de votre environnement", emoji: "⚙️" },
            { title: "Espace Admin CRM", href: "/crm/admin", desc: "Contrôle des utilisateurs & rôles", emoji: "🧑‍💼" },
          ].map(({ title, href, desc, emoji }) => (
            <Link
              key={href}
              href={href}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold mb-1 text-white">{emoji} {title}</h2>
              <p className="text-gray-200 text-sm">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

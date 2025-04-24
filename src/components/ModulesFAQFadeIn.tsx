"use client";

import React from "react";

export default function ModulesFAQFadeIn({ type = "modules" }: { type?: "modules" | "faq" }) {
  const data =
    type === "modules"
      ? [
          { title: "Studio IA", desc: "Créez vos prompts et contenus dynamiquement.", href: "/studio" },
          { title: "CRM intelligent", desc: "Gérez vos clients avec scoring et automatisations.", href: "/crm" },
          { title: "Réseaux IA", desc: "Planifiez vos posts, l’IA s’occupe du reste.", href: "/crm/community-manager" },
          { title: "Paiement intégré", desc: "Stripe & CinetPay – facturation fluide.", href: "/paiements" }
        ]
      : [
          { title: "Comment fonctionne NovaCore ?", desc: "C’est une plateforme IA complète tout-en-un." },
          { title: "L’IA est-elle personnalisée ?", desc: "Oui, selon votre secteur d’activité." },
          { title: "Peut-on connecter Stripe ou WhatsApp ?", desc: "Oui, tout est intégré et automatisé." },
          { title: "Quels sont les tarifs ?", desc: "Vous payez ce que vous utilisez, mensuel ou annuel." }
        ];

  return (
    <section id={type === "modules" ? "modules-novacore" : "faq"} className="py-16 px-6 bg-indigo-50 dark:bg-zinc-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {type === "modules" ? "🧠 Modules IA + CRM" : "❓ Foire aux questions (FAQ)"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((mod, i) => (
            <a key={i} href={mod.href || "#"} className="block p-6 rounded-xl shadow border bg-white/80 dark:bg-white/10 hover:shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-lg font-bold mb-2">{mod.title}</h3>
              <p className="text-sm text-gray-700 dark:text-white/80">{mod.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

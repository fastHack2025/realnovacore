"use client";

import Link from "next/link";
import Image from "next/image";
import { Utensils } from "lucide-react";

export default function RestaurantCRMPage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      {/* 🎥 Fond vidéo spécial resto */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1745412167/852122-hd_1920_1080_30fps_j0tn6y.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 drop-shadow-xl flex justify-center items-center gap-3">
          <Utensils className="w-8 h-8 text-orange-300" />
          CRM Restauration – NovaCore
        </h1>
        <p className="text-lg text-gray-200 mb-12">
          Gérez les réservations, le menu, les clients et la facturation de votre restaurant grâce à l'IA NovaCore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Réservations", href: "/crm/restaurant/agenda", emoji: "📅" },
            { title: "Clients", href: "/crm/restaurant/clients", emoji: "🧍‍♂️" },
            { title: "Facturation", href: "/crm/restaurant/factures", emoji: "📄" },
            { title: "Messages & Rappels", href: "/crm/restaurant/messages", emoji: "💬" },
            { title: "Menus & Services", href: "/crm/restaurant/menu", emoji: "🍽️" },
            { title: "Scoring IA", href: "/crm/restaurant/scoring", emoji: "🤖" },
          ].map(({ title, href, emoji }) => (
            <Link
              key={href}
              href={href}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl text-left"
            >
              <h2 className="text-xl font-semibold mb-1 text-white">{emoji} {title}</h2>
              <p className="text-gray-300 text-sm">Accéder au module {title.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer signature */}
      <footer className="relative z-20 mt-20 w-full max-w-4xl mx-auto text-center text-sm text-white opacity-80">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
            alt="Logo DL Solutions"
            width={70}
            height={70}
            className="rounded-full"
          />
          <p>© Dave & Luce Solutions — <strong>Samuel OBAM made this</strong></p>
          <p>📞 +237 694 34 15 86 — +237 620 21 62 17</p>
          <p>📧 samuelobaml@dlsolutions.com</p>
        </div>
      </footer>
    </main>
  );
}

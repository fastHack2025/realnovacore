"use client";

import Link from "next/link";
import Image from "next/image";

export default function HotelCRMPage() {
  return (
    <main className="relative min-h-screen px-6 py-24 text-white">
      {/* Fond vidéo */}
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

      {/* Contenu principal */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 drop-shadow-xl">🛎️ CRM Hôtellerie — NovaCore</h1>
        <p className="text-lg text-gray-200 mb-12">
          Gérez vos réservations, vos clients et vos opérations hôtelières avec une intelligence automatisée.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Réservations", href: "/crm/hotel/reservations", emoji: "📅" },
            { title: "Chambres", href: "/crm/hotel/chambres", emoji: "🛏️" },
            { title: "Clients", href: "/crm/hotel/clients", emoji: "🧍‍♂️" },
            { title: "Messages & Rappels", href: "/crm/hotel/messages", emoji: "💬" },
            { title: "Scoring IA", href: "/crm/hotel/scoring", emoji: "🤖" },
            { title: "Facturation", href: "/crm/hotel/factures", emoji: "📄" },
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

      {/* Footer professionnel */}
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

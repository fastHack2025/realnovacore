"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CRMChoosePage() {
  const router = useRouter();
  const [activity, setActivity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activity) return;
    router.push(`/crm/${activity}`);
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 py-24">
      {/* 🎥 Vidéo ou fond stylé */}
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

      {/* Overlay foncé */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu principal */}
      <div className="relative z-20 w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-8 drop-shadow-xl">Choisissez votre secteur d’activité</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full p-4 rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 text-white text-lg focus:outline-none focus:ring focus:ring-indigo-300"
          >
            <option value="" disabled>-- Sélectionnez un secteur --</option>
            <option value="hotel">🏨 Hôtellerie</option>
            <option value="spa">💆 Institut / Spa</option>
            <option value="restaurant">🍽️ Restauration</option>
            <option value="community-manager">👥 Community Manager</option>
          </select>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Accéder à mon CRM personnalisé
          </button>
        </form>
      </div>

      {/* Footer signature */}
      <footer className="relative z-20 mt-20 w-full max-w-4xl text-center text-sm text-white opacity-80">
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

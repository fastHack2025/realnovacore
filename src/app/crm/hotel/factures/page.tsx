"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";

export default function HotelFacturesPage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      {/* 🎥 Fond vidéo */}
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
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold drop-shadow flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-300" /> Factures Hôtellerie
          </h1>
          <Link
            href="#"
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition shadow"
          >
            ➕ Nouvelle facture
          </Link>
        </div>

        {/* Zone des factures */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
          <p className="text-gray-200 text-center">
            Aucune facture enregistrée.<br />
            Utilisez le bouton pour créer votre première facture.
          </p>
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

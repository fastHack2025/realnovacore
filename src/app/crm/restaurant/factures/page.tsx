"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";

export default function RestaurantFacturesPage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1745412167/852122-hd_1920_1080_30fps_j0tn6y.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileText className="w-8 h-8 text-sky-300" /> Factures & Paiements
          </h1>
          <Link href="#" className="bg-white text-black font-semibold py-2 px-4 rounded shadow hover:bg-gray-200">
            ➕ Nouvelle facture
          </Link>
        </div>
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center text-gray-200 shadow-xl">
          Aucune facture enregistrée.
        </div>
      </div>
      <Footer />
    </main>
  );
}

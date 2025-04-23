"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";

type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  media_url: string;
};

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPortfolio = async () => {
      const { data } = await supabase.from("portfolio").select("*").order("created_at", { ascending: false });
      setPortfolio(data || []);
    };
    fetchPortfolio();
  }, []);

  const filtered = portfolio.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 🎥 Video en-tête */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1745331051/mon_site_web_aqda4c.mkv" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold drop-shadow-xl">🎨 Nos Réalisations Digitales</h1>
        </div>
      </div>

      {/* 🔍 Barre de recherche */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <input
          type="text"
          placeholder="Rechercher un projet..."
          className="w-full p-3 rounded-md text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🧾 À propos */}
        <div className="mt-6 bg-white/10 p-4 rounded-lg border border-white/20 text-sm text-gray-300">
          Ce portfolio présente les projets digitaux créés ou gérés par DL Solutions : sites web, réseaux sociaux, vidéos marketing, branding…  
        </div>

        {/* 🖼️ Grille des réalisations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white/10 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white/10">
              <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                <Image src={item.media_url} alt={item.title} fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Voir le projet
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 🔚 Footer signé */}
      <footer className="mt-20 mb-6 text-center text-sm text-white opacity-80">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
            alt="Logo DL Solutions"
            width={60}
            height={60}
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

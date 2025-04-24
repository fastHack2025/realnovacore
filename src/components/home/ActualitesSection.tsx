// ✅ src/components/home/ActualitesSection.tsx — version corrigée complète et fonctionnelle

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function ActualitesSection() {
  const [actus, setActus] = useState<any[]>([]);

  useEffect(() => {
    const fetchActus = async () => {
      const { data } = await supabase
        .from("actualites")
        .select("*")
        .order("date_publication", { ascending: false });
      if (data) setActus(data);
    };
    fetchActus();
  }, []);

  return (
    <section className="relative w-full min-h-[700px] text-white overflow-hidden scroll-mt-24">
      {/* 🎥 Vidéo de fond animée */}
      <div className="absolute inset-0 z-[-2]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1745429356/1584831-uhd_3840_2160_30fps_ynjykq.mp4"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />
      </div>

      <div className="relative z-20 px-6 py-24">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-300 uppercase">
            📰 Actualités
          </h2>

          {actus.length === 0 ? (
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-lg mx-auto shadow-lg animate-pulse">
              <p className="text-lg text-white/90 font-medium">
                Aucun article pour le moment. Revenez plus tard.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 text-left">
              {actus.map((a) => (
                <div
                  key={a.id}
                  className="bg-white/10 border border-white/10 backdrop-blur-md rounded-xl p-5 shadow-md transition hover:scale-[1.01]"
                >
                  <div className="mb-4 rounded-md overflow-hidden">
                    <Image
                      src={a.media_url || "https://res.cloudinary.com/dko5sommz/image/upload/v1743897145/soins_de_visage_pxmcym.jpg"}
                      alt={a.titre || "actualité"}
                      width={600}
                      height={300}
                      className="w-full h-52 object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-sky-200 mb-1">{a.titre}</h3>
                  <p className="text-sm text-white/80 mb-2 line-clamp-4">{a.contenu}</p>
                  <div className="text-xs text-white/50 mb-2">
                    📅 {new Date(a.date_publication).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2 text-white/60 text-xs flex-wrap">
                    {a.facebook_url && <a href={a.facebook_url}>Facebook</a>}
                    {a.insta_url && <a href={a.insta_url}>Instagram</a>}
                    {a.tiktok_url && <a href={a.tiktok_url}>TikTok</a>}
                    {a.twitter_url && <a href={a.twitter_url}>Twitter</a>}
                    {a.linkedin_url && <a href={a.linkedin_url}>LinkedIn</a>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 🔽 Bandeau de séparation stylée vers la suite */}
      <div className="h-10 bg-gradient-to-b from-sky-300 to-transparent w-full shadow-xl rounded-t-xl border-t border-white/10" />
    </section>
  );
}

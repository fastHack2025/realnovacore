"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function ActualitesSection() {
  const [actus, setActus] = useState<any[]>([]);

  useEffect(() => {
    const fetchActus = async () => {
      const { data } = await supabase.from("actualites").select("*").order("date_publication", { ascending: false });
      if (data) setActus(data);
    };
    fetchActus();
  }, []);

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="https://res.cloudinary.com/dko5sommz/video/upload/v1745429356/1584831-uhd_3840_2160_30fps_ynjykq.mp4"
      />

      <div className="relative z-10 px-6 py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">📰 ACTUALITÉS</h2>

          {actus.length === 0 ? (
            <div className="text-center text-white/90 animate-pulse">
              <div className="bg-black/70 p-6 rounded-xl inline-block">
                <p className="text-xl font-semibold">Rien de nouveau pour le moment</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
              {actus.map((a) => (
                <div key={a.id} className="flex flex-col md:flex-row items-stretch gap-6 bg-black/50 p-6 rounded-xl border border-white/10">
                  {a.media_url && (
                    <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-md">
                      <Image
                        src={a.media_url}
                        alt="media"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-white">
                    <h3 className="text-xl font-bold mb-2">{a.titre}</h3>
                    <p className="text-sm text-white/90 mb-3 line-clamp-5">{a.contenu}</p>
                    <div className="text-xs text-white/50 mb-2">📅 {new Date(a.date_publication).toLocaleDateString()}</div>
                    <div className="flex gap-3 text-white/70 text-xs flex-wrap">
                      {a.facebook_url && <a href={a.facebook_url} target="_blank">Facebook</a>}
                      {a.insta_url && <a href={a.insta_url} target="_blank">Instagram</a>}
                      {a.tiktok_url && <a href={a.tiktok_url} target="_blank">TikTok</a>}
                      {a.twitter_url && <a href={a.twitter_url} target="_blank">Twitter</a>}
                      {a.linkedin_url && <a href={a.linkedin_url} target="_blank">LinkedIn</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

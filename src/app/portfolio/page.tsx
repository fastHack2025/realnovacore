"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import ZoomableImage from "@/components/ZoomableImage";
import PortfolioGrid from "@/components/PortfolioGrid";
import { useSearchHighlight } from "@/lib/hooks/useSearchHighlight";

interface PortfolioItem {
  id: string;
  titre: string;
  type: "image" | "video";
  description: string;
  image: string;
  lien: string;
  date: string;
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [view, setView] = useState<"slider" | "grid">("slider");
  const [search, setSearch] = useState("");

  const { results, highlight } = useSearchHighlight(items, search);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("portfolio_items")
        .select("*")
        .order("date", { ascending: false });

      if (data) setItems(data);
    };

    fetch();

    const channel = supabase
      .channel("portfolio_realtime")
      .on("postgres_changes", { event: "*", table: "portfolio_items", schema: "public" }, fetch)
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">🎨 Portfolio</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="🔎 Rechercher..."
            className="border px-3 py-1 rounded text-sm dark:bg-zinc-800"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setView(view === "grid" ? "slider" : "grid")}
            className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600"
          >
            {view === "grid" ? "🎞️ Slider" : "🔲 Grille"}
          </button>
        </div>
      </div>

      {view === "slider" ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-lg shadow-lg dark:bg-zinc-900"
        >
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div className="w-full md:w-1/2">
                  {item.type === "video" ? (
                    <video
                      controls
                      className="w-full h-full rounded object-cover"
                      src={item.image}
                      preload="metadata"
                    />
                  ) : (
                    <ZoomableImage
                      src={item.image}
                      alt={item.titre}
                      className="rounded-lg w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{highlight(item.titre)}</h2>
                    <p className="text-sm mb-2">{highlight(item.description)}</p>
                    <p className="text-xs text-gray-400">
                      🕒 {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                  <a
                    href={item.lien}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 underline mt-3 text-sm"
                  >
                    🔗 Voir le projet
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <PortfolioGrid items={results} highlight={highlight} />
      )}
    </div>
  );
}

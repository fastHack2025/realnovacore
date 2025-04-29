'use client';

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

interface Actualite {
  id: string;
  titre: string;
  description: string;
  media_url: string;
  date_publication: string;
}

export default function ActualitesSection() {
  const [news, setNews] = useState<Actualite[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const snapshot = await getDocs(collection(db, "actualites"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Actualite));
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          🗞️ Dernières Actualités DL Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {news.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg"
            >
              <video
                src={item.media_url}
                controls
                className="rounded-lg mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-bold">{item.titre}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.date_publication}</p>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

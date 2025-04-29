'use client';

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

interface Projet {
  id: string;
  titre: string;
  description: string;
  videoUrl: string;
}

export default function PortfolioGrid() {
  const [projets, setProjets] = useState<Projet[]>([]);

  useEffect(() => {
    const fetchProjets = async () => {
      const snapshot = await getDocs(collection(db, "projets"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Projet));
      setProjets(data);
    };
    fetchProjets();
  }, []);

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          🎥 Nos Réalisations DL Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projets.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-800 rounded-2xl p-6 shadow-lg"
            >
              <video
                src={item.videoUrl}
                controls
                className="rounded-lg mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-bold">{item.titre}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

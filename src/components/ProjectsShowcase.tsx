// src/components/ProjectsShowcase.tsx
'use client';

import { motion } from "framer-motion";
import { useRef } from "react";

const videos = [
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725396/v09044g40000cv33g0fog65ukueqn5ag_k5fich.mp4", important: true },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725388/v09044g40000cvi1phnog65rtaq403rg_ir6wil.mp4", important: true },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725502/v09044g40000cuv13nfog65iu678r05g_m3wife.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725416/v09044g40000cvbhh1fog65mg3c2elp0_gr06yh.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725411/v09044g40000cvffb47og65slfddol40_hpit8y.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725403/v09044g40000cutjranog65nbngb8uig_sbhw3q.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725401/v09044g40000cuub0d7og65j6kvqvbl0_kcmmqh.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725387/v09044g40000cv05s67og65i8nkhh2r0_bw5iq4.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725385/v09044g40000cv07u0nog65naddro8vg_yelt76.mp4" },
  { url: "https://res.cloudinary.com/dko5sommz/video/upload/v1745725376/v09044g40000cvkpsj7og65kfl47jqfg_hzhmxq.mp4" }
];

export default function ProjectsShowcase() {
  const containerRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Nos Réalisations
        </h2>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-4"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[400px] snap-center relative overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <video
                src={video.url}
                loop
                muted
                autoPlay
                playsInline
                className={`w-full h-full object-cover ${
                  video.important ? 'border-4 border-primary' : ''
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bloc Actualités */}
        <div className="mt-16 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Dernières Actualités</h3>
          <p className="text-gray-300">
            Suivez toutes nos nouveautés et nos projets en cours très bientôt ici.
          </p>
        </div>
      </div>
    </section>
  );
}

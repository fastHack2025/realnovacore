// src/components/ProjectsShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Site Web DL Solutions (Beta)",
    description: "Plateforme vitrine haut de gamme utilisant Next.js 15, TailwindCSS, Framer Motion, NovaCore Tools.",
    videoUrl: "https://res.cloudinary.com/dko5sommz/video/upload/v1745331051/mon_site_web_aqda4c.mkv",
  },
  {
    title: "Mockup Mobile App NovaCore",
    description: "Application mobile révolutionnaire IA pour expérience client 2.0.",
    imageUrl: "/icons/mobile-mockup_iawxjt.png",
  },
  {
    title: "QR Code NovaCore Personnalisé",
    description: "QR pour accès instantané au portail NovaCore Tools.",
    imageUrl: "/icons/qrcode-novacore_vz8oiv.png",
  },
  {
    title: "Badge AppStore NovaCore",
    description: "Prochainement sur iOS et Android, App officielle NovaCore™.",
    imageUrl: "/icons/appstore-badge_jso4bp.png",
  },
];

export default function ProjectsShowcase() {
  useEffect(() => {
    // Future GSAP Scroll Animations here
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Nos Réalisations</h2>
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="min-w-[350px] rounded-2xl bg-white/5 backdrop-blur-md p-4 snap-center flex-shrink-0 shadow-2xl"
            >
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  controls
                  muted
                  loop
                  playsInline
                  className="rounded-xl mb-4"
                />
              ) : (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl mb-4 object-cover"
                />
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

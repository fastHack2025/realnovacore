// src/app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';

const projects = [
  { title: 'Site Vitrine - Luxe', description: 'Site responsive pour un hôtel 5 étoiles.', image: '/images/project1.jpg' },
  { title: 'E-commerce Premium', description: 'Boutique en ligne fashion haut de gamme.', image: '/images/project2.jpg' },
  { title: 'Application Mobile IA', description: 'Application de santé connectée.', image: '/images/project3.jpg' },
];

export default function ProjectsPage() {
  return (
    <main className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen text-white section-padding">
      <div className="container text-center">
        <motion.h1
          className="hero-heading mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nos Réalisations
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

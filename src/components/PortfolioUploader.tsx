'use client';

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";

export default function PortfolioUploader() {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titre || !description || !videoUrl) return alert("Tous les champs sont obligatoires !");
    setLoading(true);

    try {
      await addDoc(collection(db, "projets"), {
        titre,
        description,
        videoUrl,
        createdAt: serverTimestamp(),
      });
      alert("✅ Projet ajouté avec succès !");
      setTitre('');
      setDescription('');
      setVideoUrl('');
    } catch (error) {
      console.error("Erreur d'upload :", error);
      alert("Erreur lors de l'ajout.");
    }
    setLoading(false);
  };

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          🎬 Ajouter un Projet
        </motion.h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="p-4 rounded-xl bg-white/10 backdrop-blur text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="p-4 rounded-xl bg-white/10 backdrop-blur text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
          <input
            type="url"
            placeholder="Lien Vidéo Cloudinary"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="p-4 rounded-xl bg-white/10 backdrop-blur text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 font-bold py-3 rounded-xl transition"
          >
            {loading ? "Ajout en cours..." : "➕ Ajouter Projet"}
          </button>
        </form>
      </div>
    </section>
  );
}

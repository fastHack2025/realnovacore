"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { Database } from "@/types/supabase";

export default function UploadPortfolioPage() {
  const supabase = createClient();

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const uploadImageToCloudinary = async (file: File) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("Veuillez sélectionner une image.");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImageToCloudinary(file);

      const { error } = await supabase.from("portfolio").insert([
        {
          titre,
          description,
          image_url: imageUrl,
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      setMessage("✅ Projet ajouté avec succès !");
      setTitre("");
      setDescription("");
      setFile(null);
    } catch (err: any) {
      console.error(err);
      setMessage(`❌ Erreur: ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        🚀 Ajouter un Projet au Portfolio
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          placeholder="Titre du projet"
          className="input-field"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description courte"
          className="input-field"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="input-field"
          accept="image/*"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition-all"
        >
          {loading ? "Chargement..." : "Uploader"}
        </button>

        {message && (
          <div className="text-center mt-4 text-green-600 dark:text-green-400">
            {message}
          </div>
        )}
      </form>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";

export default function PortfolioUploader() {
  const { register, handleSubmit, reset } = useForm();
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data: any) => {
    setUploading(true);
    try {
      const file = data.image[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset"); // doit exister sur Cloudinary

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/dko5sommz/image/upload`, {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      const imageUrl = uploadData.secure_url;

      const { error } = await supabase.from("portfolio").insert({
        titre: data.title,
        description: data.description,
        image_url: imageUrl,
      });

      if (error) throw error;

      alert("Projet ajouté avec succès ✅");
      reset();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'upload ❌");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">🎨 Ajouter un Projet</h2>
      
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Titre du projet"
        className="input-field"
      />
      
      <textarea
        {...register("description", { required: true })}
        placeholder="Description du projet"
        className="input-field"
        rows={4}
      />
      
      <input
        type="file"
        {...register("image", { required: true })}
        accept="image/*"
        className="input-field"
      />
      
      <button
        type="submit"
        disabled={uploading}
        className="w-full bg-primary text-white p-4 rounded-lg hover:bg-primary-dark transition"
      >
        {uploading ? "Envoi en cours..." : "Ajouter le Projet"}
      </button>
    </form>
  );
}

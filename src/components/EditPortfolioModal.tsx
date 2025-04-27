"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface EditPortfolioModalProps {
  project: any;
  onClose: () => void;
  onRefresh: () => void;
}

export default function EditPortfolioModal({ project, onClose, onRefresh }: EditPortfolioModalProps) {
  const [titre, setTitre] = useState(project.titre);
  const [description, setDescription] = useState(project.description);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("portfolio")
      .update({ titre, description })
      .eq("id", project.id);

    if (error) {
      console.error(error);
      alert("Erreur lors de la mise à jour");
    } else {
      alert("Projet mis à jour avec succès !");
      onRefresh();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Modifier Projet</h2>
        <input
          className="input-field mb-4"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          placeholder="Titre du projet"
        />
        <textarea
          className="input-field mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={4}
        />
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">Annuler</button>
          <button onClick={handleUpdate} className="px-4 py-2 rounded bg-primary text-white">Mettre à jour</button>
        </div>
      </div>
    </div>
  );
}

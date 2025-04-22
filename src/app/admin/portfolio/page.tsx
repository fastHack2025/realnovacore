"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import toast from "react-hot-toast";

interface PortfolioItem {
  id: string;
  titre: string;
  description: string;
  image: string;
  lien: string;
  type: "image" | "video";
  date: string;
}

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [form, setForm] = useState({
    titre: "",
    description: "",
    image: "",
    lien: "",
    type: "image",
  });

  const fetchItems = async () => {
    const { data } = await supabase
      .from("portfolio_items")
      .select("*")
      .order("date", { ascending: false });

    if (data) setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addProject = async () => {
    const { error } = await supabase.from("portfolio_items").insert({
      ...form,
      date: new Date().toISOString(),
    });
    if (error) return toast.error("Erreur ajout.");
    toast.success("Projet ajouté !");
    setForm({ titre: "", description: "", image: "", lien: "", type: "image" });
    fetchItems();
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from("portfolio_items").delete().eq("id", id);
    if (error) return toast.error("Erreur suppression.");
    toast.success("Projet supprimé !");
    fetchItems();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🛠️ Admin Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <input
          className="border p-2 rounded"
          placeholder="Titre"
          value={form.titre}
          onChange={(e) => setForm({ ...form, titre: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Lien"
          value={form.lien}
          onChange={(e) => setForm({ ...form, lien: e.target.value })}
        />
        <input
          className="border p-2 rounded col-span-2"
          placeholder="URL image / vidéo"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <select
          className="border p-2 rounded"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value as "image" | "video" })}
        >
          <option value="image">🖼️ Image</option>
          <option value="video">🎥 Vidéo</option>
        </select>
        <textarea
          className="border p-2 rounded col-span-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          onClick={addProject}
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-2 hover:bg-blue-700"
        >
          ➕ Ajouter
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">🎞️ Liste des projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded bg-white dark:bg-zinc-800">
            <div className="mb-2">
              <strong>{item.titre}</strong> <span className="text-xs text-gray-400">({item.type})</span>
            </div>
            {item.type === "video" ? (
              <video src={item.image} controls className="rounded w-full" />
            ) : (
              <Image src={item.image} alt={item.titre} width={400} height={250} className="rounded w-full object-cover" />
            )}
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <a href={item.lien} target="_blank" className="text-blue-600 underline text-sm">
              🔗 Lien
            </a>
            <button
              onClick={() => deleteProject(item.id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
            >
              🗑️ Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

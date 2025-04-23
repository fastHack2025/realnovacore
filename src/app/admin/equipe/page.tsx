"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";

export default function AdminEquipePage() {
  const [nom, setNom] = useState("");
  const [fonction, setFonction] = useState("");
  const [ordre, setOrdre] = useState(0);
  const [visible, setVisible] = useState(true);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [equipe, setEquipe] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEquipe = async () => {
      const { data } = await supabase.from("equipe").select("*").order("ordre", { ascending: true });
      if (data) setEquipe(data);
    };
    fetchEquipe();
  }, []);

  const handleUpload = async () => {
    if (!photo) return;
    setLoading(true);
    const { data, error } = await supabase.storage.from("medias").upload(`equipe/${photo.name}`, photo, {
      cacheControl: "3600",
      upsert: true,
    });
    if (error) console.error(error);
    else setPhotoUrl(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/medias/${data.path}`);
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { error } = await supabase.from("equipe").insert({
      nom,
      fonction,
      ordre,
      visible,
      photo_url: photoUrl,
    });
    setLoading(false);
    if (!error) alert("✅ Membre ajouté avec succès !");
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">👥 Ajouter un membre de l'équipe</h1>
      <div className="space-y-4 mb-10">
        <Input placeholder="Nom complet" value={nom} onChange={(e) => setNom(e.target.value)} />
        <Input placeholder="Fonction (ex: Directeur Général)" value={fonction} onChange={(e) => setFonction(e.target.value)} />
        <Input type="number" placeholder="Ordre d'affichage" value={ordre} onChange={(e) => setOrdre(parseInt(e.target.value))} />

        <div className="flex items-center gap-4">
          <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0] || null)} />
          <Button onClick={handleUpload} disabled={!photo || loading}>
            <UploadCloud className="w-4 h-4 mr-2" /> Upload Photo
          </Button>
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={visible} onChange={() => setVisible(!visible)} />
          Afficher publiquement ce membre
        </label>

        <Button onClick={handleSubmit} disabled={loading} className="bg-indigo-600 hover:bg-indigo-700">
          Ajouter au tableau
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipe.map((m) => (
          <div key={m.id} className="p-4 bg-white/10 text-white border border-white/20 rounded-xl shadow-lg">
            <div className="mb-4 w-24 h-24 mx-auto overflow-hidden rounded-full border">
              {m.photo_url && (
                <Image src={m.photo_url} alt={m.nom} width={100} height={100} className="object-cover w-full h-full" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-center">{m.nom}</h3>
            <p className="text-sm text-center text-white/80">{m.fonction}</p>
            <p className="text-xs text-center text-white/50 mt-1">{m.visible ? "✅ Visible" : "🚫 Caché"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

export default function AdminActualitesPage() {
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleUpload = async () => {
    if (!media) return;
    setLoading(true);
    const { data, error } = await supabase.storage.from("medias").upload(`actualites/${media.name}`, media, {
      cacheControl: "3600",
      upsert: true,
    });
    if (error) console.error(error);
    else setMediaUrl(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/medias/${data.path}`);
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { error } = await supabase.from("actualites").insert({
      titre,
      contenu,
      media_url: mediaUrl,
      date_publication: new Date().toISOString(),
      facebook_url: facebook,
      insta_url: instagram,
      tiktok_url: tiktok,
      twitter_url: twitter,
      linkedin_url: linkedin,
    });
    setLoading(false);
    if (!error) alert("✅ Actualité publiée avec succès !");
    else console.error(error);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">📰 Mettre à jour l’actualité</h1>
      <div className="space-y-4">
        <Input type="text" placeholder="Titre de l’actualité" value={titre} onChange={(e) => setTitre(e.target.value)} />
        <Textarea rows={6} placeholder="Contenu de l’actualité..." value={contenu} onChange={(e) => setContenu(e.target.value)} />

        <div className="flex items-center gap-4">
          <input type="file" accept="image/*,video/*" onChange={(e) => setMedia(e.target.files?.[0] || null)} />
          <Button type="button" variant="outline" onClick={handleUpload} disabled={!media || loading}>
            <UploadCloud className="w-4 h-4 mr-2" /> Télécharger le média
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="url" placeholder="Facebook URL" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
          <Input type="url" placeholder="Instagram URL" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
          <Input type="url" placeholder="TikTok URL" value={tiktok} onChange={(e) => setTiktok(e.target.value)} />
          <Input type="url" placeholder="Twitter URL" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
          <Input type="url" placeholder="LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>

        <Button onClick={handleSubmit} disabled={loading} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700">
          Publier l’actualité
        </Button>
      </div>
    </div>
  );
}
